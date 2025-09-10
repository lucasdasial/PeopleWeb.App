import { useEffect, useState } from "react";

export const Page = ({ children }: any) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return <div className={`page ${animate ? "fadeIn" : ""}`}>{children}</div>;
};
