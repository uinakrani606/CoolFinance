import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/img/coolFinance.svg";
import menubtn from "../assets/img/menubtn.svg";
import Avatar from "../assets/img/avatar.svg";
import Coolsmail from "../assets/img/cool-smail.svg";
import Discord from "../assets/img/Discord-icon.svg";
import Twitter from "../assets/img/Twitter-icon.svg";
import close from "../assets/img/close-icon.svg";
import arrowsidebar from "../assets/img/arrowsidebar.svg";
// import downarrow from "../assets/img/downarrow-.png";

function Sidebar() {
  const router = useRouter();
  const [menutoggle, setMenutoggle] = useState(false);
  const menutoggleHendler = () => {
    setMenutoggle(!menutoggle);
  };
  return (
    <div className="siderbar-main-sec">
      <div className="siderbar-logo-part">
        <Image src={Logo} alt="" />
        <span onClick={menutoggleHendler}>
          <Image src={menubtn} alt="" />
        </span>
      </div>
      <div className={`sidebar-condition menuopen ${menutoggle ? "open" : ""}`}>
        <div className="sidebar-toggle-menu" onClick={menutoggleHendler}>
          <Image src={close} alt="" />
        </div>
        <div className={`sidebar-toggle`}>
          <ul className="sidebar-menu sidebar-border">
            <li className={router.pathname == "/" ? "active" : ""}>
              <Link href="/">Explore</Link>
            </li>
            <li className={router.pathname == "/portfolio" ? "active" : ""}>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className={router.pathname == "/swapbridges" ? "active" : ""}>
              <Link href="/swapbridges">Swap & Bridges</Link>
            </li>
            <li className={router.pathname == "/wallets" ? "active" : ""}>
              <Link href="/wallets">Wallets</Link>
            </li>
            <li className={router.pathname == "/analysis" ? "active" : ""}>
              <Link href="/analysis">Analysis</Link>
            </li>
          </ul>
          <ul className="sidebar-menu siderbar-menu-bottom">
            <li className={router.pathname == "/transactions" ? "active" : ""}>
              <Link href="/transactions">Transactions</Link>
            </li>
            <li className={router.pathname == "/settings" ? "active" : ""}>
              <Link href="/settings">Settings</Link>
            </li>
            <li className="logout-btn">
              <Link href="#">Logout</Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-user">
          <div className="sidebar-user-part">
            <div className="sidebar-border-round">
              <div className="user-bottom">
                <div className="user-flex">
                  <div className="user-img">
                    <Image src={Avatar} alt="" />
                    <div className="name-user">
                      <h4>User name</h4>
                      <p>Director</p>
                    </div>
                  </div>
                  <div onClick={menutoggleHendler}>
                    <Link href={"#"}>
                      <a className={`toparrowsidebar ${menutoggle ? "invisible" : "visible"}`}>
                        <Image src={arrowsidebar} alt="" />
                      </a>
                    </Link>
                    <Link href={"#"} onClick={menutoggleHendler}>
                      <a className={`downarrow-img ${menutoggle ? "visible" : "invisible"}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13.451"
                          height="7.725"
                          viewBox="0 0 13.451 7.725"
                        >
                          <path
                            id="Path_59"
                            data-name="Path 59"
                            d="M-1926.941,601.848l5.311,5.311-5.311,5.311"
                            transform="translate(613.884 1928.355) rotate(90)"
                            fill="none"
                            stroke="
                      #ffffff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={`total-wrapper ${menutoggle ? "invisible" : ""}`}>
                <div className="Total-holding">
                  <div className="Total-holding-width">
                    <h4>$7,822</h4>
                    <p>Total holdings</p>
                  </div>
                  <div className="Total-holding-border">
                    <h4>+6.97%</h4>
                    <p>1d Change</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-sec-main">
            <div className="footer-sec">
              <Link href={"#"}>
                <a target="_blank">
                  <Image src={Coolsmail} alt="" />
                </a>
              </Link>
              <Link href={"#"}>
                <a target="_blank">
                  <Image src={Twitter} alt="" />
                </a>
              </Link>
              <Link href={"#"}>
                <a target="_blank">
                  <Image src={Discord} alt="" />
                </a>
              </Link>
            </div>
            <p className="footer-copyright">CoolFinance (c) 2022. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
