import { Input } from "@/components/ui/input";

export default function SearchBook() {
  return (
    <div className="flex flex-col w-full bg-custom-background items-center px-12">
      <Input className="max-w-3xl h-12" placeholder="Search Book by Title" />
      <div className="flex items-center justify-between w-3xl mt-4 gap-y-2 flex-wrap">
        <div className="basis-1/2 h-20 px-4">
          <div className="bg-black w-full h-full"></div>
        </div>
        <div className="basis-1/2 h-20 px-4">
          <div className="bg-black w-full h-full"></div>
        </div>
        <div className="basis-1/2 h-20 px-4">
          <div className="bg-black w-full h-full"></div>
        </div>
        <div className="basis-1/2 h-20 px-4">
          <div className="bg-black w-full h-full"></div>
        </div>
        <div className="basis-1/2 h-20 px-4">
          <div className="bg-black w-full h-full"></div>
        </div>
        <div className="basis-1/2 h-20 px-4">
          <div className="bg-black w-full h-full"></div>
        </div>
        <div className="basis-1/2 h-20 px-4">
          <div className="bg-black w-full h-full"></div>
        </div>
        <div className="basis-1/2 h-20 px-4">
          <div className="bg-black w-full h-full"></div>
        </div>
      </div>
    </div>
  );
}
