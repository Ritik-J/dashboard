/* eslint-disable @next/next/no-img-element */
import { dashboardData } from "@/data";
import React from "react";

interface LeaderBoard {
  id: number;
  image: string;
  name: string;
  points: number;
  accuracy_percentage: number;
  previous_accuracy_percentage: number;
}

const UserLeaderBoard: React.FC = () => {
  const { user_leaderboard } = dashboardData;

  return (
    <div className="w-full lg:w-[50%] h-full rounded-2xl shadow-xl shadow-[#EFF0F6] bg-white">
      <h3 className="text-gray-500 font-semibold p-4">User LeaderBoard</h3>
      <div className="flex flex-col p-2 gap-2 w-full font-inter justify-center">
        {user_leaderboard.map((user: LeaderBoard) => (
          <div
            key={user.id}
            className="flex justify-between items-center gap-3"
          >
            <img src={user.image} alt={`${user.name}'s avatar`} />
            <div className="flex flex-col gap-1 w-full p-2">
              <p className="font-semibold">{user.name}</p>
              <span className="text-gray-400 text-sm">
                {user.points} points - {user.accuracy_percentage}% correct
              </span>
            </div>
            <span className="text-[#151E23] flex gap-4 items-center font-semibold pr-5 text-lg">
              {user.id}
              <img
                src={
                  user.accuracy_percentage > user.previous_accuracy_percentage
                    ? "/green-arrow.png"
                    : "/red-arrow.png"
                }
                alt={
                  user.accuracy_percentage > user.previous_accuracy_percentage
                    ? "green arrow"
                    : "red arrow"
                }
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserLeaderBoard;
