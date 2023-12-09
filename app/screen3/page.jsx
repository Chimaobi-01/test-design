import React from 'react'

const Screen3 = () => {
    return (
        <div>
            <div className="max-w-[390px] h-[122px] bg-gradient-to-b from-white to-white">

                <div className="max-w-[325px] h-[33px] justify-start items-center gap-[200px] inline-flex">
                    <img src="/images/backarrow.svg" alt="back arrow icon" />

                    <div className="max-w-[101px] h-[33px] px-[8.74px] py-[7px] bg-neutral-700 rounded-[5px] justify-start items-center gap-1.5 flex">
                        <img src="/images/eye.svg" alt="" />
                        <span className="text-white text-[13px] font-normal font-['Inter'] leading-normal">
                            Preview
                        </span>
                    </div>
                </div>

            </div>

            <div className="max-w-[334px] h-[665.67px] flex-col justify-start items-start gap-[273px] inline-flex">

                <div className="h-[342px] flex-col justify-start items-start gap-[19px] flex">

                    <div className="max-w-[334px] h-[125px] p-[15px] bg-stone-50 rounded-[10px] justify-start items-start gap-[9px] inline-flex">
                        <div className="bg-[#34333e] w-[2.56rem] h-[2.56rem] rounded-[0.31rem] items-center justify-center flex">
                            <img alt="logomark" src="/images/logomark.svg" />
                        </div>
                        <div className="max-w-[278px] h-24 flex-col justify-start items-start gap-1 inline-flex">
                            <div className="h-[71px] flex-col justify-center items-start gap-3 flex">
                                <div className="max-w-[266px] h-[19px] text-neutral-700 text-base font-medium font-['Inter'] leading-normal">What do you want to generate</div>
                                <div className="max-w-[266px] text-zinc-600 text-sm font-normal font-['Inter'] leading-tight">You can provide a description, share a file with property details</div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[334px] pl-[15px] justify-start items-start gap-3 inline-flex">
                        <div className="h-6 pl-[6.21px] pr-[11.79px] pt-[1.86px] pb-[7.14px] bg-lime-50 rounded-sm border border-lime-100 justify-start items-center flex">
                            <div className="text-lime-700 text-[9.93px] font-normal font-['Inter'] leading-[14.90px]">J</div>
                        </div>
                        <div className="max-w-[273px] text-neutral-700 text-sm font-normal font-['Inter'] leading-normal">Pictures of Dogs laughing, with a short back story</div>
                    </div>

                    <div className="max-w-[334px] h-[59px] p-[15px] bg-stone-50 rounded-[10px] justify-start items-start gap-[9px] inline-flex">
                        <div className="bg-[#34333e] w-[2.56rem] h-[2.56rem] rounded-[0.31rem] items-center justify-center flex">
                            <img alt="logomark" src="/images/logomark.svg" />
                        </div>
                        <div className="max-w-[278px] h-[33px] flex-col justify-start items-start gap-1 inline-flex">
                            <div className="h-6 flex-col justify-center items-start gap-3 flex">
                                <div className="max-w-[266px] text-neutral-700 text-sm font-normal font-['Inter'] leading-normal">Add Images drag and drop file here</div>
                            </div>
                        </div>
                    </div>

                    <div className="self-stretch pl-[19px] justify-start items-start gap-3 inline-flex">
                        <div className="h-6 px-2 py-0.5 bg-lime-50 rounded-sm border border-lime-100 justify-center items-center flex">
                            <div className="text-lime-700 text-[12.90px] font-normal font-['Inter'] leading-tight">J</div>
                        </div>

                        <div className="px-2.5 py-[5px] rounded-[10px] border border-gray-200 justify-start items-center gap-3 flex">
                            <img src="/images/tinyimage.svg" alt="tiny image icon" />

                            <div className="max-w-[114px] flex-col justify-center items-start gap-6 inline-flex">
                                <div className="flex-col justify-center items-start gap-px flex">
                                    <div className="text-slate-600 text-sm font-medium leading-normal">images.png</div>
                                    <div className="text-slate-600 text-xs font-normal leading-[18px]">200KB</div>
                                </div>
                            </div>
                            
                            <img src="/images/success.svg" alt="success icon" />
                        </div>
                    </div>
                </div>

                <div className="self-stretch h-[49.97px] px-3.5 py-2.5 bg-white rounded-[10px] shadow border border-gray-300 justify-start items-center gap-2 inline-flex">

                    <div className="max-w-[29px] h-[29px] pl-[2.87px] pr-[2.13px] pt-[2.83px] pb-[2.17px] bg-gray-200 rounded-[20px] justify-center items-center flex">
                        <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                            <div className="w-6 h-6 justify-center items-center inline-flex">
                                <div className="w-6 h-6 relative">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                        <div className="grow shrink basis-0 text-neutral-400 text-sm font-normal font-['Inter'] leading-normal">|</div>
                    </div>
                    
                    <div className="max-w-[33.05px] pl-[6.86px] pr-[9.10px] pt-[7.49px] pb-[8.47px] bg-neutral-700 rounded-md justify-center items-center flex">
                        <div className="max-w-[17.10px] self-stretch justify-center items-center inline-flex">
                            <div className="max-w-[17.10px] h-[17.10px] justify-center items-center inline-flex">
                                <div className="max-w-[17.10px] h-[17.10px] relative">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Screen3