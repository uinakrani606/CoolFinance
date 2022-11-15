import React from "react";
import Link from "next/link";
import Image from "next/image";

import GrayEdit from "../assets/img/gray-edit-btn.svg";
import GrayCopy from "../assets/img/gray-copy-btn.svg";

const Transactions = () => {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <>
      <div className="total-value-main">
        <div className="transaction-heading">
          <h2>Transactions</h2>
        </div>
        <div className="transaction-main-sec">
          <div className="transaction-width">
            {/*=========== tab start======== */}
            <div className="transaction-main-part">
              <div className="transaction-section">
                <div className="transaction-tab" role="tablist">
                  <div className="transaction-tablist">
                    <div className="tablist-queue">
                      <div className="transaction-tablist-queue">
                        <a
                          className={" " + (openTab === 1 ? "queue-block" : "")}
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(1);
                          }}
                          data-toggle="tab"
                          href="#link1"
                          role="tablist"
                        >
                          Queue
                        </a>
                      </div>
                      <div className="transaction-tablist-queue transaction-history">
                        <a
                          className={" " + (openTab === 2 ? "history-block" : "")}
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(2);
                          }}
                          data-toggle="tab"
                          href="#link2"
                          role="tablist"
                        >
                          History
                        </a>
                      </div>
                    </div>
                    <div className="transaction-filter">
                      <select className="filter-dropdown" name="" id="">
                        <option value="">Filter</option>
                        <option value="">Queue</option>
                        <option value="">History</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div div className="transction-tab-head">
                  <div className="transactions-box">
                    <div className="tab-content tab-space">
                      <div className={openTab === 1 ? "queue-block" : "queue-hidden"} id="link1">
                        <div className="tab-time queue-block">
                          <div className="transaction-type-tab">
                            <h3>Time</h3>
                          </div>
                          <div className="transaction-type-tab ">
                            <h3>Type</h3>
                          </div>
                          <div className="transaction-type-tab">
                            <h3>Asset</h3>
                          </div>
                          <div className="transaction-type-tab">
                            <h3>Amount</h3>
                          </div>
                          <div className="transaction-type-tab">
                            <h3>Destination</h3>
                          </div>
                          <div className="transaction-type-tab">
                            <h3>TxID</h3>
                          </div>
                          <div className="transaction-type-tab">
                            <h3>Status</h3>
                          </div>
                        </div>
                        <div className="deposite-tranaction">
                          <div className="transction-slime">
                            <p className="para-first">21 Mar 2021 14:35</p>
                          </div>
                          <div className="transction-slime">
                            <p>Deposit</p>
                          </div>
                          <div className="transction-slime">
                            <p>SLIME</p>
                          </div>
                          <div className="transction-slime">
                            <p>1000</p>
                          </div>
                          <div className="transction-slime">
                            <div className="link-slime">
                              <p className="data-table-transition">0x65A12C313fE8…</p>
                              <span>
                                <Link href={"#"}>
                                  <a>
                                    <Image src={GrayEdit} alt="" />
                                  </a>
                                </Link>
                              </span>
                              <Link href={"#"}>
                                <a>
                                  <Image src={GrayCopy} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="transction-slime">
                            <div className="link-slime">
                              <p className="data-table-transition"> 0x65A12C313fE8…</p>
                              <span>
                                <Link href={"#"}>
                                  <a>
                                    <Image src={GrayEdit} alt="" />
                                  </a>
                                </Link>
                              </span>
                              <Link href={"#"}>
                                <a>
                                  <Image src={GrayCopy} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="transction-approve-btn">
                              <button className="wallet-btn plus-icon">
                                <span className="">Approve</span>
                              </button>
                              <button
                                className="wallet-btn flex items-center border-gray900 border py-2 px-[10px] w-[80px]
                               justify-center rounded text-[10px] border-transparent hover:border-gray900 hover:text-white hover:bg-gray900 duration-300"
                              >
                                <span className="">Decline</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="deposite-tranaction">
                          <div className="transction-slime">
                            <p className="para-first">21 Mar 2021 14:35</p>
                          </div>
                          <div className="transction-slime">
                            <p>Deposit</p>
                          </div>
                          <div className="transction-slime">
                            <p>PRIASE</p>
                          </div>
                          <div className="transction-slime">
                            <p>260</p>
                          </div>
                          <div className="transction-slime">
                            <div className="link-slime">
                              <p className="data-table-transition">0x7915a6eb0403…</p>
                              <span>
                                <Link href={"#"}>
                                  <a>
                                    <Image src={GrayEdit} alt="" />
                                  </a>
                                </Link>
                              </span>
                              <Link href={"#"}>
                                <a>
                                  <Image src={GrayCopy} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="transction-slime">
                            <div className="link-slime">
                              <p className="data-table-transition"> 0x566714ec977a...</p>
                              <span>
                                <Link href={"#"}>
                                  <a>
                                    <Image src={GrayEdit} alt="" />
                                  </a>
                                </Link>
                              </span>
                              <Link href={"#"}>
                                <a>
                                  <Image src={GrayCopy} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="transction-approve-btn">
                              <button className="wallet-btn plus-icon">
                                <span className="">Approve</span>
                              </button>
                              <button
                                className="wallet-btn flex items-center border-gray900 border py-2 px-[10px] w-[80px]
                               justify-center rounded text-[10px] border-transparent hover:border-gray900 hover:text-white hover:bg-gray900 duration-300"
                              >
                                <span className="">Decline</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="deposite-tranaction">
                          <div className="transction-slime">
                            <p className="para-first">21 Mar 2021 14:35</p>
                          </div>
                          <div className="transction-slime">
                            <p>Withdraw</p>
                          </div>
                          <div className="transction-slime">
                            <p>SAND</p>
                          </div>
                          <div className="transction-slime">
                            <p>60,000</p>
                          </div>
                          <div className="transction-slime">
                            <div className="link-slime">
                              <p className="data-table-transition">0x86c4A74e1280...</p>
                              <span>
                                <Link href={"#"}>
                                  <a>
                                    <Image src={GrayEdit} alt="" />
                                  </a>
                                </Link>
                              </span>
                              <Link href={"#"}>
                                <a>
                                  <Image src={GrayCopy} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="transction-slime">
                            <div className="link-slime">
                              <p className="data-table-transition">0xad2aec1eff22d...</p>
                              <span>
                                <Link href={"#"}>
                                  <a>
                                    <Image src={GrayEdit} alt="" />
                                  </a>
                                </Link>
                              </span>
                              <Link href={"#"}>
                                <a>
                                  <Image src={GrayCopy} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="transction-approve-btn">
                              <button className="wallet-btn plus-icon">
                                <span className="">Approve</span>
                              </button>
                              <button
                                className="wallet-btn flex items-center border-gray900 border py-2 px-[10px] w-[80px]
                               justify-center rounded text-[10px] border-transparent hover:border-gray900 hover:text-white hover:bg-gray900 duration-300"
                              >
                                <span className="">Decline</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="deposite-tranaction">
                          <div className="transction-slime">
                            <p className="para-first">21 Mar 2021 14:35</p>
                          </div>
                          <div className="transction-slime">
                            <p>Deposit</p>
                          </div>
                          <div className="transction-slime">
                            <p>SPIME</p>
                          </div>
                          <div className="transction-slime">
                            <p>2000</p>
                          </div>
                          <div className="transction-slime">
                            <div className="link-slime">
                              <p className="data-table-transition">0xCC5596Fb286...</p>
                              <span>
                                <Link href={"#"}>
                                  <a>
                                    <Image src={GrayEdit} alt="" />
                                  </a>
                                </Link>
                              </span>
                              <Link href={"#"}>
                                <a>
                                  <Image src={GrayCopy} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="transction-slime">
                            <div className="link-slime">
                              <p className="data-table-transition">0xc0ab080393f9...</p>
                              <span>
                                <Link href={"#"}>
                                  <a>
                                    <Image src={GrayEdit} alt="" />
                                  </a>
                                </Link>
                              </span>
                              <Link href={"#"}>
                                <a>
                                  <Image src={GrayCopy} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="transction-approve-btn">
                              <button className="wallet-btn plus-icon">
                                <span className="">Approve</span>
                              </button>
                              <button
                                className="wallet-btn flex items-center border-gray900 border py-2 px-[10px] w-[80px]
                               justify-center rounded text-[10px] border-transparent hover:border-gray900 hover:text-white hover:bg-gray900 duration-300"
                              >
                                <span className="">Decline</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="deposite-tranaction">
                          <div className="transction-slime">
                            <p className="para-first">21 Mar 2021 14:35</p>
                          </div>
                          <div className="transction-slime">
                            <p>Withdraw</p>
                          </div>
                          <div className="transction-slime">
                            <p>AXS</p>
                          </div>
                          <div className="transction-slime">
                            <p>40.58</p>
                          </div>
                          <div className="transction-slime">
                            <div className="link-slime">
                              <p className="data-table-transition">0xEA674fdDe714f...</p>
                              <span>
                                <Link href={"#"}>
                                  <a>
                                    <Image src={GrayEdit} alt="" />
                                  </a>
                                </Link>
                              </span>
                              <Link href={"#"}>
                                <a>
                                  <Image src={GrayCopy} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="transction-slime">
                            <div className="link-slime">
                              <p className="data-table-transition">0x74231b6118a3...</p>
                              <span>
                                <Link href={"#"}>
                                  <a>
                                    <Image src={GrayEdit} alt="" />
                                  </a>
                                </Link>
                              </span>
                              <Link href={"#"}>
                                <a>
                                  <Image src={GrayCopy} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="transction-approve-btn">
                              <button className="wallet-btn plus-icon">
                                <span className="">Approve</span>
                              </button>
                              <button
                                className="wallet-btn flex items-center border-gray900 border py-2 px-[10px] w-[80px]
                               justify-center rounded text-[10px] border-transparent hover:border-gray900 hover:text-white hover:bg-gray900 duration-300"
                              >
                                <span className="">Decline</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="deposite-tranaction">
                          <div className="transction-slime">
                            <p className="para-first">21 Mar 2021 14:35</p>
                          </div>
                          <div className="transction-slime">
                            <p>Deposit</p>
                          </div>
                          <div className="transction-slime">
                            <p>FLOW</p>
                          </div>
                          <div className="transction-slime">
                            <p>5290</p>
                          </div>
                          <div className="transction-slime">
                            <div className="link-slime">
                              <p className="data-table-transition">0x6d2e03b7EfFE…</p>
                              <span>
                                <Link href={"#"}>
                                  <a>
                                    <Image src={GrayEdit} alt="" />
                                  </a>
                                </Link>
                              </span>
                              <Link href={"#"}>
                                <a>
                                  <Image src={GrayCopy} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="transction-slime">
                            <div className="link-slime">
                              <p className="data-table-transition">0x93f6446230c1...</p>
                              <span>
                                <Link href={"#"}>
                                  <a>
                                    <Image src={GrayEdit} alt="" />
                                  </a>
                                </Link>
                              </span>
                              <Link href={"#"}>
                                <a>
                                  <Image src={GrayCopy} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="transction-approve-btn">
                              <button className="wallet-btn plus-icon">
                                <span className="">Approve</span>
                              </button>
                              <button
                                className="wallet-btn flex items-center border-gray900 border py-2 px-[10px] w-[80px]
                               justify-center rounded text-[10px] border-transparent hover:border-gray900 hover:text-white hover:bg-gray900 duration-300"
                              >
                                <span className="">Decline</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="deposite-tranaction">
                          <div className="transction-slime">
                            <p className="para-first">21 Mar 2021 14:35</p>
                          </div>
                          <div className="transction-slime">
                            <p>Deposit</p>
                          </div>
                          <div className="transction-slime">
                            <p>APE</p>
                          </div>
                          <div className="transction-slime">
                            <p>2.1496</p>
                          </div>
                          <div className="transction-slime">
                            <div className="link-slime">
                              <p className="data-table-transition">0xaaBAd1670BB8…</p>
                              <span>
                                <Link href={"#"}>
                                  <a>
                                    <Image src={GrayEdit} alt="" />
                                  </a>
                                </Link>
                              </span>
                              <Link href={"#"}>
                                <a>
                                  <Image src={GrayCopy} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="transction-slime">
                            <div className="link-slime">
                              <p className="data-table-transition">0x7c91f1cbefc93...</p>
                              <span>
                                <Link href={"#"}>
                                  <a>
                                    <Image src={GrayEdit} alt="" />
                                  </a>
                                </Link>
                              </span>
                              <Link href={"#"}>
                                <a>
                                  <Image src={GrayCopy} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="transction-approve-btn">
                              <button className="wallet-btn plus-icon">
                                <span className="">Approve</span>
                              </button>
                              <button
                                className="wallet-btn flex items-center border-gray900 border py-2 px-[10px] w-[80px]
                               justify-center rounded text-[10px] border-transparent hover:border-gray900 hover:text-white hover:bg-gray900 duration-300"
                              >
                                <span className="">Decline</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={openTab === 2 ? "history-block" : "history-hidden"} id="link2">
                        <div className="tab-time">
                          <div className="transaction-type-tab">
                            <h3>Time</h3>
                          </div>
                          <div className="transaction-type-tab ">
                            <h3>Type</h3>
                          </div>
                          <div className="transaction-type-tab">
                            <h3>Asset</h3>
                          </div>
                          <div className="transaction-type-tab">
                            <h3>Amount</h3>
                          </div>
                          <div className="transaction-type-tab">
                            <h3>Destination</h3>
                          </div>
                          <div className="transaction-type-tab">
                            <h3>TxID</h3>
                          </div>
                          <div className="transaction-type-tab">
                            <h3>Status</h3>
                          </div>
                        </div>
                        <div className="deposite-tranaction">
                          <div className="transction-slime">
                            <p className="para-first">21 Mar 2021 14:35</p>
                          </div>
                          <div className="transction-slime">
                            <p>Deposit</p>
                          </div>
                          <div className="transction-slime">
                            <p>SLIME</p>
                          </div>
                          <div className="transction-slime">
                            <p>1000</p>
                          </div>
                          <div className="transction-slime">
                            <div className="link-slime">
                              <p className="data-table-transition">0x65A12C313fE8…</p>
                              <span>
                                <Link href={"#"}>
                                  <a>
                                    <Image src={GrayEdit} alt="" />
                                  </a>
                                </Link>
                              </span>
                              <Link href={"#"}>
                                <a>
                                  <Image src={GrayCopy} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="transction-slime">
                            <div className="link-slime">
                              <p className="data-table-transition"> 0x65A12C313fE8…</p>
                              <span>
                                <Link href={"#"}>
                                  <a>
                                    <Image src={GrayEdit} alt="" />
                                  </a>
                                </Link>
                              </span>
                              <Link href={"#"}>
                                <a>
                                  <Image src={GrayCopy} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="transction-approve-btn">
                              <button className="wallet-btn plus-icon">
                                <span className="">Approve</span>
                              </button>
                              <button
                                className="wallet-btn flex items-center border-gray900 border py-2 px-[10px] w-[80px]
                               justify-center rounded text-[10px] border-transparent hover:border-gray900 hover:text-white hover:bg-gray900 duration-300"
                              >
                                <span className="">Decline</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="deposite-tranaction">
                          <div className="transction-slime">
                            <p className="para-first">21 Mar 2021 14:35</p>
                          </div>
                          <div className="transction-slime">
                            <p>Deposit</p>
                          </div>
                          <div className="transction-slime">
                            <p>PRIASE</p>
                          </div>
                          <div className="transction-slime">
                            <p>260</p>
                          </div>
                          <div className="transction-slime">
                            <div className="link-slime">
                              <p className="data-table-transition">0x7915a6eb0403…</p>
                              <span>
                                <Link href={"#"}>
                                  <a>
                                    <Image src={GrayEdit} alt="" />
                                  </a>
                                </Link>
                              </span>
                              <Link href={"#"}>
                                <a>
                                  <Image src={GrayCopy} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="transction-slime">
                            <div className="link-slime">
                              <p className="data-table-transition"> 0x566714ec977a...</p>
                              <span>
                                <Link href={"#"}>
                                  <a>
                                    <Image src={GrayEdit} alt="" />
                                  </a>
                                </Link>
                              </span>
                              <Link href={"#"}>
                                <a>
                                  <Image src={GrayCopy} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="transction-approve-btn">
                              <button className="wallet-btn plus-icon">
                                <span className="">Approve</span>
                              </button>
                              <button
                                className="wallet-btn flex items-center border-gray900 border py-2 px-[10px] w-[80px]
                               justify-center rounded text-[10px] border-transparent hover:border-gray900 hover:text-white hover:bg-gray900 duration-300"
                              >
                                <span className="">Decline</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="deposite-tranaction">
                          <div className="transction-slime">
                            <p className="para-first">21 Mar 2021 14:35</p>
                          </div>
                          <div className="transction-slime">
                            <p>Withdraw</p>
                          </div>
                          <div className="transction-slime">
                            <p>SAND</p>
                          </div>
                          <div className="transction-slime">
                            <p>60,000</p>
                          </div>
                          <div className="transction-slime">
                            <div className="link-slime">
                              <p className="data-table-transition">0x86c4A74e1280...</p>
                              <span>
                                <Link href={"#"}>
                                  <a>
                                    <Image src={GrayEdit} alt="" />
                                  </a>
                                </Link>
                              </span>
                              <Link href={"#"}>
                                <a>
                                  <Image src={GrayCopy} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="transction-slime">
                            <div className="link-slime">
                              <p className="data-table-transition">0xad2aec1eff22d...</p>
                              <span>
                                <Link href={"#"}>
                                  <a>
                                    <Image src={GrayEdit} alt="" />
                                  </a>
                                </Link>
                              </span>
                              <Link href={"#"}>
                                <a>
                                  <Image src={GrayCopy} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="transction-approve-btn">
                              <button className="wallet-btn plus-icon">
                                <span className="">Approve</span>
                              </button>
                              <button
                                className="wallet-btn flex items-center border-gray900 border py-2 px-[10px] w-[80px]
                               justify-center rounded text-[10px] border-transparent hover:border-gray900 hover:text-white hover:bg-gray900 duration-300"
                              >
                                <span className="">Decline</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="deposite-tranaction">
                          <div className="transction-slime">
                            <p className="para-first">21 Mar 2021 14:35</p>
                          </div>
                          <div className="transction-slime">
                            <p>Withdraw</p>
                          </div>
                          <div className="transction-slime">
                            <p>SAND</p>
                          </div>
                          <div className="transction-slime">
                            <p>60,000</p>
                          </div>
                          <div className="transction-slime">
                            <div className="link-slime">
                              <p className="data-table-transition">0x86c4A74e1280...</p>
                              <span>
                                <Link href={"#"}>
                                  <a>
                                    <Image src={GrayEdit} alt="" />
                                  </a>
                                </Link>
                              </span>
                              <Link href={"#"}>
                                <a>
                                  <Image src={GrayCopy} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="transction-slime">
                            <div className="link-slime">
                              <p className="data-table-transition">0xad2aec1eff22d...</p>
                              <span>
                                <Link href={"#"}>
                                  <a>
                                    <Image src={GrayEdit} alt="" />
                                  </a>
                                </Link>
                              </span>
                              <Link href={"#"}>
                                <a>
                                  <Image src={GrayCopy} alt="" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="transction-approve-btn">
                              <button className="wallet-btn plus-icon">
                                <span className="">Approve</span>
                              </button>
                              <button
                                className="wallet-btn flex items-center border-gray900 border py-2 px-[10px] w-[80px]
                               justify-center rounded text-[10px] border-transparent hover:border-gray900 hover:text-white hover:bg-gray900 duration-300"
                              >
                                <span className="">Decline</span>
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
            {/* =========== tab end======== */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
