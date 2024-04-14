"use client"
import React from 'react';

export default function Video() {
  return (
    <video autoPlay loop muted className="h-full w-full object-cover">
      <source src="/assets/video/cover.mp4" type="video/mp4" />
    </video>
  );
}
