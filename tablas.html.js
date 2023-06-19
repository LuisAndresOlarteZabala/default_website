let base = 25,
  matrix = [];
for (let i = 0; i <= base; i++) matrix[i] = [];
for (let row = 0; row <= base; row++)
  for (let col = 0; col <= base; col++) {
    let value = (col || 1) * (row || 1),
      colorOperator = 255 / base,
      red = Math.round(col * colorOperator),
      green = Math.round(row * colorOperator),
      blue = Math.round(
        (base - Math.ceil((row * col) / base)) * colorOperator
      );
    rgbColor = "#" + numToHex(red) + numToHex(green) + numToHex(blue);
    (matrix[row][col] = { color: rgbColor, value: value }),
      console.info(
        "Fila: " +
          row +
          " Columna: " +
          col +
          "\nColor: " +
          rgbColor +
          "\nValue: " +
          value +
          "\nColores: Rojo: " +
          red +
          " Verde: " +
          green +
          " Azul: " +
          blue
      );
  }
let table = document.getElementById("colorTable");
for (let row = 0; row <= base; row++) {
  let tableRow = document.createElement("tr");
  for (let col = 0; col <= base; col++) {
    let cell = document.createElement("td");
    (cell.innerText = matrix[row][col].value),
      (cell.style.backgroundColor = matrix[row][col].color),
      tableRow.appendChild(cell);
  }
  table.appendChild(tableRow);
}
function numToHex(num) {
  var hex = num.toString(16);
  return 1 === hex.length ? "0" + hex : hex;
}
