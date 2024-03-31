import React from 'react';

export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex h-screen w-full items-center justify-center">{children}</div>;
}
