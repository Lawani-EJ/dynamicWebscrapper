function RefreshButton({ callback, loading }) {
  return (
    <button
      onClick={callback}
      disabled={loading}
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
    >
      {loading ? "Scraping..." : "Refresh Listings"}
    </button>
  );
}

export default RefreshButton;