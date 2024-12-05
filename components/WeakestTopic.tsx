/* eslint-disable @next/next/no-img-element */
import { dashboardData } from "@/data";
import { Progress } from "./ui/progress";

interface Topic {
  id: number;
  image: string;
  name: string;
  correct_percentage: number;
}

const WeakestTopic: React.FC = () => {
  const { topics } = dashboardData;
  const { weakest } = topics;

  return (
    <div className="w-full lg:w-[50%] h-full rounded-2xl shadow-xl shadow-[#EFF0F6] bg-white">
      <div className="flex flex-col p-6 gap-7 w-full font-inter justify-center">
        <p className="text-gray-500 font-semibold">Weakest Topic</p>
        {weakest.map((topic: Topic) => (
          <div key={topic.id} className="flex justify-between items-center">
            <img src={topic.image} alt={`${topic.name} image`} />
            <div className="flex flex-col gap-1 w-[70%]">
              <p className="font-bold">{topic.name}</p>
              <Progress
                value={topic.correct_percentage}
                className={
                  topic.correct_percentage
                    ? "bg-rose-200 [&>div]:bg-gradient-to-r from-amber-500 to-rose-500 h-3"
                    : ""
                }
              />
            </div>
            <span className="text-sm pt-5 text-gray-800">
              {topic.correct_percentage}%{" "}
              <span className="text-gray-600">correct</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeakestTopic;
