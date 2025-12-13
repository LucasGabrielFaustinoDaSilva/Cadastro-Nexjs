import React from "react";
import Image from "next/image";
import styles from "./index.module.css";

export default function Home() {
  return (
   <div className={`
      flex h-screen justify-center items-center bg-gradient-to-r from-purple-500 via-yellow-200 to-blue-600
   `}>
    <span className="text-4xl">Texto</span>
   </div>
  );
}
