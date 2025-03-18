import Star from "@/components/shared/star";
import { Button } from "@/components/ui/button";

export default function BookInfo() {
  return (
    <div className="bg-custom-background w-[1100px] flex mx-auto items-center">
      <img src="/test.jpg" className="rounded-lg mr-12" width={350} height={450} />
      <div className="flex flex-col">
        <h3 className="text-custom-text text-3xl font-bold">Book Title</h3>

        <div className="flex items-center mt-4">
          <label className="text-custom-text font-semibold">0.0</label>
          <Star className="ms-2" rating={4.1} />
          <label className="ms-8 text-custom-text">900 ratings</label>
        </div>

        <p className="text-custom-text text-[16px] leading-7 mt-4 text-justify">Boston, 1926. Francis Thurston goes through documents left behind by his grandfather's brother, recently deceased under mysterious circumstances. He soon discovers the existence of a cult that worships ancient and unspeakable horrors. Mysterious murders, blood rituals in the depths of the Louisiana swamps, artists who descend into insanity after nightmarish visions, and a Cyclopean city that rises from the sea. Step by step, Thurston realizes that his relative's research got too close to the truth. In the shadows, there are those who want to wake the sleeping god Cthulhu in order to spread madness and destruction over the entire world. The stars are right. Is the end near?</p>

        <div className="flex justify-between items-center mt-6">
          <div className="flex justify-between basis-3/5">
            <div className="flex flex-col items-center gap-y-2">
              <label className="text-custom-text font-semibold">Written by</label>
              <label className="text-custom-text max-w-40 text-center">H.P. Lovecraft</label>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <label className="text-custom-text font-semibold">Publisher</label>
              <label className="text-custom-text max-w-40 text-center">pulp magazine Weird Tales</label>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <label className="text-custom-text font-semibold">Year</label>
              <label className="text-custom-text max-w-40 text-center">2019</label>
            </div>
          </div>
          <label className="py-3 px-6 text-green-900 font-bold rounded-lg bg-green-600/20">Available</label>
          {/* <label className="py-4 px-6 text-red-900 font-bold rounded-lg bg-red-600/20">Unavailable</label> */}
        </div>

        <hr className="my-4 border border-slate-400 border-dashed" />

        <div className="flex justify-between items-center">
          <label className="font-bold text-2xl">$30.00</label>
          <div className="flex items-center w-1/2 justify-between">
            <button className="text-[30px] flex justify-center items-center text-custom-button-alternative font-bold cursor-pointer">-</button>
            <label className="text-[20px] mt-1 select-none">1</label>
            <button className="text-[30px] flex justify-center items-center text-custom-button-alternative font-bold cursor-pointer">+</button>
            <Button>Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
