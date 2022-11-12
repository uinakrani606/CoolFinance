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
// import TradingViewChart, { CHART_TYPES } from '../components/TradingviewChart/index.js'
const TradingViewChart = dynamic(
  () => import("../components/TradingviewChart"),
  {
    loading: () => <p>Loading ...</p>,
    ssr: false,
  }
);

const Explore = () => {
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
    {/* total value sec start */}
      <div className="total-value-main">
        <div className="total-value-head">
          <h2>
            Total value locked DeFi 
          </h2>
          <div className="total-value-left">
            <div className='value-locked-part'>
              <div className='value-locked-top'>
                <h3>Total Value Locked (USD)</h3>
                <h2>$54.98b</h2>
              </div>
              <div className='value-locked-top'>
                <h3>Change (24h)</h3>
                <h2>2.40%</h2>
              </div>  
              <div className='value-locked-top value-locked-bottom'>
                <h3>MakerDAO Dominance</h3>
                <h2>14.94%</h2>
              </div>
            </div>
            <div className="total-value-right">
              <div className="total-right-conatin">
                <h3>
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
      {/* total value sec end */}
      {/* Explore all protocols sec Start */}
      <div className='explore-protocol-sec-main'>
          <div className='explore-protocol-head'>
            <h2>Explore all protocols</h2>
            <Link href={'#'}>
                <a>
                  <div className='view-more-btn plus-icon'>
                    View more
                    <svg xmlns="http://www.w3.org/2000/svg" width="7.725" height="13.451" viewBox="0 0 7.725 13.451">
                      <path id="Path_45" data-name="Path 45" d="M-1926.941,601.848l5.311,5.311-5.311,5.311" transform="translate(1928.355 -600.434)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    </svg>
                  </div>
                </a>                
              </Link>
          </div>
          <div className='explore-protocol'>
            <div className='explore-protocol-left'>
              <div className='protocol-box'>
                <div className='notional-part'>
                  <Image src={notional} alt=" "/>
                  <h3>Notional Eth Market</h3>
                </div>
                <div className='notional-part-text'>
                  <div>
                    <h3>7.94%</h3>
                    <p>Yield 30d</p>
                  </div>
                  <div>
                    <h3>$7M</h3>
                    <p>TVL</p>
                  </div> 
                </div>
                <div className='notional-bottompart'>
                  <div className='notional-risk'>
                    <h3>Risk</h3>
                    <h4>B</h4>
                  </div>
                  <div className='notional-protocol'>
                    <div  className='notional-protocol-inner'>
                      <h3>Protocol</h3>
                      <div className='protocol-img'>
                        <Image src={protocol} alt=" "/>
                        <h4>Notional</h4>
                      </div>
                    </div>                    
                  </div>
                  <div className='notional-chain'>
                    <h3>Chain</h3>
                    <div className='notional-chain-inner'>
                      <Image src={etherium} alt=" "/>
                      <h4>Ethereum</h4>
                    </div>
                  </div>                
                </div>
              </div>
              <div className='notional-insert-sec'>
              <div className='insert-sec'>
                <div className='insert-inner-part'>
                  <div className='name-insert-round'></div>
                    <div className='insert-contain'>
                      <h3>Insert Name Here</h3>
                      <div className='insert-contain-bottom'>
                        <div>
                          <h3>5.24%</h3>
                          <p>Yield 30d</p>
                        </div>
                        <div>
                          <h3>$48M</h3>
                          <p >TVL</p>
                        </div> 
                      </div>
                    </div>
                </div>
                <div className="insert-name-right">
                  <h4>B</h4>
                  <div className='insert-logo-part'>
                    <Image src={protocol} alt=" " />
                  </div>
                  <div className='insert-logo-part'>
                    <Image src={etherium} alt=" "/>
                  </div>                    
                </div>      
              </div> 
              </div>
              <div className='notional-insert-sec'>
              <div className='insert-sec'>
                <div className='insert-inner-part'>
                  <div className='name-insert-round'></div>
                    <div className='insert-contain'>
                      <h3>Insert Name Here</h3>
                      <div className='insert-contain-bottom'>
                        <div>
                          <h3>5.24%</h3>
                          <p>Yield 30d</p>
                        </div>
                        <div>
                          <h3>$48M</h3>
                          <p >TVL</p>
                        </div> 
                      </div>
                    </div>
                </div>
                <div className="insert-name-right">
                  <h4>B</h4>
                  <div className='insert-logo-part'>
                    <Image src={protocol} alt=" " />
                  </div>
                  <div className='insert-logo-part'>
                    <Image src={etherium} alt=" "/>
                  </div>                    
                </div>      
              </div> 
              </div>                            
            </div> 
            <div className='explore-protocol-left'>
              <div className='protocol-box'>
                <div className='notional-part'>
                  <Image src={curvesvg} alt=" "/>
                  <h3>Curve Finance</h3>
                </div>
                <div className='notional-part-text'>
                  <div>
                    <h3>6.74%</h3>
                    <p>Yield 30d</p>
                  </div>
                  <div>
                    <h3>$211M</h3>
                    <p>TVL</p>
                  </div> 
                </div>
                <div className='notional-bottompart'>
                  <div className='notional-risk'>
                    <h3>Risk</h3>
                    <h4>A</h4>
                  </div>
                  <div className='notional-protocol'>
                    <div  className='notional-protocol-inner'>
                      <h3>Protocol</h3>
                      <div className='protocol-img'>
                        <Image src={curveprotocol} alt=" "/>
                        <h4>Curve</h4>
                      </div>
                    </div>                    
                  </div>
                  <div className='notional-chain'>
                    <h3>Chain</h3>
                    <div className='notional-chain-inner'>
                      <Image src={etherium} alt=" "/>
                      <h4>Ethereum</h4>
                    </div>
                  </div>                
                </div>
              </div>
              <div className='notional-insert-sec'>
              <div className='insert-sec'>
                <div className='insert-inner-part'>
                  <div className='name-insert-round'></div>
                    <div className='insert-contain'>
                      <h3>Insert Name Here</h3>
                      <div className='insert-contain-bottom'>
                        <div>
                          <h3>5.24%</h3>
                          <p>Yield 30d</p>
                        </div>
                        <div>
                          <h3>$48M</h3>
                          <p >TVL</p>
                        </div> 
                      </div>
                    </div>
                </div>
                <div className="insert-name-right">
                  <h4>B</h4>
                  <div className='insert-logo-part'>
                    <Image src={protocol} alt=" " />
                  </div>
                  <div className='insert-logo-part'>
                    <Image src={etherium} alt=" "/>
                  </div>                    
                </div>      
              </div> 
              </div>
              <div className='notional-insert-sec'>
              <div className='insert-sec'>
                <div className='insert-inner-part'>
                  <div className='name-insert-round'></div>
                    <div className='insert-contain'>
                      <h3>Insert Name Here</h3>
                      <div className='insert-contain-bottom'>
                        <div>
                          <h3>5.24%</h3>
                          <p>Yield 30d</p>
                        </div>
                        <div>
                          <h3>$48M</h3>
                          <p >TVL</p>
                        </div> 
                      </div>
                    </div>
                </div>
                <div className="insert-name-right">
                  <h4>B</h4>
                  <div className='insert-logo-part'>
                    <Image src={protocol} alt=" " />
                  </div>
                  <div className='insert-logo-part'>
                    <Image src={etherium} alt=" "/>
                  </div>                    
                </div>      
              </div> 
              </div>                            
            </div>   
            <div className='explore-protocol-left'>
              <div className='protocol-box'>
                <div className='notional-part'>
                  <Image src={aavev2} alt=" "/>
                  <h3>AAVE V2 (AAVE)</h3>
                </div>
                <div className='notional-part-text'>
                  <div>
                    <h3>6.60%</h3>
                    <p>Yield 30d</p>
                  </div>
                  <div>
                    <h3>$258M</h3>
                    <p>TVL</p>
                  </div> 
                </div>
                <div className='notional-bottompart'>
                  <div className='notional-risk'>
                    <h3>Risk</h3>
                    <h4>C</h4>
                  </div>
                  <div className='notional-protocol'>
                    <div  className='notional-protocol-inner'>
                      <h3>Protocol</h3>
                      <div className='protocol-img'>
                        <Image src={aavelogo} alt=" "/>
                        <h4>Aave</h4>
                      </div>
                    </div>                    
                  </div>
                  <div className='notional-chain'>
                    <h3>Chain</h3>
                    <div className='notional-chain-inner'>
                      <Image src={etherium} alt=" "/>
                      <h4>Ethereum</h4>
                    </div>
                  </div>                
                </div>
              </div>
              <div className='notional-insert-sec'>
              <div className='insert-sec'>
                <div className='insert-inner-part'>
                  <div className='name-insert-round'></div>
                    <div className='insert-contain'>
                      <h3>Insert Name Here</h3>
                      <div className='insert-contain-bottom'>
                        <div>
                          <h3>5.24%</h3>
                          <p>Yield 30d</p>
                        </div>
                        <div>
                          <h3>$48M</h3>
                          <p >TVL</p>
                        </div> 
                      </div>
                    </div>
                </div>
                <div className="insert-name-right">
                  <h4>B</h4>
                  <div className='insert-logo-part'>
                    <Image src={protocol} alt=" " />
                  </div>
                  <div className='insert-logo-part'>
                    <Image src={etherium} alt=" "/>
                  </div>                    
                </div>      
              </div> 
              </div>
              <div className='notional-insert-sec'>
              <div className='insert-sec'>
                <div className='insert-inner-part'>
                  <div className='name-insert-round'></div>
                    <div className='insert-contain'>
                      <h3>Insert Name Here</h3>
                      <div className='insert-contain-bottom'>
                        <div>
                          <h3>5.24%</h3>
                          <p>Yield 30d</p>
                        </div>
                        <div>
                          <h3>$48M</h3>
                          <p >TVL</p>
                        </div> 
                      </div>
                    </div>
                </div>
                <div className="insert-name-right">
                  <h4>B</h4>
                  <div className='insert-logo-part'>
                    <Image src={protocol} alt=" " />
                  </div>
                  <div className='insert-logo-part'>
                    <Image src={etherium} alt=" "/>
                  </div>                    
                </div>      
              </div> 
              </div>                            
            </div>   
            <div className='explore-protocol-left uniswap-sec-main'>
              <div className='protocol-box'>
                <div className='notional-part'>
                  <Image src={uniswap} alt=" "/>
                  <h3>Uniswap</h3>
                </div>
                <div className='notional-part-text'>
                  <div>
                    <h3>12.37%</h3>
                    <p>Yield 30d</p>
                  </div>
                  <div>
                    <h3>$4B</h3>
                    <p>TVL</p>
                  </div> 
                </div>
                <div className='notional-bottompart'>
                  <div className='notional-risk'>
                    <h3>Risk</h3>
                    <h4>B</h4>
                  </div>
                  <div className='notional-protocol'>
                    <div  className='notional-protocol-inner'>
                      <h3>Protocol</h3>
                      <div className='protocol-img'>
                        <Image src={uniswaplogo} alt=" "/>
                        <h4>$4B</h4>
                      </div>
                    </div>                    
                  </div>
                  <div className='notional-chain'>
                    <h3>Chain</h3>
                    <div className='notional-chain-inner'>
                      <Image src={etherium} alt=" "/>
                      <h4>Ethereum</h4>
                    </div>
                  </div>                
                </div>
              </div>
              <div className="uniswp-sec">
                <div className='notional-insert-sec'>
                <div className='insert-sec'>
                  <div className='insert-inner-part'>
                    <div className='name-insert-round'></div>
                      <div className='insert-contain'>
                        <h3>Insert Name Here</h3>
                        <div className='insert-contain-bottom'>
                          <div>
                            <h3>5.24%</h3>
                            <p>Yield 30d</p>
                          </div>
                          <div>
                            <h3>$48M</h3>
                            <p >TVL</p>
                          </div> 
                        </div>
                      </div>
                  </div>
                  <div className="insert-name-right">
                    <h4>B</h4>
                    <div className='insert-logo-part'>
                      <Image src={protocol} alt=" " />
                    </div>
                    <div className='insert-logo-part'>
                      <Image src={etherium} alt=" "/>
                    </div>                    
                  </div>      
                </div> 
                </div>
                <div className='notional-insert-sec uniswap-bottom'>
                <div className='insert-sec'>
                  <div className='insert-inner-part'>
                    <div className='name-insert-round'></div>
                      <div className='insert-contain'>
                        <h3>Insert Name Here</h3>
                        <div className='insert-contain-bottom'>
                          <div>
                            <h3>5.24%</h3>
                            <p>Yield 30d</p>
                          </div>
                          <div>
                            <h3>$48M</h3>
                            <p >TVL</p>
                          </div> 
                        </div>
                      </div>
                  </div>
                  <div className="insert-name-right">
                    <h4>B</h4>
                    <div className='insert-logo-part'>
                      <Image src={protocol} alt=" " />
                    </div>
                    <div className='insert-logo-part'>
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
      {/* Explore all protocols sec Start */}
    </>
  );
};

export default Explore;
