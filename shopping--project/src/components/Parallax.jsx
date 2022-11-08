import { useEffect, useState } from "react";

export default function Parallax() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }

  // 스크롤 할때마다 변함
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []); // 빈배열 : 최초 마운트때 한번만 실행



  return (
    <div className="wrapper">

      <div
        className="bg bg2"
        style={{
          backgroundPositionY: position / -6
        }}
      >
        <div className="bg2-p"></div>
      </div>

      <p
        className="desc"
        style={{
          transform: `translateX(${-position}px)`,
        }}
      >
        
      </p>
      
      <p
        className="desc"
        style={{
          transform: `translateX(${-position}px)`,
        }}
      >
        —————————————————————————————————————————————————————————————————————————————————————————————————————————————————
      </p>
      <p
        className="desc2"
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        —————————————————————————————————————————————————————————————————————————————————————————————————————————————————
      </p>
      <div className="desc-all">
        <div className="desc3-1-Card">
        <div className="desc3-1" style={{
          opacity: (position - 1650) / 450,
        }}>
        </div>
        <div >
          <h1 style={{opacity: (position - 1360) / 450, marginBottom:"20px",marginTop:"80px"}}>BMW 최초의 M 전용 초고성능</h1>
          <p style={{opacity: (position - 1460) / 450}}>BMW 최초의 M 전용 초고성능 SAV.</p>
          <p style={{opacity: (position - 1560) / 450}}>◦ V8 가솔린 엔진과 전기모터가 결합된 M 하이브리드</p>
          <p style={{opacity: (position - 1660) / 450}}>◦ 하이브리드 전용 M xDrive 사륜구동 시스템</p>
          <p style={{opacity: (position - 1760) / 450}}>◦ 80km 순수 전기주행*, 653마력*, 81.6 kg.m토크*</p>
          </div>
        </div>
      <p
        className="desc3"
        style={{
          opacity: (position - 1650) / 450,
        }}
      >
      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 1750) / 450,
        }}
      >

      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 1850) / 450,
        }}
      >

      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 1950) / 450,
        }}
      >
      </p>  
      </div>
      <div className="scroll-down"></div>
    </div>
  );
}
