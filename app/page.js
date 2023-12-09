"use client";

import { Dropdown } from "flowbite-react";
import { useRouter } from "next/navigation";

const Home = () => {
  return (
    <main className="flex w-screen min-h-screen lg:justify-around xl:justify-start xl:gap-[6rem] gap-[4rem] lg:ps-[4rem] xl:ps-[5.5rem]">

      <div className=" bg-green-50 rounded-tl-2xl rounded-tr-2xl rounded-bl-[5.5rem] flex-1 items-end lg:flex hidden relative bottom-[4.7rem] max-w-[36rem]">

        <div className="content-wrapper ps-[3rem] flex-col items-end flex ">

          <div className="logo flex items-center w-full mb-[2.3rem]">
            <div className="gap-[0.43rem] items-center flex">
              <div className="bg-[#34333e] w-[2.56rem] h-[2.56rem] rounded-[0.31rem] items-center justify-center flex">
                <img alt="logomark" src="/images/logomark.svg" />
              </div>
              <span className="text-black text-[1rem] font-medium leading-6">
                Name
              </span>
            </div>
          </div>

          <div className=" flex-col justify-start items-start gap-4 inline-flex">
            <h1 className="text-gray-900 xl:text-4xl lg:text-3xl font-bold leading-10 tracking-wide">Revolutionize your Customer Service Game</h1>
            <p className="text-neutral-600 text-lg xl:leading-loose">Connect authentically with customers through natural, flowing conversations. </p>
          </div>

          <div className="max-w-[31rem] ">
            <img
              className="w-full h-full object-cover"
              src="/images/hand_holding_house.png"
              alt="huge hand holding a house"
            />
          </div>

        </div>

      </div>
      <FormSection />
    </main>
  );
};

export default Home;

export const Header = () => {
  return (
    <header className="w-[38.5%] h-full max-h-[51.125rem] flex-col items-end justify-end gap-[53px] -top-[24px] relative hidden lg:flex">
      <div className="w-[89%] flex-col gap-[37px] flex">
        <div className="gap-[0.43rem] items-center flex">
          <div className="bg-[#34333e] w-[2.56rem] h-[2.56rem] rounded-[0.31rem] items-center justify-center flex">
            <img alt="logomark" src="/images/logomark.svg" />
          </div>
          <span className="text-black text-[1rem] font-medium leading-6">
            Name
          </span>
        </div>

        <div className=" gap-4 flex-col flex">
          <h1 className="text-[#0f1824] text-[2.25rem] font-bold leading-[2.93rem] tracking-[0.0312rem] ">
            Revolutionize your Customer Service Game
          </h1>
          <p className="text-[#4f4f4f] text-[1.125rem] font-light leading-[1.875rem] tracking-[-0.01875rem]">
            Connect authentically with customers through natural, flowing
            conversations.
          </p>
        </div>
      </div>

      <div className="w-[85%] h-[19.375rem]">
        <img
          className="w-full h-full object-cover"
          src="/images/hand_holding_house.png"
          alt="huge hand holding a house"
        />
      </div>
    </header>
  );
};

export const InputField = () => {
  return (
    <div className="gap-[0.3125rem] w-full items-center flex">
      <Dropdown
        dismissOnClick={false}
        renderTrigger={() => (
          <span className=" gap-[0.31rem] h-[2.9375rem] py-[0.3125rem] pr-[0.875rem] pl-[0.6875rem] items-center flex">
            <span className="text-[#999] text-[0.875rem] leading-6 gap-[0.0625rem] flex items-center">
              <img alt="flag" src="/images/philistine.svg" />
              +356
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
              >
                <path
                  d="M8.53125 4.1875L5.25 7.46875L1.96875 4.1875"
                  stroke="#34333E"
                  strokeWidth="0.65625"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>
        )}
      >
        <Dropdown.Item>234</Dropdown.Item>
        <Dropdown.Item>236</Dropdown.Item>
        <Dropdown.Item>2i4</Dropdown.Item>
      </Dropdown>

      <label className="relative h-[2.9375rem] py-[0.3125rem] px-[0.875rem] rounded-lg border border-[#34333e] shadow-sm items-end flex-1 flex ">
        <span className="absolute top-0 left-3.5  text-[#999] text-[0.625rem] leading-5">
          Phone Number
        </span>
        <input type="text" className="text-[1rem] leading-6 w-full" />
      </label>
    </div>
  );
};

