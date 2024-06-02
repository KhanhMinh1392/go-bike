'use client';
import React, { useEffect, useRef, useState } from 'react';
import Frame from '@/assets/images/frame.png';
import Image from 'next/image';
import { AnimatePresence, MotionValue, motion, useScroll, useTransform } from 'framer-motion';

interface ICardProps {
  id: string;
  i: number;
  title: string;
  description: string;
  color: string;
  targetScale: number;
  process: MotionValue<number>;
  range: number[];
}

const titleColor: { [x: number]: string } = {
  0: '#5ECF77',
  1: '#3A3C42',
  2: '#F0F1C7',
} as const;

const heighCard: { [x: number]: string } = {
  0: '80px',
  1: '40px',
  2: '20px',
} as const;

const heighContent: { [x: number]: string } = {
  0: '940px',
  1: '820px',
  2: '720px',
} as const;

export default function Card(props: Readonly<ICardProps>) {
  const { title, description, color, id, i, process, range, targetScale } = props;
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start end'],
  });
  const cardScale = useTransform(scrollYProgress, range, [1, targetScale]);
  const height = useTransform(process, [0, 1, 1, 0], [heighCard[i], heighContent[i], 0, 0]);
  const top = useTransform(scrollYProgress, [0, 1, 1, 0], [50, 0, 0, 0]);
  const bottom = useTransform(process, [0, 1, 1, 0], [0, undefined, undefined, 0]);
  // console.log(height);

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        className="sticky z-20 h-full w-full overflow-hidden rounded-3xl"
        style={{ backgroundColor: color, height, top, bottom }}
        // exit={{
        //   height: '80px',
        // }}
      >
        <div className="flex h-full flex-col justify-between p-10">
          <motion.div className="flex items-center justify-between">
            <motion.h1 className="text-[8.75rem] font-black" style={{ color: titleColor[i], scale: cardScale }}>
              {title}
            </motion.h1>
            <motion.h1 className="text-[8.75rem] font-normal" style={{ color: titleColor[i], scale: cardScale }}>
              {id}
            </motion.h1>
          </motion.div>
          <div className="flex items-end justify-between">
            <h2 className="w-[37.25rem] text-[2.5rem]" style={{ color: titleColor[i] }}>
              {description}
            </h2>
            <Image src={Frame} alt="frame" priority />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
