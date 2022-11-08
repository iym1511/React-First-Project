// 함수형 컴포넌트 시간 출력

import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

const ClockComp = () => {
    const [time, setTime] = useState(new Date());
    // 1초마다 반복하기위한 setInterval 사용 - 생성될때 한번만 실행


    // useMemo return 값이 바뀌지않는다면, 이전의 return값을 그대로 쓸 수 있다
    const hours = useMemo(()=>{
        let stringHour = String(time.getHours())
        return stringHour.padStart(2,"0")
    },[time]);

    const seconds = useMemo(()=>{
        let stringSeconds = String(time.getSeconds())
        return stringSeconds.padStart(2,"0")
    },[time]);

    const minutes = useMemo(()=>{
        let stringMinutes = String(time.getMinutes())
        return stringMinutes.padStart(2,"0")
    },[time]);

    const getTime = useMemo((timeString)=>{
        let stringT = String(timeString)
        return stringT.padStart(2,"0")
    },[time])

    return (  
        <div>
            <h1 style={{fontSize:"15px"}}>({hours}:{minutes}:{seconds})</h1>
        </div>
    );
}

export default ClockComp;