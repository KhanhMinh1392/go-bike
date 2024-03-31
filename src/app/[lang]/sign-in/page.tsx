'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { ROUTES } from '@/apis';
import { useDictionary } from '@/components/providers';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import fetcher, { setCookie } from '@/lib/helpers';
import { phoneRegex } from '@/lib/validates';

interface IBodyRequest {
  phoneNumber: string;
  password: string;
}

const formSchema = z.object({
  username: z
    .string()
    .min(10, { message: 'Must be a valid mobile number' })
    .max(14, { message: 'Must be a valid mobile number' })
    .regex(phoneRegex, 'Invalid Number!'),
  password: z.string().min(3, {
    message: '',
  }),
  remember: z.boolean(),
});

export default function SignIn() {
  const dict = useDictionary();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      remember: false,
    },
  });

  const router = useRouter();

  const [isPending, startTransition] = useTransition()

  const { mutate, isPending: isPosting } = useMutation<{ accessToken: string }, Error, IBodyRequest, unknown>({
    mutationFn: (body) => fetcher(ROUTES.SIGN_IN, { body }),
  });

  const onSubmit = () => {
    const { username, password, remember } = form.getValues();

    if (remember) {
      localStorage.setItem('password', password);
      localStorage.setItem('username', username);
      localStorage.setItem('remember', String(remember));
      const body = { phoneNumber: username, password };

      mutate(body, {
        onSuccess(data) {
          startTransition(() => {
            setCookie('token', data.accessToken, new Date().getTime());
            toast('Success', {
              description: 'Sign in successfully',
              action: {
                label: 'Undo',
                onClick: () => console.log('Undo'),
              },
            });
            router.push('/');
          })
        },
        onError(error) {
          toast('Error', {
            description: 'Fail to fetch',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          });
          console.error({ error });
        },
      });
    } else {
      localStorage.clear();
    }
  };

  useEffect(() => {
    startTransition(() => {
      form.setValue('username', localStorage.getItem('username') || '');
      form.setValue('password', localStorage.getItem('password') || '');
      form.setValue('remember', Boolean(localStorage.getItem('remember')) || false);
    })
  }, [form]);

  if (isPosting || isPending) return <div>Loading...</div>;

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="text-3xl">{dict['sign-in'].title}</CardTitle>
        <CardDescription className="text-lg">{dict['sign-in'].subTitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold">
                    {dict['sign-in'].username} <span className="text-red-600">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-base placeholder:text-base"
                      placeholder={dict['sign-in'].enterUsername}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-base" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold">
                    {dict['sign-in'].password} <span className="text-red-600">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="text-base placeholder:text-base"
                      placeholder={dict['sign-in'].enterPassword}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-base" />
                </FormItem>
              )}
            />
            <FormField
              name="remember"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" checked={field.value} onCheckedChange={field.onChange} />
                      <Label htmlFor="remember" className="cursor-pointer text-base">
                        {dict['sign-in'].rememberMe}
                      </Label>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <Button id="submit" className="text-lg" type="submit" aria-label="sign-in">
              {dict['sign-in'].submit}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
