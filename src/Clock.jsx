import { useState, useEffect } from 'react';
/**
 * Clock 컴포넌트
 *
 * 실시간 시계를 표시하고 사용자가 시계를 시작하거나 정지할 수 있는 React 함수형 컴포넌트입니다.
 * 시간은 "시", "분", "초"로 나뉘어 표시됩니다.
 *
 * 주요 기능:
 * - 현재 시간을 "HH:mm:ss" 형식으로 표시합니다.
 * - 시계가 실행 중일 때 매초마다 시간을 업데이트합니다.
 **/
export default function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}시 ${minutes}분 ${seconds}초`;
  };

  useEffect(() => {
    const Timer = setInterval(() => setCurrentTime(new Date()), 1000);

    return () => {
      clearInterval(Timer);
    };
  }, []);

  return (
    <div className="timer-container">
      <h2 className="title">
        현재 시간 <span className="timer">{formatTime(currentTime)}</span>
      </h2>
    </div>
  );
}
