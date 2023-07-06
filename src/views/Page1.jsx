import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import tribeOrdinals1 from '../assets/images/tribeOrdinals1.png';
import tribeOrdinals2 from '../assets/images/tribeOrdinals2.png';
import tribeOrdinals3 from '../assets/images/tribeOrdinals3.png';
import tribeOrdinals4 from '../assets/images/tribeOrdinals4.png';



const Page1 = () => {
    return (
        <>
            <div className='bg-black text-white h-[100vh]'>
                <div className='pt-16 max-w-[900px] mx-auto'>
                    <div className='text-center'>
                        <h2 className='font-bold text-[18px]'>Upcoming Raffles</h2>
                        <div className='mt-6 text-slate-400'>
                            <div>
                                Use the NANA points generated by staking your
                                TRIBE apes to enter our raffles.
                            </div>
                            <div className=''>
                                There are some awesome prizes to be won!
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 grid grid-cols-4 gap-x-6'>
                        <Card width="210px" height="340px">
                            <div className='relative'>
                                <img src={tribeOrdinals1} alt="" />
                                <div className='absolute bottom-2  flex gap-x-11 text-[12px] px-2'>
                                    <div className='bg-[#ffffff] text-slate-400 font-semibold py-1 px-2 rounded-full'>
                                        #2022
                                    </div>
                                    <div className='bg-[#ffc700] text-black font-bold px-2 py-1 rounded-full'>
                                        2 Days Left
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='py-2'>
                                    <h4>Tribe Ordinals</h4>
                                    <p className='mt-1 text-slate-400 text-xs'>#2134</p>
                                </div>
                                <Button width="190px" height="42px">
                                    Enter Now
                                </Button>
                                <div className='py-3 text-slate-400 text-[9px] font-semibold text-center'>
                                    23 ENTRIES
                                </div>
                            </div>
                        </Card>
                        <Card width="210px" height="340px">
                            <div className='relative'>
                                <img src={tribeOrdinals2} alt="" />
                                <div className='absolute bottom-2  flex gap-x-11 text-[12px] px-2'>
                                    <div className='bg-[#ffffff] text-slate-400 font-semibold py-1 px-2 rounded-full'>
                                        #2022
                                    </div>
                                    <div className='bg-[#ffc700] text-black font-bold px-2 py-1 rounded-full'>
                                        2 Days Left
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='py-2'>
                                    <h4>Bitcoin Bulls</h4>
                                    <p className='mt-1 text-slate-400 text-xs'>#2134</p>
                                </div>
                                <Button width="190px" height="42px">
                                    Enter Now
                                </Button>
                                <div className='py-3 text-slate-400 text-[9px] font-semibold text-center'>
                                    12 ENTRIES
                                </div>
                            </div>
                        </Card>
                        <Card width="210px" height="340px">
                            <div className='relative'>
                                <img src={tribeOrdinals3} alt="" />
                                <div className='absolute bottom-2  flex gap-x-11 text-[12px] px-2'>
                                    <div className='bg-[#ffffff] text-slate-400 font-semibold py-1 px-2 rounded-full'>
                                        #2022
                                    </div>
                                    <div className='bg-[#ffc700] text-black font-bold px-2 py-1 rounded-full'>
                                        2 Days Left
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='py-2'>
                                    <h4>Tribe Ordinals</h4>
                                    <p className='mt-1 text-slate-400 text-xs'>#2134</p>
                                </div>
                                <Button width="190px" height="42px">
                                    Enter Now
                                </Button>
                                <div className='py-3 text-slate-400 text-[9px] font-semibold text-center'>
                                    2 ENTRIES
                                </div>
                            </div>
                        </Card>
                        <Card width="210px" height="340px">
                            <div className='relative'>
                                <img src={tribeOrdinals4} alt="" />
                                <div className='absolute bottom-2  flex gap-x-11 text-[12px] px-2'>
                                    <div className='bg-[#ffffff] text-slate-400 font-semibold py-1 px-2 rounded-full'>
                                        #2022
                                    </div>
                                    <div className='bg-[#ffc700] text-black font-bold px-2 py-1 rounded-full'>
                                        2 Days Left
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='py-2'>
                                    <h4>Tribe Ordinals</h4>
                                    <p className='mt-1 text-slate-400 text-xs'>#2134</p>
                                </div>
                                <Button width="190px" height="42px">
                                    Enter Now
                                </Button>
                                <div className='py-3 text-slate-400 text-[9px] font-semibold text-center'>
                                    1 ENTRY
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Page1;