import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContanctImg from "../assets/img/contact-us.png";
import Fade from 'react-reveal/Fade';

function contact() {
  return (
    <>
      <section className="sm:py-20 pt-20 pb-5 bg-[#fcfcfc]">
        <div className="translate-y-[-260px] mb-[-260px]">
          <div className="md:container">
            <div className="banner-img  bg-no-repeat bg-cover bg-center items-center md:rounded-[39px] ">
              <div className="sm:pt-24 sm:pb-20 pt-8 pb-12 shadow-we-like-project rounded-[40px]">
                <h2 className="lg:text-[48px] text-[30px] text-white biennale-black leading-10 text-center">
                  We Like To Start Your
                </h2>
                <span className="lg:text-[48px] text-[30px] text-white biennale-light text-center block">
                  Project With Us
                </span>
                <div className="text-center">
                  <Fade bottom>
                      <Link href="#0">
                        <a className="md:text-base text-[14px] md:h-auto h-[45px] align-middle leading-[16px] text-white min-w-[155px] md:py-[18px] pt-[14px] pb-[14px] px-[28px] text-center bg-green100 hover:bg-btnhover transition-all  biennale-bold md:rounded-[20px] rounded-[15px] inline-block mt-7 group-hover:shadow-button-shadow">
                        Get In Touch
                        </a>
                      </Link>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:pt-8 pb-11 bg-[#fcfcfc]">
        <div className="container flex md:flex-row flex-col-reverse items-center justify-between">
          <div className="md:w-[45%] md:pt-0 pt-[23px]">
            <div className="shadow-blog-box img-sold rounded-[20px] overflow-hidden">
              <Image className="" src={ContanctImg} alt="" />
            </div>
          </div>
          <div className="md:w-[50%]">
            <div className="text-left">
              <Fade bottom>
                <h2 className="md:text-4xl text-[26px] biennale-bold tracking-wide z-10 relative mb-[-15px] text-[#3f36a9] uppercase mdd:mt-0 mt-0">
                  Contact Us
                </h2>
              </Fade>
              <span className="bg-[#00e37a] relative md:w-[174px] w-[85px] md:h-4 h-2 inline-block md:left-[6%] md:top-0 -top-2"></span>
            </div>
            <div className="sm:flex md:mt-10 mt-6  justify-between max-w-[700px] w-full">
              <form className="md:w-[60%] sm:w-[50%] w-full text-base">
                <input
                  className="bg-inputBg md:placeholder:text-base placeholder:text-sm placeholder:text-[#383843] opacity-80 rounded-[20px] md:py-[11px] py-[13px] md:px-7 px-4 max-w-[450px] w-full"
                  type="text"
                  placeholder="Full name"
                />
                <input
                  className="bg-inputBg md:placeholder:text-base placeholder:text-sm placeholder:text-[#383843] opacity-80 rounded-[20px] md:py-[11px] py-[13px] md:px-7 px-4 max-w-[450px] w-full mt-5"
                  type="email"
                  placeholder="E-mail"
                />
                <textarea
                  className="bg-inputBg md:placeholder:text-base placeholder:text-sm placeholder:text-[#383843] opacity-80 rounded-[20px] md:py-[11px] py-[13px] md:px-7 px-4 max-w-[450px] w-full mt-5 resize-none"
                  placeholder="Messenge"
                  name=""
                  id=""
                  cols="15"
                  rows="4"
                ></textarea>
                <Link href="#0">
                  <a className="text-white md:min-w-[155px] md:max-w-[450px] w-[130px] md:py-[18px] py-[13px] px-[28px] text-center md:inline-block  block bg-green100 hover:bg-btnhover duration-300 transition-all biennale-bold md:rounded-[20px] rounded-[15px] mt-4 shadow-button-shadow leading-snug md:text-base text-sm">
                    Send
                  </a>
                </Link>
              </form>
              <div className="md:w-[37%] w-[217px] sm:mt-0 mt-12">
                <div className="sm:max-w-[211px] w-full">
                  <h3 className="text-[#3f36a9] biennale-bold text-lg mb-2 ">
                    Our Address
                  </h3>
                  <p className="text-[#383843] opacity-80">
                    577 Bellevue Avenue Malden, MA 02148
                  </p>
                  <Link href="mailto:mockupsforfree@gmail.com">
                    <a className="text-[#383843] opacity-80 mt-4 inline-block break-all">
                      Mockupsforfree@gmail.com{" "}
                    </a>
                  </Link>
                  <Link href="tel:1-222-345-0000">
                    <a className="text-[#383843] opacity-80  inline-block">
                      +1 222-345-0000
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default contact;
