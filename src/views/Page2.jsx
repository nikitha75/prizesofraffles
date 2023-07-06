import React from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import tribeOrdinals1 from '../assets/images/tribeOrdinals1.png';
import banana from '../assets/images/banana.png';
import watch from '../assets/images/watch.png';
import redirectIcon from '../assets/images/redirectIcon.png';



const Page2 = () => {
  return (
    <>

      <div className='bg-black text-white h-[800px]'>
        <div className='pt-16 max-w-[900px] mx-auto'>
          <div className='flex h-[650px]'>
            <div className='w-[35%]'>
              <div className='relative'>
                <img src={tribeOrdinals1} alt="" />
                <div className='absolute bottom-3 right-2 bg-[#ffc700] text-[10px] text-black font-bold px-3 py-1 rounded-full'>
                  2 Days Left
                </div>
              </div>
              <div>
                <table className='mt-6 border border-[#8a99ae] rounded-lg w-full overflow-auto'>
                  <thead className='border-b  font-semibold text-[14px]'>
                    <tr className=''>
                      <td className='text-[#c224e8] p-4  w-[30%]'>
                        Activity
                      </td>
                      <td className='p-4'>
                        Participants (13)
                      </td>
                    </tr>
                  </thead>
                  <tbody className=''>
                    <tr className=' border-b  border-[#8a99ae] '>
                      <td className=' w-[60%] py-3 px-4 '>
                        <div className='flex gap-x-3  '>
                          <div>
                            <img src={tribeOrdinals1} className='w-[30px] rounded-full' alt="" />
                          </div>
                          <div className='flex flex-col '>
                            <div>
                              James
                            </div>
                            <div className='text-[#c224e8] text-[12px]'>
                              50 Entries
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='py-2 px-4 text-[12px]'>
                        <div className=''>
                          7 minutes ago 
                          <img src={redirectIcon} className='w-[10px]' alt="" />
                        </div>
                      </td>
                    </tr>
                    <tr className=' border-b  border-[#8a99ae] '>
                      <td className=' w-[60%] py-3 px-4'>
                        <div className='flex gap-x-3'>
                          <div>
                            <img src={tribeOrdinals1} className='w-[30px] rounded-full' alt="" />
                          </div>
                          <div className='flex flex-col '>
                            <div>
                              John
                            </div>
                            <div className='text-[#c224e8] text-[12px]'>
                              10 Entries
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='py-2 px-4 text-[12px] '>
                        <div className=' '>
                          10 minutes ago 
                          <img src={redirectIcon} className='w-[10px]' alt="" />
                        </div>
                      </td>
                    </tr>
                    <tr className=' border-b  border-[#8a99ae] '>
                      <td className=' w-[60%] py-3 px-4 '>
                        <div className='flex gap-x-3  '>
                          <div>
                            <img src={tribeOrdinals1} className='w-[30px] rounded-full' alt="" />
                          </div>
                          <div className='flex flex-col '>
                            <div>
                              Anna
                            </div>
                            <div className='text-[#c224e8] text-[12px]'>
                              10 Entries
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='py-2 px-4 text-[12px] '>
                        <div className=' '>
                          20 minutes ago 
                          <img src={redirectIcon} className='w-[10px]' alt="" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='w-[65%]'>
              <div className='pl-8'>
                <h1 className='font-bold text-2xl'>Tribe Ordinals</h1>
                <div className='mt-1 text-slate-400 text-sm'>#2134</div>
                <div className='my-4 text-slate-400 text-xs flex gap-x-2'>
                  <img src={watch} className='w-[15px]' alt="" /> 
                  <div>Ends in 02:46:17</div>
                </div>
                <div className='mt-2'>
                  <h3 className='text-slate-400 font-semibold'>Description</h3>
                  <div className='mt-2 text-[14px]'>
                    Our a KID called BEAST comps are running every 20 minutes!
                    Enter now to get a chance to win one of these digital collectibles
                    at the intersect of art, culture, fashion & music.
                  </div>
                </div>
                <div className='mt-6 border border-[#8a99ae] rounded-[5px] '>
                  <div className='border-b py-3 px-4 bg-[#1b1921] border-[#8a99ae] rounded-t-md font-semibold text-[16px]'>
                    <h1>Enter Competition</h1>
                  </div>
                  <div>
                    <div className='px-6 py-6 grid grid-cols-3 gap-x-4'>
                      <Card width="160px" height="150px" backgroundColor="#1b1921">
                        <div className='flex flex-col gap-y-4 items-center'>
                          <div className='font-bold text-xl'>1</div>
                          <div>Entry</div>
                          <Button width="140px" height="42px">
                            <div className='flex items-center justify-center gap-x-1'>
                              <div>
                                <img src={banana} className='w-[20px]' />
                              </div>
                              <div>10 Points</div>
                            </div>
                          </Button>
                        </div>
                      </Card>
                      <Card width="160px" height="150px" backgroundColor="#1b1921">
                        <div className='flex flex-col gap-y-4 items-center'>
                          <div className='font-bold text-xl'>50</div>
                          <div>Entries</div>
                          <Button width="140px" height="42px">
                            <div className='flex items-center justify-center gap-x-1'>
                              <div>
                                <img src={banana} className='w-[20px]' />
                              </div>
                              <div>480 Points</div>
                            </div>
                          </Button>
                        </div>
                      </Card>
                      <Card width="160px" height="150px" backgroundColor="#1b1921">
                        <div className='flex flex-col gap-y-4 items-center'>
                          <div className='font-bold text-xl'>210</div>
                          <div>Entries</div>
                          <Button width="140px" height="42px">
                            <div className='flex items-center justify-center gap-x-1'>
                              <div>
                                <img src={banana} className='w-[20px]' />
                              </div>
                              <div>2000 Points</div>
                            </div>
                          </Button>
                        </div>
                      </Card>
                    </div>
                    <div className='px-6 pb-6'>
                      <Card width="100%" height="170px" backgroundColor="#1b1921">
                        <div className='flex flex-col gap-y-4 items-center'>
                          <div className='font-bold text-2xl'>1200</div>
                          <div>Entries</div>
                          <Button width="300px" height="42px">
                            <div className='flex items-center justify-center gap-x-1'>
                              <div>
                                <img src={banana} className='w-[20px]' />
                              </div>
                              <div>10000 Points</div>
                            </div>
                          </Button>
                        </div>
                      </Card>
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


export default Page2;