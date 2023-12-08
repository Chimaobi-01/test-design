import { MyButton } from "../page";

const ScreenTwo = () => {
  return (
    <div className="w-screen min-h-screen xl:px-[3.94rem] xl:pb-[3.94rem]  lg:border lg:border-solid">
      {/* header copy */}
      <nav className="w-full h-12 items-center justify-between hidden xl:flex lg:flex mb-[1.37rem] mt-[2.81rem]">
        <div className="gap-[0.43rem] items-center flex">
          <div className="bg-[#34333e] w-[2.56rem] h-[2.56rem] rounded-[0.31rem] items-center justify-center flex">
            <img alt="logomark" src="/images/logomark.svg" />
          </div>
          <span className="text-black text-[1rem] font-medium leading-6">
            Name
          </span>
        </div>

        <div className="h-12 px-3.5 py-2.5 bg-gray-200 bg-opacity-30 rounded-lg justify-start items-center gap-2.5 flex">
          <div className=" w-6 h-6 p-1.5 bg-lime-50 rounded-3xl border-2 border-lime-100 justify-center items-center flex">
            <img src="/images/user.svg" alt="user image placeholder" />
          </div>
          <div className=" text-zinc-800 text-base font-medium leading-7">
            James Blunt
          </div>
        </div>
      </nav>
      {/* header copy ends */}

      <div className=" xl:gap-[5.63rem] lg:gap-[2.63rem] lg:grid-cols-2 lg:grid">
        <div className="flex-1 overflow-hidden pt-[3.25rem] pe-[1.812rem] pb-[5.458rem] ps-[2.25rem] xl:p-0 lg:p-0 lg:w-[34.0625rem] bg-white">
          <TopNav />
          <HeadingAndImage />
          <DescriptionAndDate />
          <div className="flex-col gap-[1.06rem] flex">
            <h5 className="text-black text-[1rem] font-medium leading-6">
              {" "}
              Locations
            </h5>

            <div>
              <div className="gap-24 pb-1.5 justify-start flex">
                <MiniLocation text={"Spain"} />
                <MiniLocation text={"Spain"} />
                <MiniLocation text={"Spain"} />
                <MiniLocation text={"Spain"} />
              </div>
              <div className="gap-24 pb-1.5 justify-start flex">
                <MiniLocation text={"Spain"} />
                <MiniLocation text={"Spain"} />
                <MiniLocation text={"Spain"} />
                <MiniLocation text={"Spain"} />
              </div>
              <div className="gap-24 pb-1.5 justify-start flex">
                <MiniLocation text={"Spain"} />
                <MiniLocation text={"Spain"} />
                <MiniLocation text={"Spain"} />
                <MiniLocation text={"Spain"} />
              </div>
            </div>

            <div className="button_wrapper flex-col gap-[1.81rem] flex">
              <MyButton text={"Submit"} mode={"light"} color={"#34333e"} />
              <button className="otuline-none hover:outline-none bg-transparent underline text-black text-[0.74769rem] font-semibold leading-[1.1215rem]">
                Save & Publish Later
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 gap-[24.69rem] flex-col justify-center hidden lg:flex">
          {/* copt starts */}
          <div className=" flex-col gap-9 inline-flex">
            <div className="w-full px-7 py-5 bg-stone-50 rounded-lg  gap-9 inline-flex">
              <div className="bg-[#34333e] shrink-0 w-[2.56rem] h-[2.56rem] rounded-[0.31rem] items-center justify-center flex">
                <img alt="logomark" src="/images/logomark.svg" />
              </div>
              <div className="flex-col gap-3 inline-flex">
                <h4 className=" text-neutral-700 text-xl font-medium leading-normal">
                  What do you want to generate
                </h4>
                <p className=" text-zinc-600 text-base font-normal leading-normal">
                  You can provide a description,
                </p>
              </div>
            </div>

            <div className=" h-24 pl-5 gap-3 inline-flex">
              <div className="h-7 px-2.5 py-0.5 bg-lime-50 rounded justify-center items-center flex">
                <span className=" text-lime-700 text-base font-normal leading-normal">
                  J
                </span>
              </div>
              <div className=" h-24 gap-3 flex">
                <p className=" text-zinc-600 text-base font-normal leading-normal">
                  Pictures of Dogs laughing, with a short back story
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-14 px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
            <div className="w-7 h-7 px-0.5 py-0.5 bg-gray-200 rounded-2xl justify-center items-center flex">
              <img src="/images/add.svg" alt="plus sign" />
            </div>

            <input
              type="text"
              className="grow shrink basis-0 h-6 items-center flex text-neutral-400 text-sm leading-normal focus:border-none outline-none border-none"
            />

            <div className="w-8 pl-1.5 pr-2.5 py-2 bg-neutral-700 rounded-md justify-center items-center flex">
              <img src="/images/send.svg" alt="plus sign" />
            </div>
          </div>
          {/* copy ends */}
        </div>
      </div>
    </div>
  );
};

