import { FunctionComponent } from "react";

type RecommendedHolidayCardContaineType = {
  unsplash5MV818tzxeo?: string;
  bali?: string;
  d3N?: string;
  prop?: string;
};

const RecommendedHolidayCardContaine: FunctionComponent<
  RecommendedHolidayCardContaineType
> = ({ unsplash5MV818tzxeo, bali, d3N, prop }) => {
  return (
    <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] flex-1 flex flex-col box-border items-center justify-start w-3/12 md:w-6/12 md:mb-8 sm:w-full sm:mb-8">
      <img
        className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
        alt=""
        src={unsplash5MV818tzxeo}
      />
      <div className="self-stretch rounded-t-none rounded-b-3xs bg-primary-contrast flex flex-col py-5 px-4 items-center justify-center border-[1px] border-solid border-whitesmoke">
        <div className="self-stretch flex flex-row items-center justify-start">
          <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
            <div className="self-stretch relative text-xl tracking-[0.02em] font-medium font-components-button-large text-darkslategray-200 text-left">
              {bali}
            </div>
            <div className="self-stretch relative text-base tracking-[0.02em] font-components-button-large text-darkgray text-left">
              {d3N}
            </div>
          </div>
          <div className="relative text-13xl leading-[34px] font-baloo-bhai text-cornflowerblue-100 text-right">
            {prop}
          </div>
        </div>
      </div>
    </button>
  );
};

export default RecommendedHolidayCardContaine;
