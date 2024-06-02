import Image from 'next/image';

import AppStore from '@/assets/images/app_store.png';
import GooglePlay from '@/assets/images/google_play.png';
import Logo from '@/assets/images/logo.png';
import { TLanguage } from '@/types/common';
import { getDictionary } from './dictionaries';
import About from '@/components/about';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
        <video autoPlay loop muted className="h-auto w-full object-cover" preload="none">
          <source src="/assets/video/cover.mp4" type="video/mp4" />
        </video>
        <article className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src={Logo}
            alt="logo"
            width={0}
            height={0}
            className="mb-3 h-auto w-auto object-cover md:mb-[4.5rem]"
            priority
          />
          <p className="mx-auto text-center text-sm font-normal text-white max-sm:line-clamp-2 md:w-[38.125rem] md:text-base">
            {dict['landing-page'].intro}
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <Image
              src={GooglePlay}
              alt="google_play"
              width={0}
              height={0}
              className="h-auto max-h-11 w-auto object-cover"
              priority
            />
            <Image
              src={AppStore}
              alt="app_store"
              width={0}
              height={0}
              className="h-auto max-h-11 w-auto object-cover"
              priority
            />
          </div>
        </article>
      </section>
      <About />
      <section className="flex flex-col items-center justify-center">
        <p className="text-lg font-medium uppercase">Dịch vụ của chúng tôi</p>
        <h1 className="mb-6 mt-2 text-[4.875rem] font-extrabold text-gray-800">Bảng Giá</h1>
        <p className="mb-10 max-w-[599px] px-6 text-center text-lg font-normal text-gray-700 max-lg:line-clamp-2">
          Để giải quyết vấn đề lớn nhất của thế giới hiện nay, chúng ta cần có nhiều quan điểm. Đó là lí do tại sao đội
          ngủ lãnh đạo của chúng tôi tập hợp các chuyên gia về ẩm thực, công nghệ, và tính bền vững.
        </p>
        <Tabs defaultValue="bike">
          <TabsList className="flex items-center justify-center">
            <TabsTrigger value="bike">XE ĐẠP CƠ</TabsTrigger>
            <TabsTrigger value="electric-bike">XE ĐẠP ĐIỆN</TabsTrigger>
          </TabsList>
          <TabsContent value="bike" className="mt-10 grid grid-cols-1 gap-5 xl:grid-cols-3">
            <div className="h-[564px] w-[393px] rounded-lg bg-[#CBEAD1] text-gray-900">
              <div className="relative border-b-4 border-dashed border-b-white">
                <div className="grid grid-cols-2 px-9 py-[1.875rem]">
                  <h3 className="text-[1.75rem] uppercase">Vé</h3>
                  <h3 className="text-right text-[1.75rem] font-bold">10,000đ</h3>
                  <h3 className="text-[1.75rem] font-bold uppercase">Lượt</h3>
                  <h3 className="my-auto text-right text-xl">/60 Phút</h3>
                </div>
                <div className="absolute -bottom-5 -left-5 aspect-square w-10 rounded-full bg-white"></div>
                <div className="absolute -bottom-5 -right-5 aspect-square w-10 rounded-full bg-white"></div>
              </div>
              <div className="p-9">
                <h6 className="mb-1 text-xl font-medium">Thời gian cung cấp dịch vụ</h6>
                <p className="mb-6 text-lg font-medium">
                  Hoạt động 24/7{' '}
                  <span className="font-normal">(Thời gian hoạt động có thể khác tại một số Tỉnh/Thành phố)</span>
                </p>
                <h6 className="mb-1 text-xl font-medium">Chi tiết vé</h6>
                <p className="text-lg font-normal">
                  Thời lượng sử dụng: 60 phút <br /> Thời hạn sử dụng: 60 phút <br /> Cước phí quá thời lượng: 3.000
                  điểm / 15 phút <br /> Điều kiện: Số dư tối thiểu 20.000 điểm GoBike
                </p>
              </div>
            </div>
            <div className="h-[564px] w-[393px] rounded-lg bg-[#CBEAD1] text-gray-900">
              <div className="relative border-b-4 border-dashed border-b-white">
                <div className="grid grid-cols-2 px-9 py-[1.875rem]">
                  <h3 className="text-[1.75rem] uppercase">Vé</h3>
                  <h3 className="text-right text-[1.75rem] font-bold">50,000đ</h3>
                  <h3 className="text-[1.75rem] font-bold uppercase">Lượt</h3>
                  <h3 className="my-auto text-right text-xl">/450Phút/Ngày</h3>
                </div>
                <div className="absolute -bottom-5 -left-5 aspect-square w-10 rounded-full bg-white"></div>
                <div className="absolute -bottom-5 -right-5 aspect-square w-10 rounded-full bg-white"></div>
              </div>
              <div className="p-9">
                <h6 className="mb-1 text-xl font-medium">Thời gian cung cấp dịch vụ</h6>
                <p className="mb-6 text-lg font-medium">
                  Hoạt động 24/7{' '}
                  <span className="font-normal">(Thời gian hoạt động có thể khác tại một số Tỉnh/Thành phố)</span>
                </p>
                <h6 className="mb-1 text-xl font-medium">Chi tiết vé</h6>
                <p className="text-lg font-normal">
                  Thời lượng sử dụng: 450 phút <br /> Thời hạn sử dụng: 24h ngày đăng ký <br /> Cước phí quá thời lượng:
                  3.000 điểm / 15 phút
                </p>
              </div>
            </div>
            <div className="h-[564px] w-[393px] rounded-lg bg-[#CBEAD1] text-gray-900">
              <div className="relative border-b-4 border-dashed border-b-white">
                <div className="grid grid-cols-2 px-9 py-[1.875rem]">
                  <h3 className="text-[1.75rem] uppercase">Vé</h3>
                  <h3 className="text-right text-[1.75rem] font-bold">79,000</h3>
                  <h3 className="text-[1.75rem] font-bold uppercase">Lượt</h3>
                  <h3 className="my-auto text-right text-xl">Điểm</h3>
                </div>
                <div className="absolute -bottom-5 -left-5 aspect-square w-10 rounded-full bg-white"></div>
                <div className="absolute -bottom-5 -right-5 aspect-square w-10 rounded-full bg-white"></div>
              </div>
              <div className="p-9">
                <h6 className="mb-1 text-xl font-medium">Thời gian cung cấp dịch vụ</h6>
                <p className="mb-6 text-lg font-medium">
                  Hoạt động 24/7{' '}
                  <span className="font-normal">(Thời gian hoạt động có thể khác tại một số Tỉnh/Thành phố)</span>
                </p>
                <h6 className="mb-1 text-xl font-medium">Chi tiết vé</h6>
                <p className="text-lg font-normal">
                  Thời lượng sử dụng: Miễn phí các chuyến đi dưới 45 phút <br /> Thời hạn sử dụng: 30 ngày kể từ ngày
                  đăng ký <br /> Cước phí quá thời lượng: 3.000 điểm / 15 phút
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="electric-bike" className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            <div className="h-[564px] w-[393px] rounded-lg bg-[#F0F1C7] text-gray-900">
              <div className="relative border-b-4 border-dashed border-b-white">
                <div className="grid grid-cols-2 px-9 py-[1.875rem]">
                  <h3 className="text-[1.75rem] uppercase">Vé</h3>
                  <h3 className="text-right text-[1.75rem] font-bold">80,000đ</h3>
                  <h3 className="text-[1.75rem] font-bold uppercase">Lượt</h3>
                  <h3 className="my-auto text-right text-xl">/60 Phút</h3>
                </div>
                <div className="absolute -bottom-5 -left-5 aspect-square w-10 rounded-full bg-white"></div>
                <div className="absolute -bottom-5 -right-5 aspect-square w-10 rounded-full bg-white"></div>
              </div>
              <div className="p-9">
                <h6 className="mb-1 text-xl font-medium">Thời gian cung cấp dịch vụ</h6>
                <p className="mb-6 text-lg font-medium">
                  Hoạt động 24/7{' '}
                  <span className="font-normal">(Thời gian hoạt động có thể khác tại một số Tỉnh/Thành phố)</span>
                </p>
                <h6 className="mb-1 text-xl font-medium">Chi tiết vé</h6>
                <p className="text-lg font-normal">
                  Thời lượng sử dụng: 60 phút <br /> Thời hạn sử dụng: 60 phút <br /> Cước phí quá thời lượng: 3.000
                  điểm / 15 phút <br /> Điều kiện: Số dư tối thiểu 20.000 điểm GoBike
                </p>
              </div>
            </div>
            <div className="w-[393px] rounded-lg bg-[#F0F1C7] text-gray-900">
              <div className="relative border-b-4 border-dashed border-b-white">
                <div className="grid grid-cols-2 px-9 py-[1.875rem]">
                  <h3 className="text-[1.75rem] uppercase">Vé</h3>
                  <h3 className="text-right text-[1.75rem] font-bold">100,000đ</h3>
                  <h3 className="text-[1.75rem] font-bold uppercase">Lượt</h3>
                  <h3 className="my-auto text-right text-xl">/450Phút/Ngày</h3>
                </div>
                <div className="absolute -bottom-5 -left-5 aspect-square w-10 rounded-full bg-white"></div>
                <div className="absolute -bottom-5 -right-5 aspect-square w-10 rounded-full bg-white"></div>
              </div>
              <div className="p-9">
                <h6 className="mb-1 text-xl font-medium">Thời gian cung cấp dịch vụ</h6>
                <p className="mb-6 text-lg font-medium">
                  Hoạt động 24/7{' '}
                  <span className="font-normal">(Thời gian hoạt động có thể khác tại một số Tỉnh/Thành phố)</span>
                </p>
                <h6 className="mb-1 text-xl font-medium">Chi tiết vé</h6>
                <p className="text-lg font-normal">
                  Thời lượng sử dụng: 450 phút <br /> Thời hạn sử dụng: 24h ngày đăng ký <br /> Cước phí quá thời lượng:
                  3.000 điểm / 15 phút
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
      <section className="h-[1080px]"></section>
    </main>
  );
}
