'use client';
import { TLanguage } from '@/types/common';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { GlobalIcon } from '../icons';
import { useDictionary } from '../providers';
import SignIn from '../sign-in';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu';
import SwitchLanguage from './switch-lang';

export default function Header({ lang }: Readonly<{ lang: TLanguage }>) {
  const dict = useDictionary();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setHidden(latest > 0);
  });

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 hidden md:block"
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
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
    </motion.header>
  );
}
