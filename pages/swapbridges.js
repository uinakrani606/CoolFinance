import Link from 'next/link';
import React from 'react'

const SwapBridges = () => {
  
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className='max-w-[1203px] w-full mx-auto px-[15px]'>
        <div className='lg:mt-11 mt-5'>
          <h2 className='lg:text-[40px] text-[32px] lg:leading-6 leading-snug font-bold text-primaryDarkBlue inline-block'>Swap & Bridges</h2>
          <div className='border border-gray300 mt-[30px] rounded-[10px] max-w-[578px] w-full'>
            <div className='flex items-center justify-around pt-[14px] pb-[18px] border-b border-gray300'>
              <Link href={'#'}>
                <a className={
                      "text-lg font-semibold rounded block leading-normal " +
                      (openTab === 1
                        ? "bg-blueGray-600 text-primaryBlue"
                        : "text-blueGray-600 bg-white")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >Bridge
                </a>
              </Link> 
              <Link href={'#'}>
                <a className={
                      "text-lg font-semibold rounded block leading-normal " +
                      (openTab === 1
                        ? "bg-blueGray-600 text-gray900"
                        : "text-primaryBlue bg-white")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >Swap
                </a>
              </Link>          
            </div>
          </div>
        </div>
      </div>  
         
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>huihiujhiu
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>                
              </div>
            </div>
          </div>        
    </>
  )
}
export default SwapBridges
