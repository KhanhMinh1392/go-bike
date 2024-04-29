import { getDictionary } from '@/app/[lang]/dictionaries';
import { TLanguage } from '@/types/common';
import { GlobalIcon } from '../icons';
import SignIn from '../sign-in';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '../ui/navigation-menu';
import SwitchLanguage from './switch-lang';

export default async function Header({ lang }: Readonly<{ lang: TLanguage }>) {
  const dict = await getDictionary(lang);
  return (
    <header className="fixed inset-x-0 top-0 z-50 hidden md:block">
      <NavigationMenu className="w-full px-10 py-6 font-medium text-white">
        <NavigationMenuList className="space-x-2">
          <NavigationMenuItem className="cursor-pointer px-4 py-[0.625rem] text-base">
            {dict.header.stations}
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer px-4 py-[0.625rem] text-base">
            {dict.header.services}
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer px-4 py-[0.625rem] text-base">
            {dict.header.guides}
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer px-4 py-[0.625rem] text-base">
            {dict.header.prices}
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className="space-x-2">
          <NavigationMenuItem className="cursor-pointer px-4 py-[0.625rem] text-base">
            {dict.header.promotions}
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer px-4 py-[0.625rem] text-base">
            {dict.header.news}
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer px-4 py-[0.625rem] text-base">
            {dict.header.contact}
          </NavigationMenuItem>
          <NavigationMenuItem className="px-4 py-[0.625rem]">
            <NavigationMenuTrigger className="flex cursor-pointer items-center space-x-[0.375rem]">
              <GlobalIcon />
              <span className="text-base font-medium">
                {lang === 'vi' ? dict.header.vietnamese : dict.header.english}
              </span>
            </NavigationMenuTrigger>
            <SwitchLanguage lang={lang} />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <SignIn />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