export default ScreenTwo;

export const TopNav = () => {
  return (
    <div className="top_nav items-center gap-[8.437rem] mb-[1.88rem] flex">
      <img src="/images/backarrow.svg" alt="back arrow icon" />
      <div className="items-center justify-end gap-[0.44rem] text-[0.8125rem] w-fit flex-1 flex">
        <button className="w-[4.625rem] py-[0.43725rem] px-[0.54656rem] items-center gap-[0.375rem] rounded-[0.3125rem] bg-white border border-[#34333e] border-solid hover:border-[#34333e] flex">
          <img src="/images/saveicon.svg" alt="save icon" />
          Save
        </button>
        <button className="w-[4.625rem] py-[0.43725rem] px-[0.54656rem] items-center gap-[0.375rem] rounded-[0.3125rem] bg-[#34333e] border border-white border-solid text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export const HeadingAndImage = () => {
  return (
    <div className="heading-and-image">
      <div>
        <h3 className="text-[#34333e] text-[1.25rem] font-semibold leading-6 mb-[0.25rem]">
          Happy Dog
        </h3>
        <p className="text-[0.875rem] leading-6 text-[#585858]">Madrid Spain</p>
      </div>
      <div className="items-center mt-[1.06rem] py-[0.69rem] gap-[1.44rem] justify-around flex">
        <span className="flex-col gap-[0.125rem] flex">
          <span className="text-[0.75rem] leading-[0.9643rem] text-[#585858]">
            Price
          </span>
          <span className="text-[0.9375rem] font-medium leading-[0.96431rem]">
            #1100/Month
          </span>
        </span>
        <span className="w-[0.0625rem] h-[1.75rem] bg-slate-200"></span>
        <span className="flex-col gap-[0.125rem] flex">
          <span className="text-[0.75rem] leading-[0.9643rem] text-[#585858]">
            Number
          </span>
          <span className="text-[0.9375rem] font-medium leading-[0.96431rem]">
            3
          </span>
        </span>
        <span className="w-[0.0625rem] h-[1.75rem] bg-slate-200"></span>
        <span className="flex-col gap-[0.125rem] flex">
          <span className="text-[0.75rem] leading-[0.9643rem] text-[#585858]">
            Number
          </span>
          <span className="text-[0.9375rem] font-medium leading-[0.96431rem]">
            3
          </span>
        </span>
      </div>
      <div className="gap-[0.625rem] my-[1.69rem] overflow-x-hidden flex">
        <div className="w-[9.75rem] h-[8.5625rem] rounded-[1.40225rem] shrink-0 smiling_dog"></div>
        <div className="w-[9.75rem] h-[8.5625rem] rounded-[1.40225rem] shrink-0 smiling_dog"></div>
        <div className="w-[9.75rem] h-[8.5625rem] rounded-[1.40225rem] shrink-0 smiling_dog lg:hidden"></div>
        <div className="w-[9.75rem] h-[8.5625rem] rounded-[1.40225rem] shrink-0 hidden lg:flex items-center justify-center bg-[#FAFAFB] text-[#585858]">
          + 5 more
        </div>
      </div>
    </div>
  );
};

export const DescriptionAndDate = () => {
  return (
    <div className="description-and-date">
      <div>
        <h4 className="text-[#34333e] text-[1rem] font-medium leading-6 mb-[0.3rem]">
          Description
        </h4>
        <p className="text-[#585858] text-[0.875rem] leading-5">
          A sizeable three bedroom apartment located in a residential part of
          Mosta. This property comprises a spacious open plan kitchen /living
          /dining room, three bedrooms (one of which is a study), two bathrooms
          and two balconies.
        </p>
      </div>
      <div className="my-[1.44rem]">
        <h4 className="text-[#34333e] text-[1rem] font-medium leading-6 mb-[0.31rem]">
          Date Taken
        </h4>
        <p className="text-[#585858] text-[0.875rem] leading-5">
          1 year (12 April 2023 - 11 April 2024)
        </p>
      </div>
    </div>
  );
};

export const MiniLocation = ({ text }) => {
  return (
    <div className="gap-[0.5625rem] items-center leading-7 text-[0.9375rem] text-[#333] flex">
      <div className="w-6 h-6">
        <img
          src="/images/check.svg"
          alt="success check"
          className="object-cover w-full h-full"
        />
      </div>
      {text}
    </div>
  );
};
