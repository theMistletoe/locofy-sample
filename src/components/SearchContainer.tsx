import { FunctionComponent, useState, useCallback } from "react";
import {
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const SearchContainer: FunctionComponent = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState<string | null>(null);

  const onSearchFlightsButtonClick = useCallback(() => {
    // Please sync "Results Page" to the project
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="self-stretch flex flex-col items-center justify-end bg-[url(/public/search-section@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-42xl text-primary-contrast font-baloo-bhai">
        <div className="self-stretch h-[640px] shrink-0 flex flex-col py-0 px-[140px] box-border items-center justify-center gap-[43px] w-full md:pl-[30px] md:pr-[30px] md:box-border">
          <div className="self-stretch flex flex-col items-center justify-start gap-[5px]">
            <div className="self-stretch relative leading-[67px] sm:text-23xl sm:leading-[48px]">{`Let’s explore & travel the world`}</div>
            <div className="self-stretch relative text-5xl leading-[32px] font-components-button-large">
              Find the best destinations and the most popular stays!
            </div>
          </div>
          <div className="self-stretch rounded-3xs bg-primary-contrast flex flex-col p-5 items-start justify-start gap-[4px] text-left text-xl text-darkslategray-300 font-components-button-large md:flex-col sm:mt-5">
            <div className="self-stretch overflow-hidden flex flex-row p-[5px] items-center justify-start gap-[5px] sm:flex-col sm:items-start">
              <b className="flex-1 relative tracking-[0.04em] uppercase sm:w-full sm:pb-2.5 sm:mb-1.5 sm:[border-bottom:1px] sm:[border-bottom-style:solid] sm:border-b-whitesmoke sm:flex-[unset] sm:self-stretch">
                Search flights
              </b>
              <div className="flex flex-row items-center justify-start sm:w-full">
                <div className="w-[216.53px] h-[38px] shrink-0 flex flex-row items-center justify-start gap-[20px] sm:w-[100%!important]">
                  <FormControlLabel
                    label="Return"
                    labelPlacement="end"
                    control={<Radio size="medium" />}
                  />
                  <FormControlLabel
                    label="One-way"
                    labelPlacement="end"
                    control={<Radio color="primary" checked size="medium" />}
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start text-xs text-gray-200 md:flex-col">
              <div className="flex-1 flex flex-row p-[5px] items-start justify-start gap-[10px] md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
                <Autocomplete
                  className="self-stretch flex-1 sm:flex-[unset] sm:self-stretch"
                  disablePortal
                  options={[
                    "Singapore (SIN)",
                    "Sydney (SYD)",
                    "Siem Reap (REP)",
                    "Shanghai (PVG)",
                    "Sanya (SYX)",
                  ]}
                  renderInput={(params: any) => (
                    <TextField
                      {...params}
                      color="primary"
                      label="Departure"
                      variant="outlined"
                      placeholder=""
                      helperText=""
                    />
                  )}
                  defaultValue="Singapore -  Changi (SIN)"
                  size="medium"
                />
                <div className="self-stretch flex-1 flex flex-col items-start justify-start sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch rounded box-border h-14 shrink-0 flex flex-col py-0 px-3 items-start justify-start border-[1px] border-solid border-gray-400">
                    <div className="bg-primary-contrast h-0.5 shrink-0 flex flex-row py-0 px-1 box-border items-center justify-start">
                      <div className="relative tracking-[0.15px] leading-[12px]">
                        Arrival
                      </div>
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-row py-[15px] px-0 items-center justify-start gap-[8px] text-center text-dimgray">
                      <div className="hidden flex-row items-start justify-start gap-[8px]">
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-gainsboro-100 flex flex-row p-1 items-center justify-start">
                            <div className="rounded-45xl bg-silver w-6 h-6 shrink-0 overflow-hidden hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col py-[3px] px-1.5 items-start justify-start text-left text-smi text-gray-300">
                              <div className="relative tracking-[0.16px] leading-[18px]">
                                Chip
                              </div>
                            </div>
                            <img
                              className="relative w-6 h-6 shrink-0 overflow-hidden"
                              alt=""
                              src="/cancel.svg"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-gainsboro-100 flex flex-row p-1 items-center justify-start">
                            <div className="rounded-45xl bg-silver w-6 h-6 shrink-0 overflow-hidden hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col py-[3px] px-1.5 items-start justify-start text-left text-smi text-gray-300">
                              <div className="relative tracking-[0.16px] leading-[18px]">
                                Chip
                              </div>
                            </div>
                            <img
                              className="relative w-6 h-6 shrink-0 overflow-hidden"
                              alt=""
                              src="/cancel.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 relative text-base tracking-[0.15px] leading-[24px] text-gray-300 text-left">
                        Los Angeles (LA)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 sm:flex-[unset] sm:self-stretch">
                  <DatePicker
                    label="Date"
                    value={selectOutlinedDateTimePickerValue}
                    onChange={(newValue: any) => {
                      setSelectOutlinedDateTimePickerValue(newValue);
                    }}
                    renderInput={(params: any) => (
                      <TextField
                        {...params}
                        color="primary"
                        variant="outlined"
                        size="medium"
                        renderInput={{ placeholder: "01/05/2022" }}
                        helperText=""
                        fullWidth
                      />
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-col p-[5px] items-center justify-center md:w-full md:text-left">
                <button
                  className="cursor-pointer [border:none] p-0 bg-orange rounded w-[164px] h-14 shrink-0 overflow-hidden flex flex-col items-center justify-center transition-[0.3s] hover:bg-darkorange md:mr-[auto] sm:w-[100%!important]"
                  onClick={onSearchFlightsButtonClick}
                >
                  <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-primary-contrast text-center inline-block w-[146.98px]">
                    Search flights
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SearchContainer;
