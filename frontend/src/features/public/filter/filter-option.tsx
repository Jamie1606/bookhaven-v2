import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function FilterOption() {
  const [categoryText, setCategoryText] = useState("**Match all categories selected**");

  const changeCategoryText = (value: string) => {
    if (value === "and") {
      setCategoryText("**Match all categories selected**");
    } else {
      setCategoryText("**Match any of the categories selected**");
    }
  };

  return (
    <div className="flex flex-col w-[1100px] mx-auto shadow-md p-8 border rounded-lg">
      <h3 className="text-custom-text font-semibold text-2xl">Search for Books that match your criteria with advanced filtering</h3>
      <label className="text-custom-text mt-6 text-lg font-semibold">Language</label>
      <div className="flex items-center gap-x-4 mt-2">
        <div className="flex items-center gap-x-2">
          <Checkbox />
          <label>English</label>
        </div>
        <div className="flex items-center gap-x-2">
          <Checkbox />
          <label>Chinese</label>
        </div>
        <div className="flex items-center gap-x-2">
          <Checkbox />
          <label>Japanese</label>
        </div>
      </div>

      <div className="flex items-center mt-6 gap-x-8">
        <label className="text-custom-text text-lg font-semibold">Categories</label>
        <Select defaultValue="and" onValueChange={changeCategoryText}>
          <SelectTrigger className="w-[120px] h-8">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="and">AND</SelectItem>
            <SelectItem value="or">OR</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <label className="mt-2 text-custom-text">{categoryText}</label>
      <Input className="mt-2" placeholder="Multiple categories can be chosen." />
      <div className="mt-3 flex items-center flex-wrap gap-2">
        <Badge>Romance</Badge>
        <Badge>Romance</Badge>
        <Badge>Romance</Badge>
        <Badge>Romance</Badge>
        <Badge>Romance</Badge>
      </div>

      <div className="flex items-center mt-6 gap-x-8">
        <label className="text-custom-text text-lg font-semibold">Rating</label>
        <Select defaultValue="min">
          <SelectTrigger className="w-[120px] h-8">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="min">MIN</SelectItem>
            <SelectItem value="max">MAX</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Select defaultValue="none">
        <SelectTrigger className="w-[300px] h-8 mt-4">
          <SelectValue placeholder="Select rating" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">none</SelectItem>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5</SelectItem>
        </SelectContent>
      </Select>

      <label className="text-custom-text mt-6 text-lg font-semibold">Sort Results By</label>
      <Select defaultValue="none">
        <SelectTrigger className="w-[300px] h-8 mt-2">
          <SelectValue placeholder="Select rating" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">none</SelectItem>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5</SelectItem>
        </SelectContent>
      </Select>

      <Button className="mt-8 w-[150px]">Apply Filters</Button>
    </div>
  );
}
