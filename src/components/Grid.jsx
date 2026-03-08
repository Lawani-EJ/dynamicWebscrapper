function Grid({ listings }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

      {listings.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-lg p-4 rounded"
        >
          <h2 className="font-bold text-lg">{item.title}</h2>
          <p className="text-green-600">{item.price}</p>

          <a
            href={item.link}
            target="_blank"
            className="text-blue-500"
          >
            View Listing
          </a>
        </div>
      ))}

    </div>
  );
}

export default Grid;