import Image from 'next/image';

// import About from '@/assets/images/about.png';
// import Frame from '@/assets/images/frame.png';
import AppStore from '@/assets/images/app_store.png';
import GooglePlay from '@/assets/images/google_play.png';
import Logo from '@/assets/images/logo.png';
// import StepAnimation from '@/components/animations/step-animate';
import { TLanguage } from '@/types/common';
import { getDictionary } from './dictionaries';
import SignIn from '@/components/sign-in';
// import { ArrowIcon } from '@/components/icons';
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
      <article className="relative">
        <video autoPlay loop muted className="h-auto w-full object-cover" preload="none">
          <source src="/assets/video/cover.mp4" type="video/mp4" />
        </video>
        <section className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src={Logo}
            alt="logo"
            width={0}
            height={0}
            className="mb-[4.5rem] h-auto w-auto object-cover"
            priority
          />
          <p className="mx-auto text-center text-base font-normal text-white md:w-[38.125rem] md:text-lg">
            {dict['landing-page'].intro}
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <Image src={GooglePlay} alt="google_play" width={149} height={44} className="h-11 object-cover" priority />
            <Image src={AppStore} alt="app_store" width={132} height={44} className="h-11 object-cover" priority />
          </div>
        </section>
      </article>
      {/* <article className="relative top-0 flex h-[1080px] flex-col items-center">
        <section className="container flex h-[760px] items-center justify-between gap-40">
          <div>
            <h1 className="mb-8 text-5xl font-extrabold">
              Về <span className="text-[#5ECF77]">GoBike</span>
            </h1>
            <p className="max-w-[38.125rem] flex-1 text-justify text-lg font-normal leading-8 text-[#3A3C42]">
              Chỉ với vài thao tác đơn giản trên ứng dụng di động, người tham gia giao thông có thể dễ dàng thuê xe, di
              chuyển và trả xe tại các trạm xe đạp GoBike bất kỳ trên địa bàn thành phố. Gobike sẽ giúp kết nối các hệ
              thống giao thông công cộng khác như xe buýt, tàu điện... giúp việc di chuyển trong đô thị trở nên linh
              hoạt và thuận tiện hơn. Dịch vụ xe đạp công cộng GoBike hiện đã có mặt tại 06 Tỉnh, Thành phố: Hà Nội, Hải
              Phòng, Đà Nẵng, Quy Nhơn, Vũng Tàu, Hồ Chí Minh.
            </p>
          </div>
          <Image src={About} alt="about" width={0} height={0} className="object-cover" priority />
        </section>
        <section className="w-full px-10">
          <h1 className="mb-4 text-center text-5xl font-extrabold leading-[3.75rem] text-[#3A3C42]">Cách sử dụng</h1>
          <p className="mb-8 text-center text-lg font-normal leading-7">
            Sau khi Đăng kí, sử dụng dễ dàng với 3 bước: Mở khóa - Đi xe - Trả xe
          </p>
          <div className="absolute bottom-10 left-10 right-10">
            <StepAnimation
              whileInView={{
                height: 940,
                position: 'sticky',
                top: 80,
              }}
              className="w-full overflow-hidden rounded-3xl bg-[#F0F1C7]"
            >
              <div className="flex h-full flex-col justify-between p-10">
                <div className="flex items-center justify-between">
                  <h1 className="text-[8.75rem] font-black text-[#5ECF77]">MỞ KHOÁ</h1>
                  <h1 className="text-[8.75rem] font-normal text-[#5ECF77]">#01</h1>
                </div>
                <div className="flex items-center justify-between">
                  <p className="w-[37.25rem] text-[2.5rem] font-medium leading-[3rem] text-[#5ECF77]">
                    Chạm vào nút mở và quét QR trên xe /khoá xe để tự động mở khoá
                  </p>
                  <Image src={Frame} alt="about" width={0} height={0} className="object-cover" priority />
                </div>
              </div>
            </StepAnimation>
            <StepAnimation
              whileInView={{
                height: 820,
                position: 'sticky',
                top: 180,
              }}
              className="w-full overflow-hidden rounded-3xl bg-[#5ECF77]"
            >
              <div className="flex h-full flex-col justify-between p-10">
                <div className="flex items-center justify-between">
                  <h1 className="text-[8.75rem] font-black text-[#3A3C42]">ĐI XE</h1>
                  <h1 className="text-[8.75rem] font-normal text-[#3A3C42]">#02</h1>
                </div>
                <div className="flex items-center justify-between">
                  <p className="w-[37.25rem] text-[2.5rem] font-medium leading-[3rem] text-[#3A3C42]">
                    Tận hưởng chuyến nên đội mũ bảo hiểm và tuân thủ luật giao thông. Trong quá trình sử dụng, bạn có
                    thể khoá xe tạm thời và mở khoá lại bất kỳ lúc bằng ứng dụng di động.
                  </p>
                  <Image src={Frame} alt="about" width={0} height={0} className="object-cover" priority />
                </div>
              </div>
            </StepAnimation>
            <StepAnimation
              whileInView={{
                height: 720,
                position: 'sticky',
                top: 240,
              }}
              className="w-full overflow-hidden rounded-3xl bg-[#3A3C42]"
            >
              <div className="flex h-full flex-col justify-between p-10">
                <div className="flex items-center justify-between">
                  <h1 className="text-[8.75rem] font-black text-[#F0F1C7]">TRẢ XE</h1>
                  <h1 className="text-[8.75rem] font-normal text-[#F0F1C7]">#03</h1>
                </div>
                <div className="flex items-end justify-between">
                  <p className="w-[37.25rem] text-[2.5rem] font-medium leading-[3rem] text-[#F0F1C7]">
                    Trả xe đạp về trạm GoBike bất kỳ. Thực hiện đóng khoá và xác nhận kết thúc chuyến đi trên ứng dụng
                    GoBike.
                  </p>
                  <p className="flex items-center gap-3 text-lg uppercase text-[#F2F3D3]">
                    Điều khoản sử dụng <ArrowIcon />
                  </p>
                  <Image src={Frame} alt="about" width={0} height={0} className="object-cover" priority />
                </div>
              </div>
            </StepAnimation>
          </div>
        </section>
      </article>
      <article className="h-[1080px]"></article> */}
    </main>
  );
}
