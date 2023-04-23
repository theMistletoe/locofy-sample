import { FunctionComponent } from "react";

type FlightMainContainerType = {
  flightOrigin?: string;
  flightDestination?: string;
  flightOriginCode?: string;
  departureDate?: string;
  returnDate?: string;
};

const FlightMainContainer: FunctionComponent<FlightMainContainerType> = ({
  flightOrigin,
  flightDestination,
  flightOriginCode,
  departureDate,
  returnDate,
}) => {
  return (
    <div className="flex-1 rounded-lg flex flex-col p-5 items-center justify-center gap-[21px] text-left text-5xl text-cornflowerblue-200 font-components-button-large border-[1px] border-solid border-whitesmoke lg:w-[520px] md:w-full md:block md:mb-[30px] md:flex-[unset] md:self-stretch">
      <div className="self-stretch flex flex-row items-center justify-between">
        <b className="relative tracking-[0.04em] capitalize inline-block w-[44.73px] shrink-0">
          {flightOrigin}
        </b>
        <img
          className="relative w-[117.35px] h-6 shrink-0"
          alt=""
          src={flightDestination}
        />
        <b className="relative tracking-[0.04em] capitalize inline-block text-right w-[51.27px] shrink-0">
          {flightOriginCode}
        </b>
      </div>
      <div className="relative text-xl tracking-[0.04em] capitalize text-black">
        <b>{departureDate}</b>
        <span>{returnDate}</span>
      </div>
    </div>
  );
};

export default FlightMainContainer;
