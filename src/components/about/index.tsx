'use client';
import AboutImg from '@/assets/images/about.png';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import Guides from '../guides/guides';

export default function About() {
  const { scrollY } = useScroll();
  // const [position, setPosition] = useState<'static' | 'relative' | 'absolute' | 'sticky' | 'fixed'>('relative');

  // useMotionValueEvent(scrollY, 'change', (latest) => {
  //   if (latest > 680 && latest < 1280) setPosition('sticky');
  //   else setPosition('relative');
  // });

  return (
    <motion.section
      className="flex min-h-[1080px] flex-col items-center max-lg:py-8"
      // style={{ position, top: position ? '0px' : undefined }}
    >
      <article className="container grid h-[760px] grid-cols-1 place-content-center gap-40 lg:grid-cols-2">
        <div className="max-w-[37.5rem]">
          <h1 className="mb-8 text-5xl font-extrabold">
            Về <span className="text-[#5ECF77]">GoBike</span>
          </h1>
          <p className="max-w-[37.5rem] flex-1 text-justify text-lg font-normal leading-8 text-[#3A3C42] max-xl:line-clamp-6">
            Chỉ với vài thao tác đơn giản trên ứng dụng di động, người tham gia giao thông có thể dễ dàng thuê xe, di
            chuyển và trả xe tại các trạm xe đạp GoBike bất kỳ trên địa bàn thành phố. Gobike sẽ giúp kết nối các hệ
            thống giao thông công cộng khác như xe buýt, tàu điện... giúp việc di chuyển trong đô thị trở nên linh hoạt
            và thuận tiện hơn. Dịch vụ xe đạp công cộng GoBike hiện đã có mặt tại 06 Tỉnh, Thành phố: Hà Nội, Hải Phòng,
            Đà Nẵng, Quy Nhơn, Vũng Tàu, Hồ Chí Minh.
          </p>
        </div>
        <Image src={AboutImg} alt="about" width={0} height={0} className="h-auto w-[756px] min-h-[343px] object-contain" priority />
      </article>
      <article className="w-full px-10">
        <h1 className="mb-4 text-center text-5xl font-extrabold leading-[3.75rem] text-[#3A3C42]">Cách sử dụng</h1>
        <p className="mb-8 text-center text-lg font-normal leading-7">
          Sau khi Đăng kí, sử dụng dễ dàng với 3 bước: Mở khóa - Đi xe - Trả xe
        </p>
        <div className="h-20 rounded-3xl bg-[#F0F1C7]"></div>
        <div className="h-10 rounded-3xl bg-[#5ECF77]"></div>
        <div className="h-5 rounded-3xl bg-[#3A3C42]"></div>
      </article>
      {/* <Guides /> */}
    </motion.section>
  );
}
