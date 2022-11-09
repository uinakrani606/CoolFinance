import React, {useState} from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/img/coolFinance.svg';
import menubtn from '../assets/img/menubtn.svg';
import Avatar from '../assets/img/avatar.svg';
import Coolsmail from '../assets/img/cool-smail.svg';
import Discord from '../assets/img/Discord-icon.svg';
import Twitter from '../assets/img/Twitter-icon.svg';
import close from '../assets/img/close-icon.svg';
import arrowsidebar from '../assets/img/arrowsidebar.svg';

function Sidebar() {
 
  const router = useRouter();

  const [menutoggle, setMenutoggle] = useState(false);
  const menutoggleHendler = () => { 
    setMenutoggle(!menutoggle);
  };

  return (
    <div className='lg:w-[300px] w-full lg:h-screen bg-primaryDarkBlue text-white lg:fixed'>
      <div className='lg:pt-10 lg:py-0 py-4 lg:px-[30px] px-[15px] flex justify-between'>
        <Image src={Logo} alt="" />
        <span className='items-center lg:hidden flex py-3 pl-3' onClick={menutoggleHendler}>
          <Image src={menubtn} alt="" />
        </span>
      </div>
      <div className={`lg:relative lg:left-0 lg:w-full bg-primaryDarkBlue h-[calc(100%-86px)] fixed left-full z-50 menuopen ${menutoggle ? 'open' : ''}`}>
        <div className='w-full lg:hidden flex justify-end pt-4 pr-4' onClick={menutoggleHendler}>
          <Image src={close} alt="" />
        </div>
        <div className={`px-[30px] bg-primaryDarkBlue lg:block h-[calc(100%-86px)]`}>
          <ul className='sidebar-menu sidebar-border lg:pt-9 pt-4 pb-3'>
            <li className={router.pathname == "/explore" ? "active" : ""}>
              <Link href="/explore">Explore</Link>
            </li>
            <li className={router.pathname == "/portfolio" ? "active" : ""}>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className={router.pathname == "/swap-bridges" ? "active" : ""}>
              <Link href="/swap-bridges">Swap & Bridges</Link>
            </li>
            <li className={router.pathname == "/wallets" ? "active" : ""}>
              <Link href="/wallets">Wallets</Link>
            </li>
            <li className={router.pathname == "/analysis" ? "active" : ""}>
              <Link href="/analysis">Analysis</Link>
            </li>
          </ul>
          <ul className='sidebar-menu pt-3 pb-3'>
            <li className={router.pathname == "/transactions" ? "active" : ""}>
              <Link href="/transactions">Transactions</Link>
            </li>
            <li className={router.pathname == "/settings" ? "active" : ""}>
              <Link href="/settings">Settings</Link>
            </li>
            <li className='text-primaryBlue'>
              <Link href="#" >Logout</Link>
            </li>
          </ul>
        </div>
        <div className='lg:absolute bg-primaryDarkBlue lg:bottom-0 w-full lg:pt-0 pt-8 pb-7px-[30px] lg:block hidden'>
          <div className='px-[30px]'>
            <div className='rounded-[10px] bg-[#00000030] mb-[30px]'>
              <div className='border-b border-[#0770E530]'>
                  <div className='p-5 flex items-center justify-between'>
                    <div className='flex'>
                    <Image src={Avatar} alt="" />
                    <div className='pl-3'>
                      <h4 className='text-sm'>User name</h4>
                      <p className='text-[10px] opacity-40'>Director</p>
                    </div>
                    </div>
                    <div>
                     <Image src={arrowsidebar} alt="" />
                    </div>                    
                  </div>
              </div>
              <div className='p-5 flex'>
                <div className='w-1/2'>
                  <h4 className='text-base'>$7,822</h4> 
                  <p className='text-[10px] opacity-40'>Total holdings</p>
                </div>
                <div className='pl-5 border-l border-[#0770E530]'></div>
                <div className=''>
                  <h4 className='text-base'>+6.97%</h4> 
                  <p className='text-[10px] opacity-40'>1d Change</p>
                </div>
              </div>
            </div>
          </div>
          <div className='pt-[30px] pb-[27px] border-t border-[#0770E530] px-7'>
            <div className='w-full mx-auto mb-[14px] max-w-[90px] flex justify-between items-center'>
              <Link href={'#'} >
                <a target="_blank">
                  <Image src={Coolsmail} alt="" />
                </a>
              </Link>
              <Link href={'#'}>
                <a target="_blank">
                  <Image src={Twitter} alt="" />
                </a>
              </Link>
              <Link href={'#'}>
                <a target="_blank">
                  <Image src={Discord} alt="" />
                </a>
              </Link> 
            </div>
            <p className='text-[10px] opacity-40 text-center'>CoolFinance (c) 2022. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar