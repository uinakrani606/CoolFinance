import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

import notional from '../assets/img/notionalogo.svg'
import protocol from '../assets/img/notional.svg'
import etherium from'../assets/img/ethereum.svg'
import curvesvg from'../assets/img/curvefnance.svg'
import aavev2 from'../assets/img/aaveaavelogo.svg'
import uniswap from'../assets/img/uniswap.svg'
import curveprotocol from'../assets/img/curvelogo.svg'
import aavelogo from'../assets/img/aavelogo.svg'
import uniswaplogo from'../assets/img/uniswaplogo.svg'
import GrayEdit from '../assets/img/gray-edit-btn.svg'
import GrayCopy from '../assets/img/gray-copy-btn.svg'
const TradingViewChart = dynamic(
  () => import("../components/TradingviewChart"),
  {
    loading: () => <p>Loading ...</p>,
    ssr: false,
  }
);
const Portfolio = () => {
  const CHART_TYPES = {
    BAR: "BAR",
    AREA: "AREA",
  };

  const dailyData = [
    { date: 1603756800, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1599436800, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1599523200, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1599609600, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1603756800, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1599782400, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1599868800, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1599955200, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1600041600, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1600128000, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1603756800, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1600300800, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1600387200, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1600473600, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1600560000, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1600646400, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1600732800, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1600819200, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1603756800, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1600992000, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1601078400, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1601164800, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1601251200, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1601337600, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1601424000, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1601510400, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1601596800, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1601683200, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1601769600, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1601856000, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1601942400, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1602028800, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1602115200, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1602201600, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1602288000, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1602374400, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1602460800, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1602547200, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1602633600, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1602720000, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1602806400, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1602892800, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1602979200, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1603065600, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1603152000, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1603238400, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1603324800, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1603411200, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    { date: 1603497600, dailyVolumeUSD: 0, totalLiquidityUSD: 0 },
    {
      date: 1603584000,
      dailyVolumeUSD: "13711096888.30",
      totalLiquidityUSD: "13711096888.30",
    },
    {
      date: 1603670400,
      dailyVolumeUSD: "11020868839.41",
      totalLiquidityUSD: "11020868839.41",
    },
    {
      date: 1603756800,
      dailyVolumeUSD: "10776268100.16",
      totalLiquidityUSD: "10776268100.16",
    },
  ];

  const totalLiquidityUSD = "65";
  const liquidityChangeUSD = 3;
  const width = "800";
  return (
   <>
    <div className='max-w-[1203px] w-full mx-auto px-[15px]'>
      <div className='lg:mt-11 mt-5'>
        <h2 className='lg:text-[40px] text-[32px] lg:leading-6 leading-snug font-bold text-primaryDarkBlue inline-block'>Portfolio Performance</h2>
        <div className='border-b border-gray300 lg:pb-14 pb-8 lg:mt-[30px] mt-4 flex md:flex-row flex-col gap-4 text-gray900'>
          <div className='md:max-w-[281px] sm:max-w-full sm:flex-nowrap flex-wrap w-full flex md:block gap-5'>
            <div className='border border-gray300 sm:w-auto w-[45%] rounded-[10px] md:py-[25px] py-4 md:px-[30px] px-4 md:mb-[14px]'>
              <h3 className='text-base font-medium'>Pool holdings</h3>
              <h2 className='lg:text-[42px] text-2xl text-primaryBlue lg:pt-[10px] pt-1 font-bold'>$761</h2>
            </div>
            <div className='border border-gray300 sm:w-auto w-[45%] rounded-[10px] md:py-[25px] py-4 md:px-[30px] px-4 md:mb-[14px]'>
              <h3 className='text-base font-medium'>Asset holdings</h3>
              <h2 className='lg:text-[42px] text-2xl text-primaryBlue lg:pt-[10px] pt-1 font-bold'>$2,651</h2>
            </div>  
            <div className='border border-gray300 sm:w-auto w-[45%] sm:mx-0 mx-auto rounded-[10px] md:py-[25px] py-4 md:px-[30px] px-4'>
              <h3 className='text-base font-medium'>Total holdings</h3>
              <h2 className='lg:text-[42px] text-2xl text-primaryBlue lg:pt-[10px] pt-1 font-bold'>$3,412</h2>
            </div>
          </div>
          
          <div className="max-w-[875PX]  w-full rounded-[10px] border border-gray300">
              <div className="p-4 lg:pb-4 pb-0 relative">
                <h3 className="text-base text-gray900  font-medium">
                  Total TVL
                </h3>
                {/* <h2 className="text-3xl text-gray900 font-bold">$54.98b</h2> */}
                <TradingViewChart
                  data={dailyData}
                  base={totalLiquidityUSD}
                  baseChange={liquidityChangeUSD}
                  title="Liquidityy"
                  field="totalLiquidityUSD"
                  width={width}
                  type={CHART_TYPES.AREA}
                />
              </div>
            </div>
        </div>          
      </div>        
      {/* asset section start */}
      <div className='lg:mt-12 mt-8'>         
        <h2 className='lg:text-[26px] text-2xl font-bold text-primaryDarkBlue'>Assets</h2>          
      </div>
      <div className='border-gray300 md:mt-6 border rounded-[10px] my-4 overflow-hidden'>        
        <div className="flex flex-wrap w-full text-left">
          <div className="w-full">          
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full rounded  overflow-x-auto ">
              <div className="px-5 pt-3 pb-5 flex-auto transactions-box portfolio-box">
                <div className="tab-content tab-space">
                  <div>
                    <div className='inline-flex w-full border-b border-white100 justify-between'> 
                  <div className='w-[283px]'>
                    <h3 className='pb-2 text-[10px] text-gray900 opacity-40'>Asset</h3>
                  </div>
                  <div className='w-[200px]'>  
                    <h3 className=' pb-2 text-[10px] text-gray900 opacity-40'>Protocol/Token</h3>
                  </div>
                  <div className='w-[200px]'>
                    <h3 className=' pb-2 text-[10px] text-gray900 opacity-40'>Network</h3>
                  </div>
                  <div className='w-[110px]'>
                    <h3 className='pb-2 text-[10px] text-gray900 opacity-40'>APR</h3>
                  </div>
                  <div className='w-[110px]'>
                    <h3 className='pb-2 text-[10px] text-gray900 opacity-40'>Price</h3>
                  </div>
                  <div className='w-[110px]'>
                    <h3 className='pb-2 text-[10px] text-gray900 opacity-40'>Balance</h3>
                  </div>
                  <div className='xl:w-[220px] w-[170px]'>
                    <h3 className='pb-2 text-[10px] text-gray900 opacity-40'>Value</h3>
                  </div>
                  <div className='w-[110px]'>
                    <h3 className='pb-2 text-[10px] text-gray900 opacity-40'>Manage</h3>
                  </div>
                    </div>
                    <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
                      <div className="flex items-center gap-[10px] w-[283px]">
                        <Image src={notional} alt=" "/>                       
                        <p className='text-gray900 text-sm font-semibold mr-8 data-table-transition'>Notional Eth Market</p>                        
                      </div>
                      <div className='w-[200px]'><p className='text-gray900 text-sm font-light'>Notional</p></div>
                      <div className='w-[200px]'><p className='text-gray900 text-sm font-light'>Ethereum</p></div>
                      <div className='w-[110px]'><p className='text-gray900 text-sm font-light'>2.69%</p></div>
                      <div className='w-[110px]'><p className='text-gray900 text-sm font-light'>$0.370</p></div>  
                      <div className='w-[110px]'><p className='text-gray900 text-sm font-light'>1,000</p></div>
                      <div className='xl:w-[205px] w-[147px]'><p className='text-gray900 text-sm font-semibold'>$370.00</p></div>
                      <div className='w-[106px]'>                        
                        <button className='wallet-btn sm:mr-[14px] flex items-center bg-primaryBlue py-2 px-[10px] w-[106px] justify-center rounded text-white text-[10px] border-transparent border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                          <span className=''>Manage position</span>
                        </button>
                      </div>
                    </div>
                    <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
                      <div className="flex items-center gap-[10px] w-[283px]">
                        <Image src={curvesvg} alt=" "/>                       
                        <p className='text-gray900 text-sm font-semibold mr-8 data-table-transition'>Curve Finance</p>                        
                      </div>
                      <div className='w-[200px]'><p className='text-gray900 text-sm font-light'>Curve</p></div>
                      <div className='w-[200px]'><p className='text-gray900 text-sm font-light'>Ethereum</p></div>
                      <div className='w-[110px]'><p className='text-gray900 text-sm font-light'>1.32%</p></div>
                      <div className='w-[110px]'><p className='text-gray900 text-sm font-light'>$0.904</p></div>  
                      <div className='w-[110px]'><p className='text-gray900 text-sm font-light'>2,400</p></div>
                      <div className='xl:w-[205px] w-[147px]'><p className='text-gray900 text-sm font-semibold'>$2,169.60</p></div>
                      <div className='w-[106px]'>                        
                        <button className='wallet-btn sm:mr-[14px] flex items-center bg-primaryBlue py-2 px-[10px] w-[106px] justify-center rounded text-white text-[10px] border-transparent border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                          <span className=''>Manage position</span>
                        </button>
                      </div>
                    </div>
                    <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
                      <div className="flex items-center gap-[10px] w-[283px]">
                        <Image src={aavev2} alt=" "/>                       
                        <p className='text-gray900 text-sm font-semibold mr-8 data-table-transition'>AAVE V2 (AAVE)</p>                        
                      </div>
                      <div className='w-[200px]'><p className='text-gray900 text-sm font-light'>Aave</p></div>
                      <div className='w-[200px]'><p className='text-gray900 text-sm font-light'>Ethereum</p></div>
                      <div className='w-[110px]'><p className='text-gray900 text-sm font-light'>0.55%</p></div>
                      <div className='w-[110px]'><p className='text-gray900 text-sm font-light'>$85.225</p></div>  
                      <div className='w-[110px]'><p className='text-gray900 text-sm font-light'>5</p></div>
                      <div className='xl:w-[205px] w-[147px]'><p className='text-gray900 text-sm font-semibold'>$426.12</p></div>
                      <div className='w-[106px]'>                        
                        <button className='wallet-btn sm:mr-[14px] flex items-center bg-primaryBlue py-2 px-[10px] w-[106px] justify-center rounded text-white text-[10px] border-transparent border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                          <span className=''>Manage position</span>
                        </button>
                      </div>
                    </div>
                    <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
                      <div className="flex items-center gap-[10px] w-[283px]">
                        <Image src={uniswap} alt=" "/>                       
                        <p className='text-gray900 text-sm font-semibold mr-8 data-table-transition'>Uniswap</p>                        
                      </div>
                      <div className='w-[200px]'><p className='text-gray900 text-sm font-light'>Uniswap</p></div>
                      <div className='w-[200px]'><p className='text-gray900 text-sm font-light'>Ethereum</p></div>
                      <div className='w-[110px]'><p className='text-gray900 text-sm font-light'>2.31%</p></div>
                      <div className='w-[110px]'><p className='text-gray900 text-sm font-light'>$7.152</p></div>  
                      <div className='w-[110px]'><p className='text-gray900 text-sm font-light'>80</p></div>
                      <div className='xl:w-[205px] w-[147px]'><p className='text-gray900 text-sm font-semibold'>$572.16</p></div>
                      <div className='w-[106px]'>                        
                        <button className='wallet-btn sm:mr-[14px] flex items-center bg-primaryBlue py-2 px-[10px] w-[106px] justify-center rounded text-white text-[10px] border-transparent border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                          <span className=''>Manage position</span>
                        </button>
                      </div>
                    </div>
                    <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
                      <div className="flex items-center gap-[10px] w-[283px]">
                        <div className="bg-white100 w-10 h-10  rounded-full"></div>
                        <p className='text-gray900 text-sm font-semibold mr-8 data-table-transition'>Insert Name Here</p>                        
                      </div>
                      <div className='w-[200px]'><p className='text-gray900 text-sm font-light'>Protocol Name</p></div>
                      <div className='w-[200px]'><p className='text-gray900 text-sm font-light'>Network Name</p></div>
                      <div className='w-[110px]'><p className='text-gray900 text-sm font-light'>5.8%</p></div>
                      <div className='w-[110px]'><p className='text-gray900 text-sm font-light'>$1.10</p></div>  
                      <div className='w-[110px]'><p className='text-gray900 text-sm font-light'>500</p></div>
                      <div className='xl:w-[205px] w-[147px]'><p className='text-gray900 text-sm font-semibold'>$550.00</p></div>
                      <div className='w-[106px]'>                        
                        <button className='wallet-btn sm:mr-[14px] flex items-center bg-primaryBlue py-2 px-[10px] w-[106px] justify-center rounded text-white text-[10px] border-transparent border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                          <span className=''>Manage position</span>
                        </button>
                      </div>
                    </div>
                    <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
                      <div className="flex items-center gap-[10px] w-[283px]">
                        <div className="bg-white100 w-10 h-10  rounded-full"></div>
                        <p className='text-gray900 text-sm font-semibold mr-8 data-table-transition'>Insert Name Here</p>                        
                      </div>
                      <div className='w-[200px]'><p className='text-gray900 text-sm font-light'>Protocol Name</p></div>
                      <div className='w-[200px]'><p className='text-gray900 text-sm font-light'>Network Name</p></div>
                      <div className='w-[110px]'><p className='text-gray900 text-sm font-light'>5.8%</p></div>
                      <div className='w-[110px]'><p className='text-gray900 text-sm font-light'>$1.10</p></div>  
                      <div className='w-[110px]'><p className='text-gray900 text-sm font-light'>500</p></div>
                      <div className='xl:w-[205px] w-[147px]'><p className='text-gray900 text-sm font-semibold'>$550.00</p></div>
                      <div className='w-[106px]'>                        
                        <button className='wallet-btn sm:mr-[14px] flex items-center bg-primaryBlue py-2 px-[10px] w-[106px] justify-center rounded text-white text-[10px] border-transparent border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                          <span className=''>Manage position</span>
                        </button>
                      </div>
                    </div>
                    <div className='inline-flex w-full justify-between items-center  md:pt-[25px] pt-5'> 
                      <div className="flex items-center gap-[10px] w-[283px]">
                        <div className="bg-white100 w-10 h-10  rounded-full"></div>
                        <p className='text-gray900 text-sm font-semibold mr-8 data-table-transition'>Insert Name Here</p>                        
                      </div>
                      <div className='w-[200px]'><p className='text-gray900 text-sm font-light'>Protocol Name</p></div>
                      <div className='w-[200px]'><p className='text-gray900 text-sm font-light'>Network Name</p></div>
                      <div className='w-[110px]'><p className='text-gray900 text-sm font-light'>5.8%</p></div>
                      <div className='w-[110px]'><p className='text-gray900 text-sm font-light'>$1.10</p></div>  
                      <div className='w-[110px]'><p className='text-gray900 text-sm font-light'>500</p></div>
                      <div className='xl:w-[205px] w-[147px]'><p className='text-gray900 text-sm font-semibold'>$550.00</p></div>
                      <div className='w-[106px]'>                        
                        <button className='wallet-btn sm:mr-[14px] flex items-center bg-primaryBlue py-2 px-[10px] w-[106px] justify-center rounded text-white text-[10px] border-transparent border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                          <span className=''>Manage position</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
      {/* asset section end */}    
    </div>
   </>
  )
}

export default Portfolio