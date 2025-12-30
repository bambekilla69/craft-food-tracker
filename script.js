async function loadItems() {
  const response = await fetch("WORKER_URL_GOES_HERE");
  const data = await response.json();

  const table = document.getElementById("items");
  table.innerHTML = "";

  data.forEach(item => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.name}</td>
      <td class="${item.inStock ? 'in' : 'out'}">
        ${item.inStock ? 'In Stock' : 'Out of Stock'}
      </td>
      <td>${new Date(item.checkedAt).toLocaleTimeString()}</td>
    `;

    table.appendChild(row);
  });
}

loadItems();
setInterval(loadItems, 300000);
