import { TLanguage } from '@/types/common';
import { getDictionary } from './dictionaries';

async function getData() {
  const res = await fetch((process.env.NEXT_PUBLIC_HOST + '/users') as URL | RequestInfo);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page({ params: { lang } }: { params: { lang: TLanguage } }) {
  const data = await getData();
  const dict = await getDictionary(lang);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.map((item: { fullName: string }) => (
        <p key={item.fullName} className="">
          {item.fullName}
        </p>
      ))}
      <p>{dict['sign-in'].title}</p>
    </main>
  );
}
