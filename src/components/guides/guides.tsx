'use client';
import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import Card from '../animations/card';

const cards = [
  {
    id: '#01',
    title: 'Mở khóa',
    description: 'Chạm vào nút mở và quét QR trên xe /khoá xe để tự động mở khoá',
    color: '#F0F1C7',
  },
  {
    id: '#02',
    title: 'Đi xe',
    description:
      'Tận hưởng chuyến  nên đội mũ bảo hiểm và tuân thủ luật giao thông. Trong quá  trình sử dụng, bạn có thể khoá xe tạm thời và mở khoá lại bất kỳ lúc  bằng ứng dụng di động.',
    color: '#5ECF77',
  },
  {
    id: '#03',
    title: 'Trả xe',
    description:
      'Trả xe đạp về trạm GoBike bất kỳ. Thực hiện đóng khoá  và xác nhận kết thúc chuyến đi trên ứng dụng GoBike.',
    color: '#3A3C42',
  },
];

export default function Guides() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  return (
    <AnimatePresence mode="popLayout">
      <motion.article
        ref={containerRef}
        className="absolute bottom-0 w-full p-10"
      >
        {cards.map((card, index) => {
          const targetScale = 1 - (cards.length - index) * 0.08;
          return (
            <Card
              key={index + 1}
              i={index}
              {...card}
              process={scrollYProgress}
              targetScale={targetScale}
              range={[index * 0.25, 1]}
            />
          );
        })}
        {/* <Card
          key={0 + 1}
          i={0}
          {...cards[0]}
          process={scrollYProgress}
          targetScale={1 - (cards.length - 0) * 0.08}
          range={[0 * 0.25, 1]}
        />
        <Card
          key={1 + 1}
          i={1}
          {...cards[1]}
          process={scrollYProgress}
          targetScale={1 - (cards.length - 1) * 0.08}
          range={[0 * 0.25, 1]}
        />
        <Card
          key={2 + 1}
          i={2}
          {...cards[2]}
          process={scrollYProgress}
          targetScale={1 - (cards.length - 2) * 0.08}
          range={[0 * 0.25, 2]}
        /> */}
      </motion.article>
    </AnimatePresence>
  );
}
