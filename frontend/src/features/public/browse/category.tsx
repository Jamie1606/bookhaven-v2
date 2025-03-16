import { Button } from "@/components/ui/button";

export default function Category() {
  return (
    <div className="flex flex-col w-3xl mx-auto bg-custom-background px-4 border py-6 rounded-lg shadow-md">
      <h3 className="text-custom-text font-semibold text-2xl">Genre/Category</h3>
      <div className="flex w-full flex-wrap justify-start gap-x-2 gap-y-2 items-center mt-4">
        <Button variant="outline">All</Button>
        <Button variant="outline">Action</Button>
        <Button variant="outline">Adventure</Button>
        <Button variant="outline">Drama</Button>
        <Button variant="outline">All</Button>
        <Button variant="outline">Action</Button>
        <Button variant="outline">Adventure</Button>
        <Button variant="outline">Drama</Button>
        <Button variant="outline">All</Button>
        <Button variant="outline">Action</Button>
        <Button variant="outline">Adventure</Button>
        <Button variant="outline">Drama</Button>
        <Button variant="outline">All</Button>
        <Button variant="outline">Action</Button>
        <Button variant="outline">Adventure</Button>
        <Button variant="outline">Drama</Button>
        <Button variant="outline">All</Button>
        <Button variant="outline">Action</Button>
        <Button variant="outline">Adventure</Button>
        <Button variant="outline">Drama</Button>
      </div>
      <h3 className="text-custom-text font-semibold text-2xl mt-8">Order By</h3>
      <div className="flex w-full flex-wrap justify-start gap-x-2 gap-y-2 items-center mt-4">
        <Button variant="outline">New</Button>
        <Button variant="outline">Popular</Button>
      </div>
    </div>
  );
}
