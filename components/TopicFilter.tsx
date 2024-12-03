"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const TopicFilter = () => {
  const filterValue = "Timeframe: All Topic";
  const [selectedValue, setSelectedValue] = useState<string>(filterValue);

  return (
    <>
      <Select onValueChange={(value: string) => setSelectedValue(value)}>
        <SelectTrigger className="w-fit lg:w-[280px] font-inter">
          <SelectValue placeholder={filterValue}>
            <span className={selectedValue ? "font-semibold" : ""}>
              {selectedValue ? `Timeframe: ${selectedValue}` : "Timeframe"}
            </span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="font-inter">
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
