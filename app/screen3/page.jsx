"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const Screen3 = () => {
    const router = useRouter()

    return (
        <div className='max-w-[24.5rem] px-7 flex-1 mx-auto w-screen min-h-screen pb-[3.31rem]'>
            <div className=" bg-gradient-to-b from-white to-white py-[3.31rem]">

                <div className=" justify-between items-center flex ">
                    <img src="/images/backarrow.svg" alt="back arrow icon" className='cursor-pointer' onClick={() => router.push("/screen2")}/>

                    <div className=" px-[8.74px] py-[7px] bg-neutral-700 rounded-[5px] justify-start items-center gap-1.5 flex">
                        <img src="/images/eye.svg" alt="eye" />
                        <span className="text-white text-[13px] font-normal font-['Inter'] leading-normal">
                            Preview
                        </span>
                    </div>
                </div>

            </div>

            <div className=" flex-col justify-start items-start gap-[273px] inline-flex">

                <div className=" flex-col justify-start items-start gap-[19px] flex">

                    <div className=" py-[15px] bg-stone-50 rounded-[10px] justify-between items-start gap-[9px] inline-flex">
                        <div className="bg-[#34333e] w-[2.56rem] h-[2.56rem] rounded-[0.31rem] items-center justify-center flex shrink-0">
                            <img alt="logomark" src="/images/logomark.svg" />
                        </div>
                        <div className=" flex-col justify-start items-start gap-1 inline-flex">
                            <div className=" flex-col justify-center items-start gap-3 flex">
                                <div className=" text-neutral-700 text-base font-medium font-['Inter'] leading-normal">What do you want to generate</div>
                                <div className=" text-zinc-600 text-sm font-normal font-['Inter'] leading-tight">You can provide a description, share a file with property details</div>
                            </div>
                        </div>
                    </div>

                    <div className="justify-start items-start gap-3 inline-flex">
                        <div className="h-6 pl-[6.21px] pr-[11.79px] pt-[1.86px] pb-[7.14px] bg-lime-50 rounded-sm border border-lime-100 justify-start items-center flex">
                            <div className="text-lime-700 text-[9.93px] font-normal font-['Inter'] leading-[14.90px]">J</div>
                        </div>
                        <div className=" text-neutral-700 text-sm font-normal font-['Inter'] leading-normal">Pictures of Dogs laughing, with a short back story</div>
                    </div>

                    <div className=" py-[15px] bg-stone-50 rounded-[10px] justify-start items-start gap-[9px] flex">
                        <div className="bg-[#34333e] w-[2.56rem] h-[2.56rem] rounded-[0.31rem] items-center justify-center flex">
                            <img alt="logomark" src="/images/logomark.svg" />
                        </div>
                        <div className=" flex-col justify-start items-start gap-1 inline-flex">
                            <div className="h-6 flex-col justify-center items-start gap-3 flex">
                                <div className=" text-neutral-700 text-sm font-normal font-['Inter'] leading-normal">Add Images drag and drop file here</div>
                            </div>
                        </div>
                    </div>

                    <div className="self-stretch justify-start items-start gap-3 inline-flex">
                        <div className="h-6 px-2 py-0.5 bg-lime-50 rounded-sm border border-lime-100 justify-center items-center flex">
                            <div className="text-lime-700 text-[12.90px] font-normal font-['Inter'] leading-tight">J</div>
                        </div>

                        <div className="px-2.5 py-[5px] rounded-[10px] border border-gray-200 justify-start items-center gap-3 flex">
                            <img src="/images/tinyimage.svg" alt="tiny image icon" />

                            <div className=" flex-col justify-center items-start gap-6 inline-flex mr-8">
                                <div className="flex-col justify-center items-start gap-px flex">
                                    <div className="text-slate-600 text-sm font-medium leading-normal">images.png</div>
                                    <div className="text-slate-600 text-xs font-normal leading-[18px]">200KB</div>
                                </div>
                            </div>

                            <img src="/images/success.svg" alt="success icon" />
                        </div>
                    </div>
                </div>

                <div className="w-full h-14 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                    <div className="w-7 h-7 px-0.5 py-0.5 bg-gray-200 rounded-2xl justify-center items-center flex">
                        <img src="/images/add.svg" alt="plus sign" />
                    </div>

                    <input
                        type="text"
                        className="ps-4 flex-1 h-6 input rounded-2xl text-neutral-400 text-lg leading-normal "
                    />

                    <div className="w-8 pl-1.5 pr-2.5 py-2 bg-neutral-700 rounded-md justify-center items-center flex">
                        <img src="/images/send.svg" alt="plus sign" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Screen3