import React from 'react';
import Image from 'next/image';
import { FiArrowRight, FiPhone } from 'react-icons/fi';

export interface AdmissionBannerProps {
  title?: string;
  buttonText?: string;
  phoneNumber?: string;
  backgroundImage?: string;
  onButtonClick?: () => void;
}

export const AdmissionBanner: React.FC<AdmissionBannerProps> = ({
  title = 'Admission is open for the next year batch',
  buttonText = 'Get started now',
  phoneNumber = '+1 234 567 8910',
  backgroundImage,
  onButtonClick,
}) => {
  return (
    <section className="relative py-6 md:py-8 lg:py-[35.688px] overflow-hidden w-full">
      {/* Background with accent color and optional decorative image */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-accent inset-0" />
        {backgroundImage && (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute h-full left-0 top-0 w-[20.22%] hidden md:block">
              <Image
                src={backgroundImage}
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}
      </div>

      <div className="max-w-container mx-auto px-4 md:px-8 lg:px-[59.5px] relative z-10">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 lg:gap-[24.78px]">
          {/* Title */}
          <div className="flex-1 text-center md:text-left w-full md:w-auto">
            <h2 className="text-[22px] md:text-heading-1 font-primary font-bold text-black leading-tight md:leading-[31.2px] tracking-[-0.5px] md:tracking-[-1px]">
              {title}
            </h2>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 lg:gap-[24.78px] shrink-0 w-full md:w-auto">
            {/* Button - Black with rounded-full */}
            <button
              onClick={onButtonClick}
              className="bg-black border-2 border-transparent flex items-center justify-center rounded-full shadow-button hover:bg-black/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black w-full sm:w-auto"
            >
              <div className="flex items-center overflow-clip py-3 md:py-[14px] md:pb-[15px] px-6 md:px-[38px] rounded-[inherit]">
                <span className="text-body-sm md:text-body-md font-medium text-white text-center leading-[22px] md:leading-[25.5px] whitespace-nowrap">
                  {buttonText}
                </span>
                <div className="flex items-center justify-center ml-2 md:ml-[6px] pb-[5.5px] pt-[3px]">
                  <FiArrowRight className="text-white text-base md:text-[17px] scale-y-[-1]" />
                </div>
              </div>
            </button>

            {/* Phone Number */}
            <div className="flex items-center gap-2 h-[23px] relative">
              <div className="flex items-center justify-center">
                <FiPhone className="text-black text-base md:text-[19px]" />
              </div>
              <a 
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="text-body-md md:text-body-lg font-semibold text-black tracking-[-0.3px] md:tracking-[-0.5px] leading-[24px] md:leading-[30px] whitespace-nowrap"
              >
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
