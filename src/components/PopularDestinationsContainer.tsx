import { FunctionComponent } from "react";

const PopularDestinationsContainer: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-lg text-cornflowerblue-200 font-components-button-large">
      <div className="self-stretch flex flex-row items-center justify-start sm:flex-col sm:self-start">
        <div className="flex-1 flex flex-col items-start justify-start gap-[6px] sm:flex-[unset] sm:self-stretch">
          <b className="self-stretch relative tracking-[0.04em] uppercase">
            Plan your next trip
          </b>
          <b className="self-stretch relative text-11xl tracking-[0.04em] capitalize text-darkslategray-300 sm:text-3xl">
            Most Popular Destinations
          </b>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-primary-contrast rounded-12xl w-[231.38px] shrink-0 flex flex-row items-start justify-start gap-[10px] md:hidden">
          <div className="relative text-lg tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-200 text-right inline-block w-[197.33px] shrink-0">
            View all destinations
          </div>
          <img
            className="relative w-6 h-6 shrink-0 overflow-hidden"
            alt=""
            src="/arrowright.svg"
          />
        </button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap md:mt-[-16px] md:mb-[-16px]">
        <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] w-3/12 shrink-0 flex flex-col box-border items-center justify-center md:p-4 md:box-border md:w-6/12 sm:w-full">
          <div className="self-stretch h-[182px] shrink-0 overflow-hidden flex flex-col py-0 px-[0.29296875px] box-border items-start justify-start bg-[url(/public/pariscard@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <div className="w-[287.41px] flex flex-row py-2 px-3 box-border items-start justify-start">
              <b className="flex-1 relative text-xl tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
                Paris
              </b>
              <div className="w-[90.92px] h-[59px] shrink-0 flex flex-col py-0 pr-[0.000003814697265625px] pl-0 box-border items-end justify-start gap-[2px]">
                <div className="relative text-base tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[52.53px]">
                  from
                </div>
                <div className="relative text-19xl leading-[38px] font-baloo-bhai text-primary-contrast text-right inline-block w-[90.92px]">
                  $699
                </div>
              </div>
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] w-3/12 shrink-0 flex flex-col box-border items-center justify-center md:p-4 md:box-border md:w-6/12 sm:w-full">
          <div className="w-72 h-[182px] shrink-0 overflow-hidden flex flex-col py-0 px-[0.29296875px] box-border items-start justify-start bg-[url(/public/greececard@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <div className="w-[287.41px] flex flex-row py-2 px-3 box-border items-start justify-start">
              <b className="flex-1 relative text-xl tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
                Greece
              </b>
              <div className="w-[99.92px] h-[59px] shrink-0 flex flex-col py-0 pr-[0.000003814697265625px] pl-0 box-border items-end justify-start gap-[2px]">
                <div className="relative text-base tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[52.53px]">
                  from
                </div>
                <div className="relative text-19xl leading-[38px] font-baloo-bhai text-primary-contrast text-right">
                  $1079
                </div>
              </div>
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] w-3/12 shrink-0 flex flex-col box-border items-center justify-center md:p-4 md:box-border md:w-6/12 sm:w-full">
          <div className="w-72 h-[182px] shrink-0 overflow-hidden flex flex-col py-0 px-[0.29296875px] box-border items-start justify-start bg-[url(/public/norwaycard@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <div className="w-[287.41px] flex flex-row py-2 px-3 box-border items-start justify-start">
              <b className="flex-1 relative text-xl tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
                Norway
              </b>
              <div className="w-[90.92px] h-[59px] shrink-0 flex flex-col py-0 pr-[0.000003814697265625px] pl-0 box-border items-end justify-start gap-[2px]">
                <div className="relative text-base tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[52.53px]">
                  from
                </div>
                <div className="relative text-19xl leading-[38px] font-baloo-bhai text-primary-contrast text-right inline-block w-[90.92px]">
                  $895
                </div>
              </div>
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] w-3/12 shrink-0 flex flex-col box-border items-center justify-center md:p-4 md:box-border md:w-6/12 sm:w-full">
          <div className="w-72 h-[182px] shrink-0 overflow-hidden flex flex-col py-0 px-[0.29296875px] box-border items-start justify-start bg-[url(/public/tuscanycard@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <div className="w-[287.41px] flex flex-row py-2 px-3 box-border items-start justify-start">
              <b className="flex-1 relative text-xl tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
                Tuscany
              </b>
              <div className="w-[100.62px] h-[59px] shrink-0 flex flex-col py-0 pr-[0.000003814697265625px] pl-0 box-border items-end justify-start gap-[2px]">
                <div className="relative text-base tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[52.53px]">
                  from
                </div>
                <div className="relative text-19xl leading-[38px] font-baloo-bhai text-primary-contrast text-right inline-block w-[100.62px]">
                  $1245
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
      <div className="rounded-12xl bg-primary-contrast w-[231.38px] hidden flex-row items-start justify-start gap-[10px] text-right md:flex md:mt-4">
        <div className="relative tracking-[0.04em] font-medium inline-block w-[197.33px] shrink-0 md:w-auto">
          View all destinations
        </div>
        <img
          className="relative w-6 h-6 shrink-0 overflow-hidden"
          alt=""
          src="/arrowright1.svg"
        />
      </div>
    </div>
  );
};

export default PopularDestinationsContainer;
