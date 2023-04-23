import { FunctionComponent, useState, useCallback } from "react";
import MatterhornPopup from "./MatterhornPopup";
import PortalPopup from "./PortalPopup";
import HotelCard1 from "./HotelCard1";

const PopularStaysContainer: FunctionComponent = () => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);
  const [isMatterhornPopup2Open, setMatterhornPopup2Open] = useState(false);
  const [isMatterhornPopup3Open, setMatterhornPopup3Open] = useState(false);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const openMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(true);
  }, []);

  const closeMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(false);
  }, []);

  const openMatterhornPopup2 = useCallback(() => {
    setMatterhornPopup2Open(true);
  }, []);

  const closeMatterhornPopup2 = useCallback(() => {
    setMatterhornPopup2Open(false);
  }, []);

  const openMatterhornPopup3 = useCallback(() => {
    setMatterhornPopup3Open(true);
  }, []);

  const closeMatterhornPopup3 = useCallback(() => {
    setMatterhornPopup3Open(false);
  }, []);

  const onViewAllStaysButtonClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  return (
    <>
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-left text-11xl text-darkslategray-300 font-components-button-large">
        <div className="self-stretch flex flex-row items-center justify-center">
          <b className="relative tracking-[0.04em] capitalize inline-block w-[1105.34px] shrink-0 sm:text-3xl">
            Popular Stays
          </b>
          <button
            className="cursor-pointer [border:none] p-0 bg-primary-contrast rounded-12xl flex flex-row items-start justify-start gap-[10px] md:hidden"
            onClick={onViewAllStaysButtonClick}
          >
            <div className="relative text-lg tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-200 text-right inline-block w-[140.66px] shrink-0">
              View all stays
            </div>
            <img
              className="relative w-6 h-6 shrink-0 overflow-hidden"
              alt=""
              src="/arrowright4.svg"
            />
          </button>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start ml-[-12px] mr-[-12px] text-base lg:pr-10 lg:box-border lg:ml-[-12px] lg:mr-[-50px] md:mr-[-50px] md:ml-[-12px] sm:flex-col sm:pr-0 sm:box-border sm:mr-[-12px] sm:ml-[-12px]">
          <HotelCard1
            matterhornSuitesImage="/unsplashrlwe8f8anoc@2x.png"
            entireBungalow="Entire bungalow"
            matterhornSuites="Matterhorn Suites"
            night="$575/night"
            vector="/vector.svg"
            prop="4.9"
            reviews="(60 reviews)"
            openMatterhornPopup={openMatterhornPopup}
          />
          <HotelCard1
            matterhornSuitesImage="/unsplashtsn8bpopveo@2x.png"
            entireBungalow="2-Story beachfront suite"
            matterhornSuites="Discovery Shores"
            night="$360/night"
            vector="/vector1.svg"
            prop="4.8"
            reviews="(116 reviews)"
            propFlex="1"
            propGap="11px"
            openMatterhornPopup={openMatterhornPopup1}
          />
          <HotelCard1
            matterhornSuitesImage="/unsplashrlwe8f8anoc1@2x.png"
            entireBungalow="Single deluxe hut"
            matterhornSuites="Arctic Hut "
            night="$420/night"
            vector="/vector2.svg"
            prop="4.7"
            reviews="(78 reviews)"
            propFlex="1"
            propGap="5px"
            openMatterhornPopup={openMatterhornPopup2}
          />
          <HotelCard1
            matterhornSuitesImage="/unsplashyqrybvxug5q@2x.png"
            entireBungalow="Deluxe King Room"
            matterhornSuites="Lake Louise Inn"
            night="$244/night"
            vector="/vector3.svg"
            prop="4.6"
            reviews="(63 reviews)"
            propFlex="unset"
            propGap="11px"
            openMatterhornPopup={openMatterhornPopup3}
          />
        </div>
        <div className="rounded-12xl bg-primary-contrast hidden flex-row items-start justify-start gap-[10px] text-right text-lg text-cornflowerblue-200 md:flex md:mt-4">
          <div className="relative tracking-[0.04em] font-medium inline-block w-[140.66px] shrink-0 md:w-auto">
            View all stays
          </div>
          <img
            className="relative w-6 h-6 shrink-0 overflow-hidden"
            alt=""
            src="/arrowright5.svg"
          />
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
      {isMatterhornPopup1Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup1}
        >
          <MatterhornPopup onClose={closeMatterhornPopup1} />
        </PortalPopup>
      )}
      {isMatterhornPopup2Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup2}
        >
          <MatterhornPopup onClose={closeMatterhornPopup2} />
        </PortalPopup>
      )}
      {isMatterhornPopup3Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup3}
        >
          <MatterhornPopup onClose={closeMatterhornPopup3} />
        </PortalPopup>
      )}
    </>
  );
};

export default PopularStaysContainer;
