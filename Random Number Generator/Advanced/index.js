const rollBtn = document.getElementById("rollBtn");
const resultsDiv = document.getElementById("results");
const historyList = document.getElementById("history");

rollBtn.addEventListener("click", generateNumbers);

function generateNumbers() {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);
    const count = parseInt(document.getElementById("count").value);
    const unique = document.getElementById("unique").checked;

    if (min > max) {
        alert("Min cannot be greater than Max!");
        return;
    }
    if (unique && count > (max - min + 1)) {
        alert("Not enough unique numbers in this range!");
        return;
    }

    let numbers = [];
    while (numbers.length < count) {
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!unique || !numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }

    resultsDiv.textContent = numbers.join(" • ");

    const li = document.createElement("li");
    li.textContent = numbers.join(", ");
    historyList.prepend(li);
}
