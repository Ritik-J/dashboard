import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="bg-slate-900 h-screen w-screen flex flex-col justify-center items-center gap-6">
      <h1 className="text-8xl font-bold font-inter text-slate-400">
        Welcome To Analytics
      </h1>
      <Link href="/dashboard">
        <Button variant={"secondary"} className="bg-black text-white">
          Go To DashBoard
        </Button>
      </Link>
    </div>
  );
};

export default Home;
