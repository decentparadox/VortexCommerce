"use client";
import { useEffect } from "react";
import gsap from "gsap";
const Marquee = () => {
  useEffect(() => {
    let currentScroll = 0;
    let isScrollingDown = true;
    const arrows = document.querySelectorAll(".arrow");

    const tween = gsap.to("#marquee__part", {
      xPercent: -100,
      repeat: 1,
      duration: 10,
      ease: "linear",
    });
    gsap.set("#marquee__inner", { xPercent: -50 });

    window.addEventListener("scroll", function () {
      if (window.scrollY > currentScroll) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }

      gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
      });

      arrows.forEach((arrow) => {
        if (isScrollingDown) {
          arrow.classList.remove("active");
        } else {
          arrow.classList.add("active");
        }
      });

      currentScroll = window.scrollY;
    });
  }, []);

  return (
    <div
      className="marquee relative font-bold overflow-hidden text-center text-[10px] lg:text-[14px] xl:text-[16px] bg-[#7AFFC7] text-[#1F1F21]"
    >
      <div className="flex w-fit items-center justify-center flex-auto flex-row" id="marquee__inner">
        {Array.from({ length: 50 }).map((_, index) => (
          <div key={index} className="flex items-center justify-center flex-shrink-0 px-1" id="marquee__part">
            <p className="text-[18px] h-full">New Arrivals</p>
            <div className="mx-4 w-[25px] h-auto text-[#1F1F21] fill-[#1F1F21]">
              <svg
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.6719 7.06448L22.2157 1.77752L22.881 7.069L22.8808 7.06902L22.8823 7.07793L24.0809 14.0701L22.1957 19.4359L20.3112 14.0724L21.6693 7.08232L21.671 7.07345L21.6719 7.06448Z"
                  fill="#1F1F21"
                  stroke="#1F1F21"
                  stroke-width="0.403636"
                />
                <path
                  d="M21.6719 37.9356L22.2157 43.2225L22.881 37.931L22.8808 37.931L22.8823 37.9221L24.0809 30.9299L22.1957 25.5641L20.3112 30.9276L21.6693 37.9177L21.671 37.9266L21.6719 37.9356Z"
                  fill="#1F1F21"
                  stroke="#1F1F21"
                  stroke-width="0.403636"
                />
                <path
                  d="M37.269 22.9835L42.556 22.4397L37.2645 21.7745L37.2645 21.7747L37.2556 21.7731L30.2633 20.5745L24.8976 22.4597L30.2611 24.3442L37.2512 22.9861L37.26 22.9844L37.269 22.9835Z"
                  fill="#1F1F21"
                  stroke="#1F1F21"
                  stroke-width="0.403636"
                />
                <path
                  d="M24.3114 20.4307C25.1321 19.947 26.0459 19.6394 26.9946 19.5291L27.0672 19.5206C27.2099 18.5551 27.6003 17.6425 28.2008 16.8722L28.311 16.7308L28.311 16.7308L28.3119 16.7298L29.796 14.8829L27.9271 16.3524L27.9271 16.3524L27.9241 16.3547L27.7423 16.4855C26.9701 17.0416 26.0768 17.4055 25.1366 17.5476C25.0402 18.5519 24.7603 19.529 24.3114 20.4307Z"
                  fill="#1F1F21"
                  stroke="#1F1F21"
                  stroke-width="0.179934"
                />
                <path
                  d="M20.079 20.4071C19.2583 19.9234 18.3445 19.6158 17.3958 19.5055L17.3231 19.497C17.1805 18.5315 16.7901 17.619 16.1895 16.8486L16.0793 16.7072L16.0794 16.7072L16.0785 16.7062L14.5944 14.8594L16.4633 16.3288L16.4632 16.3288L16.4663 16.3311L16.6481 16.462C17.4203 17.018 18.3136 17.382 19.2538 17.524C19.3501 18.5283 19.6301 19.5054 20.079 20.4071Z"
                  fill="#1F1F21"
                  stroke="#1F1F21"
                  stroke-width="0.179934"
                />
                <path
                  d="M20.079 24.5966C19.2583 25.0803 18.3445 25.3879 17.3958 25.4982L17.3231 25.5067C17.1805 26.4722 16.7901 27.3847 16.1895 28.1551L16.0793 28.2965L16.0794 28.2965L16.0785 28.2975L14.5944 30.1443L16.4633 28.6749L16.4632 28.6748L16.4663 28.6726L16.6481 28.5417C17.4203 27.9856 18.3136 27.6217 19.2538 27.4797C19.3501 26.4754 19.6301 25.4983 20.079 24.5966Z"
                  fill="#1F1F21"
                  stroke="#1F1F21"
                  stroke-width="0.179934"
                />
                <path
                  d="M24.3466 24.5966C25.1673 25.0803 26.0811 25.3879 27.0297 25.4982L27.1024 25.5067C27.2451 26.4722 27.6354 27.3847 28.236 28.1551L28.3462 28.2965L28.3462 28.2965L28.347 28.2975L29.8312 30.1443L27.9622 28.6749L27.9623 28.6748L27.9592 28.6726L27.7775 28.5417C27.0053 27.9856 26.112 27.6217 25.1717 27.4797C25.0754 26.4754 24.7954 25.4983 24.3466 24.5966Z"
                  fill="#1F1F21"
                  stroke="#1F1F21"
                  stroke-width="0.179934"
                />
                <path
                  d="M7.12246 21.936L1.8355 22.4798L7.12698 23.145L7.12701 23.1448L7.13591 23.1463L14.1281 24.345L19.4939 22.4597L14.1304 20.5753L7.1403 21.9333L7.13144 21.935L7.12246 21.936Z"
                  fill="#1F1F21"
                  stroke="#1F1F21"
                  stroke-width="0.403636"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
