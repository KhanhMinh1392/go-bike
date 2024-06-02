import Image from 'next/image';

import AppStore from '@/assets/images/app_store.png';
import GooglePlay from '@/assets/images/google_play.png';
import Logo from '@/assets/images/logo.png';
import { TLanguage } from '@/types/common';
import { getDictionary } from './dictionaries';
import About from '@/components/about';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarHeartIcon, TicketIcon } from '@/components/icons';
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
        <p className="text-lg font-medium uppercase text-gray-800">{dict['landing-page'].price.ourService}</p>
        <h1 className="mb-6 mt-2 text-[4.875rem] font-extrabold text-gray-800">{dict['landing-page'].price.title}</h1>
        <p className="mb-10 max-w-[599px] px-6 text-center text-lg font-normal text-gray-700 max-lg:line-clamp-2">
          {dict['landing-page'].price.description}
        </p>
        <Tabs defaultValue="bike">
          <TabsList className="flex items-center justify-center">
            <TabsTrigger value="bike" className="uppercase">
              {dict['landing-page'].price.manualBike}
            </TabsTrigger>
            <TabsTrigger value="electric-bike" className="uppercase">
              {dict['landing-page'].price.electricBike}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="bike" className="mt-10 grid grid-cols-1 gap-5 xl:grid-cols-3">
            <div className="h-[534px] w-[393px] rounded-lg bg-green-100 text-gray-900">
              <div className="relative border-b-4 border-dashed border-b-white">
                <div className="grid grid-cols-2 px-9 py-[1.875rem]">
                  <h3 className="text-[1.75rem] font-normal uppercase text-gray-900">
                    {dict['landing-page'].price.ticket}
                  </h3>
                  <h3 className="text-right text-[1.75rem] font-bold text-gray-900">10,000đ</h3>
                  <h3 className="text-[1.75rem] font-bold uppercase text-gray-900">
                    {dict['landing-page'].price.time}
                  </h3>
                  <h3 className="my-auto text-right text-xl text-gray-900">/60 {dict.common.minutes}</h3>
                </div>
                <div className="absolute -bottom-4 -left-4 aspect-square w-7 rounded-full bg-white"></div>
                <div className="absolute  -bottom-4 -right-4 aspect-square w-7 rounded-full bg-white"></div>
              </div>
              <div className="p-9">
                <h6 className="mb-1 flex items-center gap-2 text-xl font-semibold text-green-600">
                  <CalendarHeartIcon />
                  {dict['landing-page'].price.operationTime}
                </h6>
                <p className="mb-6 text-base font-normal text-gray-900">
                  {dict['landing-page'].price.operationTimeDesc}
                </p>
                <h6 className="mb-1 flex items-center gap-2 text-xl font-semibold text-green-600">
                  <TicketIcon />
                  {dict['landing-page'].price.ticketDetail}
                </h6>
                <p className="text-base font-normal text-gray-900">
                  {dict['landing-page'].price.durationOfUse}: 60 {dict.common.minutes} <br />
                  {dict['landing-page'].price.validityPeriod}: 60 {dict.common.minutes} <br />
                  {dict['landing-page'].price.exceedTimeFee}: 3.000 {dict.common.points} / 15 {dict.common.minutes}
                  <br /> {dict['landing-page'].price.conditions}: {dict['landing-page'].price.minimumBalance} 20.000{' '}
                  {dict.common.points} GoBike
                </p>
              </div>
            </div>
            <div className="h-[534px] w-[393px] rounded-lg bg-green-100 text-gray-900">
              <div className="relative border-b-4 border-dashed border-b-white">
                <div className="grid grid-cols-2 px-9 py-[1.875rem]">
                  <h3 className="text-[1.75rem] uppercase">{dict['landing-page'].price.ticket}</h3>
                  <h3 className="text-right text-[1.75rem] font-bold">50,000đ</h3>
                  <h3 className="text-[1.75rem] font-bold uppercase">{dict['landing-page'].price.time}</h3>
                  <h3 className="my-auto text-nowrap text-right text-xl">
                    /450 {dict['landing-page'].price.minutes}/{dict['landing-page'].price.day}
                  </h3>
                </div>
                <div className="absolute -bottom-4 -left-4 aspect-square w-7 rounded-full bg-white"></div>
                <div className="absolute -bottom-4 -right-4 aspect-square w-7 rounded-full bg-white"></div>
              </div>
              <div className="p-9">
                <h6 className="mb-1 flex items-center gap-2 text-xl font-semibold text-green-600">
                  <CalendarHeartIcon />
                  {dict['landing-page'].price.operationTime}
                </h6>
                <p className="mb-6 text-base font-normal text-gray-900">
                  {dict['landing-page'].price.operationTimeDesc}
                </p>
                <h6 className="mb-1 flex items-center gap-2 text-xl font-semibold text-green-600">
                  <TicketIcon />
                  {dict['landing-page'].price.ticketDetail}
                </h6>
                <p className="text-base font-normal text-gray-900">
                  {dict['landing-page'].price.durationOfUse}: 450 {dict.common.minutes} <br />
                  {dict['landing-page'].price.validityPeriod}: 24h {dict['landing-page'].price.registerDay} <br />
                  {dict['landing-page'].price.exceedTimeFee}: 3.000 {dict.common.points} / 15 {dict.common.minutes}
                </p>
              </div>
            </div>
            <div className="h-[534px] w-[393px] rounded-lg bg-green-100 text-gray-900">
              <div className="relative border-b-4 border-dashed border-b-white">
                <div className="grid grid-cols-2 px-9 py-[1.875rem]">
                  <h3 className="text-[1.75rem] uppercase"> {dict['landing-page'].price.ticket}</h3>
                  <h3 className="text-right text-[1.75rem] font-bold">79,000</h3>
                  <h3 className="text-[1.75rem] font-bold uppercase">{dict['landing-page'].price.time}</h3>
                  <h3 className="my-auto text-right text-xl">{dict['landing-page'].price.points}</h3>
                </div>
                <div className="absolute -bottom-4 -left-4 aspect-square w-7 rounded-full bg-white"></div>
                <div className="absolute -bottom-4 -right-4 aspect-square w-7 rounded-full bg-white"></div>
              </div>
              <div className="p-9">
                <h6 className="mb-1 flex items-center gap-2 text-xl font-semibold text-green-600">
                  <CalendarHeartIcon />
                  {dict['landing-page'].price.operationTime}
                </h6>
                <p className="mb-6 text-base font-normal text-gray-900">
                  {dict['landing-page'].price.operationTimeDesc}
                </p>
                <h6 className="mb-1 flex items-center gap-2 text-xl font-semibold text-green-600">
                  <TicketIcon />
                  {dict['landing-page'].price.ticketDetail}
                </h6>
                <p className="text-base font-normal text-gray-900">
                  {dict['landing-page'].price.durationOfUse}: {dict['landing-page'].price.freeAllTraveling} 45{' '}
                  {dict.common.minutes}
                  <br />
                  {dict['landing-page'].price.validityPeriod}: 30 {dict['landing-page'].price.fromRegistrationDay}{' '}
                  <br />
                  {dict['landing-page'].price.exceedTimeFee}: 3.000 {dict.common.points} / 15 {dict.common.minutes}
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="electric-bike" className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            <div className="bg-sands-100 h-[534px] w-[393px] rounded-lg text-gray-900">
              <div className="relative border-b-4 border-dashed border-b-white">
                <div className="grid grid-cols-2 px-9 py-[1.875rem]">
                  <h3 className="text-[1.75rem] uppercase">{dict['landing-page'].price.oneWay}</h3>
                  <h3 className="text-right text-[1.75rem] font-bold">80,000</h3>
                  <h3 className="text-[1.75rem] font-bold uppercase">{dict['landing-page'].price.ticket}</h3>
                  <h3 className="my-auto text-right text-xl">{dict['landing-page'].price.points}</h3>
                </div>
                <div className="absolute -bottom-4 -left-4 aspect-square w-7 rounded-full bg-white"></div>
                <div className="absolute -bottom-4 -right-4 aspect-square w-7 rounded-full bg-white"></div>
              </div>
              <div className="p-9">
                <h6 className="text-sands-600 mb-1 flex items-center gap-2 text-xl font-semibold">
                  <CalendarHeartIcon className="[&>path]:stroke-sands-600" />
                  {dict['landing-page'].price.operationTime}
                </h6>
                <p className="mb-6 text-base font-normal text-gray-900">
                  {dict['landing-page'].price.operationTimeDesc}
                </p>
                <h6 className="text-sands-600 mb-1 flex items-center gap-2 text-xl font-semibold">
                  <TicketIcon className="[&>path]:stroke-sands-600" />
                  {dict['landing-page'].price.ticketDetail}
                </h6>
                <p className="text-base font-normal text-gray-900">
                  {dict['landing-page'].price.durationOfUse}: 60 {dict.common.minutes} <br />
                  {dict['landing-page'].price.validityPeriod}: 60 {dict.common.minutes} <br />
                  {dict['landing-page'].price.validityPeriod}: 3.000 {dict.common.points} / 15 {dict.common.minutes}
                  <br />
                  {dict['landing-page'].price.conditions}: {dict['landing-page'].price.minimumBalance} 20.000{' '}
                  {dict.common.points} GoBike
                </p>
              </div>
            </div>
            <div className="bg-sands-100 h-[534px] w-[393px] rounded-lg text-gray-900">
              <div className="relative border-b-4 border-dashed border-b-white">
                <div className="grid grid-cols-2 px-9 py-[1.875rem]">
                  <h3 className="text-[1.75rem] uppercase">{dict['landing-page'].price.day}</h3>
                  <h3 className="text-right text-[1.75rem] font-bold">100,000</h3>
                  <h3 className="text-[1.75rem] font-bold uppercase">{dict['landing-page'].price.ticket}</h3>
                  <h3 className="my-auto text-right text-xl">{dict['landing-page'].price.points}</h3>
                </div>
                <div className="absolute -bottom-4 -left-4 aspect-square w-7 rounded-full bg-white"></div>
                <div className="absolute -bottom-4 -right-4 aspect-square w-7 rounded-full bg-white"></div>
              </div>
              <div className="p-9">
                <h6 className="text-sands-600 mb-1 flex items-center gap-2 text-xl font-semibold">
                  <CalendarHeartIcon className="[&>path]:stroke-sands-600" />
                  {dict['landing-page'].price.operationTime}
                </h6>
                <p className="mb-6 text-base font-normal text-gray-900">
                  {dict['landing-page'].price.operationTimeDesc}
                </p>
                <h6 className="text-sands-600 mb-1 flex items-center gap-2 text-xl font-semibold">
                  <TicketIcon className="[&>path]:stroke-sands-600" />
                  {dict['landing-page'].price.ticketDetail}
                </h6>
                <p className="text-base font-normal text-gray-900">
                  {dict['landing-page'].price.durationOfUse}: 450 {dict.common.minutes} <br />
                  {dict['landing-page'].price.validityPeriod}: 24h {dict['landing-page'].price.registerDay} <br />
                  {dict['landing-page'].price.validityPeriod}: 3.000 {dict.common.points} / 15 {dict.common.minutes}
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
