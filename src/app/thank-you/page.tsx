"use client";
import { useRouter } from "next/navigation";
import Thnaks from "./Thanks";
import { useEffect, useState } from "react";
import Thanks from "./Thanks";

const page = () => {
  const [num, setNum] = useState(10);
  const router = useRouter();
  useEffect(() => {
    const redirect = setTimeout(() => {
      router.push("/");
    }, 10000);
    const timer = setTimeout(() => {
      setNum(num - 1);
      if (num === 0) {
        setNum(0);
      }
    }, 1000);

    return () => clearTimeout(redirect);
  }, [router, num]);
  return (
    <>
      <Thanks num={num} />
      
    </>
  );
};

export default page;
