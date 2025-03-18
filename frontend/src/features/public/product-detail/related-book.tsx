export default function RelatedBook() {
  return (
    <div className="flex flex-col text-custom-text">
      <h3 className="text-2xl font-semibold">Related Books</h3>
      <div className="mt-6 flex items-center gap-x-3">
        <div className="w-40 h-60 rounded-lg bg-black"></div>
        <div className="w-40 h-60 rounded-lg bg-black"></div>
        <div className="w-40 h-60 rounded-lg bg-black"></div>
      </div>
    </div>
  );
}
