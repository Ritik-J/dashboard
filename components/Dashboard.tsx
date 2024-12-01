import { DownloadIcon } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="w-full p-4">
      <header className="w-full flex justify-between items-center sm:w-[95%] sm:ml-[5%] md:w-[95%] md:ml-[5%] lg:w-full lg:ml-0">
        <span className="text-black font-inter text-lg font-semibold">
          Reports
        </span>
        <button className="text-[#4D4D4D] font-inter flex items-center gap-2">
          <DownloadIcon className="text-[#4D4D4D]" /> Download
        </button>
      </header>
      <hr className="mt-8" />
      <div></div>
    </div>
  );
};

export default Dashboard;