export const MyButton = ({ text, color, border, mode, link }) => {

  const visitLink = link? link : "#"
  const router = useRouter()

  return (
    <button onClick={() => router.push(visitLink)}
      className={`items-center justify-center py-[1.12rem] text-[1.125rem] px-[3.125rem] h-[3.375rem] rounded-[0.25rem]  bg-[${color}] flex ${border} `}
    >
      <span className={`tracking-[-0.01875rem] leading-[1.875rem] ${mode}`}>
        {text}
      </span>
    </button>
  );
};

export const FormSection = () => {
  return (
    <section className=" px-[1.56rem] lg:p-0 flex-col lg:gap-[3.1rem] gap-[3.69rem] self-center items-center lg:max-w-[35rem] lg:flex-1 flex">

      <div className="flex-col gap-[2.25rem] items-center hidden lg:flex">

        <div className="text-center">
          <h2 className="text-[#34333e] text-[2.25rem] font-semibold leading-[2.937rem] tracking-[0.0312rem]">
            Provide your phone number
          </h2>
          <p className="text-[#585858] text-[0.9375rem] font-light leading-[1.375rem]">
            Kindly use an active WhatsApp number, and we'll send a
            confirmation message to the provided number.
          </p>
        </div>

        <InputField />
      </div>

      <div className=" lg:hidden flex-col gap-[2.44rem] flex">

        <div className="flex-col justify-start items-center ">
          <div className="justify-center items-center flex mb-[1.88rem]">
            <div className="gap-[0.43rem] items-center flex">
              <div className="bg-[#34333e] w-[2.56rem] h-[2.56rem] rounded-[0.31rem] items-center justify-center flex">
                <img alt="logomark" src="/images/logomark.svg" />
              </div>
              <span className="text-black text-[1rem] font-medium leading-6">
                Name
              </span>
            </div>
          </div>



          <h2 className="text-center text-neutral-700 text-xl font-semibold leading-10 tracking-wide">
            Let’s get Started
          </h2>
          <p className="text-center text-zinc-600 text-base leading-snug">
            Kindly use an active WhatsApp number, and we'll send a  confirmation message to the provided number.
          </p>
        </div>

        <div className="input-wrapper items-center gap-[0.31rem] flex">
          <Dropdown
            dismissOnClick={false}
            renderTrigger={() => (
              <span className=" gap-[0.31rem] h-[2.9375rem] py-[0.3125rem] pr-[0.875rem] pl-[0.6875rem] items-center flex">
                <span className="text-[#999] text-[0.875rem] leading-6 gap-[0.0625rem] flex items-center">
                  <img alt="flag" src="/images/philistine.svg" />
                  +356
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <path
                      d="M8.53125 4.1875L5.25 7.46875L1.96875 4.1875"
                      stroke="#34333E"
                      strokeWidth="0.65625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            )}
          >
            <Dropdown.Item>234</Dropdown.Item>
            <Dropdown.Item>236</Dropdown.Item>
            <Dropdown.Item>2i4</Dropdown.Item>
          </Dropdown>

          <input type="text" placeholder="Phone Number" className="flex-1 h-12 pl-2.5 pr-3.5 py-1 bg-white rounded-lg shadow border border-gray-200 justify-start items-center gap-2 inline-flex text-neutral-400 text-sm font-normal leading-normal" />
        </div>
      </div>

      <div className="buttons flex-col gap-[1.12rem] w-full flex">
        <MyButton text={"Continue"} color={"#34333e"} mode={"light"} link={"/screen2"} />
        <MyButton
          text={"Have an Account? Login"}
          color={"#ffffff"}
          border={" border_color"}
          mode={"dark"}
        />
      </div>
    </section>
  )
}