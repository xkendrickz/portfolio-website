import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 group">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-indigo-600 
        ring-2 ring-indigo-500/30 group-hover:ring-indigo-500/70 transition-all duration-300">
        <span className="text-white font-bold text-sm tracking-wide">KC</span>
      </div>
      <p className="hidden font-bold text-gray-200 sm:block md:text-xl group-hover:text-indigo-400 transition-colors duration-300">
        Kendrick
      </p>
    </Link>
  );
}