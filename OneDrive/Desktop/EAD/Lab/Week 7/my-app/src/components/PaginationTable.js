import React, { useState } from "react";

function PaginationTable() {
  const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const start = (page - 1) * itemsPerPage;
  const selected = data.slice(start, start + itemsPerPage);

  return (
    <div>
      <h3>Pagination Table</h3>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {selected.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>

      <button onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}

export default PaginationTable;