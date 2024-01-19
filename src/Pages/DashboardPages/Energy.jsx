import React from "react";
import applyImg from "../../images/3-designer-desk-2.png";
import badgesImg from "../../images/52. trophy-4.png";
import Points from "../../images/36. people-rushing-3.png";
import { TbSettings } from "react-icons/tb";
import { IoMdRepeat } from "react-icons/io";
import { BsArrowRepeat } from "react-icons/bs";
import { IoFlashOutline } from "react-icons/io5";

const Energy = () => {
  return (
    <div className="energy">
      <div className="energy-disc grid sm:grid-cols-[repeat(auto-fit,minmax(510px,1fr))] gap-[10px] mt-4">
        <div className="apply flex justify-center items-center flex-wrap-reverse bg-[#ffe0ba] gap-3 rounded-[5px] p-2">
          <div className="apply-info ">
            <h2 className="text-[24px] leading-8 italic font-semibold text-[#0f2837]">
              Apply for a car loan!
            </h2>
            <p className="text-[#0f2837] mx-0 my-[5px]">
              This is a sample of a generated <br /> text
            </p>
            <button
              type="btn"
              className="btn-apply  text-white bg-[#0f2837] px-[15px] py-2.5 rounded-[5px] border-[1.7px] border-solid border-[#0f2837]"
            >
              Discover More
            </button>
          </div>
          <img
            className="w-[200px]"
            src={applyImg}
            alt="This is a sample of a generated text"
          />
        </div>

        {/* ///////////// */}

        <div className="earyed flex gap-1.5 justify-center flex-col sm:flex-row">
          <div className="badges bg-[#0f2837] w-full text-white flex flex-col justify-center p-[15px] rounded-[5px] bg-[#0f2837] min-w-[150px]">
            <div className="badges-info flex justify-start items-start">
              <h2 className="text-[34px] text-wrap">
                You have earned {""}
                <span className="num text-[#ff9619] italic text-[36px]">
                  20 {""}
                </span>
                Badges!
              </h2>
              <img src={badgesImg} alt="" className="w-[100px] h-[100px]" />
            </div>
            <p className="text-[#ff9619] text-[12px] font-normal mt-[10px]">
              Hoaray! Way to go Mohammed!
            </p>
          </div>
          {/* ////////// */}
          <div className="points bg-[#0f2837] w-full text-white flex flex-col justify-center p-[15px] rounded-[5px] bg-[#6e1946] min-w-[150px]">
            <div className="badges-info flex justify-start items-start">
              <h2 className="text-[34px] text-wrap">
                You have earned {""}
                <span className="num text-[#FAC39B] italic text-4xl">
                  1500 {""}
                </span>
                Points!
              </h2>
              <img src={Points} alt="" className="w-[100px] h-[100px]" />
            </div>
            <p className="text-[#FAC39B] text-[12px] font-normal mt-[10px]">
              Redeem and claim your rewards!
            </p>
          </div>
        </div>
      </div>

      {/* ///////  Recommend*/}

      <div className="recommendation grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2 mt-4">
        <div className="car-recommend flex justify-center flex-col self-center bg-[#e1dfa4] px-[27px] py-[15px] rounded-[14px]">
          <header className="flex items-center">
            <BsArrowRepeat />
            <div className="title text-[#242731] font-bold">
              <span className="percen margin: 0 10px;">64%</span> Recomendation
            </div>
          </header>

          <img src="#" alt="car title" className="w-full h-[110px]" />

          <footer className="text-[#1f2128] font-bold">
            <p className="text-[#1f2128] text-xl font-bold mb-[5px]">
              Mini Cooper
            </p>
            <div className="footer-details flex justify-between items-center text-[#72767c] text-sm">
              <div className="controlles flex justify-between items-center">
                <div className="reply flex justify-between items-center">
                  <IoMdRepeat /> 132k
                </div>
                <div className="setting-icon mx-[30px] my-0">
                  <TbSettings />
                </div>
                <div className="flash">
                  <IoFlashOutline />
                </div>
              </div>

              <div className="price">
                <span>$32</span>/d
              </div>
            </div>
          </footer>
        </div>

        {/* /// */}
        <div className="car-recommend flex justify-center flex-col self-center bg-[#E3ECF1] px-[27px] py-[15px] rounded-[14px]">
          <header className="flex items-center">
            <BsArrowRepeat />
            <div className="title text-[#242731] font-bold">
              <span className="percen margin: 0 10px;">64%</span> Recomendation
            </div>
          </header>

          <img src="#" alt="car title" className="w-full h-[110px]" />

          <footer className="text-[#1f2128] font-bold">
            <p className="text-[#1f2128] text-xl font-bold mb-[5px]">
              Mini Cooper
            </p>
            <div className="footer-details flex justify-between items-center text-[#72767c] text-sm">
              <div className="controlles flex justify-between items-center">
                <div className="reply flex justify-between items-center">
                  <IoMdRepeat /> 132k
                </div>
                <div className="setting-icon mx-[30px] my-0">
                  <TbSettings />
                </div>
                <div className="flash">
                  <IoFlashOutline />
                </div>
              </div>

              <div className="price">
                <span>$32</span>/d
              </div>
            </div>
          </footer>
        </div>

        {/* //// */}
        <div className="car-recommend flex justify-center flex-col self-center bg-[#F4E3E5] px-[27px] py-[15px] rounded-[14px]">
          <header className="flex items-center">
            <BsArrowRepeat />
            <div className="title text-[#242731] font-bold">
              <span className="percen margin: 0 10px;">64%</span> Recomendation
            </div>
          </header>

          <img src="#" alt="car title" className="w-full h-[110px]" />

          <footer className="text-[#1f2128] font-bold">
            <p className="text-[#1f2128] text-xl font-bold mb-[5px]">
              Mini Cooper
            </p>
            <div className="footer-details flex justify-between items-center text-[#72767c] text-sm">
              <div className="controlles flex justify-between items-center">
                <div className="reply flex justify-between items-center">
                  <IoMdRepeat /> 132k
                </div>
                <div className="setting-icon mx-[30px] my-0">
                  <TbSettings />
                </div>
                <div className="flash">
                  <IoFlashOutline />
                </div>
              </div>

              <div className="price">
                <span>$32</span>/d
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* // */}
    </div>
  );
};

export default Energy;
