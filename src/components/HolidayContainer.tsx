import { FunctionComponent } from "react";
import RecommendedHolidayCardContaine from "./RecommendedHolidayCardContaine";

const HolidayContainer: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-center gap-[24px] text-left text-11xl text-darkslategray-300 font-components-button-large">
      <div className="self-stretch flex flex-row items-center justify-start">
        <b className="flex-1 relative tracking-[0.04em] capitalize sm:text-3xl">
          Recommended Holidays
        </b>
        <button className="cursor-pointer [border:none] p-0 bg-primary-contrast rounded-12xl w-[199.89px] shrink-0 flex flex-row items-start justify-start gap-[10px] md:hidden">
          <div className="relative text-lg tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-200 text-right inline-block w-[165.89px] shrink-0">
            View all holidays
          </div>
          <img
            className="relative w-6 h-6 shrink-0 overflow-hidden"
            alt=""
            src="/arrowright2.svg"
          />
        </button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap">
        <RecommendedHolidayCardContaine
          unsplash5MV818tzxeo="/unsplash5mv818tzxeo@2x.png"
          bali="Bali"
          d3N="4D3N"
          prop="$899"
        />
        <RecommendedHolidayCardContaine
          unsplash5MV818tzxeo="/switzerlandimage@2x.png"
          bali="Swiss"
          d3N="6D5N"
          prop="$900"
        />
        <RecommendedHolidayCardContaine
          unsplash5MV818tzxeo="/boracayimage@2x.png"
          bali="Boracay"
          d3N="5D4N"
          prop="$699"
        />
        <RecommendedHolidayCardContaine
          unsplash5MV818tzxeo="/palawanimage@2x.png"
          bali="Palawan"
          d3N="4D3N"
          prop="$789"
        />
      </div>
      <div className="rounded-12xl bg-primary-contrast w-[199.89px] hidden flex-row items-start justify-start gap-[10px] text-right text-lg text-cornflowerblue-200 md:flex md:[mrgin-top:16px]">
        <div className="relative tracking-[0.04em] font-medium inline-block w-[165.89px] shrink-0 md:w-auto">
          View all holidays
        </div>
        <img
          className="relative w-6 h-6 shrink-0 overflow-hidden"
          alt=""
          src="/arrowright3.svg"
        />
      </div>
    </div>
  );
};

export default HolidayContainer;
