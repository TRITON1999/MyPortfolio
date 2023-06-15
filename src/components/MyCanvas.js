import React, { useEffect, useRef, useState } from "react";
import "./MyCanvas.css";

class Particle {
  constructor(x, y, color, ctx, effect) {
    this.ctx = ctx;
    this.effect = effect;
    this.color = color;
    this.originalX = Math.floor(x);
    this.originalY = Math.floor(y);
    this.x = Math.floor(x);
    this.y = Math.floor(y);
    this.size = 4;
    this.vx = Math.floor(Math.random() * 10 - 5);
    this.vy = Math.floor(Math.random() * 10 - 5);
    if (this.vx === 0) {
      this.vx = 2;
    }
    if (this.vy === 0) {
      this.vy = 2;
    }
    this.ovx = this.vx;
    this.ovy = this.vy;
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }
  reverce(c) {
    this.x -= this.vx;
    this.y -= this.vy;
    if (this.originalX === this.x && this.originalY === this.y) {
      this.vx = 0;
      this.vy = 0;
    }
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
  }
}
class Effect {
  constructor(canvas, ctx, image, laptop, mobile) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.particles = [];
    this.laptop = laptop;
    this.mobile = mobile;
    this.scrollY = 0;
    this.image = image;
    this.continueAnimation = true;
    this.continueAnimation1 = true;
  }
  scroll(y) {
    this.scrollY = y;
  }
  generateImageParticles() {
    this.particles = [];
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.genrateImage();
    const pixelData = this.ctx.getImageData(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    ).data;
    for (let y = 0; y < this.canvas.height; y += 4) {
      for (let x = 0; x < this.canvas.width; x += 4) {
        let pixels = (y * this.canvas.width + x) * 4;
        if (pixelData[pixels + 3] === 0) {
          continue;
        }
        let color =
          "rgb(" +
          pixelData[pixels] +
          "," +
          pixelData[pixels + 1] +
          "," +
          pixelData[pixels + 2] +
          ")";

        const p = new Particle(x, y, color, this.ctx, this);
        this.particles.push(p);
      }
    }
    const anmt = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.update();
      this.draw();
      if (this.continueAnimation1) requestAnimationFrame(anmt);
    };
    anmt();
  }
  generateSecondAnimation() {
    const an = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.reverce();
      this.drawForReverce();
      if (this.continueAnimation) {
        requestAnimationFrame(an);
      } else {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.genrateImage();
      }
    };
    an();
  }
  genrateImage() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const imgW = this.canvas.width - 20;
    const imgH = imgW / 2;

    // this.ctx.fillStyle = "white";
    // this.ctx.fillRect(10, 10, imgW, imgH);

    if (window.innerWidth < 500) {
      this.ctx.drawImage(this.image, 10, 10, imgW, imgH);
      let th = imgH + (2 * (this.canvas.height - imgH)) / 5;
      this.ctx.font = "bold 8vw Indie Flower";
      this.ctx.fillStyle = "white";
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "center";
      this.ctx.fillText(this.mobile[0], 10 + imgW / 2, th);
      th = imgH + (4 * (this.canvas.height - imgH)) / 5;
      this.ctx.font = "bold 8vw Indie Flower";
      this.ctx.fillStyle = "white";
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "center";
      this.ctx.fillText(this.mobile[1], 10 + imgW / 2, th);
    } else {
      const th = this.canvas.height / 2 - imgH / 2;
      this.ctx.drawImage(
        this.image,
        this.canvas.width / 2 - imgW / 2,
        this.canvas.height / 2 - imgH / 2,
        imgW,
        imgH
      );
      this.ctx.font = "bold 3.5vw Indie Flower";
      this.ctx.fillStyle = "white";
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "center";
      this.ctx.fillText(this.laptop, this.canvas.width / 2, th / 2);
    }
  }
  draw() {
    this.particles.forEach((p) => p.draw());
  }
  drawForReverce() {
    this.particles.forEach((p) => {
      if (p.vx === 0 && this.continueAnimation) {
        this.continueAnimation = false;
      }
      p.draw();
    });
  }
  reverce() {
    this.particles.forEach((p) => {
      p.reverce();
      if (p.x === p.originalX && p.y === p.originalY) {
        this.stopAnimation = true;
      }
    });
  }
  update() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
    }
  }
}

const MyCanvas = (props) => {
  const img = useRef(null);
  const cvs = useRef(null);
  const plg = useRef(null);
  const effect = useRef(null);

  const [buttonColor, setButtonColor] = useState({
    backgroundColor: "#ca150c",
  });
  const [distroyText, setDistroyText] = useState("💀");
  //   const [effect, setEffect] = useState(null);
  useEffect(() => {
    const canvas = cvs.current;
    const playGround = plg.current;
    canvas.height = playGround.offsetHeight;
    canvas.width = playGround.offsetWidth;
    effect.current = new Effect(
      cvs.current,
      cvs.current.getContext("2d"),
      img.current,
      props.laptop,
      props.mobile
    );
    effect.current.genrateImage();
    setTimeout(() => {
      effect.current.genrateImage();
    }, 1000);
    // effect = new Effect(canvas, ctx, image);
  }, []);
  return (
    <div className="MyCanvas">
      <div className="MyCanvasGridField">
        <div className="my-canvas-playfield" ref={plg}>
          <canvas className="my-canvas" ref={cvs}>
            <img
              classNmae="images"
              src={props.img}
              alt="display-image"
              ref={img}
            />
          </canvas>
        </div>
        <div className="my-canvas-controller">
          <div>
            <div className="apply-grid">
              <button
                style={buttonColor}
                onClick={() => {
                  if (distroyText === "💀") {
                    setButtonColor({ backgroundColor: "#6f9b59" });
                    effect.current.continueAnimation1 = true;
                    setDistroyText("🛠️");
                    effect.current.continueAnimation = false;
                    effect.current.generateImageParticles();
                  }
                  if (distroyText === "🛠️") {
                    setButtonColor({ backgroundColor: "#ca150c" });
                    effect.current.continueAnimation = true;
                    setDistroyText("💀");
                    effect.current.continueAnimation1 = false;
                    effect.current.generateSecondAnimation();
                  }
                }}
                class="btn ripple-effect"
              >
                {distroyText}
              </button>
              <button
                onClick={() => {
                  window.open(props.mobile[2], "_blank", "noreferrer");
                }}
                class="btn ripple-effect"
              >
                LINK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCanvas;
