
var position = 0;
var cards = 0;

function displayAction() {
  const stable = document.getElementById('seat-table');
  const srow = stable.rows[0];
  const scell = srow.cells[position];
  const scellText = scell.innerText.trim();
  
  const table = document.getElementById('card-table');
  const row = table.rows[Math.floor(cards / 13)];
  const cell = row.cells[cards % 13];
  const cellText = cell.innerText.trim();
  
  const paragraph = document.getElementById('action');
  paragraph.textContent = scellText + ' ' + cellText;
}


document.addEventListener('DOMContentLoaded', function() {
  const table = document.getElementById('seat-table');
  table.addEventListener('click', function(event) {
    const cell = event.target;
    if (cell.tagName === 'TD' || cell.tagName === 'TH') {   
      const row = cell.closest('tr');
      const rowNum = row.rowIndex;
      const colNum = cell.cellIndex;
      position = (rowNum * 6) + colNum; 
      displayAction();
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const table = document.getElementById('card-table');
  table.addEventListener('click', function(event) {
    const cell = event.target;
    if (cell.tagName === 'TD' || cell.tagName === 'TH') {     
      const row = cell.closest('tr');
      const rowNum = row.rowIndex;
      const colNum = cell.cellIndex;
      cards = (rowNum * 13) + colNum;     
      displayAction();
    }
  });
});


