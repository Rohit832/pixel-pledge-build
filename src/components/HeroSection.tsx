import React from 'react';
import { CallToActionButton } from './CallToActionButton';

export const HeroSection: React.FC = () => {
  const BlurEllipse = () => (
    <div className="absolute right-[8.297px] top-[49px] w-[533px] h-[521px] rounded-[532.703px] bg-gradient-to-br from-[rgba(53,115,105,0.20)] via-[rgba(53,115,105,0.15)] to-[rgba(255,255,255,0.10)] blur-[25px] pointer-events-none" />
  );

  return (
    <section className="flex w-full min-h-[760px] flex-col items-start gap-2.5 relative overflow-hidden px-[239px] py-[67px] max-md:px-[60px] max-md:py-10 max-sm:p-5">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/429fdf696ccd86ccb7f3949bfcf1cf922da2c9e1?width=2878"
        alt="Financial wellness background"
        className="w-full h-[760px] absolute object-cover left-0 top-0"
      />
      
      <BlurEllipse />
      
      <div className="flex justify-center items-center gap-[74.63px] relative z-[1] w-full max-md:flex-col max-md:gap-10 max-sm:gap-[30px]">
        <div className="flex w-[491px] flex-col items-start gap-[14.291px] relative left-[content] max-md:w-full max-md:max-w-[600px] max-sm:gap-5">
          <div className="flex flex-col items-end gap-[34.139px] self-stretch relative max-sm:gap-5">
            <div className="flex flex-col items-start gap-[39.697px] self-stretch relative max-sm:gap-5">
              <h2 className="w-[375px] text-[#49887B] text-[21px] font-normal relative max-sm:text-lg max-sm:w-full">
                Why Finsage?
              </h2>
              <h1 className="w-[375px] text-[#49887B] text-[38px] font-black leading-9 relative max-md:text-[32px] max-md:leading-8 max-sm:text-[28px] max-sm:leading-[30px] max-sm:w-full">
                Because money stress isn't just personal. It shows up at work too.
              </h1>
            </div>
            <p className="h-[218px] self-stretch text-neutral-500 text-[19px] font-medium leading-[25px] relative max-md:text-base max-md:leading-[22px] max-md:h-auto max-sm:text-sm max-sm:leading-5">
              Your employees are doing their best. But behind their smiles are worries:
              <br />
              Where did my salary go again?
              <br />
              Should I invest or wait?
              <br />
              Will I ever afford a home?
              <br />
              These questions don't stay at home. They walk into meetings, cloud performance, trigger attrition, and impact company culture.
            </p>
          </div>
          <p className="h-16 self-stretch text-black text-[19px] font-semibold relative bottom-[text] max-md:text-base max-md:h-auto max-sm:text-sm">
            When money feels manageable, everything else flows smoother — productivity, retention, and peace.
          </p>
        </div>
        
        <div className="flex justify-center items-center">
          <CallToActionButton text="Learn More about us" />
        </div>
      </div>
    </section>
  );
};
