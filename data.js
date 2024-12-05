export const dashboardData = {
  metrics: {
    active_users: {
      current: 27,
      total: 80,
    },
    questions_answered: 3298,
    average_session_length_seconds: 154,
    starting_knowledge_percentage: 64,
    current_knowledge_percentage: 86,
    knowledge_Gain_percentage: 34,
  },
  activity: {
    monthly: [
      {
        month: "Jan",
        value: 100,
      },
      {
        month: "Feb",
        value: 150,
      },
      {
        month: "Mar",
        value: 200,
      },
      {
        month: "Apr",
        value: 250,
      },
      {
        month: "May",
        value: 300,
      },
      {
        month: "Jun",
        value: 350,
      },
      {
        month: "Jul",
        value: 400,
      },
      {
        month: "Aug",
        value: 300,
      },
      {
        month: "Sep",
        value: 500,
      },
      {
        month: "Oct",
        value: 550,
      },
      {
        month: "Nov",
        value: 600,
      },
      {
        month: "Dec",
        value: 650,
      },
    ],
  },
  topics: {
    weakest: [
      {
        id: 1,
        name: "Food Safety",
        image: "/flower.png",
        correct_percentage: 74,
      },
      {
        id: 2,
        name: "Compliance Basics Procedures",
        image: "/vacine.png",
        correct_percentage: 52,
      },
      {
        id: 3,
        name: "Company Networking",
        image: "/computer.png",
        correct_percentage: 36,
      },
    ],
    strongest: [
      {
        id: 1,
        name: "Covid Protocols",
        image: "/covid.png",
        correct_percentage: 95,
      },
      {
        id: 2,
        name: "Cyber Security Basics",
        image: "/cyber.png",
        correct_percentage: 92,
      },
      {
        id: 3,
        name: "Social Media Policies",
        image: "social-media.png",
        correct_percentage: 89,
      },
    ],
  },
  user_leaderboard: [
    {
      id: 1,
      name: "Jesse Thomas",
      image: "/Thomas.png",
      points: 637,
      accuracy_percentage: 98,
      previous_accuracy_percentage: 92,
    },
    {
      id: 2,
      name: "Thisal Mathiyazhagan",
      image: "/Thomas-1.png",
      points: 637,
      accuracy_percentage: 89,
      previous_accuracy_percentage: 94,
    },
    {
      id: 3,
      name: "Helen Chuang",
      image: "/Thomas-2.png",
      points: 637,
      accuracy_percentage: 88,
      previous_accuracy_percentage: 83,
    },
    {
      id: 4,
      name: "Lura Silverman",
      image: "/Thomas-3.png",
      points: 637,
      accuracy_percentage: 86,
      previous_accuracy_percentage: 80,
    },
  ],
  groups_leaderboard: [
    {
      id: 1,
      group_name: "Houston Facility",
      points_per_user: 52,
      accuracy_percentage: 97,
      previous_accuracy_percentage: 92,
    },
    {
      id: 2,
      group_name: "Test Group",
      points_per_user: 52,
      accuracy_percentage: 95,
      previous_accuracy_percentage: 98,
    },
    {
      id: 3,
      group_name: "Sales Leadership",
      points_per_user: 52,
      accuracy_percentage: 87,
      previous_accuracy_percentage: 82,
    },
    {
      id: 4,
      group_name: "Northeast Region",
      points_per_user: 52,
      accuracy_percentage: 86,
      previous_accuracy_percentage: 80,
    },
  ],
  api_secret: "123abc",
};
