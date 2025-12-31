function insert_Row() {
    const table = document.getElementById("sampleTable");

    // insert row at the top
    const row = table.insertRow(0);

    // create cells
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    // set values
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
