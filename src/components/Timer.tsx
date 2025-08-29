import { useEffect, useState } from "react";
const Timer = () => {
  const [detik, setDetik] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setDetik((prevDetik) => prevDetik + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div>Timer Component</div>
      <div>{detik}</div>
    </>
  );
};

export default Timer;
