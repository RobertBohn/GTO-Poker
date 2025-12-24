
var position = 0;
var cards = 0;
var situation = 0;
var action = 0;
var advice = "";

let situations = [
  ["SB RFI"],  
  ["BB RFI"],              
  ["UTG RFI"],              
  ["HJ RFI"],              
  ["CO RFI", "CO vs BN 3-bet", "CO vs Blinds 3-bet"],
  ["BN RFI", "BN vs Blinds 3-bet"]  
];

let actions = [
  "Fold",           // 0 
  "Raise 2.5 BB",   // 1
  "Raise 3 BB"      // 2
];   

range0 = [ 
// A K Q J T 9 8 7 6 5 4 3 2
   0,0,0,0,0,0,0,0,0,0,0,0,0,  // A
   0,0,0,0,0,0,0,0,0,0,0,0,0,  // K
   0,0,0,0,0,0,0,0,0,0,0,0,0,  // Q
   0,0,0,0,0,0,0,0,0,0,0,0,0,  // J
   0,0,0,0,0,0,0,0,0,0,0,0,0,  // T
   0,0,0,0,0,0,0,0,0,0,0,0,0,  // 9
   0,0,0,0,0,0,0,0,0,0,0,0,0,  // 8
   0,0,0,0,0,0,0,0,0,0,0,0,0,  // 7
   0,0,0,0,0,0,0,0,0,0,0,0,0,  // 6
   0,0,0,0,0,0,0,0,0,0,0,0,0,  // 5
   0,0,0,0,0,0,0,0,0,0,0,0,0,  // 4
   0,0,0,0,0,0,0,0,0,0,0,0,0,  // 3
   0,0,0,0,0,0,0,0,0,0,0,0,0]; // 2

range35 = [  // BN RFI Page 137 Range 35 
// A K Q J T 9 8 7 6 5 4 3 2
   1,1,1,1,1,1,1,1,1,1,1,1,1,  // A
   1,1,1,1,1,1,1,1,1,1,1,1,1,  // K
   1,1,1,1,1,1,1,1,1,1,1,1,0,  // Q
   1,1,1,1,1,1,1,1,1,1,1,0,0,  // J
   1,1,1,1,1,1,1,1,1,0,0,0,0,  // T
   1,1,1,1,1,1,1,1,1,0,0,0,0,  // 9
   1,0,0,1,1,1,1,1,1,1,0,0,0,  // 8
   1,0,0,0,0,0,0,1,1,1,0,0,0,  // 7
   1,0,0,0,0,0,0,0,1,1,1,0,0,  // 6
   1,0,0,0,0,0,0,0,0,1,1,1,0,  // 5
   0,0,0,0,0,0,0,0,0,0,1,0,0,  // 4
   0,0,0,0,0,0,0,0,0,0,0,1,0,  // 3
   0,0,0,0,0,0,0,0,0,0,0,0,1]; // 2


function buildSituations() {
  const tbody = document.querySelector("#situation-table tbody");
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  let row = situations[position];
  row.forEach(cellText => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.textContent = cellText;
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
}

function clearAction() {
  const paragraph = document.getElementById('action');
  paragraph.textContent = ' ';
}

function displayAction() {
  const stable = document.getElementById('seat-table');
  const srow = stable.rows[0];
  const scell = srow.cells[position];
  const scellText = scell.innerText.trim();
  
  const table = document.getElementById('card-table');
  const row = table.rows[Math.floor(cards / 13)];
  const cell = row.cells[cards % 13];
  const cellText = cell.innerText.trim();
  
  if (position == 5 && situation == 0) {
    action = range35[cards];  
  } else {
    action = range0[cards];    
  }
  advice = actions[action];
  
  const paragraph = document.getElementById('action');
  paragraph.textContent = cellText + ' ' + situations[position][situation] + ' -- ' + advice;
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
    }
    buildSituations();
    clearAction();
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
    }
    clearAction();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const table = document.getElementById('situation-table');
  table.addEventListener('click', function(event) {
    const cell = event.target;
    const text = cell.innerText.trim();

    situation = 0;    
    var i = 0;
    let row = situations[position];
    row.forEach(cellText => {
      if (text == cellText) situation = i;
      i++;
    });
    displayAction();
  });
});
