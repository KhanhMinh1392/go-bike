import GInput from '../inputs';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';

export default function SignIn() {
  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer rounded-full bg-white px-4 py-[0.625rem]">
        <p className="font-medium text-[#4ABC63]">Đăng nhập</p>
      </DialogTrigger>
      <DialogContent className="w-[624px]">
        <DialogHeader>
          <DialogTitle className="leading-11 text-4xl font-semibold text-gray-800">Đăng nhập</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-8">
          <GInput id="account" label="Tài khoản" placeholder="Tài khoản" />
          <GInput id="password" type='password' label="Mật khẩu" placeholder="Mật khẩu" />
        </div>
        <div className="mb-8 flex items-center space-x-5">
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
          <Button disabled className="w-[560px] text-xl font-semibold" size={'lg'} type="submit">
            Đăng nhập
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
