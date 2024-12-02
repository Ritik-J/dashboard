import { dashboardData } from "@/data";
import Image from "next/image";

const UserStats = () => {
  const { metrics } = dashboardData;
  const {
    active_users,
    questions_answered,
    average_session_length_seconds,
    starting_knowledge_percentage,
    current_knowledge_percentage,
    knowledge_Gain_percentage,
  } = metrics;

  const convertToMinutesAndSeconds = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const stats = [
    {
      id: 1,
      label: "Active Users",
      value: `${active_users.current}/${active_users.total}`,
    },
    {
      id: 2,
      label: "Questions Answered",
      value: questions_answered,
    },
    {
      id: 3,
      label: "Av. Session Length",
      value: convertToMinutesAndSeconds(average_session_length_seconds),
    },
    {
      id: 4,
      label: "Starting Knowledge",
      value: `${starting_knowledge_percentage}%`,
      image: "/Graph 0.png",
    },
    {
      id: 5,
      label: "Current Knowledge",
      value: `${current_knowledge_percentage}%`,
      image: "/Graph 1.png",
    },
    {
      id: 6,
      label: "Knowledge Gain",
      value: `+${knowledge_Gain_percentage}%`,
      image: "/Graph 2.png",
    },
  ];

  return (
    <div className="w-[50%] flex flex-wrap items-center justify-start gap-2 font-inter text-xs text-[#000000b3]">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="w-40 h-36 rounded-2xl bg-white shadow-xl shadow-[#EFF0F6] p-4"
        >
          <p>{stat.label}</p>
          <h2 className="font-bold text-xl text-black py-4">{stat.value}</h2>
          {stat.image && (
            <Image src={stat.image} width={124} height={33} alt={stat.label} />
          )}
        </div>
      ))}
    </div>
  );
};

export default UserStats;
