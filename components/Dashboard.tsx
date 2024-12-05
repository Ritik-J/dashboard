import { DownloadIcon } from "lucide-react";
import TimeFilter from "./TimeFilter";
import GroupFilter from "./GroupFilter";
import TopicFilter from "./TopicFilter";
import UserStats from "./UserStats";
import UserActivity from "./UserActivity";
import WeakestTopic from "./WeakestTopic";
import StrongestTopics from "./StrongestTopics";
import UserLeaderBoard from "./UserLeaderBoard";
import GroupLeaderBoard from "./GroupLeaderBoard";

const Dashboard = () => {
  return (
    <div className="w-full p-4">
      <header className="w-full flex justify-between items-center sm:w-[95%] sm:ml-[5%] md:w-[95%] md:ml-[5%] lg:w-full lg:ml-0 px-8 ">
        <span className="text-black font-inter text-lg font-semibold">
          Reports
        </span>
        <button className="text-[#4D4D4D] font-inter flex items-center gap-2">
          <DownloadIcon className="text-[#4D4D4D]" /> Download
        </button>
      </header>

      <hr className="mt-7" />
      <div className="mt-4 flex flex-col lg:justify-between lg:flex-row gap-3">
        <TimeFilter />
        <GroupFilter />
        <TopicFilter />
      </div>
      <div className="w-fit flex lg:items-center h-auto lg:h-80 p-2 lg:flex-row flex-col gap-2">
        <UserStats />
        <UserActivity />
      </div>

      <div className="flex w-full lg:flex-row flex-col gap-2 h-auto lg:h-[280px] p-2">
        <WeakestTopic />
        <StrongestTopics />
      </div>

      <div className="flex w-full lg:flex-row flex-col gap-2 h-auto lg:p-2">
        <UserLeaderBoard />
        <GroupLeaderBoard />
      </div>

      <div className="flex w-full justify-center items-center p-8 text-lg font-inter font-semibold gap-2">
        Created by Ritik Jain
      </div>
    </div>
  );
};

export default Dashboard;
