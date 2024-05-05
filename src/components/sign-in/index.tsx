'use client';
import GInput from '../inputs';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { useDictionary } from '../providers';

export default function SignIn() {
  const dict = useDictionary();
  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer rounded-full bg-white px-4 py-[0.625rem]">
        <p className="font-medium text-[#4ABC63]">{dict['sign-in'].title}</p>
      </DialogTrigger>
      <DialogContent className="w-[624px]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-semibold leading-11 text-gray-800">{dict['sign-in'].title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-7">
          <GInput isRequired id="account" label={dict['sign-in'].username} placeholder={dict['sign-in'].username} />
          <GInput
            isRequired
            id="password"
            type="password"
            label={dict['sign-in'].password}
            placeholder={dict['sign-in'].password}
          />
        </div>
        <div className="mb-7 flex items-center space-x-5">
          <Checkbox id="agree" />
          <label
            htmlFor="agree"
            className="text-sm font-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to Gobike&apos;s{' '}
            <a href="#" className="font-medium text-green-400 underline">
              Terms & Conditions
            </a>{' '}
            and acknowledge the{' '}
            <a href="#" className="font-medium text-green-400 underline">
              Privacy Policy
            </a>
          </label>
        </div>
        <DialogFooter>
          <Button className="w-[560px] text-base font-semibold" size={'lg'} type="submit">
            {dict['sign-in'].submit}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
