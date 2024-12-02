"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const TimeFilter = () => {
  const filterValue = "Timeframe: All Time";
  const [selectedValue, setSelectedValue] = useState<string>(filterValue);

  return (
    <>
      <Select onValueChange={(value: string) => setSelectedValue(value)}>
        <SelectTrigger className="w-[280px] font-inter">
          <SelectValue placeholder={filterValue}>
            <span className={selectedValue ? "font-semibold" : ""}>
              {selectedValue ? `Timeframe: ${selectedValue}` : "Timeframe"}
            </span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="font-inter">
          <SelectItem value="Days">last 7 Days</SelectItem>
          <SelectItem value="Month">This Month</SelectItem>
          <SelectItem value="Year">This Year</SelectItem>
          <SelectItem value="Custom">Custom</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

export default TimeFilter;
