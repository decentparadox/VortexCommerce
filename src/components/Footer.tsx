"use client";
import { useEffect } from "react";
import fitty from "fitty";
import Link from "next/link";
import Logo from "./icons/logo";
//@ts-ignore
function resize(el, factor) {
  var width = el.offsetWidth;
  if (typeof factor == "undefined") {
    factor = 5;
  }
  el.style.fontSize = ((width / factor) | 0) + "px";
}

//@ts-ignore
const Footer = () => {
  useEffect(() => {
    const to_be_fitted = document.querySelectorAll("#tobefitted");
    var fitties = fitty("#tobefitted");
    fitties[0].fit({ sync: true });
  }, []);
  return (
    <div className="w-full max-w-full flex flex-col items-start justify-between pt-0 px-4 pb-[0.1px] box-border  leading-[normal] tracking-[normal]  gap-4 ">
      <section className="self-stretch flex flex-col md:flex-row items-start justify-between pt-0 px-0 pb-[0.1px] box-border max-w-full gap-5 text-left text-5xl text-lavender-100 font-monaspace-neon mq1275:flex-wrap">
        <div className="w-full flex flex-col items-start justify-start  max-w-full gap-4 mq1100:min-w-full mq1275:flex-1">
          <div>
            <Logo />
          </div>
          <div className="self-stretch relative text-[16px] leading-[118.46%] font-medium shrink-0 mq450:text-lgi mq450:leading-[23px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
          <div className="text-[14px] opacity-40">
            Designed and Developed by{" "}
            <Link
              href="https://decentparadox.site"
              className="hover:underline"
              target="_blank"
            >
              decentparadox
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col text-[16px] items-start justify-start pt-[7.8px] px-0 pb-0 box-border max-w-full  mq750:min-w-full mq1275:flex-1">
          <div className="grow self-stretch flex flex-row items-start justify-start gap-auto md:gap-12   mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-5 ">
              <div className="self-stretch relative text-13xl leading-[38px] font-medium text-lavender-100 mq750:text-7xl mq750:leading-[30px] mq450:text-lgi mq450:leading-[23px]">
                More
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="opacity-50 self-stretch relative leading-[118.46%] font-medium mq450:text-lgi mq450:leading-[23px]">
                  Updates
                </div>
                <div className="opacity-50 self-stretch relative leading-[118.46%] font-medium mq450:text-lgi mq450:leading-[23px]">
                  Brand kit
                </div>
                <div className="opacity-50 self-stretch relative leading-[118.46%] font-medium mq450:text-lgi mq450:leading-[23px]">
                  Newsletter
                </div>
                <div className="opacity-50 self-stretch relative leading-[118.46%] font-medium mq450:text-lgi mq450:leading-[23px]">
                  Curated
                </div>
              </div>
            </div>
            <div className=" flex flex-col items-start justify-start gap-5">
              <div className="relative text-13xl leading-[38px] font-medium text-lavender-100 inline-block min-w-[105px] mq750:text-7xl mq750:leading-[30px] mq450:text-lgi mq450:leading-[23px]">
                Legal
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="opacity-50 relative leading-[118.46%] font-medium inline-block min-w-[105px] mq450:text-lgi mq450:leading-[23px]">
                  Privacy
                </div>
                <div className="opacity-50 self-stretch relative leading-[118.46%] font-medium mq450:text-lgi mq450:leading-[23px]">
                  Terms
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className={`w-full max-w-full footer-text `}
        style={{ fontFamily: "var(--accentFont)" }}
      >
        <h1 id="tobefitted" className="whitespace-none">
          vortex
        </h1>
      </div>
    </div>
  );
};

export default Footer;
