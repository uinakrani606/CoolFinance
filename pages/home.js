import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import arrow from "../assets/img/viewmoreicon.svg";
import notional from "../assets/img/notionalogo.svg";
import protocol from "../assets/img/notional.svg";
import etherium from "../assets/img/ethereum.svg";
import curvesvg from "../assets/img/curvefnance.svg";
import aavev2 from "../assets/img/aaveaavelogo.svg";
import uniswap from "../assets/img/uniswap.svg";
import curveprotocol from "../assets/img/curvelogo.svg";
import aavelogo from "../assets/img/aavelogo.svg";
import uniswaplogo from "../assets/img/uniswaplogo.svg";
const TradingViewChart = dynamic(
  () => import("../components/TradingviewChart"),
  {
    loading: () => <p>Loading ...</p>,
    ssr: false,
  }
);
const Home = () => {
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
      <div className="max-w-[1203px] w-full mx-auto px-[15px]">
        <div className="lg:mt-11 mt-5 ">
          <h2 className="lg:text-[40px] text-[32px] lg:leading-6 leading-snug font-bold text-primaryDarkBlue inline-block">
            Total value locked DeFi
          </h2>
          <div className="border-b border-gray300 lg:pb-14 pb-8 lg:mt-[30px] mt-4 flex md:flex-row flex-col gap-4 text-gray90">
          <div className='md:max-w-[281px] sm:max-w-full sm:flex-nowrap flex-wrap w-full flex md:block gap-5'>
            <div className='border border-gray300 sm:w-auto w-[45%] rounded-[10px] md:py-[25px] py-4 md:px-[30px] px-4 md:mb-[14px]'>
              <h3 className='text-base font-medium'>Total Value Locked (USD)</h3>
              <h2 className='lg:text-[42px] text-2xl text-primaryBlue lg:pt-[10px] pt-1 font-bold'>$54.98b</h2>
            </div>
            <div className='border border-gray300 sm:w-auto w-[45%] rounded-[10px] md:py-[25px] py-4 md:px-[30px] px-4 md:mb-[14px]'>
              <h3 className='text-base font-medium'>Change (24h)</h3>
              <h2 className='lg:text-[42px] text-2xl text-primaryBlue lg:pt-[10px] pt-1 font-bold'>2.40%</h2>
            </div>  
            <div className='border border-gray300 sm:w-auto w-[45%] sm:mx-0 mx-auto rounded-[10px] md:py-[25px] py-4 md:px-[30px] px-4'>
              <h3 className='text-base font-medium'>MakerDAO Dominance</h3>
              <h2 className='lg:text-[42px] text-2xl text-primaryBlue lg:pt-[10px] pt-1 font-bold'>14.94%</h2>
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
        <div className="text-primaryDarkBlue mb-9">
          <div className="flex flex-wrap gap-y-3 justify-between lg:pt-[53px] pt-7 pb-6">
            <h2 className="lg:text-[26px] text-2xl font-bold">
              Explore all protocols
            </h2>
            <Link href={"#"}>
              <a>
                <div className="bg-primaryBlue text-sm font-semibold px-6 py-3 rounded-[4px] text-[#fff] flex items-center gap-3">
                  View more
                  <Image src={arrow} alt="" />
                </div>
              </a>
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 border-b border-gray300 pb-11">
            <div className="border border-gray300 rounded-[10px] sm:p-5 p-4 xl:max-w-[281px] md:!max-w-[279px] w-full">
              <div className="flex items-center">
                <Image src={notional} alt=" " />
                <h3 className="text-sm font-semibold text-gray900 pl-[10px]">
                  Notional Eth Market
                </h3>
              </div>
              <div className="flex lg:pt-8 pt-5 gap-10 border-b pb-3 border-gray300">
                <div>
                  <h3 className="lg:text-3xl text-2xl font-bold">7.94%</h3>
                  <p className="text-sm font-medium text-[#33333340]">
                    Yield 30d
                  </p>
                </div>
                <div>
                  <h3 className="lg:text-3xl text-2xl font-bold">$7M</h3>
                  <p className="text-sm font-medium text-[#33333340]">TVL</p>
                </div>
              </div>
              <div className="flex text-sm font-medium bg-gray100 mt-5 rounded-[4px]">
                <div className="px-4 bg-gray400 pt-2 pb-4 rounded-[4px]">
                  <h3>Risk</h3>
                  <h4 className="text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center">
                    B
                  </h4>
                </div>
                <div className="pl-3 pt-2 pb-4">
                  <div className="border-r border-white pr-3">
                    <h3 className="text-[#33333350] text-center">Protocol</h3>
                    <div className="px-1 py-1 mt-1 rounded bg-white flex items-center gap-1">
                      <Image src={protocol} alt=" " />
                      <h4 className="text-[10px] font-bold text-gray900">
                        Notional
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="px-3 pt-2 pb-4">
                  <h3 className="text-[#33333350] text-center">Chain</h3>
                  <div className="px-1 py-1 mt-1 rounded bg-white flex items-center gap-1">
                    <Image src={etherium} alt=" " />
                    <h4 className="text-[10px] font-bold text-gray900">
                      Ethereum
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray300 rounded-[10px] sm:p-5 p-4 xl:max-w-[281px] md:!max-w-[279px] w-full">
              <div className="flex items-center">
                <Image src={curvesvg} alt=" " />
                <h3 className="text-sm font-semibold text-gray900 pl-[10px]">
                  Curve Finance
                </h3>
              </div>
              <div className="flex lg:pt-8 pt-5 gap-10 border-b pb-3 border-gray300">
                <div>
                  <h3 className="lg:text-3xl text-2xl font-bold">6.74%</h3>
                  <p className="text-sm font-medium text-[#33333340]">
                    Yield 30d
                  </p>
                </div>
                <div>
                  <h3 className="lg:text-3xl text-2xl font-bold">$211M</h3>
                  <p className="text-sm font-medium text-[#33333340]">TVL</p>
                </div>
              </div>
              <div className="flex text-sm font-medium bg-gray100 mt-5 rounded-[4px]">
                <div className="px-4 bg-gray400 pt-2 pb-4 rounded-[4px]">
                  <h3>Risk</h3>
                  <h4 className="text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center">
                    A
                  </h4>
                </div>
                <div className="pl-3 pt-2 pb-4">
                  <div className="border-r border-white pr-3">
                    <h3 className="text-[#33333350] text-center">Protocol</h3>
                    <div className="px-1 py-1 mt-1 rounded bg-white flex items-center gap-1">
                      <Image src={curveprotocol} alt=" " />
                      <h4 className="text-[10px] font-bold text-gray900">
                        Curve
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="px-3 pt-2 pb-4">
                  <h3 className="text-[#33333350] text-center">Chain</h3>
                  <div className="px-1 py-1 mt-1 rounded bg-white flex items-center gap-1">
                    <Image src={etherium} alt=" " />
                    <h4 className="text-[10px] font-bold text-gray900">
                      Ethereum
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray300 rounded-[10px] sm:p-5 p-4 xl:max-w-[281px] md:!max-w-[279px] w-full">
              <div className="flex items-center">
                <Image src={aavev2} alt=" " />
                <h3 className="text-sm font-semibold text-gray900 pl-[10px]">
                  AAVE V2 (AAVE)
                </h3>
              </div>
              <div className="flex lg:pt-8 pt-5 gap-10 border-b pb-3 border-gray300">
                <div>
                  <h3 className="lg:text-3xl text-2xl font-bold">6.60%</h3>
                  <p className="text-sm font-medium text-[#33333340]">
                    Yield 30d
                  </p>
                </div>
                <div>
                  <h3 className="lg:text-3xl text-2xl font-bold">$258M</h3>
                  <p className="text-sm font-medium text-[#33333340]">TVL</p>
                </div>
              </div>
              <div className="flex text-sm font-medium bg-gray100 mt-5 rounded-[4px]">
                <div className="px-4 bg-gray400 rounded-[4px] pt-2 pb-4">
                  <h3>Risk</h3>
                  <h4 className="text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center">
                    C
                  </h4>
                </div>
                <div className="pl-3 pt-2 pb-4">
                  <div className="border-r border-white pr-3">
                    <h3 className="text-[#33333350] text-center">Protocol</h3>
                    <div className="px-1 py-1 mt-1 rounded bg-white flex items-center gap-1">
                      <Image src={aavelogo} alt=" " />
                      <h4 className="text-[10px] font-bold text-gray900">
                        Aave
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="px-3 pt-2 pb-4">
                  <h3 className="text-[#33333350] text-center">Chain</h3>
                  <div className="px-1 py-1 mt-1 rounded bg-white flex items-center gap-1">
                    <Image src={etherium} alt=" " />
                    <h4 className="text-[10px] font-bold text-gray900">
                      Ethereum
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray300 rounded-[10px] sm:p-5 p-4 xl:max-w-[281px] md:!max-w-[279px] w-full">
              <div className="flex items-center">
                <Image src={uniswap} alt=" " />
                <h3 className="text-sm font-semibold text-gray900 pl-[10px]">
                  Uniswap
                </h3>
              </div>
              <div className="flex lg:pt-8 pt-5 gap-10 border-b pb-3 border-gray300">
                <div>
                  <h3 className="lg:text-3xl text-2xl font-bold">12.37%</h3>
                  <p className="text-sm font-medium text-[#33333340]">
                    Yield 30d
                  </p>
                </div>
                <div>
                  <h3 className="lg:text-3xl text-2xl font-bold">$4B</h3>
                  <p className="text-sm font-medium text-[#33333340]">TVL</p>
                </div>
              </div>
              <div className="flex text-sm font-medium bg-gray100 mt-5 rounded-[4px]">
                <div className="px-4 bg-gray400 rounded-[4px] pt-2 pb-4">
                  <h3>Risk</h3>
                  <h4 className="text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center">
                    B
                  </h4>
                </div>
                <div className="pl-3 pt-2 pb-4">
                  <div className="border-r border-white pr-3">
                    <h3 className="text-[#33333350] text-center">Protocol</h3>
                    <div className="px-1 py-1 mt-1 rounded bg-white flex items-center gap-1">
                      <Image src={uniswaplogo} alt=" " />
                      <h4 className="text-[10px] font-bold text-gray900">
                        Uniswap
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="px-3 pt-2 pb-4">
                  <h3 className="text-[#33333350] text-center">Chain</h3>
                  <div className="px-1 py-1 mt-1 rounded bg-white flex items-center gap-1">
                    <Image src={etherium} alt=" " />
                    <h4 className="text-[10px] font-bold text-gray900">
                      Ethereum
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray300 rounded-[10px] sm:px-5 py-[14px] p-4 xl:max-w-[281px] md:!max-w-[279px] w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gray300 rounded-full p-5"></div>
                  <div className="pl-[10px]">
                    <h3 className="text-sm font-semibold text-gray900">
                      Insert Name Here
                    </h3>
                    <div className="flex sm:gap-7 gap-5">
                      <div>
                        <h3 className="md:text-xl text-lg font-bold">5.24%</h3>
                        <p className="text-[10px] font-medium text-[#33333340]">
                          Yield 30d
                        </p>
                      </div>
                      <div>
                        <h3 className="md:text-xl text-lg font-bold">$48M</h3>
                        <p className="text-[10px] font-medium text-[#33333340]">
                          TVL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center">
                    B
                  </h4>
                  <div className="bg-gray200 rounded flex justify-center p-2 mt-[2px]">
                    <Image src={protocol} alt=" " />
                  </div>
                  <div className="bg-gray200 rounded flex justify-center p-2 mt-[2px]">
                    <Image src={etherium} alt=" " />
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray300 rounded-[10px] sm:px-5 py-[14px] p-4 xl:max-w-[281px] md:!max-w-[279px] w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gray300 rounded-full p-5"></div>
                  <div className="pl-[10px]">
                    <h3 className="text-sm font-semibold text-gray900">
                      Insert Name Here
                    </h3>
                    <div className="flex sm:gap-7 gap-5">
                      <div>
                        <h3 className="md:text-xl text-lg font-bold">5.24%</h3>
                        <p className="text-[10px] font-medium text-[#33333340]">
                          Yield 30d
                        </p>
                      </div>
                      <div>
                        <h3 className="md:text-xl text-lg font-bold">$48M</h3>
                        <p className="text-[10px] font-medium text-[#33333340]">
                          TVL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center">
                    B
                  </h4>
                  <div className="bg-gray200 rounded flex justify-center p-2 mt-[2px]">
                    <Image src={protocol} alt=" " />
                  </div>
                  <div className="bg-gray200 rounded flex justify-center p-2 mt-[2px]">
                    <Image src={etherium} alt=" " />
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray300 rounded-[10px] sm:px-5 py-[14px] p-4 xl:max-w-[281px] md:!max-w-[279px] w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gray300 rounded-full p-5"></div>
                  <div className="pl-[10px]">
                    <h3 className="text-sm font-semibold text-gray900">
                      Insert Name Here
                    </h3>
                    <div className="flex sm:gap-7 gap-5">
                      <div>
                        <h3 className="md:text-xl text-lg font-bold">5.24%</h3>
                        <p className="text-[10px] font-medium text-[#33333340]">
                          Yield 30d
                        </p>
                      </div>
                      <div>
                        <h3 className="md:text-xl text-lg font-bold">$48M</h3>
                        <p className="text-[10px] font-medium text-[#33333340]">
                          TVL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center">
                    B
                  </h4>
                  <div className="bg-gray200 rounded flex justify-center p-2 mt-[2px]">
                    <Image src={protocol} alt=" " />
                  </div>
                  <div className="bg-gray200 rounded flex justify-center p-2 mt-[2px]">
                    <Image src={etherium} alt=" " />
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray300 rounded-[10px] sm:px-5 py-[14px] p-4 xl:max-w-[281px] md:!max-w-[279px] w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gray300 rounded-full p-5"></div>
                  <div className="pl-[10px]">
                    <h3 className="text-sm font-semibold text-gray900">
                      Insert Name Here
                    </h3>
                    <div className="flex sm:gap-7 gap-5">
                      <div>
                        <h3 className="md:text-xl text-lg font-bold">5.24%</h3>
                        <p className="text-[10px] font-medium text-[#33333340]">
                          Yield 30d
                        </p>
                      </div>
                      <div>
                        <h3 className="md:text-xl text-lg font-bold">$48M</h3>
                        <p className="text-[10px] font-medium text-[#33333340]">
                          TVL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center">
                    B
                  </h4>
                  <div className="bg-gray200 rounded flex justify-center p-2 mt-[2px]">
                    <Image src={protocol} alt=" " />
                  </div>
                  <div className="bg-gray200 rounded flex justify-center p-2 mt-[2px]">
                    <Image src={etherium} alt=" " />
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray300 rounded-[10px] sm:px-5 py-[14px] p-4 xl:max-w-[281px] md:!max-w-[279px] w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gray300 rounded-full p-5"></div>
                  <div className="pl-[10px]">
                    <h3 className="text-sm font-semibold text-gray900">
                      Insert Name Here
                    </h3>
                    <div className="flex sm:gap-7 gap-5">
                      <div>
                        <h3 className="md:text-xl text-lg font-bold">5.24%</h3>
                        <p className="text-[10px] font-medium text-[#33333340]">
                          Yield 30d
                        </p>
                      </div>
                      <div>
                        <h3 className="md:text-xl text-lg font-bold">$48M</h3>
                        <p className="text-[10px] font-medium text-[#33333340]">
                          TVL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center">
                    B
                  </h4>
                  <div className="bg-gray200 rounded flex justify-center p-2 mt-[2px]">
                    <Image src={protocol} alt=" " />
                  </div>
                  <div className="bg-gray200 rounded flex justify-center p-2 mt-[2px]">
                    <Image src={etherium} alt=" " />
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray300 rounded-[10px] sm:px-5 py-[14px] p-4 xl:max-w-[281px] md:!max-w-[279px] w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gray300 rounded-full p-5"></div>
                  <div className="pl-[10px]">
                    <h3 className="text-sm font-semibold text-gray900">
                      Insert Name Here
                    </h3>
                    <div className="flex sm:gap-7 gap-5">
                      <div>
                        <h3 className="md:text-xl text-lg font-bold">5.24%</h3>
                        <p className="text-[10px] font-medium text-[#33333340]">
                          Yield 30d
                        </p>
                      </div>
                      <div>
                        <h3 className="md:text-xl text-lg font-bold">$48M</h3>
                        <p className="text-[10px] font-medium text-[#33333340]">
                          TVL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center">
                    B
                  </h4>
                  <div className="bg-gray200 rounded flex justify-center p-2 mt-[2px]">
                    <Image src={protocol} alt=" " />
                  </div>
                  <div className="bg-gray200 rounded flex justify-center p-2 mt-[2px]">
                    <Image src={etherium} alt=" " />
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray300 rounded-[10px] sm:px-5 py-[14px] p-4 xl:max-w-[281px] md:!max-w-[279px] w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gray300 rounded-full p-5"></div>
                  <div className="pl-[10px]">
                    <h3 className="text-sm font-semibold text-gray900">
                      Insert Name Here
                    </h3>
                    <div className="flex sm:gap-7 gap-5">
                      <div>
                        <h3 className="md:text-xl text-lg font-bold">5.24%</h3>
                        <p className="text-[10px] font-medium text-[#33333340]">
                          Yield 30d
                        </p>
                      </div>
                      <div>
                        <h3 className="md:text-xl text-lg font-bold">$48M</h3>
                        <p className="text-[10px] font-medium text-[#33333340]">
                          TVL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center">
                    B
                  </h4>
                  <div className="bg-gray200 rounded flex justify-center p-2 mt-[2px]">
                    <Image src={protocol} alt=" " />
                  </div>
                  <div className="bg-gray200 rounded flex justify-center p-2 mt-[2px]">
                    <Image src={etherium} alt=" " />
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray300 rounded-[10px] sm:px-5 py-[14px] p-4 xl:max-w-[281px] md:!max-w-[279px] w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gray300 rounded-full p-5"></div>
                  <div className="pl-[10px]">
                    <h3 className="text-sm font-semibold text-gray900">
                      Insert Name Here
                    </h3>
                    <div className="flex sm:gap-7 gap-5">
                      <div>
                        <h3 className="md:text-xl text-lg font-bold">5.24%</h3>
                        <p className="text-[10px] font-medium text-[#33333340]">
                          Yield 30d
                        </p>
                      </div>
                      <div>
                        <h3 className="md:text-xl text-lg font-bold">$48M</h3>
                        <p className="text-[10px] font-medium text-[#33333340]">
                          TVL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center">
                    B
                  </h4>
                  <div className="bg-gray200 rounded flex justify-center p-2 mt-[2px]">
                    <Image src={protocol} alt=" " />
                  </div>
                  <div className="bg-gray200 rounded flex justify-center p-2 mt-[2px]">
                    <Image src={etherium} alt=" " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
