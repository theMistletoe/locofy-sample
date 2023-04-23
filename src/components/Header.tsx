import { FunctionComponent, useCallback } from "react";

const Header: FunctionComponent = () => {
  const onSearchTextClick = useCallback(() => {
    // Please sync "Results Page" to the project
  }, []);

  const onHotelsTextClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  return (
    <header className="bg-primary-contrast w-full h-[77px] shrink-0 flex flex-row py-[22px] px-20 box-border items-center justify-center sticky top-[0] [background:white] text-left text-sm text-darkslategray-200 font-components-button-large lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[174px] h-[33px] shrink-0 overflow-hidden">
          <img
            className="absolute h-[96.97%] w-[99.82%] top-[1.59%] right-[0.18%] bottom-[1.44%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/combinedshape.svg"
          />
        </button>
        <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
          <div className="flex flex-row items-center justify-end gap-[30px] md:hidden">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-components-button-large text-cornflowerblue-100 text-left inline-block">
              Explore
            </button>
            <div
              className="relative cursor-pointer"
              onClick={onSearchTextClick}
            >
              Search
            </div>
            <div
              className="relative cursor-pointer"
              onClick={onHotelsTextClick}
            >
              Hotels
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-components-button-large text-darkslategray-200 text-left inline-block">
              Offers
            </button>
          </div>
          <div className="flex flex-row items-center justify-center gap-[12px]">
            <img
              className="relative w-6 h-6 shrink-0 overflow-hidden hidden md:flex"
              alt=""
              src="/notification.svg"
            />
            <img
              className="relative w-6 h-6 shrink-0 overflow-hidden"
              alt=""
              src="/notification1.svg"
            />
            <img
              className="rounded-19xl w-9 h-9 shrink-0 object-cover"
              alt=""
              src="/top_avatar@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
