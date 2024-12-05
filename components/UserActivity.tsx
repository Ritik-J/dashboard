"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChevronDown } from "lucide-react";
import { dashboardData } from "@/data";

const UserActivity: React.FC = () => {
  const { activity } = dashboardData;
  return (
    <div className="lg:w-[50%] h-full bg-white shadow-xl shadow-[#EFF0F6] rounded-2xl text-[#4D4D4D]">
      <Card className="w-full h-full">
        <CardHeader className="flex flex-row items-center justify-between p-2">
          <CardTitle className="text-base font-normal">Activity</CardTitle>
          <div className="flex items-center">
            <span className="text-sm ">Month</span>
            <ChevronDown />
          </div>
        </CardHeader>
        <hr />
        <CardContent>
          <ChartContainer
            config={{
              value: {
                label: "Activity",
                color: "#1B59F8",
              },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={activity.monthly}
                margin={{
                  top: 5,
                  right: 10,
                  left: 10,
                  bottom: 20,
                }}
              >
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  fontSize={12}
                  tickMargin={8}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  fontSize={12}
                  tickMargin={8}
                />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  cursor={{ fill: "var(--primary-foreground)", opacity: 0.1 }}
                />
                <Bar
                  dataKey="value"
                  fill="var(--color-value)"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={10}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserActivity;
