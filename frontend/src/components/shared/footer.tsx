export default function Footer() {
  return (
    <div className="w-full pt-16 pb-8 bg-[#FAF3E0]">
      <footer className="flex w-full max-w-[1200px] items-center mx-auto mt-5 justify-center">
        <label className="text-lg text-custom-text">&copy; Copyright {new Date().getFullYear()} BookHaven. All rights reserved</label>
      </footer>
    </div>
  );
}
