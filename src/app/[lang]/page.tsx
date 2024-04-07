import Image from 'next/image';

import AppStore from '@/assets/images/app_store.png';
import GooglePlay from '@/assets/images/google_play.png';
import Logo from '@/assets/images/logo.png';
import Thumbnail from '@/assets/images/thumbnail.png';
import { TLanguage } from '@/types/common';
import { getDictionary } from './dictionaries';

interface ILandingPage {
  params: {
    lang: TLanguage;
  };
}

export default async function Page({ params }: Readonly<ILandingPage>) {
  const { lang } = params;
  const dict = await getDictionary(lang);
  return (
    <main>
      <section className="relative">
        <Image src={Thumbnail} alt="thumbnail" width={0} height={0} className="object-cover" priority/>
        <article className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src={Logo} alt="logo" className="mb-[4.5rem] object-cover" priority />
          <p className="mx-auto w-[38.125rem] text-center text-lg font-medium text-white">
            {dict['landing-page'].intro}
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <Image src={GooglePlay} alt="google_play" width={0} height={0} className="object-cover" priority />
            <Image src={AppStore} alt="app_store" width={0} height={0} className="object-cover" priority />
          </div>
        </article>
      </section>
    </main>
  );
}
