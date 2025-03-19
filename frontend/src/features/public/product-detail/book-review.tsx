import Star from "@/components/shared/star";
import { Progress } from "@/components/ui/progress";

export default function BookReview() {
  return (
    <div className="mt-12 flex w-[1100px] flex-col text-custom-text mx-auto">
      <h3 className="text-2xl text-center font-semibold">Customer Reviews</h3>

      <div className="flex items-center mx-auto mt-4">
        <Star className="mr-4" rating={4.1} />
        <label className="text-custom-text font-semibold">0.0 out of 5</label>
      </div>

      <div className="flex flex-col mx-auto mt-6 gap-y-4 items-center">
        <div className="flex items-center gap-x-4">
          <label className="w-20">5 star</label>
          <Progress className="min-w-40 h-4" value={74} />
          <label>74%</label>
        </div>
        <div className="flex items-center gap-x-4">
          <label className="w-20">4 star</label>
          <Progress className="min-w-40 h-4" value={20} />
          <label>20%</label>
        </div>
        <div className="flex items-center gap-x-4">
          <label className="w-20">3 star</label>
          <Progress className="min-w-40 h-4" value={33} />
          <label>33%</label>
        </div>
        <div className="flex items-center gap-x-4">
          <label className="w-20">2 star</label>
          <Progress className="min-w-40 h-4" value={40} />
          <label>40%</label>
        </div>
        <div className="flex items-center gap-x-4">
          <label className="w-20">1 star</label>
          <Progress className="min-w-40 h-4" value={0} />
          <label>0%</label>
        </div>
      </div>

      <div className="flex flex-col w-3/4 mx-auto mt-12">
        <h3 className="text-xl text-center font-semibold">Latest Reviews</h3>
        <div className="flex flex-col w-full mt-8">
          <div className="flex items-center">
            <img src="/test.jpg" className="rounded-full mr-3 w-[35px] h-[35px] object-cover" />
            <label>User</label>
          </div>
          <div className="mt-4 flex items-center">
            <Star className="mr-6" rating={2.0} size={16} />
            <label className="font-semibold">Review Title</label>
          </div>
          <label className="mt-2 text-[15px]">Reviewed on March 14, 2025</label>
          <p className="mt-4 leading-7">The Let Them Theory by Mel Robbins – A Life-Changing Perspective <br/>The Let Them Theory by Mel Robbins is an eye-opening and transformative read that has completely shifted the way I approach relationships and personal growth. The core message—letting people be who they are instead of trying to control or change them—is both freeing and empowering. Mel’s insights are practical, relatable, and backed by real-life examples that make the concept easy to apply. This book has helped me release unnecessary stress, stop overanalyzing others’ actions, and focus on what truly matters—my own peace and happiness. Whether you’re struggling with boundaries, relationships, or simply want to feel lighter and more in control of your emotions, this book is a must-read. It’s a refreshing reminder that the best thing we can do is let them—and focus on becoming the best version of ourselves. Highly recommend!</p>
        </div>
        
        <div className="flex flex-col w-full mt-8">
          <div className="flex items-center">
            <img src="/test.jpg" className="rounded-full mr-3 w-[35px] h-[35px] object-cover" />
            <label>User</label>
          </div>
          <div className="mt-4 flex items-center">
            <Star className="mr-6" rating={2.0} size={16} />
            <label className="font-semibold">Review Title</label>
          </div>
          <label className="mt-2 text-[15px]">Reviewed on March 14, 2025</label>
          <p className="mt-4 leading-7">The Let Them Theory by Mel Robbins – A Life-Changing Perspective The Let Them Theory by Mel Robbins is an eye-opening and transformative read that has completely shifted the way I approach relationships and personal growth. The core message—letting people be who they are instead of trying to control or change them—is both freeing and empowering. Mel’s insights are practical, relatable, and backed by real-life examples that make the concept easy to apply. This book has helped me release unnecessary stress, stop overanalyzing others’ actions, and focus on what truly matters—my own peace and happiness. Whether you’re struggling with boundaries, relationships, or simply want to feel lighter and more in control of your emotions, this book is a must-read. It’s a refreshing reminder that the best thing we can do is let them—and focus on becoming the best version of ourselves. Highly recommend!</p>
        </div>
      </div>
    </div>
  );
}
