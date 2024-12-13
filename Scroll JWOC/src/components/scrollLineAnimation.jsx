import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollLineAnimation = () => {
  useEffect(() => {
    const line = document.querySelector(".theLine");
    const pathLength = line.getTotalLength();

    line.style.strokeDasharray = pathLength;
    line.style.strokeDashoffset = pathLength;

    gsap.to(line, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: ".line-container",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      },
      ease: "none",
    });

    for (let i = 1; i <= 8; i++) {
      gsap.to(`.ball0${i}`, {
        opacity: 1,
        scrollTrigger: {
          trigger: `.ball0${i}`,
          start: "top 70%",
          end: "top 50%",
          scrub: true,
          markers: false,
        },
      });

      gsap.to(`.timeText0${i}`, {
        opacity: 1,
        scrollTrigger: {
          trigger: `.ball0${i}`,
          start: "top 70%",
          end: "top 50%",
          scrub: true,
          markers: false,
        },
      });
    }
  }, []);

  return (
    <div>
      <div className="black-section"></div>

      <div className="line-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 2600"
          preserveAspectRatio="xMidYMax meet"
        >
          <defs>
            <linearGradient
              id="gradientStroke"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgb(34, 0, 255)" />
              <stop offset="50%" stopColor="rgb(204, 0, 255)" />
              <stop offset="100%" stopColor="rgb(0, 244, 134)" />
            </linearGradient>
          </defs>

          <path
            className="theLine"
            d="M 400 50 
                Q 1000 200 400 350 
                T 400 650 
                Q 1000 800 400 950 
                T 400 1250
                Q 1000 1400 400 1550 
                T 400 1850
                Q 1000 2000 400 2150"
            fill="none"
            stroke="url(#gradientStroke)"
            strokeWidth="20"
          />

          <text
            className="timeText timeText01"
            x="-221"
            y="50"
            style={{ opacity: 0, fontWeight: "600"}}
          >
            1 Jan: Registration begins
          </text>
          <circle
            className="ball ball01"
            cx="400"
            cy="50"
            r="20"
            style={{ opacity: 0 }}
          ></circle>

          <text
            className="timeText timeText02"
            x="470"
            y="400"
            style={{ opacity: 0, fontWeight: "600" }}
          >
            20 Jan: Registration closes
          </text>
          <circle
            className="ball ball02"
            cx="400"
            cy="350"
            r="20"
            style={{ opacity: 0 }}
          ></circle>

          <text
            className="timeText timeText03"
            x="-180"
            y="700"
            style={{ opacity: 0, fontWeight: "600" }}
          >
            22 Jan: Projects disclose
          </text>
          <circle
            className="ball ball03"
            cx="400"
            cy="650"
            r="20"
            style={{ opacity: 0 }}
          ></circle>

          <text
            className="timeText timeText04"
            x="470"
            y="1000"
            style={{ opacity: 0, fontWeight: "600" }}
          >
            29 Jan: Community bonding
          </text>
          <circle
            className="ball ball04"
            cx="400"
            cy="950"
            r="20"
            style={{ opacity: 0 }}
          ></circle>

          <text
            className="timeText timeText05"
            x="-210"
            y="1300"
            style={{ opacity: 0, fontWeight: "600" }}
          >
            31 Jan: Phase one begins
          </text>
          <circle
            className="ball ball05"
            cx="400"
            cy="1250"
            r="20"
            style={{ opacity: 0 }}
          ></circle>

          <text
            className="timeText timeText06"
            x="470"
            y="1610"
            style={{ opacity: 0, fontWeight: "600" }}
          >
            14 Feb: Phase one ends
          </text>
          <circle
            className="ball ball06"
            cx="400"
            cy="1550"
            r="20"
            style={{ opacity: 0 }}
          ></circle>

          <text
            className="timeText timeText07"
            x="-180"
            y="1920"
            style={{ opacity: 0, fontWeight: "600" }}
          >
            15 Feb: Phase two begins
          </text>
          <circle
            className="ball ball07"
            cx="400"
            cy="1850"
            r="20"
            style={{ opacity: 0 }}
          ></circle>

          <text
            className="timeText timeText08"
            x="480"
            y="2200"
            style={{ opacity: 0, fontWeight: "600" }}
          >
            28 Feb: Phase two ends
          </text>
          <circle
            className="ball ball08"
            cx="400"
            cy="2150"
            r="20"
            style={{ opacity: 0 }}
          ></circle>
        </svg>
      </div>

      <div className="black-section-2"></div>
    </div>
  );
};

export default ScrollLineAnimation;
