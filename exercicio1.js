function cookPizza() {
  const inputLines = [];

  var lineReader = require("readline").createInterface({
    input: require("fs").createReadStream("oi.txt"),
  });

  lineReader.on("line", function (line) {
    inputLines.push(line);
  });

  lineReader.on("close", () => {
    const potentialClients = inputLines[0];
    const happyIngredients = [];
    const sadIngredients = [];

    // Removes first line
    inputLines.shift();

    for (var x = 0; x <= inputLines.length; x += 2) {
      if (inputLines[x]) {
        const words = inputLines[x].split(" ");
        for (var y = 1; y <= words.length; y++) {
          if (words[y] && words[y] != "0") {
            happyIngredients.push(words[y]);
          }
        }
      }
    }

    for (var x = 1; x <= inputLines.length; x += 2) {
      if (inputLines[x]) {
        const words = inputLines[x].split(" ");
        for (var y = 1; y <= words.length; y++) {
          if (words[y] && words[y] != "0") {
            sadIngredients.push(words[y]);
          }
        }
      }
    }

    sortIngredients(happyIngredients, sadIngredients);
  });
}

function sortIngredients(happy, sad) {
  let allIngredients = [...new Set(happy)];

  if (sad) {
    allIngredients = allIngredients.filter((x) => !sad.includes(x));
  }

  const count = allIngredients.length;
  const result = `${count} ${allIngredients.toString()}`.replace(",", " ");

  console.log(result);
}

cookPizza();
