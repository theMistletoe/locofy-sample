import { FunctionComponent } from "react";
import { TextField } from "@mui/material";

const SubscribeContainer: FunctionComponent = () => {
  return (
    <div className="w-[1440px] h-[529px] shrink-0 overflow-hidden flex flex-col py-[42px] px-0 box-border items-center justify-end bg-[url(/public/subscribe-section@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-lg text-cornflowerblue-200 font-components-button-large">
      <div className="w-[549px] flex flex-col p-5 box-border items-center justify-start gap-[30px] ml-[auto] mr-[auto] [position:relative!important] left-[auto!important] md:py-6 md:px-0 md:box-border sm:pl-6 sm:pr-6 sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-full">
        <div className="self-stretch flex flex-col items-center justify-start gap-[7px]">
          <b className="self-stretch relative tracking-[0.04em] uppercase">
            subscribe to our newsletter
          </b>
          <b className="self-stretch relative text-11xl text-darkslategray-100">
            Get weekly updates
          </b>
        </div>
        <form className="self-stretch rounded-xl bg-primary-contrast shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col py-7 px-[30px] items-start justify-start gap-[17px] border-[1px] border-solid border-whitesmoke">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative text-lg leading-[34px] font-components-button-large text-slategray text-left">
              Fill in your details to join the party!
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <TextField
                className="[border:none] bg-[transparent] self-stretch"
                color="primary"
                variant="outlined"
                type="text"
                label="Your name"
                size="medium"
                margin="none"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <TextField
                className="[border:none] bg-[transparent] self-stretch"
                color="primary"
                variant="outlined"
                type="text"
                label="Email address"
                size="medium"
                margin="none"
              />
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-orange rounded w-[164px] h-14 shrink-0 overflow-hidden flex flex-col items-center justify-center hover:bg-darkorange sm:w-full sm:hover:bg-peru">
            <div className="overflow-hidden flex flex-col py-2 px-[22px] items-start justify-start">
              <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-primary-contrast text-left">
                submit
              </div>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeContainer;
