import { TLanguage } from '@/types/common';
import Link from 'next/link';
import { GlobalIcon } from '../icons';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';
import SwitchLanguage from './switch-lang';
import { getDictionary } from '@/app/[lang]/dictionaries';

export default async function Header({ lang }: Readonly<{ lang: TLanguage }>) {
  const dict = await getDictionary(lang);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <NavigationMenu className="w-full p-6 font-medium text-white">
        <NavigationMenuList className="space-x-2">
          <NavigationMenuItem className="cursor-pointer px-4 py-[0.625rem]">
            {dict.header.stationList}
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer px-4 py-[0.625rem]">{dict.header.services}</NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer px-4 py-[0.625rem]">{dict.header.guides}</NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer px-4 py-[0.625rem]">{dict.header.prices}</NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className="space-x-2">
          <NavigationMenuItem className="cursor-pointer px-4 py-[0.625rem]">{dict.header.benefits}</NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer px-4 py-[0.625rem]">{dict.header.news}</NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer px-4 py-[0.625rem]">{dict.header.contact}</NavigationMenuItem>
          <NavigationMenuItem className="px-4 py-[0.625rem]">
            <NavigationMenuTrigger className="flex cursor-pointer items-center space-x-[0.375rem]">
              <GlobalIcon />
              <span>{lang === 'vi' ? dict.header.vietnamese : dict.header.english}</span>
            </NavigationMenuTrigger>
            <SwitchLanguage lang={lang} />
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer rounded-xl bg-white px-4 py-[0.625rem]">
            <Link href={`/${lang}/sign-in`} legacyBehavior passHref>
              <NavigationMenuLink className={'text-lg font-medium text-green-600'}>
                {dict.header.signIn}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
