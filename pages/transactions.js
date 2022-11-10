import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

import GrayEdit from '../assets/img/gray-edit-btn.svg'
import GrayCopy from '../assets/img/gray-copy-btn.svg'

const Transactions = () => {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <>
    <div className='max-w-[1203px] w-full mx-auto px-5 pt-10'>        
      <div className="">
        <h2 className='xl:text-[40px] text-[32px] lg:leading-6 leading-snug font-bold text-primaryDarkBlue inline-block'>Transactions</h2>
      </div>       
        <div className='border-gray300 md:mt-9 mt-5 border rounded-[10px] my-4 overflow-hidden'>
          <div className='w-full text-left'>
            {/*=========== tab start======== */}
            <div className="flex flex-wrap ">
                <div className="w-full">
                  <div
                    className=" mb-0 list-nonepb-4 w-full border-b border-white100"
                    role="tablist"
                  >
                    <div className="w-full flex flex-row justify-between items-center">
                      <div className="flex">
                        <div className="flex-auto text-center max-w-[136px] w-full"> 
                          <a 
                            className={
                              "md:text-lg text-base font-semibold md:px-10 px-5 py-[15px] block leading-normal text-gray900 " +
                              (openTab === 1
                                ? "text-primaryBlue bg-blueGray-600 border-b-4 border-b-primaryBlue"
                                : "text-blueGray-600 bg-white hover:text-primaryBlue")
                            }
                            onClick={e => {
                              e.preventDefault();
                              setOpenTab(1);
                            }}
                            data-toggle="tab"
                            href="#link1"
                            role="tablist"
                          >
                            Queue
                          </a>
                        </div>
                        <div className="flex-auto text-center max-w-[136px] w-full">
                          <a 
                            className={
                              "md:text-lg text-base font-semibold md:px-10 px-5 py-[15px] block leading-normal text-gray900" +
                              (openTab === 2
                                ? "text-primaryBlue bg-blueGray-600 border-b-4 border-b-primaryBlue"
                                : "text-blueGray-600 bg-white hover:text-primaryBlue")
                            }
                            onClick={e => {
                              e.preventDefault();
                              setOpenTab(2);
                            }}
                            data-toggle="tab"
                            href="#link2"
                            role="tablist"
                          >
                            History
                          </a>
                        </div>
                      </div>
                      <div className="mr-5">
                        <select className='bg-white100 text-gray900 py-[8px] px-[22px] w-[80px] text-[10px] cursor-pointer rounded focus:outline-none focus:ring-0 filter-dropdown' name="" id="">
                          <option value="">Filter</option>
                          <option value="">Queue</option>
                          <option value="">History</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full rounded  overflow-x-auto ">
                    <div className="px-5 pt-3 pb-5 flex-auto transactions-box">
                      <div className="tab-content tab-space">
                        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                          <div className='inline-flex w-full border-b border-white100 justify-between'> 
                        <div className='w-[121px]'>
                          <h3 className='pb-2 text-[10px] text-gray900 opacity-40'>Time</h3>
                        </div>
                        <div className='w-[65px]'>
                          <h3 className=' pb-2 text-[10px] text-gray900 opacity-40'>Type</h3>
                        </div>
                        <div className='w-[100px]'>
                          <h3 className=' pb-2 text-[10px] text-gray900 opacity-40'>Asset</h3>
                        </div>
                        <div className='w-[100px]'>
                          <h3 className='pb-2 text-[10px] text-gray900 opacity-40'>Amount</h3>
                        </div>
                        <div className='w-[190px]'>
                          <h3 className='pb-2 text-[10px] text-gray900 opacity-40'>Destination</h3>
                        </div>
                        <div className='w-[190px]'>
                          <h3 className='pb-2 text-[10px] text-gray900 opacity-40'>TxID</h3>
                        </div>
                        <div className='w-[189px]'>
                          <h3 className='pb-2 text-[10px] text-gray900 opacity-40'>Status</h3>
                        </div>
                          </div>
                          <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
                            <div className=''><p className='text-gray900 text-sm'>21 Mar 2021 14:35</p></div>
                            <div className='w-[65px]'><p className='text-gray900 text-sm font-light'>Deposit</p></div>
                            <div className='w-[100px]'><p className='text-gray900 text-sm font-light'>SLIME</p></div>
                            <div className='w-[100px]'><p className='text-gray900 text-sm font-light'>1000</p></div>  
                            <div className='w-[191px]'>
                              <div className="flex">
                                <p className='text-gray900 text-sm font-light mr-8 data-table-transition'>0x65A12C313fE8…</p>
                                <span className='mr-2'>
                                  <Link href={'#'}>
                                    <a><Image src={GrayEdit} alt="" /></a>
                                  </Link>
                                </span>
                                <Link href={'#'}>
                                  <a><Image src={GrayCopy} alt="" /></a>
                                </Link>                                
                              </div>
                              </div>  
                            <div className='w-[191px]'>
                            <div className="flex">
                                <p className='text-gray900 text-sm font-light mr-8 data-table-transition'> 0x65A12C313fE8…</p>
                                <span className='mr-2'>
                                  <Link href={'#'}>
                                    <a><Image src={GrayEdit} alt="" /></a>
                                  </Link>
                                </span>
                                <Link href={'#'}>
                                  <a><Image src={GrayCopy} alt="" /></a>
                                </Link>
                              </div>
                              </div>  
                            <div>
                              <div className="flex items-center">
                                <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 px-[10px] w-[80px] justify-center rounded text-white text-[10px] border-transparent border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                                 <span className=''>Approve</span>
                                </button>
                                <button className='wallet-btn flex items-center border-gray900 border py-2 px-[10px] w-[80px] justify-center rounded text-[10px] border-transparent hover:border-gray900 hover:text-white hover:bg-gray900 duration-300'>
                                  <span className=''>Decline</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
                            <div className=''><p className='text-gray900 text-sm'>21 Mar 2021 14:35</p></div>
                            <div className='w-[65px]'><p className='text-gray900 text-sm font-light'>Deposit</p></div>
                            <div className='w-[100px]'><p className='text-gray900 text-sm font-light'>PRIASE</p></div>
                            <div className='w-[100px]'><p className='text-gray900 text-sm font-light'>260</p></div>  
                            <div className='w-[191px]'>
                              <div className="flex">
                                <p className='text-gray900 text-sm font-light mr-8 data-table-transition'> 0x7915a6eb0403…</p>
                                <span className='mr-2'>
                                  <Link href={'#'}>
                                    <a><Image src={GrayEdit} alt="" /></a>
                                  </Link>
                                </span>
                                <Link href={'#'}>
                                  <a><Image src={GrayCopy} alt="" /></a>
                                </Link>
                              </div>
                              </div>  
                            <div className='w-[191px]'>
                            <div className="flex">
                                <p className='text-gray900 text-sm font-light mr-8 data-table-transition'>0x566714ec977a...</p>
                                <span className='mr-2'>
                                  <Link href={'#'}>
                                    <a><Image src={GrayEdit} alt="" /></a>
                                  </Link>
                                </span>
                                <Link href={'#'}>
                                  <a><Image src={GrayCopy} alt="" /></a>
                                </Link>
                              </div>
                              </div>  
                            <div>
                            <div className="flex items-center">
                                <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 px-[10px] w-[80px] justify-center rounded text-white text-[10px] border-transparent border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                                 <span className=''>Approve</span>
                                </button>
                                <button className='wallet-btn flex items-center border-gray900 border py-2 px-[10px] w-[80px] justify-center rounded text-[10px] border-transparent hover:border-gray900 hover:text-white hover:bg-gray900 duration-300'>
                                  <span className=''>Decline</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
                            <div className=''><p className='text-gray900 text-sm'>21 Mar 2021 14:35</p></div>
                            <div className='w-[65px]'><p className='text-gray900 text-sm font-light'>Withdraw</p></div>
                            <div className='w-[100px]'><p className='text-gray900 text-sm font-light'>SAND</p></div>
                            <div className='w-[100px]'><p className='text-gray900 text-sm font-light'>60,000</p></div>  
                            <div className='w-[191px]'>
                              <div className="flex">
                                <p className='text-gray900 text-sm font-light mr-8 data-table-transition'> 0x86c4A74e1280...</p>
                                <span className='mr-2'>
                                  <Link href={'#'}>
                                    <a><Image src={GrayEdit} alt="" /></a>
                                  </Link>
                                </span>
                                <Link href={'#'}>
                                  <a><Image src={GrayCopy} alt="" /></a>
                                </Link>
                              </div>
                              </div>  
                            <div className='w-[191px]'>
                            <div className="flex">
                                <p className='text-gray900 text-sm font-light mr-8 data-table-transition'>0xad2aec1eff22d...</p>
                                <span className='mr-2'>
                                  <Link href={'#'}>
                                    <a><Image src={GrayEdit} alt="" /></a>
                                  </Link>
                                </span>
                                <Link href={'#'}>
                                  <a><Image src={GrayCopy} alt="" /></a>
                                </Link>
                              </div>
                              </div>  
                            <div>
                            <div className="flex items-center">
                                <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 px-[10px] w-[80px] justify-center rounded text-white text-[10px] border-transparent border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                                 <span className=''>Approve</span>
                                </button>
                                <button className='wallet-btn flex items-center border-gray900 border py-2 px-[10px] w-[80px] justify-center rounded text-[10px] border-transparent hover:border-gray900 hover:text-white hover:bg-gray900 duration-300'>
                                  <span className=''>Decline</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
                            <div className=''><p className='text-gray900 text-sm'>21 Mar 2021 14:35</p></div>
                            <div className='w-[65px]'><p className='text-gray900 text-sm font-light'>Deposit</p></div>
                            <div className='w-[100px]'><p className='text-gray900 text-sm font-light'>SLIME</p></div>
                            <div className='w-[100px]'><p className='text-gray900 text-sm font-light'>2000</p></div>  
                            <div className='w-[191px]'>
                              <div className="flex">
                                <p className='text-gray900 text-sm font-light mr-8 data-table-transition'> 0xCC5596Fb286...</p>
                                <span className='mr-2'>
                                  <Link href={'#'}>
                                    <a><Image src={GrayEdit} alt="" /></a>
                                  </Link>
                                </span>
                                <Link href={'#'}>
                                  <a><Image src={GrayCopy} alt="" /></a>
                                </Link>
                              </div>
                              </div>  
                            <div className='w-[191px]'>
                            <div className="flex">
                                <p className='text-gray900 text-sm font-light mr-8 data-table-transition'> 0xc0ab080393f9...</p>
                                <span className='mr-2'>
                                  <Link href={'#'}>
                                    <a><Image src={GrayEdit} alt="" /></a>
                                  </Link>
                                </span>
                                <Link href={'#'}>
                                  <a><Image src={GrayCopy} alt="" /></a>
                                </Link>
                              </div>
                              </div>  
                            <div>
                            <div className="flex items-center">
                                <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 px-[10px] w-[80px] justify-center rounded text-white text-[10px] border-transparent border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                                 <span className=''>Approve</span>
                                </button>
                                <button className='wallet-btn flex items-center border-gray900 border py-2 px-[10px] w-[80px] justify-center rounded text-[10px] border-transparent hover:border-gray900 hover:text-white hover:bg-gray900 duration-300'>
                                  <span className=''>Decline</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
                            <div className=''><p className='text-gray900 text-sm'>21 Mar 2021 14:35</p></div>
                            <div className='w-[65px]'><p className='text-gray900 text-sm font-light'>Withdraw</p></div>
                            <div className='w-[100px]'><p className='text-gray900 text-sm font-light'>AXS</p></div>
                            <div className='w-[100px]'><p className='text-gray900 text-sm font-light'>40.58</p></div>  
                            <div className='w-[191px]'>
                              <div className="flex">
                                <p className='text-gray900 text-sm font-light mr-8 data-table-transition'> 0xEA674fdDe714f...</p>
                                <span className='mr-2'>
                                  <Link href={'#'}>
                                    <a><Image src={GrayEdit} alt="" /></a>
                                  </Link>
                                </span>
                                <Link href={'#'}>
                                  <a><Image src={GrayCopy} alt="" /></a>
                                </Link>
                              </div>
                              </div>  
                            <div className='w-[191px]'>
                            <div className="flex">
                                <p className='text-gray900 text-sm font-light mr-8 data-table-transition'> 0x74231b6118a3...</p>
                                <span className='mr-2'>
                                  <Link href={'#'}>
                                    <a><Image src={GrayEdit} alt="" /></a>
                                  </Link>
                                </span>
                                <Link href={'#'}>
                                  <a><Image src={GrayCopy} alt="" /></a>
                                </Link>
                              </div>
                              </div>  
                            <div>
                           <div className="flex items-center">
                                <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 px-[10px] w-[80px] justify-center rounded text-white text-[10px] border-transparent border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                                 <span className=''>Approve</span>
                                </button>
                                <button className='wallet-btn flex items-center border-gray900 border py-2 px-[10px] w-[80px] justify-center rounded text-[10px] border-transparent hover:border-gray900 hover:text-white hover:bg-gray900 duration-300'>
                                  <span className=''>Decline</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
                            <div className=''><p className='text-gray900 text-sm'>21 Mar 2021 14:35</p></div>
                            <div className='w-[65px]'><p className='text-gray900 text-sm font-light'>Deposit</p></div>
                            <div className='w-[100px]'><p className='text-gray900 text-sm font-light'>FLOW</p></div>
                            <div className='w-[100px]'><p className='text-gray900 text-sm font-light'>5290</p></div>  
                            <div className='w-[191px]'>
                              <div className="flex">
                                <p className='text-gray900 text-sm font-light mr-8 data-table-transition'> 0x6d2e03b7EfFE…</p>
                                <span className='mr-2'>
                                  <Link href={'#'}>
                                    <a><Image src={GrayEdit} alt="" /></a>
                                  </Link>
                                </span>
                                <Link href={'#'}>
                                  <a><Image src={GrayCopy} alt="" /></a>
                                </Link>
                              </div>
                              </div>  
                            <div className='w-[191px]'>
                            <div className="flex">
                                <p className='text-gray900 text-sm font-light mr-8 data-table-transition'> 0x93f6446230c1...</p>
                                <span className='mr-2'>
                                  <Link href={'#'}>
                                    <a><Image src={GrayEdit} alt="" /></a>
                                  </Link>
                                </span>
                                <Link href={'#'}>
                                  <a><Image src={GrayCopy} alt="" /></a>
                                </Link>
                              </div>
                              </div>  
                            <div>
                            <div className="flex items-center">
                                <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 px-[10px] w-[80px] justify-center rounded text-white text-[10px] border-transparent border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                                 <span className=''>Approve</span>
                                </button>
                                <button className='wallet-btn flex items-center border-gray900 border py-2 px-[10px] w-[80px] justify-center rounded text-[10px] border-transparent hover:border-gray900 hover:text-white hover:bg-gray900 duration-300'>
                                  <span className=''>Decline</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className='inline-flex w-full justify-between items-center  md:pt-[25px] pt-5'> 
                            <div className=''><p className='text-gray900 text-sm'>21 Mar 2021 14:35</p></div>
                            <div className='w-[65px]'><p className='text-gray900 text-sm font-light'>Deposit</p></div>
                            <div className='w-[100px]'><p className='text-gray900 text-sm font-light'>APE</p></div>
                            <div className='w-[100px]'><p className='text-gray900 text-sm font-light'>2.1496</p></div>  
                            <div className='w-[191px]'>
                              <div className="flex">
                                <p className='text-gray900 text-sm font-light mr-8 data-table-transition'> 0xaaBAd1670BB8…</p>
                                <span className='mr-2'>
                                  <Link href={'#'}>
                                    <a><Image src={GrayEdit} alt="" /></a>
                                  </Link>
                                </span>
                                <Link href={'#'}>
                                  <a><Image src={GrayCopy} alt="" /></a>
                                </Link>
                              </div>
                              </div>  
                            <div className='w-[191px]'>
                            <div className="flex">
                                <p className='text-gray900 text-sm font-light mr-8 data-table-transition'> 0x7c91f1cbefc93...</p>
                                <span className='mr-2'>
                                  <Link href={'#'}>
                                    <a><Image src={GrayEdit} alt="" /></a>
                                  </Link>
                                </span>
                                <Link href={'#'}>
                                  <a><Image src={GrayCopy} alt="" /></a>
                                </Link>
                              </div>
                              </div>  
                            <div>
                            <div className="flex items-center">
                                <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 px-[10px] w-[80px] justify-center rounded text-white text-[10px] border-transparent border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                                 <span className=''>Approve</span>
                                </button>
                                <button className='wallet-btn flex items-center border-gray900 border py-2 px-[10px] w-[80px] justify-center rounded text-[10px] border-transparent hover:border-gray900 hover:text-white hover:bg-gray900 duration-300'>
                                  <span className=''>Decline</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                        <div className='inline-flex w-full border-b border-white100 justify-between'> 
                        <div className='w-[121px]'>
                          <h3 className='pb-2 text-[10px] text-gray900 opacity-40'>Time</h3>
                        </div>
                        <div className='w-[65px]'>
                          <h3 className='pb-2 text-[10px] text-gray900 opacity-40'>Type</h3>
                        </div>
                        <div className='w-[100px]'>
                          <h3 className='pb-2 text-[10px] text-gray900 opacity-40'>Asset</h3>
                        </div>
                        <div className='w-[100px]'>
                          <h3 className='pb-2 text-[10px] text-gray900 opacity-40'>Amount</h3>
                        </div>
                        <div className='w-[190px]'>
                          <h3 className='pb-2 text-[10px] text-gray900 opacity-40'>Destination</h3>
                        </div>
                        <div className='w-[190px]'>
                          <h3 className='pb-2 text-[10px] text-gray900 opacity-40'>TxID</h3>
                        </div>
                        <div className='w-[189px]'>
                          <h3 className='pb-2 text-[10px] text-gray900 opacity-40'>Status</h3>
                        </div>
                          </div>
                          <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
                            <div className=''><p className='text-gray900 text-sm'>21 Mar 2021 14:35</p></div>
                            <div className='w-[65px]'><p className='text-gray900 text-sm font-light'>Deposit</p></div>
                            <div className='w-[100px]'><p className='text-gray900 text-sm font-light'>SLIME</p></div>
                            <div className='w-[100px]'><p className='text-gray900 text-sm font-light'>1000</p></div>  
                            <div className='w-[191px]'>
                              <div className="flex">
                                <p className='text-gray900 text-sm font-light mr-8 data-table-transition'> 0x65A12C313fE8…</p>
                                <span className='mr-2'>
                                  <Link href={'#'}>
                                    <a><Image src={GrayEdit} alt="" /></a>
                                  </Link>
                                </span>
                                <Link href={'#'}>
                                  <a><Image src={GrayCopy} alt="" /></a>
                                </Link>
                              </div>
                              </div>  
                            <div className='w-[191px]'>
                            <div className="flex">
                                <p className='text-gray900 text-sm font-light mr-8 data-table-transition'> 0x65A12C313fE8…</p>
                                <span className='mr-2'>
                                  <Link href={'#'}>
                                    <a><Image src={GrayEdit} alt="" /></a>
                                  </Link>
                                </span>
                                <Link href={'#'}>
                                  <a><Image src={GrayCopy} alt="" /></a>
                                </Link>
                              </div>
                              </div>  
                            <div>
                            <div className="flex items-center">
                                <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 px-[10px] w-[80px] justify-center rounded text-white text-[10px] border-transparent border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                                 <span className=''>Approve</span>
                                </button>
                                <button className='wallet-btn flex items-center border-gray900 border py-2 px-[10px] w-[80px] justify-center rounded text-[10px] border-transparent hover:border-gray900 hover:text-white hover:bg-gray900 duration-300'>
                                  <span className=''>Decline</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
                            <div className=''><p className='text-gray900 text-sm'>21 Mar 2021 14:35</p></div>
                            <div className='w-[65px]'><p className='text-gray900 text-sm font-light'>Deposit</p></div>
                            <div className='w-[100px]'><p className='text-gray900 text-sm font-light'>PRIASE</p></div>
                            <div className='w-[100px]'><p className='text-gray900 text-sm font-light'>260</p></div>  
                            <div className='w-[191px]'>
                              <div className="flex">
                                <p className='text-gray900 text-sm font-light mr-8 data-table-transition'> 0x7915a6eb0403…</p>
                                <span className='mr-2'>
                                  <Link href={'#'}>
                                    <a><Image src={GrayEdit} alt="" /></a>
                                  </Link>
                                </span>
                                <Link href={'#'}>
                                  <a><Image src={GrayCopy} alt="" /></a>
                                </Link>
                              </div>
                              </div>  
                            <div className='w-[191px]'>
                            <div className="flex">
                                <p className='text-gray900 text-sm font-light mr-8 data-table-transition'>0x566714ec977a...</p>
                                <span className='mr-2'>
                                  <Link href={'#'}>
                                    <a><Image src={GrayEdit} alt="" /></a>
                                  </Link>
                                </span>
                                <Link href={'#'}>
                                  <a><Image src={GrayCopy} alt="" /></a>
                                </Link>
                              </div>
                              </div>  
                            <div>
                            <div className="flex items-center">
                                <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 px-[10px] w-[80px] justify-center rounded text-white text-[10px] border-transparent border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                                 <span className=''>Approve</span>
                                </button>
                                <button className='wallet-btn flex items-center border-gray900 border py-2 px-[10px] w-[80px] justify-center rounded text-[10px] border-transparent hover:border-gray900 hover:text-white hover:bg-gray900 duration-300'>
                                  <span className=''>Decline</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
                            <div className=''><p className='text-gray900 text-sm'>21 Mar 2021 14:35</p></div>
                            <div className='w-[65px]'><p className='text-gray900 text-sm font-light'>Withdraw</p></div>
                            <div className='w-[100px]'><p className='text-gray900 text-sm font-light'>SAND</p></div>
                            <div className='w-[100px]'><p className='text-gray900 text-sm font-light'>60,000</p></div>  
                            <div className='w-[191px]'>
                              <div className="flex">
                                <p className='text-gray900 text-sm font-light mr-8 data-table-transition'> 0x86c4A74e1280...</p>
                                <span className='mr-2'>
                                  <Link href={'#'}>
                                    <a><Image src={GrayEdit} alt="" /></a>
                                  </Link>
                                </span>
                                <Link href={'#'}>
                                  <a><Image src={GrayCopy} alt="" /></a>
                                </Link>
                              </div>
                              </div>  
                            <div className='w-[191px]'>
                            <div className="flex">
                                <p className='text-gray900 text-sm font-light mr-8 data-table-transition'>0xad2aec1eff22d...</p>
                                <span className='mr-2'>
                                  <Link href={'#'}>
                                    <a><Image src={GrayEdit} alt="" /></a>
                                  </Link>
                                </span>
                                <Link href={'#'}>
                                  <a><Image src={GrayCopy} alt="" /></a>
                                </Link>
                              </div>
                              </div>  
                            <div>
                            <div className="flex items-center">
                                <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 px-[10px] w-[80px] justify-center rounded text-white text-[10px] border-transparent border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                                 <span className=''>Approve</span>
                                </button>
                                <button className='wallet-btn flex items-center border-gray900 border py-2 px-[10px] w-[80px] justify-center rounded text-[10px] border-transparent hover:border-gray900 hover:text-white hover:bg-gray900 duration-300'>
                                  <span className=''>Decline</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className='inline-flex w-full justify-between items-center  md:pt-[25px] pt-5'> 
                            <div className=''><p className='text-gray900 text-sm'>21 Mar 2021 14:35</p></div>
                            <div className='w-[65px]'><p className='text-gray900 text-sm font-light'>Deposit</p></div>
                            <div className='w-[100px]'><p className='text-gray900 text-sm font-light'>APE</p></div>
                            <div className='w-[100px]'><p className='text-gray900 text-sm font-light'>2.1496</p></div>  
                            <div className='w-[191px]'>
                              <div className="flex">
                                <p className='text-gray900 text-sm font-light mr-8 data-table-transition'> 0xaaBAd1670BB8…</p>
                                <span className='mr-2'>
                                  <Link href={'#'}>
                                    <a><Image src={GrayEdit} alt="" /></a>
                                  </Link>
                                </span>
                                <Link href={'#'}>
                                  <a><Image src={GrayCopy} alt="" /></a>
                                </Link>
                              </div>
                              </div>  
                            <div className='w-[191px]'>
                            <div className="flex">
                                <p className='text-gray900 text-sm font-light mr-8 data-table-transition'> 0x7c91f1cbefc93...</p>
                                <span className='mr-2'>
                                  <Link href={'#'}>
                                    <a><Image src={GrayEdit} alt="" /></a>
                                  </Link>
                                </span>
                                <Link href={'#'}>
                                  <a><Image src={GrayCopy} alt="" /></a>
                                </Link>
                              </div>
                              </div>  
                            <div>
                            <div className="flex items-center">
                                <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 px-[10px] w-[80px] justify-center rounded text-white text-[10px] border-transparent border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                                 <span className=''>Approve</span>
                                </button>
                                <button className='wallet-btn flex items-center border-gray900 border py-2 px-[10px] w-[80px] justify-center rounded text-[10px] border-transparent hover:border-gray900 hover:text-white hover:bg-gray900 duration-300'>
                                  <span className=''>Decline</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* =========== tab end======== */}            
          </div> 
        </div>
    </div> 
    </>
  )
}

export default Transactions