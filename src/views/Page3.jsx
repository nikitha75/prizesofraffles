import React from 'react';
import tribeOrdinals1 from '../assets/images/tribeOrdinals1.png';
import { Button } from '../components/Button';
import { Card } from '../components/Card';


const Page3 = () => {
  // return (
  //   <>
  //     <div>
  //       <div>
  //       Our a KID called BEAST comps are running every 20 minutes! Enter now to get a chance to win one of these digital collectibles at the intersect of art, culture, fashion & music.
  //       </div>
  //     </div>
  //   </>
  // )


  return (
    <>

      {/* <div className='bg-black text-white h-[100vh]'> */}
      <div className='bg-black text-white h-[800px]'>
        <div className='pt-16 max-w-[900px] mx-auto'>
          {/* <div className='flex h-[85vh]  border border-white'> */}
          <div className='flex h-[650px]'>
            <div className='w-[35%]'>
              <img src={tribeOrdinals1} alt="" />
            </div>
            <div className='w-[65%]'>
              <div className='pl-8'>
                <h1 className='font-bold text-2xl'>Tribe Ordinals</h1>
                <div className='mt-1 text-slate-400 text-sm'>#2134</div>
                <div className='mt-6'>
                  <h3 className='text-slate-400 font-semibold'>Description</h3>
                  <div className='mt-2 text-[14px]'>
                    Our a KID called BEAST comps are running every 20 minutes!
                    Enter now to get a chance to win one of these digital collectibles
                    at the intersect of art, culture, fashion & music.
                  </div>
                </div>
                <div className='mt-6 border border-[#8a99ae] rounded-[5px] '>
                  <div className='border-b py-3 px-4 border-[#8a99ae] rounded-t-md'>
                    <h1 className='text-[18px] font-semibold'>Competition Ended</h1>
                    <a href="#" className='text-[#c224e8] text-xs'>10 minuted ago /</a>
                  </div>
                  <div>
                    <div className='px-6 py-6 grid grid-cols-7 items-center gap-x-4'>
                      <div className='text-[14px]'>Winner</div>
                      <div className='col-span-3'>
                        <div className='flex gap-x-3'>
                          <div className=''>
                            <img src={tribeOrdinals1} className='w-[30px] rounded-full' alt="" />
                          </div>
                          <div className='text-[#c224e8]'>James Green</div>
                        </div>
                      </div>
                      <div className='col-span-3'>
                        <Button width="180px" height="42px">
                          Browse Competitions
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>





      </div>
    </>
  )
}

export default Page3