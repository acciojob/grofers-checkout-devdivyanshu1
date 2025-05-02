function getTotal() {
  const prices = document.querySelectorAll('.prices');
  let total = 0;
  prices.forEach(cell => {
    total += Number(cell.textContent);
  });

  const table = document.getElementById('groceryTable');
  const existingTotalRow = document.getElementById('totalRow');
  if (existingTotalRow) existingTotalRow.remove();

  const row = document.createElement('tr');
  row.id = 'totalRow';
  const cell = document.createElement('td');
  cell.colSpan = 2;
  cell.textContent = "Total Price: " + total;
  row.appendChild(cell);
  table.appendChild(row);
}


