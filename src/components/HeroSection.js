import React from "react";
import "./HeroSection.css";
import FlowOfColors from "./FlowOfColors";

const HeroSection = () => {
  const text = "[HEY,[ [I'M[ [AKSHAT[ TRIPATHI".split(" ");
  const rubberEffect = (e) => {
    if (e.target.className === "blast") {
      e.target.className = "blast animated rubber-band";
      setTimeout(() => {
        e.target.className = "blast";
      }, 700);
    }
  };
  const boldEffect = (e) => {
    if (e.target.className === "") {
      e.target.className = "bold-animation";
      setTimeout(() => {
        e.target.className = "";
      }, 700);
    }
  };
  return (
    <section class="home-hero">
      <FlowOfColors />
      <div class="home-hero__content">
        <h1 class="heading-primary">
          {text.map((p, i) => {
            return (
              <span className="one-thing">
                {p.split("").map((x, l) => {
                  let k = "blast";
                  if (x === "[") k += " un";
                  return (
                    <span className={k} key={i} onMouseEnter={rubberEffect}>
                      {x}
                    </span>
                  );
                })}
              </span>
            );
          })}
        </h1>
        <div class="home-hero__info">
          <p class="text-primary">
            <span className="" onMouseEnter={boldEffect}>
              A
            </span>
            <span className="" onMouseEnter={boldEffect}>
              {" "}
              F
            </span>
            <span className="" onMouseEnter={boldEffect}>
              u
            </span>
            <span className="" onMouseEnter={boldEffect}>
              l
            </span>
            <span className="" onMouseEnter={boldEffect}>
              l
            </span>
            <span className="" onMouseEnter={boldEffect}>
              -
            </span>
            <span className="" onMouseEnter={boldEffect}>
              S
            </span>
            <span className="" onMouseEnter={boldEffect}>
              t
            </span>
            <span className="" onMouseEnter={boldEffect}>
              a
            </span>
            <span className="" onMouseEnter={boldEffect}>
              c
            </span>
            <span className="" onMouseEnter={boldEffect}>
              k
            </span>
            <span className="" onMouseEnter={boldEffect}>
              {" "}
              W
            </span>
            <span className="" onMouseEnter={boldEffect}>
              e
            </span>
            <span className="" onMouseEnter={boldEffect}>
              b
            </span>
            <span className="" onMouseEnter={boldEffect}>
              {" "}
              D
            </span>
            <span className="" onMouseEnter={boldEffect}>
              e
            </span>
            <span className="" onMouseEnter={boldEffect}>
              v
            </span>
            <span className="" onMouseEnter={boldEffect}>
              e
            </span>
            <span className="" onMouseEnter={boldEffect}>
              l
            </span>
            <span className="" onMouseEnter={boldEffect}>
              o
            </span>
            <span className="" onMouseEnter={boldEffect}>
              p
            </span>
            <span className="" onMouseEnter={boldEffect}>
              e
            </span>
            <span className="" onMouseEnter={boldEffect}>
              r
            </span>{" "}
            <span className="" onMouseEnter={boldEffect}>
              r
            </span>
            <span className="" onMouseEnter={boldEffect}>
              e
            </span>
            <span className="" onMouseEnter={boldEffect}>
              a
            </span>
            <span className="" onMouseEnter={boldEffect}>
              d
            </span>
            <span className="" onMouseEnter={boldEffect}>
              y
            </span>{" "}
            <span className="" onMouseEnter={boldEffect}>
              t
            </span>
            <span className="" onMouseEnter={boldEffect}>
              o
            </span>
            <span className="" onMouseEnter={boldEffect}>
              {" "}
              b
            </span>
            <span className="" onMouseEnter={boldEffect}>
              u
            </span>
            <span className="" onMouseEnter={boldEffect}>
              i
            </span>
            <span className="" onMouseEnter={boldEffect}>
              l
            </span>
            <span className="" onMouseEnter={boldEffect}>
              d
            </span>
            <span className="" onMouseEnter={boldEffect}>
              {" "}
            </span>
            <span className="" onMouseEnter={boldEffect}>
              t
            </span>
            <span className="" onMouseEnter={boldEffect}>
              h
            </span>
            <span className="" onMouseEnter={boldEffect}>
              e
            </span>
            <span className="" onMouseEnter={boldEffect}>
              {" "}
            </span>
            <span className="" onMouseEnter={boldEffect}>
              F
            </span>
            <span className="" onMouseEnter={boldEffect}>
              r
            </span>
            <span className="" onMouseEnter={boldEffect}>
              o
            </span>
            <span className="" onMouseEnter={boldEffect}>
              n
            </span>
            <span className="" onMouseEnter={boldEffect}>
              t
            </span>
            <span className="" onMouseEnter={boldEffect}>
              e
            </span>
            <span className="" onMouseEnter={boldEffect}>
              n
            </span>
            <span className="" onMouseEnter={boldEffect}>
              d
            </span>
            <span className="" onMouseEnter={boldEffect}>
              /
            </span>
            <span className="" onMouseEnter={boldEffect}>
              B
            </span>
            <span className="" onMouseEnter={boldEffect}>
              a
            </span>
            <span className="" onMouseEnter={boldEffect}>
              c
            </span>
            <span className="" onMouseEnter={boldEffect}>
              k
            </span>
            <span className="" onMouseEnter={boldEffect}>
              e
            </span>
            <span className="" onMouseEnter={boldEffect}>
              n
            </span>
            <span className="" onMouseEnter={boldEffect}>
              d
            </span>
            <span className="" onMouseEnter={boldEffect}>
              {" "}
              o
            </span>
            <span className="" onMouseEnter={boldEffect}>
              f
            </span>
            <span className="" onMouseEnter={boldEffect}>
              {" "}
            </span>
            <span className="" onMouseEnter={boldEffect}>
              W
            </span>
            <span className="" onMouseEnter={boldEffect}>
              e
            </span>
            <span className="" onMouseEnter={boldEffect}>
              b
            </span>
            <span className="" onMouseEnter={boldEffect}>
              s
            </span>
            <span className="" onMouseEnter={boldEffect}>
              i
            </span>
            <span className="" onMouseEnter={boldEffect}>
              t
            </span>
            <span className="" onMouseEnter={boldEffect}>
              e
            </span>
            <span className="" onMouseEnter={boldEffect}>
              s
            </span>
            <br />
            <span className="" onMouseEnter={boldEffect}>
              {" "}
              a
            </span>
            <span className="" onMouseEnter={boldEffect}>
              n
            </span>
            <span className="" onMouseEnter={boldEffect}>
              d
            </span>
            <span className="" onMouseEnter={boldEffect}>
              {" "}
              W
            </span>
            <span className="" onMouseEnter={boldEffect}>
              e
            </span>
            <span className="" onMouseEnter={boldEffect}>
              b
            </span>
            <span className="" onMouseEnter={boldEffect}>
              {" "}
              A
            </span>
            <span className="" onMouseEnter={boldEffect}>
              p
            </span>
            <span className="" onMouseEnter={boldEffect}>
              p
            </span>
            <span className="" onMouseEnter={boldEffect}>
              l
            </span>
            <span className="" onMouseEnter={boldEffect}>
              i
            </span>
            <span className="" onMouseEnter={boldEffect}>
              c
            </span>
            <span className="" onMouseEnter={boldEffect}>
              a
            </span>
            <span className="" onMouseEnter={boldEffect}>
              t
            </span>
            <span className="" onMouseEnter={boldEffect}>
              i
            </span>
            <span className="" onMouseEnter={boldEffect}>
              o
            </span>
            <span className="" onMouseEnter={boldEffect}>
              n
            </span>
            <span className="" onMouseEnter={boldEffect}>
              s
            </span>
            <span className="" onMouseEnter={boldEffect}>
              {" "}
              t
            </span>
            <span className="" onMouseEnter={boldEffect}>
              h
            </span>
            <span className="" onMouseEnter={boldEffect}>
              a
            </span>
            <span className="" onMouseEnter={boldEffect}>
              t
            </span>
            <span className="" onMouseEnter={boldEffect}>
              {" "}
              l
            </span>
            <span className="" onMouseEnter={boldEffect}>
              e
            </span>
            <span className="" onMouseEnter={boldEffect}>
              a
            </span>
            <span className="" onMouseEnter={boldEffect}>
              d
            </span>
            <span className="" onMouseEnter={boldEffect}>
              s
            </span>
            <span className="" onMouseEnter={boldEffect}>
              {" "}
              t
            </span>
            <span className="" onMouseEnter={boldEffect}>
              o
            </span>
            <span className="" onMouseEnter={boldEffect}>
              {" "}
            </span>
            <span className="" onMouseEnter={boldEffect}>
              t
            </span>
            <span className="" onMouseEnter={boldEffect}>
              h
            </span>
            <span className="" onMouseEnter={boldEffect}>
              e
            </span>
            <span className="" onMouseEnter={boldEffect}>
              {" "}
              s
            </span>
            <span className="" onMouseEnter={boldEffect}>
              u
            </span>
            <span className="" onMouseEnter={boldEffect}>
              c
            </span>
            <span className="" onMouseEnter={boldEffect}>
              c
            </span>
            <span className="" onMouseEnter={boldEffect}>
              e
            </span>
            <span className="" onMouseEnter={boldEffect}>
              s
            </span>
            <span className="" onMouseEnter={boldEffect}>
              s
            </span>
            <span className="" onMouseEnter={boldEffect}>
              {" "}
              o
            </span>
            <span className="" onMouseEnter={boldEffect}>
              f
            </span>
            <span className="" onMouseEnter={boldEffect}>
              {" "}
              t
            </span>
            <span className="" onMouseEnter={boldEffect}>
              h
            </span>
            <span className="" onMouseEnter={boldEffect}>
              e
            </span>
            <span className="" onMouseEnter={boldEffect}>
              {" "}
              o
            </span>
            <span className="" onMouseEnter={boldEffect}>
              v
            </span>
            <span className="" onMouseEnter={boldEffect}>
              e
            </span>
            <span className="" onMouseEnter={boldEffect}>
              r
            </span>
            <span className="" onMouseEnter={boldEffect}>
              a
            </span>
            <span className="" onMouseEnter={boldEffect}>
              l
            </span>
            <span className="" onMouseEnter={boldEffect}>
              l
            </span>
            <span className="" onMouseEnter={boldEffect}>
              {" "}
              p
            </span>
            <span className="" onMouseEnter={boldEffect}>
              r
            </span>
            <span className="" onMouseEnter={boldEffect}>
              o
            </span>
            <span className="" onMouseEnter={boldEffect}>
              d
            </span>
            <span className="" onMouseEnter={boldEffect}>
              u
            </span>
            <span className="" onMouseEnter={boldEffect}>
              c
            </span>
            <span className="" onMouseEnter={boldEffect}>
              t
            </span>
          </p>
        </div>
        <div class="home-hero__cta">
          <a href="./#projects" class="btn btn--bg ripple-effect">
            Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
