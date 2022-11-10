import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import arrow from '../assets/img/viewmoreicon.svg'
import notional from '../assets/img/notionalogo.svg'
import protocol from '../assets/img/notional.svg'
import etherium from'../assets/img/ethereum.svg'
import curvesvg from'../assets/img/curvefnance.svg'
import aavev2 from'../assets/img/aaveaavelogo.svg'
import uniswap from'../assets/img/uniswap.svg'
import curveprotocol from'../assets/img/curvelogo.svg'
import aavelogo from'../assets/img/aavelogo.svg'
import uniswaplogo from'../assets/img/uniswaplogo.svg'

const Explore = () => {
  return (
    <>
      <div className='max-w-[1203px] w-full mx-auto px-[15px]'>
        <div className='lg:mt-11 mt-5'>
          <h2 className='lg:text-[40px] text-[32px] lg:leading-6 leading-snug font-bold text-primaryDarkBlue inline-block'>Total value locked DeFi</h2>
          <div className='border-b border-gray300 lg:pb-14 pb-8 lg:mt-[30px] mt-4 flex md:flex-row flex-col gap-4 text-gray900'>
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
            
            <div className='max-w-[875px] w-full border border-gray300 rounded-[10px]'>
              <h3>Total TVL</h3>
              <h2>$54.98b</h2>
            </div>
          </div>          
        </div>        
        <div className='text-primaryDarkBlue mb-9'>
          <div className='flex flex-wrap gap-y-3 justify-between lg:pt-[53px] pt-7 pb-6'>
            <h2 className='lg:text-[26px] text-2xl font-bold'>Explore all protocols</h2>              
              <Link href={'#'}>
                <a>
                  <div className='bg-primaryBlue text-sm font-semibold px-6 py-3 rounded-[4px] text-[#fff] flex items-center gap-3 border-transparent border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                    View more
                    <svg xmlns="http://www.w3.org/2000/svg" width="7.725" height="13.451" viewBox="0 0 7.725 13.451">
                      <path id="Path_45" data-name="Path 45" d="M-1926.941,601.848l5.311,5.311-5.311,5.311" transform="translate(1928.355 -600.434)" fill="none" stroke="#fff" strokeLinecap="round" stroke-linejoin="round" stroke-width="2"/>
                    </svg>
                  </div>
                </a>                
              </Link>
          </div>
          <div className='flex flex-wrap items-center justify-center gap-4 gap-y-7 border-b border-gray300 pb-11'>
            <div className='xxl:w-[23.8%] xl:w-[32%] sm:w-[48%] w-full'>
              <div className='border border-gray300 rounded-[10px] sm:p-5 p-4'>
                <div className='flex items-center'>
                  <Image src={notional} alt=" "/>
                  <h3 className='text-sm font-semibold text-gray900 pl-[10px]'>Notional Eth Market</h3>
                </div>
                <div className='flex lg:pt-8 pt-5 gap-8 border-b pb-3 border-gray300'>
                  <div>
                    <h3 className='lg:text-3xl text-2xl font-bold'>7.94%</h3>
                    <p className='text-sm font-medium text-[#33333340]'>Yield 30d</p>
                  </div>
                  <div>
                    <h3 className='lg:text-3xl text-2xl font-bold'>$7M</h3>
                    <p className='text-sm font-medium text-[#33333340]'>TVL</p>
                  </div> 
                </div>
                <div className='flex text-sm font-medium bg-gray100 mt-5 rounded-[4px]'>
                  <div className='px-4 bg-gray400 pt-2 pb-4 rounded-[4px]'>
                    <h3>Risk</h3>
                    <h4 className='text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center'>B</h4>
                  </div>
                  <div className='pl-3 pt-2 pb-4'>
                    <div  className='border-r border-white pr-3'>
                    <h3 className='text-[#33333350] text-center'>Protocol</h3>
                    <div className='px-1 py-1 mt-1 rounded bg-white flex items-center gap-1'>
                      <Image src={protocol} alt=" "/>
                      <h4 className='text-[10px] font-bold text-gray900'>Notional</h4>
                    </div>
                    </div>
                    
                  </div>
                  <div className='px-3 pt-2 pb-4'>
                    <h3 className='text-[#33333350] text-center'>Chain</h3>
                    <div className='px-1 py-1 mt-1 rounded bg-white flex items-center gap-1'>
                      <Image src={etherium} alt=" "/>
                      <h4 className='text-[10px] font-bold text-gray900'>Ethereum</h4>
                    </div>
                  </div>                
                </div>
              </div>
              <div className='border border-gray300 rounded-[10px] sm:px-5 py-[14px] p-4 my-[18px]'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <div className='bg-gray300 rounded-full p-5'></div>
                  <div className='pl-[10px]'>
                    <h3 className='text-sm font-semibold text-gray900'>Insert Name Here</h3>
                    <div className='flex sm:gap-4 gap-5'>
                      <div>
                        <h3 className='md:text-xl text-lg font-bold'>5.24%</h3>
                        <p className='text-[10px] font-medium text-[#33333340]'>Yield 30d</p>
                      </div>
                      <div>
                        <h3 className='md:text-xl text-lg font-bold'>$48M</h3>
                        <p className='text-[10px] font-medium text-[#33333340]'>TVL</p>
                      </div> 
                    </div>
                  </div>
                </div>
                  <div>
                    <h4 className='text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center'>B</h4>
                    <div className='bg-gray200 rounded flex justify-center p-2 mt-[2px]'>
                      <Image src={protocol} alt=" " />
                    </div>
                    <div className='bg-gray200 rounded flex justify-center p-2 mt-[2px]'>
                      <Image src={etherium} alt=" "/>
                    </div>                    
                  </div>      
              </div> 
              </div>
              <div className='border border-gray300 rounded-[10px] sm:px-5 py-[14px] p-4'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <div className='bg-gray300 rounded-full p-5'></div>
                    <div className='pl-[10px]'>
                      <h3 className='text-sm font-semibold text-gray900'>Insert Name Here</h3>
                      <div className='flex sm:gap-4 gap-5'>
                        <div>
                          <h3 className='md:text-xl text-lg font-bold'>5.24%</h3>
                          <p className='text-[10px] font-medium text-[#33333340]'>Yield 30d</p>
                        </div>
                        <div>
                          <h3 className='md:text-xl text-lg font-bold'>$48M</h3>
                          <p className='text-[10px] font-medium text-[#33333340]'>TVL</p>
                        </div> 
                      </div>
                    </div>
                  </div>
                    <div>
                      <h4 className='text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center'>B</h4>
                      <div className='bg-gray200 rounded flex justify-center p-2 mt-[2px]'>
                        <Image src={protocol} alt=" " />
                      </div>
                      <div className='bg-gray200 rounded flex justify-center p-2 mt-[2px]'>
                        <Image src={etherium} alt=" "/>
                      </div>                    
                    </div>      
                </div> 
              </div>
            </div>                        
            <div className='w-full xxl:w-[23.8%] xl:w-[32%] sm:w-[48%]'>
              <div className='border border-gray300 rounded-[10px] sm:p-5 p-4'>
                <div className='flex items-center'>
                  <Image src={curvesvg} alt=" "/>
                  <h3 className='text-sm font-semibold text-gray900 pl-[10px]'>Curve Finance</h3>
                </div>
                <div className='flex lg:pt-8 pt-5 gap-8 border-b pb-3 border-gray300'>
                  <div>
                    <h3 className='lg:text-3xl text-2xl font-bold'>6.74%</h3>
                    <p className='text-sm font-medium text-[#33333340]'>Yield 30d</p>
                  </div>
                  <div>
                    <h3 className='lg:text-3xl text-2xl font-bold'>$211M</h3>
                    <p className='text-sm font-medium text-[#33333340]'>TVL</p>
                  </div> 
                </div>
                <div className='flex text-sm font-medium bg-gray100 mt-5 rounded-[4px]'>
                  <div className='px-4 bg-gray400 pt-2 pb-4 rounded-[4px]'>
                    <h3>Risk</h3>
                    <h4 className='text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center'>A</h4>
                  </div>
                  <div className='pl-3 pt-2 pb-4'>
                    <div  className='border-r border-white pr-3'>
                    <h3 className='text-[#33333350] text-center'>Protocol</h3>
                    <div className='px-1 py-1 mt-1 rounded bg-white flex items-center gap-1'>
                      <Image src={curveprotocol} alt=" "/>
                      <h4 className='text-[10px] font-bold text-gray900'>Curve</h4>
                    </div>
                    </div>
                    
                  </div>
                  <div className='px-3 pt-2 pb-4'>
                    <h3 className='text-[#33333350] text-center'>Chain</h3>
                    <div className='px-1 py-1 mt-1 rounded bg-white flex items-center gap-1'>
                      <Image src={etherium} alt=" "/>
                      <h4 className='text-[10px] font-bold text-gray900'>Ethereum</h4>
                    </div>
                  </div>                
                </div>
              </div>
              <div className='border border-gray300 rounded-[10px] sm:px-5 py-[14px] p-4 my-[18px]'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <div className='bg-gray300 rounded-full p-5'></div>
                    <div className='pl-[10px]'>
                      <h3 className='text-sm font-semibold text-gray900'>Insert Name Here</h3>
                      <div className='flex sm:gap-4 gap-5'>
                        <div>
                          <h3 className='md:text-xl text-lg font-bold'>5.24%</h3>
                          <p className='text-[10px] font-medium text-[#33333340]'>Yield 30d</p>
                        </div>
                        <div>
                          <h3 className='md:text-xl text-lg font-bold'>$48M</h3>
                          <p className='text-[10px] font-medium text-[#33333340]'>TVL</p>
                        </div> 
                      </div>
                    </div>
                  </div>
                    <div>
                      <h4 className='text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center'>B</h4>
                      <div className='bg-gray200 rounded flex justify-center p-2 mt-[2px]'>
                        <Image src={protocol} alt=" " />
                      </div>
                      <div className='bg-gray200 rounded flex justify-center p-2 mt-[2px]'>
                        <Image src={etherium} alt=" "/>
                      </div>                    
                    </div>      
                </div> 
              </div>
              <div className='border border-gray300 rounded-[10px] sm:px-5 py-[14px] p-4'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <div className='bg-gray300 rounded-full p-5'></div>
                    <div className='pl-[10px]'>
                      <h3 className='text-sm font-semibold text-gray900'>Insert Name Here</h3>
                      <div className='flex sm:gap-4 gap-5'>
                        <div>
                          <h3 className='md:text-xl text-lg font-bold'>5.24%</h3>
                          <p className='text-[10px] font-medium text-[#33333340]'>Yield 30d</p>
                        </div>
                        <div>
                          <h3 className='md:text-xl text-lg font-bold'>$48M</h3>
                          <p className='text-[10px] font-medium text-[#33333340]'>TVL</p>
                        </div> 
                      </div>
                    </div>
                  </div>
                    <div>
                      <h4 className='text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center'>B</h4>
                      <div className='bg-gray200 rounded flex justify-center p-2 mt-[2px]'>
                        <Image src={protocol} alt=" " />
                      </div>
                      <div className='bg-gray200 rounded flex justify-center p-2 mt-[2px]'>
                        <Image src={etherium} alt=" "/>
                      </div>                    
                    </div>      
                </div> 
              </div>
            </div>
            
            <div className='w-full xxl:w-[23.8%] xl:w-[32%] sm:w-[48%]'>
              <div className='border border-gray300 rounded-[10px] sm:p-5 p-4'>
                <div className='flex items-center'>
                  <Image src={aavev2} alt=" "/>
                  <h3 className='text-sm font-semibold text-gray900 pl-[10px]'>AAVE V2 (AAVE)</h3>
                </div>
                <div className='flex lg:pt-8 pt-5 gap-8 border-b pb-3 border-gray300'>
                  <div>
                    <h3 className='lg:text-3xl text-2xl font-bold'>6.60%</h3>
                    <p className='text-sm font-medium text-[#33333340]'>Yield 30d</p>
                  </div>
                  <div>
                    <h3 className='lg:text-3xl text-2xl font-bold'>$258M</h3>
                    <p className='text-sm font-medium text-[#33333340]'>TVL</p>
                  </div> 
                </div>
                <div className='flex text-sm font-medium bg-gray100 mt-5 rounded-[4px]'>
                  <div className='px-4 bg-gray400 rounded-[4px] pt-2 pb-4'>
                    <h3>Risk</h3>
                    <h4 className='text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center'>C</h4>
                  </div>
                  <div className='pl-3 pt-2 pb-4'>
                    <div  className='border-r border-white pr-3'>
                      <h3 className='text-[#33333350] text-center'>Protocol</h3>
                      <div className='px-1 py-1 mt-1 rounded bg-white flex items-center gap-1'>
                        <Image src={aavelogo} alt=" "/>
                        <h4 className='text-[10px] font-bold text-gray900'>Aave</h4>
                      </div>
                    </div>
                  </div>
                  <div className='px-3 pt-2 pb-4'>
                    <h3 className='text-[#33333350] text-center'>Chain</h3>
                    <div className='px-1 py-1 mt-1 rounded bg-white flex items-center gap-1'>
                      <Image src={etherium} alt=" "/>
                      <h4 className='text-[10px] font-bold text-gray900'>Ethereum</h4>
                    </div>
                  </div>                
                </div>
              </div>
                <div className='border border-gray300 rounded-[10px] sm:px-5 py-[14px] p-4  my-[18px]'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <div className='bg-gray300 rounded-full p-5'></div>
                    <div className='pl-[10px]'>
                      <h3 className='text-sm font-semibold text-gray900'>Insert Name Here</h3>
                      <div className='flex sm:gap-4 gap-5'>
                        <div>
                          <h3 className='md:text-xl text-lg font-bold'>5.24%</h3>
                          <p className='text-[10px] font-medium text-[#33333340]'>Yield 30d</p>
                        </div>
                        <div>
                          <h3 className='md:text-xl text-lg font-bold'>$48M</h3>
                          <p className='text-[10px] font-medium text-[#33333340]'>TVL</p>
                        </div> 
                      </div>
                    </div>
                  </div>
                    <div>
                      <h4 className='text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center'>B</h4>
                      <div className='bg-gray200 rounded flex justify-center p-2 mt-[2px]'>
                        <Image src={protocol} alt=" " />
                      </div>
                      <div className='bg-gray200 rounded flex justify-center p-2 mt-[2px]'>
                        <Image src={etherium} alt=" "/>
                      </div>                    
                    </div>      
                </div> 
              </div>
              <div className='border border-gray300 rounded-[10px] sm:px-5 py-[14px] p-4'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <div className='bg-gray300 rounded-full p-5'></div>
                    <div className='pl-[10px]'>
                      <h3 className='text-sm font-semibold text-gray900'>Insert Name Here</h3>
                      <div className='flex sm:gap-4 gap-5'>
                        <div>
                          <h3 className='md:text-xl text-lg font-bold'>5.24%</h3>
                          <p className='text-[10px] font-medium text-[#33333340]'>Yield 30d</p>
                        </div>
                        <div>
                          <h3 className='md:text-xl text-lg font-bold'>$48M</h3>
                          <p className='text-[10px] font-medium text-[#33333340]'>TVL</p>
                        </div> 
                      </div>
                    </div>
                  </div>
                    <div>
                      <h4 className='text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center'>B</h4>
                      <div className='bg-gray200 rounded flex justify-center p-2 mt-[2px]'>
                        <Image src={protocol} alt=" " />
                      </div>
                      <div className='bg-gray200 rounded flex justify-center p-2 mt-[2px]'>
                        <Image src={etherium} alt=" "/>
                      </div>                    
                    </div>      
                </div> 
              </div>
            </div>

            <div className='w-full xxl:w-[23.8%] xl:w-[32%] sm:w-[48%] xl:flex xxl:block xl:justify-center xxl:justify-self-auto xl:gap-4'>
              <div className='border border-gray300 rounded-[10px] sm:p-5 p-4'>
                <div className='flex items-center'>
                  <Image src={uniswap} alt=" "/>
                  <h3 className='text-sm font-semibold text-gray900 pl-[10px]'>Uniswap</h3>
                </div>
                <div className='flex lg:pt-8 pt-5 gap-8 border-b pb-3 border-gray300'>
                  <div>
                    <h3 className='lg:text-3xl text-2xl font-bold'>12.37%</h3>
                    <p className='text-sm font-medium text-[#33333340]'>Yield 30d</p>
                  </div>
                  <div>
                    <h3 className='lg:text-3xl text-2xl font-bold'>$4B</h3>
                    <p className='text-sm font-medium text-[#33333340]'>TVL</p>
                  </div> 
                </div>
                <div className='flex text-sm font-medium bg-gray100 mt-5 rounded-[4px]'>
                  <div className='px-4 bg-gray400 rounded-[4px] pt-2 pb-4'>
                    <h3>Risk</h3>
                    <h4 className='text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center'>B</h4>
                  </div>
                  <div className='pl-3 pt-2 pb-4'>
                    <div  className='border-r border-white pr-3'>
                    <h3 className='text-[#33333350] text-center'>Protocol</h3>
                    <div className='px-1 py-1 mt-1 rounded bg-white flex items-center gap-1'>
                      <Image src={uniswaplogo} alt=" "/>
                      <h4 className='text-[10px] font-bold text-gray900'>Uniswap</h4>
                    </div>
                    </div>
                    
                  </div>
                  <div className='px-3 pt-2 pb-4'>
                    <h3 className='text-[#33333350] text-center'>Chain</h3>
                    <div className='px-1 py-1 mt-1 rounded bg-white flex items-center gap-1'>
                      <Image src={etherium} alt=" "/>
                      <h4 className='text-[10px] font-bold text-gray900'>Ethereum</h4>
                    </div>
                  </div>                
                </div>
              </div>
              <div>
                <div className='border border-gray300 rounded-[10px] sm:px-5 py-[14px] p-4 my-[18px]'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <div className='bg-gray300 rounded-full p-5'></div>
                      <div className='pl-[10px]'>
                        <h3 className='text-sm font-semibold text-gray900'>Insert Name Here</h3>
                        <div className='flex sm:gap-4 gap-5'>
                          <div>
                            <h3 className='md:text-xl text-lg font-bold'>5.24%</h3>
                            <p className='text-[10px] font-medium text-[#33333340]'>Yield 30d</p>
                          </div>
                          <div>
                            <h3 className='md:text-xl text-lg font-bold'>$48M</h3>
                            <p className='text-[10px] font-medium text-[#33333340]'>TVL</p>
                          </div> 
                        </div>
                      </div>
                    </div>
                      <div>
                        <h4 className='text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center'>B</h4>
                        <div className='bg-gray200 rounded flex justify-center p-2 mt-[2px]'>
                          <Image src={protocol} alt=" " />
                        </div>
                        <div className='bg-gray200 rounded flex justify-center p-2 mt-[2px]'>
                          <Image src={etherium} alt=" "/>
                        </div>                    
                      </div>      
                  </div> 
                </div>
                <div className='border border-gray300 rounded-[10px] sm:px-5 py-[14px] p-4'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <div className='bg-gray300 rounded-full p-5'></div>
                      <div className='pl-[10px]'>
                        <h3 className='text-sm font-semibold text-gray900'>Insert Name Here</h3>
                        <div className='flex sm:gap-4 gap-5'>
                          <div>
                            <h3 className='md:text-xl text-lg font-bold'>5.24%</h3>
                            <p className='text-[10px] font-medium text-[#33333340]'>Yield 30d</p>
                          </div>
                          <div>
                            <h3 className='md:text-xl text-lg font-bold'>$48M</h3>
                            <p className='text-[10px] font-medium text-[#33333340]'>TVL</p>
                          </div> 
                        </div>
                      </div>
                    </div>
                      <div>
                        <h4 className='text-[10px] font-bold mt-1 bg-primaryDarkBlue px-2 py-1 rounded text-white flex justify-center'>B</h4>
                        <div className='bg-gray200 rounded flex justify-center p-2 mt-[2px]'>
                          <Image src={protocol} alt=" " />
                        </div>
                        <div className='bg-gray200 rounded flex justify-center p-2 mt-[2px]'>
                          <Image src={etherium} alt=" "/>
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

export default Explore