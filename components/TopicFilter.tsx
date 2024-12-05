"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const TopicFilter: React.FC = () => {
  const filterValue = "Timeframe: All Topic";
  const [selectedValue, setSelectedValue] = useState<string>(filterValue);

  return (
    <>
      <Select onValueChange={(value: string) => setSelectedValue(value)}>
        <SelectTrigger className="w-full lg:w-[280px] font-inter">
          <SelectValue placeholder={filterValue}>
            <span className={selectedValue ? "font-semibold" : ""}>
              {selectedValue ? `Timeframe: ${selectedValue}` : "Timeframe"}
            </span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="font-inter bg-[#F9F9F9]">
          <SelectItem value="Food">Food Safety</SelectItem>
          <SelectItem value="company">Company Networking</SelectItem>
          <SelectItem value="social media">Social Media</SelectItem>
          <SelectItem value="covid">Covid Protocols</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

export default TopicFilter;
