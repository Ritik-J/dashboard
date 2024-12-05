/* eslint-disable @next/next/no-img-element */
import { dashboardData } from "@/data";

interface LeaderBoard {
  id: number;
  group_name: string;
  points_per_user: number;
  accuracy_percentage: number;
  previous_accuracy_percentage: number;
}

const GroupLeaderBoard: React.FC = () => {
  const { groups_leaderboard } = dashboardData;

  return (
    <div className="w-full lg:w-[50%] h-full rounded-2xl shadow-xl shadow-[#EFF0F6] bg-white">
      <h3 className="text-gray-500 font-semibold p-4">Group LeaderBoard</h3>
      <div className="flex flex-col p-2 gap-2 w-full font-inter justify-center">
        {groups_leaderboard.map((group: LeaderBoard) => (
          <div
            key={group.id}
            className="flex justify-between items-center gap-3"
          >
            <div className="flex flex-col gap-1 w-full p-2">
              <p className="font-semibold">{group.group_name}</p>
              <span className="text-gray-400 text-sm">
                {group.points_per_user} points / User -{" "}
                {group.accuracy_percentage}% Correct
              </span>
            </div>
            <span className="text-[#151E23] flex gap-4 items-center font-semibold pr-5 text-lg">
              {group.id}
              <img
                src={
                  group.accuracy_percentage > group.previous_accuracy_percentage
                    ? "/green-arrow.png"
                    : "/red-arrow.png"
                }
                alt={
                  group.accuracy_percentage > group.previous_accuracy_percentage
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

export default GroupLeaderBoard;
