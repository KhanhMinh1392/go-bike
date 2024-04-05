import { TLanguage } from '@/types/common';
import { getDictionary } from './dictionaries';
import Image from 'next/image';
import Thumbnail from  '@/assets/images/thumbnail.png'

export default async function Page({ params: { lang } }: { params: { lang: TLanguage } }) {
  const dict = await getDictionary(lang);
  return (
    <main >
      <Image 
        src={Thumbnail}
        alt='thumbnail'
        width={0}
        height={0}
        className='w-full h-full object-cover'
        priority
      />
    </main>
  );
}
