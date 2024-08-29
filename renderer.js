const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.getElementById('data-table-body');

  ipcRenderer.on('tcp-data', (event, data) => {
    const parsedData = data;

    let existingRow = document.getElementById(parsedData.id);

    if (existingRow) {
      existingRow.querySelector('.name-cell').textContent = parsedData.name;
      existingRow.querySelector('.value-cell').textContent = parsedData.value;
    } else {
      
      const row = document.createElement('tr');
      row.id = parsedData.id; 

      const idCell = document.createElement('td');
      idCell.textContent = parsedData.id;

      const nameCell = document.createElement('td');
      nameCell.textContent = parsedData.name;
      nameCell.classList.add('name-cell');

      const valueCell = document.createElement('td');
      valueCell.textContent = parsedData.value;
      valueCell.classList.add('value-cell');

      row.appendChild(idCell);
      row.appendChild(nameCell);
      row.appendChild(valueCell);

      tableBody.appendChild(row);
    }
  });
});
