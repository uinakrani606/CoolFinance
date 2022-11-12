import Link from "next/link";
import React from "react";
import { Fragment, useEffect, useRef, useState } from "react";
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
  return (
    <>
      <div className="max-w-[1203px] w-full mx-auto px-[20px] md:flex justify-center lg:justify-start">
        <div className="lg:mt-11 mt-5 mb-10">
          <h2 className="lg:text-[40px] text-[32px] lg:leading-6 leading-snug font-bold text-primaryDarkBlue inline-block">
            Swap & Bridges
          </h2>
          <div className="border border-gray300 mt-[30px] rounded-[10px] sm:max-w-[578px] w-full mx-auto">
            <div className="">
              <div className="flex relative items-center justify-around border-b border-gray300">
                <Link href={"#"}>
                  <a
                    className={
                      "text-lg font-semibold  block p-5 w-2/4 text-center leading-normal " +
                      (openTab === 1
                        ? "text-primaryBlue bg-blueGray-600 border-b-4 border-b-primaryBlue "
                        : "text-blueGray-600  bg-white border-b-4 border-white")
                    }
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
                    className={
                      "text-lg font-semibold block p-5 w-2/4 text-center leading-normal " +
                      (openTab === 1
                        ? "bg-blueGray-600 text-gray900 border-b-4 border-white"
                        : "text-primaryBlue bg-blueGray-600 border-b-4 border-b-primaryBlue")
                    }
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
            <div className="relative flex flex-col min-w-0 break-words bg-white sm:w-[576px] shadow-lg rounded">
              <div className="sm:p-[30px] p-5 flex-auto flex-wrap">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <div>
                      <div className="relative">
                        <span className="absolute top-[8px] left-[8px]"></span>
                        <select
                          className="pl-4 h-10 text-sm font-semibold text-gray900 py-[8px] px-[22px] lg:w-full md:w-full sm:w-[320px] w-full border  border-white100 text-[10px] rounded focus:outline-none focus:ring-0 filter-dropdown"
                          name=""
                          id=""
                        >
                          <option value="" selected>
                            Select wallet
                          </option>
                          <option value="">Queue</option>
                          <option value="">History</option>
                        </select>
                      </div>
                      <div className="border-white100 border-b pt-7"></div>
                      <div className="pt-7 flex justify-between flex-col sm:flex-row">
                        <div className="sm:w-[44%] h-10 w-full">
                          <h3 className="text-gray900 opacity-40 pb-[6px] font-medium text-xs">
                            Transfer from
                          </h3>

                          <div className="relative">
                            <span className="absolute top-[8px] left-[8px]">
                              <Image src={Ethreum} alt="" className="" />
                            </span>
                            <select
                              className="bg-white100 text-sm h-10 font-semibold text-gray900 py-[8px] px-[22px] w-full lg:w-[224px] text-[10px] rounded focus:outline-none focus:ring-0 filter-dropdown"
                              name=""
                              id=""
                            >
                              <option value="" selected>
                                Ethereum
                              </option>
                              <option value="">Queue</option>
                              <option value="">History</option>
                            </select>
                          </div>
                        </div>
                        <div className="sm:pt-3 pt-6 flex items-center justify-center my-4">
                          <div className="w-[30px] h-[30px] rounded-full border flex justify-center items-center border-white100">
                            <Image src={Leftrightarrow} />
                          </div>
                        </div>
                        <div className="sm:w-[44%] w-full">
                          <h3 className="text-gray900 opacity-40 pb-[6px] font-medium text-xs">
                            Transfer to
                          </h3>

                          <div className="relative">
                            <span className="absolute top-[8px] left-[8px]">
                              <Image src={Polygon} alt="" className="" />
                            </span>
                            <select
                              className="bg-white100 pl-8 h-10 text-sm font-semibold text-gray900 py-[8px] px-[22px] w-full lg:w-[224px] text-[10px] rounded focus:outline-none focus:ring-0 filter-dropdown"
                              name=""
                              id=""
                            >
                              <option value="" selected>
                                Polygon
                              </option>
                              <option value="">Queue</option>
                              <option value="">History</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white100 mt-5 py-[17px] px-5 rounded">
                        <div className="flex items-end justify-between">
                          <div className="">
                            <span className="text-[10px] text-gray900">
                              Send
                            </span>
                            <div className="mr-5 relative">
                              <span className="absolute top-[4px] left-0">
                                <Image
                                  src={OriginProtocol}
                                  alt=""
                                  className=""
                                />
                              </span>
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div className="flex items-center">
                                  <Menu.Button className="inline-flex items-center justify-center bg-opacity-20 hover:bg-opacity-30 focus-visible:ring-white focus-visible:ring-opacity-75 ogn-dropdown text-center bg-white100 pl-12 lg:text-[40px] text-3xl font-bold text-primaryDarkBlue py-[8px] pr-4 max-w-[190px] w-full text-[10px] rounded focus:outline-none focus:ring-0 filter-dropdown">
                                    OGN
                                    <span className="ml-3 flex items-center">
                                      <Image
                                        src={BlueDropdown}
                                        alt=""
                                        className=""
                                      />
                                    </span>
                                  </Menu.Button>
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
                                  <Menu.Items className="absolute z-50 left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="px-1 py-1">
                                      <Menu.Item>
                                        {({ active }) => (
                                          <button
                                            className={`${
                                              active
                                                ? "bg-violet-500 "
                                                : "text-gray-900"
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                          >
                                            {active ? "Queue" : "Queue"}
                                          </button>
                                        )}
                                      </Menu.Item>
                                      <Menu.Item>
                                        {({ active }) => (
                                          <button
                                            className={`${
                                              active
                                                ? "bg-violet-500"
                                                : "text-gray-900"
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                          >
                                            {active ? "History" : "History"}
                                          </button>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </div>
                            <div className="flex mt-[6px]">
                              <p
                                className="text-sm text-gray900 font-light
                                "
                              >
                                Balance:{" "}
                              </p>
                              <span className="ml-1 text-sm text-primaryBlue font-light">
                                {" "}
                                500
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <h5 className="md:text-3xl text-xl font-bold text-gray900">
                              100
                            </h5>
                            <span className="text-sm text-gray900 font-light mt-1">
                              $16.03
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white100 mt-5 py-[17px] px-5 rounded">
                        <div className="flex items-end justify-between">
                          <div className="w-[51%]">
                            <span className="text-[10px] text-gray900">
                              Receive
                            </span>
                            <div className="mr-5 relative">
                              <span className="absolute top-[4px] left-0">
                                <Image src={MaticIcon} alt="" className="" />
                              </span>
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div
                                  className="flex items-center
                                  "
                                >
                                  <Menu.Button className="inline-flex justify-center bg-opacity-20 hover:bg-opacity-30 focus-visible:ring-white focus-visible:ring-opacity-75 ogn-dropdown text-center bg-white100 pl-14 lg:text-[40px] text-3xl font-bold text-primaryDarkBlue py-[8px] pr-4 max-w-[190px] w-full text-[10px] rounded focus:outline-none focus:ring-0 filter-dropdown">
                                    MATIC
                                  </Menu.Button>
                                  <span className="flex items-center">
                                    <Image
                                      src={BlueDropdown}
                                      alt=""
                                      className=""
                                    />
                                  </span>
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
                                  <Menu.Items className="absolute z-50 left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="px-1 py-1 ">
                                      <Menu.Item>
                                        {({ active }) => (
                                          <button
                                            className={`${
                                              active
                                                ? "bg-violet-500 "
                                                : "text-gray-900"
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                          >
                                            {active ? "Queue" : "Queue"}
                                          </button>
                                        )}
                                      </Menu.Item>
                                      <Menu.Item>
                                        {({ active }) => (
                                          <button
                                            className={`${
                                              active
                                                ? "bg-violet-500"
                                                : "text-gray-900"
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                          >
                                            {active ? "History" : "History"}
                                          </button>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </div>
                            <div className="flex mt-[6px]">
                              <p
                                className="text-sm text-gray900 font-light
                                "
                              >
                                Balance: 0.1{" "}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <h5 className="md:text-3xl text-xl font-bold text-gray900">
                              13.453
                            </h5>
                            <span className="text-sm text-gray900 font-light mt-1">
                              $16.15
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="py-4">
                        <div className="flex justify-between items-center text-sm py-1">
                          <p className="font-light">Bridge</p>
                          <p className="font-light">~5 mins $0.00</p>
                        </div>
                        <div className="flex justify-between items-center text-sm py-1">
                          <p className="font-light">Network fee</p>
                          <p className="font-light">Fast $4.51</p>
                        </div>
                      </div>
                      <div className="border-white100 border-t pb-7"></div>

                      <div className="add-btn flex w-full">
                        <button className="wallet-btn w-full max-w-full justify-center h-10 md:!px-[23px] !px-0 flex items-center ">
                          <span className="md:ml-3 ml-[7px] md:text-base text-[10px]">
                            Bridge
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <div>
                      <div className="relative">
                        <span className="absolute top-[8px] left-[8px]"></span>
                        <select
                          className=" pl-4 h-10 text-sm font-semibold text-gray900 py-[8px] px-[22px] w-full border  border-white100 text-[10px] rounded focus:outline-none focus:ring-0 filter-dropdown"
                          name=""
                          id=""
                        >
                          <option value="" selected>
                            Select wallet
                          </option>
                          <option value="">Queue</option>
                          <option value="">History</option>
                        </select>
                      </div>
                      <div className="border-white100 border-b pt-7"></div>
                      <div className="pt-7">
                        <div className="sm:w-[44%] w-full">
                          <h3 className="text-gray900 opacity-40 font-medium text-xs pb-[6px]">
                            Chain
                          </h3>
                          <div className="relative">
                            <span className="absolute top-[8px] left-[8px]">
                              <Image src={Ethreum} alt="" className="" />
                            </span>
                            <select
                              className="bg-white100 text-sm h-10 font-semibold text-gray900 py-[8px] px-[22px] sm:w-[224px] w-full text-[10px] rounded focus:outline-none focus:ring-0 filter-dropdown"
                              name=""
                              id=""
                            >
                              <option value="" selected>
                                Ethereum
                              </option>
                              <option value="">Queue</option>
                              <option value="">History</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white100 mt-5 py-[17px] px-5 rounded">
                        <div className="flex items-end justify-between">
                          <div className="">
                            <span className="text-[10px] text-gray900">
                              Send
                            </span>
                            <div className="mr-5 relative">
                              <span className="absolute top-[4px] left-0">
                                <Image src={EthIcon} alt="" className="" />
                              </span>
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div className="flex items-center">
                                  <Menu.Button className="inline-flex items-center justify-center bg-opacity-20 hover:bg-opacity-30 focus-visible:ring-white focus-visible:ring-opacity-75 ogn-dropdown text-center bg-white100 pl-12 lg:text-[40px] text-3xl font-bold text-primaryDarkBlue py-[8px] pr-4 max-w-[190px] w-full text-[10px] rounded focus:outline-none focus:ring-0 filter-dropdown">
                                    ETH
                                    <span className="ml-3 flex items-center">
                                      <Image
                                        src={BlueDropdown}
                                        alt=""
                                        className=""
                                      />
                                    </span>
                                  </Menu.Button>
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
                                  <Menu.Items className="absolute z-50 left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="px-1 py-1">
                                      <Menu.Item>
                                        {({ active }) => (
                                          <button
                                            className={`${
                                              active
                                                ? "bg-violet-500 "
                                                : "text-gray-900"
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                          >
                                            {active ? "Queue" : "Queue"}
                                          </button>
                                        )}
                                      </Menu.Item>
                                      <Menu.Item>
                                        {({ active }) => (
                                          <button
                                            className={`${
                                              active
                                                ? "bg-violet-500"
                                                : "text-gray-900"
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                          >
                                            {active ? "History" : "History"}
                                          </button>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </div>
                            <div className="flex mt-[6px]">
                              <p
                                className="text-sm text-gray900 font-light
                                "
                              >
                                Balance:{" "}
                              </p>
                              <span className="ml-1 text-sm text-primaryBlue font-light">
                                {" "}
                                30
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <h5 className="md:text-3xl text-xl font-bold text-gray900">
                              20
                            </h5>
                            <span className="text-sm text-gray900 font-light mt-1">
                              $32,639.40
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white100 mt-5 py-[17px] px-5 rounded">
                        <div className="flex items-end justify-between">
                          <div className="w-[53%]">
                            <span className="text-[10px] text-gray900">
                              Receive
                            </span>
                            <div className="mr-5 relative">
                              <span className="absolute top-[4px] left-0">
                                <Image src={Uniswap} alt="" className="" />
                              </span>
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div
                                  className="flex items-center
                                  "
                                >
                                  <Menu.Button className="inline-flex justify-center bg-opacity-20 hover:bg-opacity-30 focus-visible:ring-white focus-visible:ring-opacity-75 ogn-dropdown text-center bg-white100 pl-12 lg:text-[40px] text-3xl font-bold text-primaryDarkBlue py-[8px] pr-4 max-w-[210px] w-full text-[10px] rounded focus:outline-none focus:ring-0 filter-dropdown">
                                    UNI-V2
                                  </Menu.Button>
                                  <span className="flex items-center -ml-1">
                                    <Image
                                      src={BlueDropdown}
                                      alt=""
                                      className=""
                                    />
                                  </span>
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
                                  <Menu.Items className="absolute z-50 left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="px-1 py-1 ">
                                      <Menu.Item>
                                        {({ active }) => (
                                          <button
                                            className={`${
                                              active
                                                ? "bg-violet-500 "
                                                : "text-gray-900"
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                          >
                                            {active ? "Queue" : "Queue"}
                                          </button>
                                        )}
                                      </Menu.Item>
                                      <Menu.Item>
                                        {({ active }) => (
                                          <button
                                            className={`${
                                              active
                                                ? "bg-violet-500"
                                                : "text-gray-900"
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                          >
                                            {active ? "History" : "History"}
                                          </button>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </div>
                            <div className="flex mt-[6px]">
                              <p
                                className="text-sm text-gray900 font-light
                                "
                              >
                                Balance: 500
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <h5 className="md:text-3xl text-xl font-bold text-gray900">
                              4,205.975
                            </h5>
                            <span className="text-sm text-gray900 font-light mt-1">
                              $32,396.43
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="py-4">
                        <div className="flex justify-between items-center text-sm py-1">
                          <p className="font-light">Rate</p>
                          <p className="font-light">1 ETH = 210.298 UNI</p>
                        </div>
                        <div className="flex justify-between items-center text-sm py-1">
                          <p className="font-light">Network fee</p>
                          <p className="font-light">Fast $4.55</p>
                        </div>
                        <div className="flex justify-between items-center text-sm py-1">
                          <p className="font-light">Ceto Finance fee</p>
                          <p className="font-light">0.5%</p>
                        </div>
                      </div>
                      <div className="border-white100 border-t pb-7"></div>

                      <div className="add-btn flex w-full">
                        <button className="wallet-btn w-full max-w-full justify-center h-10 md:!px-[23px] !px-0 flex items-center ">
                          <span className="md:ml-3 ml-[7px] md:text-base text-[10px]">
                            Swap
                          </span>
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
