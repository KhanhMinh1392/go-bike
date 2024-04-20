'use client';
import { TargetAndTransition, VariantLabels, motion } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface IStepAnimationProps {
  children: ReactNode;
  className: string;
  whileInView: VariantLabels | TargetAndTransition;
}

export default function StepAnimation({ children, className, whileInView }: Readonly<IStepAnimationProps>) {
  const ref = useRef(null);
  return (
    <motion.div
      viewport={{ root: ref }}
      className={className}
      initial={{ height: 80 }}
      whileInView={whileInView}
      transition={{ ease: 'easeInOut', duration: 2 }}
    >
      {children}
    </motion.div>
  );
}
