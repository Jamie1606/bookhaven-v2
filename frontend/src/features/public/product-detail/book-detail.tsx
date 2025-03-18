export default function BookDetail() {
  return (
    <div className="flex flex-col text-custom-text">
      <h3 className="text-2xl font-semibold">Book Detail</h3>
      <div className="flex items-center mt-5">
        <label className="min-w-24 font-semibold">Title:</label>
        <label>The Call of Cthulhu (Illustrated)</label>
      </div>
      <div className="flex items-center mt-5">
        <label className="min-w-24 font-semibold">ISBN-13:</label>
        <label>978-1624650444</label>
      </div>
      <div className="flex items-center mt-5">
        <label className="min-w-24 font-semibold">Author:</label>
        <label>H.P. Lovecraft</label>
      </div>
      <div className="flex items-center mt-5">
        <label className="min-w-24 font-semibold">Publisher:</label>
        <label>pulp magazine Weird Tales</label>
      </div>
      <div className="flex items-center mt-5">
        <label className="min-w-24 font-semibold">Language:</label>
        <label>English</label>
      </div>
      <div className="flex items-center mt-5">
        <label className="min-w-24 font-semibold">Category:</label>
        <label>Horror, Fantasy</label>
      </div>
    </div>
  );
}
