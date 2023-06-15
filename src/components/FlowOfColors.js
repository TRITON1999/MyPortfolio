import React, { useEffect, useRef, useState } from "react";
import "./FlowOfColors.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FlowOfColors = (props) => {
  const flow1 = useRef(null);
  const flow2 = useRef(null);
  const flow3 = useRef(null);
  const flow4 = useRef(null);
  const flow5 = useRef(null);
  const container = useRef(null);
  useEffect(() => {
    const f5 = flow5.current;
    const f4 = flow4.current;
    const f3 = flow3.current;
    const f1 = flow1.current;
    const f2 = flow2.current;
    const con = container.current;
    gsap.to(con, {
      scrollTrigger: {
        trigger: con,
        start: "top top",
        // end: "",
        triggerActions: "",
        onEnter: () => {
          f5.classList.add("flow5anime");
          f4.classList.add("flow4anime");
          f3.classList.add("flow3anime");
          f1.classList.add("flow1anime");
          f2.classList.add("flow2anime");
          setTimeout(() => {
            f5.classList.add("flow5anime-re");
            f4.classList.add("flow4anime-re");
            f3.classList.add("flow3anime-re");
            f1.classList.add("flow1anime-re");
            f2.classList.add("flow2anime-re");
          }, 2000);
        },
        // markers: true,
      },
    });
    // gsap.to(con, {
    //   scrollTrigger: {
    //     trigger: con,
    //     start: "top+=100px top",
    //     onEnter: () => {
    //
    //     },
    //     markers: true,
    //   },
    // });
  }, []);
  const [flow, setFlow] = useState({
    1: "flow1",
    2: "flow2",
    3: "flow3",
    4: "flow4",
    5: "flow5",
  });
  const [t, setT] = useState(true);
  const setClasses = () => {
    console.log("entered");
    if (t) {
      setFlow({
        1: "flow1 flow1anime",
        2: "flow2 flow2anime",
        3: "flow3 flow3anime",
        4: "flow4 flow4anime",
        5: "flow5 flow5anime",
      });
      setT(false);
      setTimeout(() => {
        setFlow({
          1: "flow1 flow1anime-re",
          2: "flow2 flow2anime-re",
          3: "flow3 flow3anime-re",
          4: "flow4 flow4anime-re",
          5: "flow5 flow5anime-re",
        });
        setTimeout(() => {
          setFlow({
            1: "flow1",
            2: "flow2",
            3: "flow3",
            4: "flow4",
            5: "flow5",
          });
          setT(true);
        }, 1200);
      }, 3000);
    }
  };
  // const resolusion = window.screen.width;
  return (
    <div className="flow-of-colors" ref={container}>
      <div className={flow["5"]} ref={flow5}>
        <div className={flow[4]} ref={flow4}>
          <div className={flow[3]} ref={flow3}>
            <div className={flow[2]} ref={flow2}>
              <div className={flow["1"]} ref={flow1} onMouseEnter={setClasses}>
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowOfColors;
