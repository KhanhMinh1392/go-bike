'use client';
import { cn } from '@/lib/utils';
import { TLanguage } from '@/types/common';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CheckIcon } from '../icons';
import { NavigationMenuContent } from '../ui/navigation-menu';
import { useDictionary } from '../providers';

export default function SwitchLanguage({ lang }: Readonly<{ lang: TLanguage }>) {
  const pathName = usePathname();
  const dict = useDictionary()

  const redirectedPathName = (locale: TLanguage) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <NavigationMenuContent>
      <ul className="w-[128px] space-y-[0.125rem] rounded-lg p-1">
        <Link href={redirectedPathName('vi')}>
          <li
            className={cn(
              'flex cursor-pointer items-center justify-between rounded-md px-2 py-1 text-base',
              lang === 'vi' && 'bg-green-400 text-white',
            )}
          >
            {dict.header.vietnamese} {lang === 'vi' && <CheckIcon />}
          </li>
        </Link>
        <Link href={redirectedPathName('en')}>
          <li
            className={cn(
              'flex cursor-pointer items-center justify-between rounded-md px-2 py-1 text-base',
              lang === 'en' && 'bg-green-400 text-white',
            )}
          >
             {dict.header.english} {lang === 'en' && <CheckIcon />}
          </li>
        </Link>
      </ul>
    </NavigationMenuContent>
  );
}
