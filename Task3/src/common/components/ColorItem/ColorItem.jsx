import { useState } from "react";
import audio from "../../../assets/audio/copy_color_audio.m4a";
import styles from "./ColorItem.module.scss";

const ColorItem = ({ name, color }) => {
  const sound = new Audio(audio);
  const [isAnimation, setIsAnimation] = useState(false);

  const animationStage1Time = 300;
  const animationStage2Time = 300;
  const animationStage23Delay = 300;

  const textColor = isColorLight(color) ? "#000" : "#fff";
  const overlayColor = isColorLight(color) ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.2)";
  const body = document.querySelector("body");

  const handleClick = () => {
    if (isAnimation) {
      return;
    }
    setIsAnimation(true);
    const element = document.getElementById(`mod-col-${name}`);

    navigator.clipboard.writeText(color);
    sound.currentTime = 0;

    body.style.overflow = "hidden";
    element.classList.add(styles.copyStart);
    setTimeout(() => {
      sound.play();
      element.classList.add(styles.copyMiddle);
    }, animationStage1Time);
    setTimeout(() => {
      element.classList.add(styles.copyEnd);
    }, animationStage1Time + animationStage2Time + animationStage23Delay);
    setTimeout(() => {
      element.classList.remove(styles.copyStart);
      element.classList.remove(styles.copyMiddle);
      element.classList.remove(styles.copyEnd);
      body.style.overflow = "auto";
      setIsAnimation(false);
    }, animationStage1Time + animationStage2Time + animationStage23Delay + animationStage2Time);
  };

  return (
      <div className={styles.color}
           id={`mod-col-${name}`}
           style={{ backgroundColor: color }}
           role="button"
           onClick={handleClick}>
        <div className={styles.colorScaleWrapper}
             style={{
               backgroundColor: color,
               transition: `transform ${animationStage1Time}ms ease-in-out,
                          border-radius ${animationStage1Time}ms ease-in-out,
                          opacity ${animationStage2Time}ms ease-in-out`,
             }}></div>
        <h3 style={{ color: textColor }}>{name}</h3>
        <p className={styles.copyButton} style={{ color: textColor, borderColor: textColor }}>Copy</p>

        <div className={styles.copyText} style={{
          transition: `opacity ${animationStage2Time}ms ease-in-out`,
          backgroundColor: overlayColor,
        }}>
          <hr style={{ backgroundColor: textColor }} />
          <h4 style={{ color: textColor }}>Copied</h4>
          <p style={{ color: textColor }}>{color}</p>
          <hr style={{ backgroundColor: textColor }} />
        </div>
      </div>
  );
};

export default ColorItem;

const isColorLight = (hex) => {
  const [r, g, b] = hex.match(/\w\w/g).map((c) => parseInt(c, 16));

  // Rec. 709 coefficients for converting RGB to grayscale
  const RED_WEIGHT = 0.299;
  const GREEN_WEIGHT = 0.587;
  const BLUE_WEIGHT = 0.114;

  // Calculate color brightness
  const brightness = (r * RED_WEIGHT) + (g * GREEN_WEIGHT) + (b * BLUE_WEIGHT);

  return brightness > 150;
};

