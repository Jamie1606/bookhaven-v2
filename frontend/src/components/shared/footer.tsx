export default function Footer() {
  return (
    <div className="w-full pt-16 pb-8 bg-[#FAF3E0]">
      <footer className="flex flex-col w-full max-w-[1200px] items-center mx-auto mt-5 justify-center">
        <label className="text-lg text-custom-text">&copy; Copyright {new Date().getFullYear()} BookHaven. All rights reserved</label>
        <label className="text-custom-text mt-2">
          UI and Layout referenced from <a target="_blank" href="https://www.lightnovelworld.com" className="text-blue-600 hover:underline hover:underline-offset-4">Light Novel World</a>
        </label>
      </footer>
    </div>
  );
}
