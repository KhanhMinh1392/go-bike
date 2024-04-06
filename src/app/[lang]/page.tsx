import { TLanguage } from '@/types/common';
import { getDictionary } from './dictionaries';
import Image from 'next/image';
import Thumbnail from '@/assets/images/thumbnail.png';
import AppStore from '@/assets/images/app_store.png';
import GooglePlay from '@/assets/images/google_play.png';
import Logo from '@/assets/images/logo.png';

export default async function Page({ params: { lang } }: { params: { lang: TLanguage } }) {
  const dict = await getDictionary(lang);
  return (
    <main>
      <section>
        <Image src={Thumbnail} alt="thumbnail" className="relative h-auto w-full object-cover" priority />
        <article className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src={Logo} alt="logo" className="mb-[4.5rem] h-auto w-full object-cover" />
          <p className="w-[38.125rem] text-center text-lg font-medium text-white mx-auto">
            Dịch vụ xe đạp công cộng GoBike đem đến một hình thức giao thông đô thị mới văn minh, tiện lợi, tiết kiệm,
            tốt cho sức khỏe và thân thiện với môi trường.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <Image src={GooglePlay} alt="google_play" className="object-cover" />
            <Image src={AppStore} alt="app_store" className="object-cover" />
          </div>
        </article>
      </section>
    </main>
  );
}
