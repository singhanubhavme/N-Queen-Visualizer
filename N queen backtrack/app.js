const table = document.createElement("table");
for (let i = 1; i < 9; i++) {
    const tr = document.createElement('tr');
    for (let j = 1; j < 9; j++) {
        const td = document.createElement('td');
        if (i % 2 == j % 2) {
            td.className = "white";
        } else {
            td.className = "black";
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

document
    .body
    .querySelector('.board')
    .appendChild(table);