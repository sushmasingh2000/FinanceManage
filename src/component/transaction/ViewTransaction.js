import React, { useState, useEffect } from 'react';

function ViewTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Dummy Data
  const dummyTransactions = [
    { id: 1, type: 'expense', category: 'Food', amount: 200, date: '2025-07-10', description: 'Lunch' },
    { id: 2, type: 'income', category: 'Salary', amount: 5000, date: '2025-07-01', description: 'Monthly Salary' },
    { id: 3, type: 'expense', category: 'Travel', amount: 300, date: '2025-07-11', description: 'Bus fare' },
    { id: 4, type: 'expense', category: 'Rent', amount: 1500, date: '2025-07-01', description: 'July Rent' },
    { id: 5, type: 'income', category: 'Freelance', amount: 800, date: '2025-07-05', description: 'Project Payment' },
    // Add more if needed
  ];

  // Filter transactions by date
  const filteredTransactions = transactions.filter((txn) => {
    const txnDate = new Date(txn.date);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;

    if (from && txnDate < from) return false;
    if (to && txnDate > to) return false;
    return true;
  });

  useEffect(() => {
    setTransactions(dummyTransactions);
    setTotalPages(1); // For demo
  }, []);

  // Pagination handlers
  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">View Transactions</h2>

      <div className="flex justify-center gap-6 mb-6">
        <label className="flex flex-col text-gray-700">
          <span className="mb-1 font-semibold">From:</span>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="flex flex-col text-gray-700">
          <span className="mb-1 font-semibold">To:</span>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              {['ID', 'Type', 'Category', 'Amount', 'Date', 'Description'].map((header) => (
                <th
                  key={header}
                  className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b border-gray-300"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredTransactions.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No transactions found.
                </td>
              </tr>
            ) : (
              filteredTransactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{txn.id}</td>
                  <td className="px-4 py-2 capitalize">{txn.type}</td>
                  <td className="px-4 py-2">{txn.category}</td>
                  <td className="px-4 py-2">${txn.amount}</td>
                  <td className="px-4 py-2">{txn.date}</td>
                  <td className="px-4 py-2">{txn.description}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className={`px-4 py-2 rounded ${
            page === 1
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          } transition`}
        >
          Prev
        </button>
        <span className="text-gray-700 font-semibold">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded ${
            page === totalPages
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          } transition`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ViewTransactions;
