export default function Banner() {
  return (
    <div className="pt-16 bg-custom-background w-full">
      <div className="flex flex-col w-full max-w-[1100px] bg-gradient-to-b from-[#D5B895] via-[#D5B895]/70 to-[#D5B895]/40 shadow-lg border py-12 rounded-lg mx-auto px-12">
        <h2 className="text-2xl font-semibold text-custom-text">Welcome to BookHaven &mdash; Your Ultimate Reading Destination! 🌟</h2>
        <p className="mt-3 text-lg font-medium text-custom-text">Discover, Explore, and Get Lost in a World of Books.</p>
        <p className="mt-5 text-[16px] leading-7 text-custom-text text-justify">At BookHaven, we bring the joy of reading to your fingertips! Whether you&apos;re searching for timeless classics, thrilling bestsellers, or hidden literary gems, we&apos;ve got something for every book lover. Dive into an immersive collection spanning fiction, non-fiction, self-improvement, fantasy, and more.</p>
        <label className="mt-4 font-semibold text-[16px] text-custom-text leading-7">✨ Why Choose BookHaven?</label>
        <ul className="leading-7 text-custom-text text-[16px] custom-list ms-1">
          <li>Handpicked collections for every reader.</li>
          <li>A seamless shopping experience with fast delivery.</li>
          <li>Exclusive deals and discounts on your favorite books.</li>
        </ul>
        <p className="text-custom-text leading-7 mt-2">Join our community of book lovers and discover your next great read today! 📚💖</p>
      </div>
    </div>
  );
}
