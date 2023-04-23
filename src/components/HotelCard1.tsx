import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type HotelCard1Type = {
  matterhornSuitesImage?: string;
  entireBungalow?: string;
  matterhornSuites?: string;
  night?: string;
  vector?: string;
  prop?: string;
  reviews?: string;

  /** Style props */
  propFlex?: Property.Flex;
  propGap?: Property.Gap;

  /** Action props */
  openMatterhornPopup?: () => void;
};

const HotelCard1: FunctionComponent<HotelCard1Type> = ({
  matterhornSuitesImage,
  entireBungalow,
  matterhornSuites,
  night,
  vector,
  prop,
  reviews,
  propFlex,
  propGap,
  openMatterhornPopup,
}) => {
  const stayDetailsStyle: CSS.Properties = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
    };
  }, [propFlex, propGap]);

  return (
    <div className="self-stretch flex-1 flex flex-row py-0 px-3 box-border items-start justify-center w-3/12 text-left text-base text-darkslategray-300 font-components-button-large md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
      <div className="self-stretch flex-1 rounded-3xs bg-primary-contrast box-border flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] w-3/12 border-[1px] border-solid border-whitesmoke hover:bg-gainsboro-200 hover:cursor-pointer lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-5">
        <img
          className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
          alt=""
          src={matterhornSuitesImage}
        />
        <div
          className="self-stretch flex flex-row items-start justify-start gap-[11px]"
          style={stayDetailsStyle}
        >
          <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
            <div className="self-stretch relative tracking-[0.02em] text-gray-100">
              {entireBungalow}
            </div>
            <b className="self-stretch relative text-3xl tracking-[0.04em] capitalize sm:text-xl">
              {matterhornSuites}
            </b>
            <div className="self-stretch relative text-lg tracking-[0.04em]">
              {night}
            </div>
          </div>
          <img
            className="relative w-[25px] h-[25px] shrink-0 overflow-hidden cursor-pointer"
            alt=""
            src="/video.svg"
            onClick={openMatterhornPopup}
          />
        </div>
        <div className="w-[270px] h-[19px] shrink-0 flex flex-row items-center justify-start gap-[9px]">
          <div className="w-[44.34px] h-[19px] shrink-0 flex flex-row items-center justify-start gap-[3px]">
            <img
              className="relative w-[16.64px] h-[17.19px] shrink-0"
              alt=""
              src={vector}
            />
            <div className="relative tracking-[0.04em] font-medium inline-block w-6 shrink-0">
              {prop}
            </div>
          </div>
          <div className="relative tracking-[0.04em] text-cornflowerblue-100 inline-block w-[216.37px] shrink-0">
            {reviews}
          </div>
        </div>
        <button className="cursor-pointer p-0 bg-[transparent] self-stretch rounded box-border h-[46px] shrink-0 overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-lavender sm:w-[100%!important]">
          <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-cornflowerblue-100 text-left">
            More details
          </div>
        </button>
      </div>
    </div>
  );
};

export default HotelCard1;
