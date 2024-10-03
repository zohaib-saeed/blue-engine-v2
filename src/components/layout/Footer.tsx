import React from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';
import { footerNaveMenu } from '@/constants/footer';

const Footer = () => {
  return (
    <section className="w-full flex flex-col items-center justify-start bg-blue-950 ">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1.5fr_0.8fr_1.1fr_1.1fr] gap-x-4 gap-y-10 md:gap-y-14 lg:gap-5 px-3 lg:px-4 py-7 lg:py-10 max-w-screen-sxl">
        {/* Col 1 */}
        <div className="w-full md:col-span-3 lg:col-span-1 flex flex-col items-start justify-start gap-3">
          <div className="text-base lg:text-lg font-[800] text-white-main">
            <span className="bg-white-main text-blue-950 px-[2px]">Accelereer</span> jouw Bol.com
            business{' '}
          </div>
          {/* Logo  */}
          <h1 className="text-3xl lg:text-4xl text-white-main font-[800] mt-5 lg:mt-10">
            BlueEngine
          </h1>
        </div>
        {/* Col 2 */}
        <div className="w-full flex flex-col items-start justify-start gap-3">
          <div className="text-base lg:text-lg font-semibold text-white-main relative">
            Links
            <span className="w-[45px] h-[2px] bg-blue-700 absolute -bottom-3 left-0" />
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-3 mt-7 lg:mt-10">
            {footerNaveMenu.links.map((item: { title: string; url: string }, index: number) => (
              <Link to={item.url} key={index} className="text-white-main text-base lg:text-lg">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        {/* Col 3 */}
        <div className="w-full flex flex-col items-start justify-start gap-3">
          <div className="text-base lg:text-lgfont-semibold text-white-main relative">
            Overeenkomsten
            <span className="w-[45px] h-[2px] bg-blue-700 absolute -bottom-3 left-0" />
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-3 mt-7 lg:mt-10">
            {footerNaveMenu.overeenkonsten.map(
              (item: { title: string; url: string }, index: number) => (
                <Link to={item.url} key={index} className="text-white-main text-base lg:text-lg">
                  {item.title}
                </Link>
              )
            )}
          </div>
        </div>
        {/* Col 4 */}
        <div className="w-full flex flex-col items-start justify-start gap-3">
          <div className="text-base lg:text-lg font-semibold text-white-main relative">
            Contacts
            <span className="w-[45px] h-[2px] bg-blue-700 absolute -bottom-3 left-0" />
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-3 mt-10">
            {footerNaveMenu.contact.map(
              (item: { title: string; icon: IconType }, index: number) => (
                <div key={index} className="w-full flex items-start justify-start gap-2">
                  <item.icon size={21} color="white" className="mt-[6px]" />
                  <div className="text-white-main text-base lg:text-lg">{item.title}</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="w-full py-4 md:py-6 border-0 border-solid border-t-[1px] border-gray-900">
        <div className="w-full max-w-screen-2xl m-auto px-3 lg:px-4">
          <div />
          <div className="text-sm text-white-main text-center w-full">
            © 2024 All Rights Reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
