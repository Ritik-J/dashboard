"use client";

import { Check, ChevronDown, Search, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

interface Item {
  id: string;
  name: string;
  type: "group" | "user";
  count?: number;
}

const items: Item[] = [
  { id: "all", name: "All Users", type: "group", count: 400 },
  { id: "managers", name: "Managers", type: "group", count: 14 },
  { id: "trainers", name: "Trainers", type: "group", count: 4 },
  { id: "adrian", name: "Adrian Lu", type: "user" },
  { id: "evelyn", name: "Evelyn Hamilton", type: "user" },
];

const GroupFilter = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState<Item[]>([
    { id: "managers", name: "Managers", type: "group", count: 14 },
    { id: "adrian", name: "Adrian Lu", type: "user" },
  ]);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (item: Item) => {
    setSelectedItems((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const handleClear = () => {
    setSelectedItems([]);
  };

  const handleRemove = (item: Item) => {
    setSelectedItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  return (
    <div className="w-fit lg:w-[300px] font-inter">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            <span>
              People: {selectedItems.length > 0 ? "Multiple Selected" : "All"}
            </span>
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[300px] p-0" align="start">
          <div className="flex flex-col gap-2 p-2">
            {selectedItems.length > 0 && (
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {selectedItems.map((item) => (
                    <Badge
                      key={item.id}
                      variant="secondary"
                      className="rounded-sm px-1 font-inter"
                    >
                      {item.name}
                      <Button
                        variant="ghost"
                        className="ml-1 h-auto p-0 text-muted-foreground hover:text-foreground"
                        onClick={() => handleRemove(item)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="h-auto px-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                  onClick={handleClear}
                >
                  Clear
                </Button>
              </div>
            )}
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search"
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <Separator className="my-1" />
          <div className="flex flex-col p-2">
            <Label className="px-2 py-1.5 text-sm font-medium text-muted-foreground">
              GROUPS
            </Label>
            <div className="flex flex-col gap-1">
              {filteredItems
                .filter((item) => item.type === "group")
                .map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className="w-full justify-start gap-2 px-2"
                    onClick={() => handleSelect(item)}
                  >
                    <div
                      className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                        selectedItems.some((i) => i.id === item.id)
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-muted"
                      }`}
                    >
                      {selectedItems.some((i) => i.id === item.id) && (
                        <Check className="h-3 w-3" />
                      )}
                    </div>
                    <span className="flex-1 text-left">{item.name}</span>
                    <span className="text-muted-foreground">{item.count}</span>
                  </Button>
                ))}
            </div>
            <Label className="mt-4 px-2 py-1.5 text-sm font-medium text-muted-foreground">
              USERS
            </Label>
            <div className="flex flex-col gap-1">
              {filteredItems
                .filter((item) => item.type === "user")
                .map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className="w-full justify-start gap-2 px-2"
                    onClick={() => handleSelect(item)}
                  >
                    <div
                      className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                        selectedItems.some((i) => i.id === item.id)
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-muted"
                      }`}
                    >
                      {selectedItems.some((i) => i.id === item.id) && (
                        <Check className="h-3 w-3" />
                      )}
                    </div>
                    <span>{item.name}</span>
                  </Button>
                ))}
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default GroupFilter;
