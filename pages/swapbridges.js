import Link from "next/link";
import React from "react";
import { Fragment, useEffect, useRef, useState, Component } from "react";
import Image from "next/image";
import Ethreum from "../assets/img/ethereum.svg";
import Polygon from "../assets/img/Polygon.svg";
import Leftrightarrow from "../assets/img/left-right-arrow.svg";
import { Menu, Transition } from "@headlessui/react";
import MaticIcon from "../assets/img/matic-icon.svg";
import EthIcon from "../assets/img/eth-icon.svg";
import Uniswap from "../assets/img/uniswap.svg";
import BlueDropdown from "../assets/img/blue-down-arrow.svg";
import OriginProtocol from "../assets/img/origin-protocol.svg";

const SwapBridges = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const sendInput = useRef(0);
  const receiveInput = useRef(0);
  const swapReceiveInput = useRef(0);
  const swapSendInput = useRef(0);
  const [count, setCount] = useState(100);
  const [balanceCount , setbalanceCount] = useState(500);
  
  const [balance] = useState(0.1);

  const [countnumber, setCountnumber] = useState(20);
  const [balanceeth] = useState(30);

  const [countitem, setCountitem] = useState(4205.975);
  const [balanceuni] = useState(500);

  const [sendInputValue, setSendInputValue] = useState(100);
  const [receiveInputValue, setReceiveInputValue] = useState(13.453);
  const [swapSendInputValue, setSwapSendInputValue] = useState(20);
  const [swapReceiveInputValue, setSwapReceiveInputValue] = useState(4205.975);

  const setSendValueToField = () => {
    sendInput.current.value = balanceCount;
  }

  const onChangeSendInputValue = (e) => {
    setSendInputValue(e.target.value);
  }

  const setReceiveValueToField = () => {
    receiveInput.current.value = balance;
  }

  const onChangeReceiveInputValue = (e) => {
    setReceiveInputValue(e.target.value);
  }

  const setSwapSendValueToField = (value) => {
    swapSendInput.current.value = value;
  }

  const setSwapReceiveValueToField = (value) => {
    swapReceiveInput.current.value = value;
  }

  return (
    <>
      <div className="total-value-main">
        <div className="swap-head">
          <h2>Swap & Bridges</h2>
        </div>
        <div className="swap-bridge-heading">
          <div className="bridge-swap-sec">
            <div className="">
              <div className="bridge-part">
                <Link href={"#"}>
                  <a
                    className={" " + (openTab === 1 ? "bridge-border" : "")}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    Bridge
                  </a>
                </Link>
                <Link href={"#"}>
                  <a
                    className={" " + (openTab === 1 ? "" : "bridge-border")}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    Swap
                  </a>
                </Link>
              </div>
            </div>
            <div className="bridge-condition-sec">
              <div className="bridge-sec">
                <div className="tab-content tab-space">
                  <div className={openTab === 1 ? "bridge-block" : "bridge-hidden"} id="link1">
                    <div>
                      <div className="bridge-relative">
                        <span></span>
                        <select className="dropdown-wallet filter-dropdown" name="" id="">
                          <option value="" selected>
                            Select wallet
                          </option>
                          <option value="">Queue</option>
                          <option value="">History</option>
                        </select>
                      </div>
                      <div className="wrapper-bridge"></div>
                      <div className="bridge-ehterium">
                        <div className="bridge-ehterium-width">
                          <h3>Transfer from</h3>
                          <div className="bridge-queue-etherium">
                            <span className="etherium-img">
                              <Image src={Ethreum} alt="" className="" />
                            </span>
                            <select className="filter-dropdown" name="" id="">
                              <option value="" selected>
                                Ethereum
                              </option>
                              <option value="">Queue</option>
                              <option value="">History</option>
                            </select>
                          </div>
                        </div>
                        <div className="select-reverse ">
                          <div className="top-bottom-arrow">
                            <Image src={Leftrightarrow} alt="" />
                          </div>
                        </div>
                        <div className="bridge-ehterium-width">
                          <h3>Transfer to</h3>
                          <div className="bridge-queue-etherium">
                            <span className="etherium-img">
                              <Image src={Polygon} alt="" className="polygon-img" />
                            </span>
                            <select className="polygon-dropdown filter-dropdown" name="" id="">
                              <option value="" selected>
                                Polygon
                              </option>
                              <option value="">Queue</option>
                              <option value="">History</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="bridge-recieve-btn">
                        <div className="bridge-recieve-flex">
                          <div className="bridge-recieve-width">
                            <span>Send</span>
                            <div className="icon-flex">
                              <span className="wrapper-recive-absolute">
                                <Image src={OriginProtocol} alt="" className="" />
                              </span>
                              <div className="recieve-position">
                                <Menu as="div" className="recieve-menu">
                                  <div className="recieve-flex">
                                    <select className="eth-dropdown ogn-dropdown filter-dropdown" name="" id="">
                                      <optgroup>
                                        <option value="" selected>
                                          OGN
                                        </option>
                                        <option value="">SWAP</option>
                                      </optgroup>
                                    </select>
                                  </div>
                                  <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                  >
                                    <Menu.Items className="wrapper-menu-contain">
                                      <div className="wrapper-menu-matic">
                                        <Menu.Item>
                                          {({ active }) => (
                                            <button className={`${active ? "bg-violet-500" : "text-gray-900"} group`}>
                                              {active ? "bridge" : "bridge"}
                                            </button>
                                          )}
                                        </Menu.Item>
                                        <Menu.Item>
                                          {({ active }) => (
                                            <button className={`${active ? "bg-violet-500" : "text-gray-900"} group`}>
                                              {active ? "swap" : "swap"}
                                            </button>
                                          )}
                                        </Menu.Item>
                                      </div>
                                    </Menu.Items>
                                  </Transition>
                                </Menu>
                              </div>
                            </div>
                            <div className="matic-box">
                              <p>Balance:</p>
                              <p onClick={setSendValueToField}>{balanceCount}</p>                              
                            </div>
                          </div>
                          <div className="matic-right">
                            <input type="number" ref={sendInput} value={sendInputValue} onChange={onChangeSendInputValue} />
                            <span>$16.03 </span>
                          </div>
                        </div>
                      </div>
                      <div className="bridge-recieve-btn">
                        <div className="bridge-recieve-flex">
                          <div className="bridge-recieve-width">
                            <span>Receive</span>
                            <div className="icon-flex">
                              <span className="wrapper-recive-absolute">
                                <Image src={MaticIcon} alt="" className="" />
                              </span>
                              <div className="recieve-position">
                                <Menu as="div" className="recieve-menu">
                                  <div className="recieve-flex">
                                    <select className="eth-dropdown ogn-dropdown filter-dropdown" name="" id="">
                                      <option value="" selected>
                                        MATIC
                                      </option>
                                      <option value="">SWAP</option>
                                    </select>
                                  </div>
                                  <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                  >
                                    <Menu.Items className="wrapper-menu-contain">
                                      <div className="wrapper-menu-matic">
                                        <Menu.Item>
                                          {({ active }) => (
                                            <button className={`${active ? "bg-violet-500 " : "text-gray-900"} group `}>
                                              {active ? "bridge" : "bridge"}
                                            </button>
                                          )}
                                        </Menu.Item>
                                        <Menu.Item>
                                          {({ active }) => (
                                            <button className={`${active ? "bg-violet-500" : "text-gray-900"} group`}>
                                              {active ? "swap" : "swap"}
                                            </button>
                                          )}
                                        </Menu.Item>
                                      </div>
                                    </Menu.Items>
                                  </Transition>
                                </Menu>
                              </div>
                            </div>

                            <div className="matic-box">
                              <p>Balance:</p>
                              <span>{balance}</span>
                            </div>
                          </div>
                          <div className="matic-right">                           
                            <input type="number" ref={receiveInput} value={receiveInputValue} onChange={onChangeReceiveInputValue} />
                            <span>$16.15</span>
                          </div>
                        </div>
                      </div>

                      <div className="bridge-bottom">
                        <div className="bridge-bottom-main">
                          <p>Bridge</p>
                          <p>~5 mins $0.00</p>
                        </div>
                        <div className="bridge-bottom-main">
                          <p>Network fee</p>
                          <p>Fast $4.51</p>
                        </div>
                      </div>
                      <div className="bridge-bottom-border"></div>

                      <div className="add-btn">
                        <button className="wallet-btn">
                          <span>Bridge</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={openTab === 2 ? "swap-block" : "swap-hidden"} id="link2">
                    <div>
                      <div className="bridge-relative">
                        <span></span>
                        <select className="dropdown-wallet filter-dropdown" name="" id="">
                          <option value="" selected>
                            Select wallet
                          </option>
                          <option value="">Queue</option>
                          <option value="">History</option>
                        </select>
                      </div>
                      <div className="wrapper-bridge"></div>
                      <div className="bridge-ehterium">
                        <div className="bridge-ehterium-width">
                          <h3>Chain</h3>
                          <div className="bridge-queue-etherium">
                            <span className="etherium-img">
                              <Image src={Ethreum} alt="" className="" />
                            </span>
                            <select className="filter-dropdown" name="" id="">
                              <option value="" selected>
                                Ethereum
                              </option>
                              <option value="">Queue</option>
                              <option value="">History</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="bridge-recieve-btn">
                        <div className="bridge-recieve-flex">
                          <div className="bridge-recieve-width">
                            <span>Send</span>
                            <div className="icon-flex">
                              <span className="wrapper-recive-absolute">
                                <Image src={EthIcon} alt="" className="" />
                              </span>
                              <div className="recieve-position">
                                <Menu as="div" className="recieve-menu">
                                  <div className="recieve-flex">
                                    <select className="eth-dropdown ogn-dropdown filter-dropdown" name="" id="">
                                      <option value="" selected>
                                        ETH
                                      </option>
                                      <option value="">SWAP</option>
                                    </select>
                                  </div>
                                  <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                  >
                                    <Menu.Items className="wrapper-menu-contain">
                                      <div className="wrapper-menu-matic">
                                        <Menu.Item>
                                          {({ active }) => (
                                            <button className={`${active ? "bg-violet-500 " : "text-gray-900"} group `}>
                                              {active ? "bridge" : "bridge"}
                                            </button>
                                          )}
                                        </Menu.Item>
                                        <Menu.Item>
                                          {({ active }) => (
                                            <button className={`${active ? "bg-violet-500" : "text-gray-900"} group`}>
                                              {active ? "swap" : "swap"}
                                            </button>
                                          )}
                                        </Menu.Item>
                                      </div>
                                    </Menu.Items>
                                  </Transition>
                                </Menu>
                              </div>
                            </div>

                            <div className="matic-box">   
                                <p>Balance: </p>
                                <p onClick={() => setSwapSendValueToField(balanceeth)}> {balanceeth}</p>
                            </div>
                          </div>
                          <div className="matic-right">
                            <input type="number" ref={swapSendInput} value={swapSendInputValue} onChange={(e) => setSwapSendInputValue(e.target.value)} />
                            <span>$32,639.40</span>
                          </div>
                        </div>
                      </div>
                      <div className="bridge-recieve-btn">
                        <div className="bridge-recieve-flex">
                          <div className="bridge-recieve-width">
                            <span>Receive</span>
                            <div className="icon-flex">
                              <span className="wrapper-recive-absolute">
                                <Image src={Uniswap} alt="" className="" />
                              </span>
                              <div className="recieve-position">
                                <Menu as="div" className="recieve-menu">
                                  <div className="recieve-flex">
                                    <select className="eth-dropdown ogn-dropdown filter-dropdown" name="" id="">
                                      <option value="" selected>
                                        UNI-V2
                                      </option>
                                      <option value="">SWAP</option>
                                    </select>
                                  </div>
                                  <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                  >
                                    <Menu.Items className="wrapper-menu-contain">
                                      <div className="wrapper-menu-matic">
                                        <Menu.Item>
                                          {({ active }) => (
                                            <button className={`${active ? "bg-violet-500 " : "text-gray-900"} group `}>
                                              {active ? "bridge" : "bridge"}
                                            </button>
                                          )}
                                        </Menu.Item>
                                        <Menu.Item>
                                          {({ active }) => (
                                            <button className={`${active ? "bg-violet-500" : "text-gray-900"} group`}>
                                              {active ? "swap" : "swap"}
                                            </button>
                                          )}
                                        </Menu.Item>
                                      </div>
                                    </Menu.Items>
                                  </Transition>
                                </Menu>
                              </div>
                            </div>

                            <div className="matic-box">
                                <p>Balance:</p>
                              <span>{balanceuni}</span>
                            </div>
                          </div>
                          <div className="matic-right">
                            <input type="number" ref={swapReceiveInput} value={swapReceiveInputValue} onChange={((e) => setSwapReceiveInputValue(e.target.value))} />
                            <span>$32,396.43</span>
                          </div>
                        </div>
                      </div>
                      <div className="bridge-bottom">
                        <div className="bridge-bottom-main">
                          <p>Rate</p>
                          <p>1 ETH = 210.298 UNI</p>
                        </div>
                        <div className="bridge-bottom-main">
                          <p>Network fee</p>
                          <p>Fast $4.55</p>
                        </div>
                        <div className="bridge-bottom-main">
                          <p>Ceto Finance fee</p>
                          <p>0.5%</p>
                        </div>
                      </div>
                      <div className="bridge-bottom-border"></div>
                      <div className="add-btn">
                        <button className="wallet-btn">
                          <span>Swap</span>
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
    </>
  );
};
export default SwapBridges;
