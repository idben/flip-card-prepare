import React, { useEffect, useState } from "react";
import styles from "./Card.module.sass";

export const Card = ({posiName, cardNum}) => {
  const [reversed, setReversed] = useState(true);
  const [forward1, setForward1] = useState(false);
  const [forward2, setForward2] = useState(false);
  const [active, setActive] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const onCardClick = () => {
    playSelection();
  }

  const playSelection = async () => {
    console.log("playing");
    await waittings(100);
    setForward1(true);
    await waittings(300);
    setForward2(true);
    await waittings(300);
    setActive(true);
  }

  return (
    <div
      onClick={onCardClick}
      className={`${styles.card} ${posiName} ${forward1? styles["forward" + selectedIndex] : ""} ${forward2? styles["forward" + selectedIndex + "2"] : ""}`}>
      <div className={`${styles.content} ${active?styles.active:""}`}>
        <div className={styles.front}></div>
        <div className={`${styles.back} ${reversed?styles.reversed:""}`}>
          Back!{cardNum}
        </div>
      </div>
    </div>
  );
};

function waittings(time){
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve();
    }, time);
  });
}
