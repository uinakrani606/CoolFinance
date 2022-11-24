import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import notional from "../assets/img/notionalogo.svg";
import curvesvg from "../assets/img/curvefnance.svg";
import aavev2 from "../assets/img/aaveaavelogo.svg";
import uniswap from "../assets/img/uniswap.svg";
const TradingViewChart = dynamic(() => import("../components/TradingviewChart"), {
  loading: () => <p>Loading ...</p>,
  ssr: false,
});
const Portfolio = () => {
  const [defaultSelectedRange, setDefaultSelectedRange] = useState(999999);

  const updateDefaultSelectedRange = (value) => {
    setDefaultSelectedRange(value);
  }

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
      {/* portfolia page Strat */}
      <div className="total-value-main">
        <div className="portfolia-sec-main">
          <h2>Portfolio Performance</h2>
          <div className="portfolia-part">
            <div className="portfolia-left-sec">
              <div className="portfolia-left-top">
                <h3>Pool holdings</h3>
                <h2>$761</h2>
              </div>
              <div className="portfolia-left-top">
                <h3 className="text-base font-medium">Asset holdings</h3>
                <h2>$2,651</h2>
              </div>
              <div className="portfolia-left-top portfolia-left-bottom">
                <h3 className="text-base font-medium">Total holdings</h3>
                <h2>$3,412</h2>
              </div>
            </div>

            <div className="portfolia-right-sec">
              <div className="portfolia-right-contain">
                <h3>Performance</h3>
                {/* <h2 className="text-3xl text-gray900 font-bold">$54.98b</h2> */}
                <TradingViewChart
                  data={dailyData}
                  base={totalLiquidityUSD}
                  baseChange={liquidityChangeUSD}
                  title="Liquidityy"
                  field="totalLiquidityUSD"
                  width={width}
                  type={CHART_TYPES.AREA}
                  defaultSelectedRange={defaultSelectedRange}
                  updateDefaultSelectedRange={updateDefaultSelectedRange}
                />
              </div>
            </div>
          </div>
        </div>
        {/* asset section start */}
        <div className="portfolia-asset-main">
          <h2>Assets</h2>
        </div>
        <div className="portfolia-asset-sec">
          <div className="portfolia-asset-flex">
            <div className="asset-main-sec">
              <div className="asset-position">
                <div className="transactions-box portfolio-box">
                  <div className="tab-content tab-space">
                    <div>
                      <div className="assets-box notional-eht">
                        <div className="portfolia-market">                         
                          <h3>Asset</h3>
                        </div>                                            
                        <div className="notional-width">
                          <h3>Protocol/Token</h3>
                        </div>
                        <div className="notional-width">
                          <h3>Network</h3>
                        </div>
                        <div className="notional-width">
                          <h3>APR</h3>
                        </div>
                        <div className="notional-width">
                          <h3>Price</h3>
                        </div>
                        <div className="notional-width">
                          <h3>Balance</h3>
                        </div>
                        <div className="notional-width notional-number">
                          <h3>Value</h3>
                        </div>
                        <div className="notional-width">
                          <h3>Manage</h3>
                        </div>
                      </div>
                      <div className="notional-eht">
                        <Link href={"#"} >
                          <a className="portfolia-market">
                          <Image src={notional} alt=" " />
                          <p className="data-table-transition">Notional Eth Market</p>
                          </a>
                        </Link>
                        <div className="notional-width">
                          <p>Notional</p>
                        </div>
                        <div className="notional-width">
                          <p>Ethereum</p>
                        </div>
                        <div className="notional-width">
                          <p>2.69%</p>
                        </div>
                        <div className="notional-width">
                          <p>$0.370</p>
                        </div>
                        <div className="notional-width">
                          <p>1,000</p>
                        </div>
                        <div className="notional-width notional-number">
                          <p>$370.00</p>
                        </div>
                        <div className="notional-width">
                          <button className="wallet-btn manage-btn plus-icon">
                            <span>Manage position</span>
                          </button>
                        </div>
                      </div>
                      <div className="notional-eht">
                        <Link href={"#"}>
                          <a className="portfolia-market">
                          <Image src={curvesvg} alt=" " />
                          <p className="data-table-transition">Curve Finance</p>
                          </a>                        
                        </Link>
                        <div className="notional-width">
                          <p>Curve</p>
                        </div>
                        <div className="notional-width">
                          <p>Ethereum</p>
                        </div>
                        <div className="notional-width">
                          <p>1.32%</p>
                        </div>
                        <div className="notional-width">
                          <p>$0.904</p>
                        </div>
                        <div className="notional-width">
                          <p>2,400</p>
                        </div>
                        <div className="notional-width notional-number">
                          <p>$2,169.60</p>
                        </div>
                        <div className="notional-width">
                          <button className="wallet-btn manage-btn plus-icon">
                            <span>Manage position</span>
                          </button>
                        </div>
                      </div>
                      <div className="notional-eht">
                        <Link href={"#"}>
                          <a className="portfolia-market">
                          <Image src={aavev2} alt=" " />
                          <p className="data-table-transition">AAVE V2 (AAVE)</p>
                          </a>                        
                        </Link>
                        <div className="notional-width">
                          <p>Aave</p>
                        </div>
                        <div className="notional-width">
                          <p>Ethereum</p>
                        </div>
                        <div className="notional-width">
                          <p>0.55%</p>
                        </div>
                        <div className="notional-width">
                          <p>$85.225</p>
                        </div>
                        <div className="notional-width">
                          <p>5</p>
                        </div>
                        <div className="notional-width notional-number">
                          <>$426.12</>
                        </div>
                        <div className="notional-width">
                          <button className="wallet-btn manage-btn plus-icon">
                            <span className="">Manage position</span>
                          </button>
                        </div>
                      </div>
                      <div className="notional-eht">
                        <Link href={"#"}>
                          <a className="portfolia-market">
                          <Image src={uniswap} alt=" " />
                          <p className="data-table-transition">Uniswap</p>
                          </a>                        
                        </Link>
                        <div className="notional-width">
                          <p>Uniswap</p>
                        </div>
                        <div className="notional-width">
                          <p>Ethereum</p>
                        </div>
                        <div className="notional-width">
                          <p>2.31%</p>
                        </div>
                        <div className="notional-width">
                          <p>$7.152</p>
                        </div>
                        <div className="notional-width">
                          <p>80</p>
                        </div>
                        <div className="notional-width notional-number">
                          <p>$572.16</p>
                        </div>
                        <div className="notional-width">
                          <button className="wallet-btn manage-btn plus-icon">
                            <span className="">Manage position</span>
                          </button>
                        </div>
                      </div>
                      <div className="notional-eht">
                        <Link href={"#"}>
                          <a className="portfolia-market">
                          <div className="portfolia-insert"></div>
                          <p className="data-table-transition">Insert Name Here</p>
                          </a>                        
                        </Link>
                        <div className="notional-width">
                          <p className="text-gray900 text-sm font-light">Protocol Name</p>
                        </div>
                        <div className="notional-width">
                          <p className="text-gray900 text-sm font-light">Network Name</p>
                        </div>
                        <div className="notional-width">
                          <p className="text-gray900 text-sm font-light">5.8%</p>
                        </div>
                        <div className="notional-width">
                          <p className="text-gray900 text-sm font-light">$1.10</p>
                        </div>
                        <div className="notional-width">
                          <p className="text-gray900 text-sm font-light">500</p>
                        </div>
                        <div className="notional-width notional-number">
                          <p className="text-gray900 text-sm font-semibold">$550.00</p>
                        </div>
                        <div className="notional-width">
                          <button className="wallet-btn manage-btn plus-icon">
                            <span className="">Manage position</span>
                          </button>
                        </div>
                      </div>
                      <div className="notional-eht">
                        <Link href={"#"}>
                          <a className="portfolia-market">
                          <div className="portfolia-insert"></div>
                          <p className="data-table-transition">Insert Name Here</p>
                          </a>                        
                        </Link>
                        <div className="notional-width">
                          <p className="text-gray900 text-sm font-light">Protocol Name</p>
                        </div>
                        <div className="notional-width">
                          <p className="text-gray900 text-sm font-light">Network Name</p>
                        </div>
                        <div className="notional-width">
                          <p className="text-gray900 text-sm font-light">5.8%</p>
                        </div>
                        <div className="notional-width">
                          <p className="text-gray900 text-sm font-light">$1.10</p>
                        </div>
                        <div className="notional-width">
                          <p className="text-gray900 text-sm font-light">500</p>
                        </div>
                        <div className="notional-width notional-number">
                          <p className="text-gray900 text-sm font-semibold">$550.00</p>
                        </div>
                        <div className="notional-width">
                          <button className="wallet-btn manage-btn plus-icon">
                            <span className="">Manage position</span>
                          </button>
                        </div>
                      </div>
                      <div className="notional-eht">
                        <Link href={"#"}>
                          <a className="portfolia-market">
                          <div className="portfolia-insert"></div>
                          <p className="data-table-transition">Insert Name Here</p>
                          </a>                        
                        </Link>
                        <div className="notional-width">
                          <p className="text-gray900 text-sm font-light">Protocol Name</p>
                        </div>
                        <div className="notional-width">
                          <p className="text-gray900 text-sm font-light">Network Name</p>
                        </div>
                        <div className="notional-width">
                          <p className="text-gray900 text-sm font-light">5.8%</p>
                        </div>
                        <div className="notional-width">
                          <p className="text-gray900 text-sm font-light">$1.10</p>
                        </div>
                        <div className="notional-width">
                          <p className="text-gray900 text-sm font-light">500</p>
                        </div>
                        <div className="notional-width notional-number">
                          <p className="text-gray900 text-sm font-semibold">$550.00</p>
                        </div>
                        <div className="notional-width">
                          <button className="wallet-btn manage-btn plus-icon">
                            <span className="">Manage position</span>
                          </button>
                        </div>
                      </div>
                      <div className="notional-eht">
                        <Link href={"#"}>
                          <a className="portfolia-market">
                          <div className="portfolia-insert"></div>
                          <p className="data-table-transition">Insert Name Here</p>
                          </a>                        
                        </Link>
                        <div className="notional-width">
                          <p className="text-gray900 text-sm font-light">Protocol Name</p>
                        </div>
                        <div className="notional-width">
                          <p className="text-gray900 text-sm font-light">Network Name</p>
                        </div>
                        <div className="notional-width">
                          <p className="text-gray900 text-sm font-light">5.8%</p>
                        </div>
                        <div className="notional-width">
                          <p className="text-gray900 text-sm font-light">$1.10</p>
                        </div>
                        <div className="notional-width">
                          <p className="text-gray900 text-sm font-light">500</p>
                        </div>
                        <div className="notional-width notional-number">
                          <p className="text-gray900 text-sm font-semibold">$550.00</p>
                        </div>
                        <div className="notional-width">
                          <button className="wallet-btn manage-btn plus-icon">
                            <span className="">Manage position</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* asset section end */}
      </div>
      {/* portfolia page End */}
    </>
  );
};

export default Portfolio;
