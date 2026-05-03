function convert() {
    //1.Get the number from the input field
    const inputAmount = document.getElementById("dataUser").value;
    //2.Get the selection from the dropdown (km-mll or mll-km)
    const unitSelection = document.getElementById("convert").value;
    //3.THE DECISION (step 5 of your plan)
    if (unitSelection === "km-mll") {
   // Option A: KM to MILES
const result = inputAmount * 0.621;
document.getElementById("resultDisplay").innerText = "result: " + result.toFixed(2) + " mi";
}
 else {
  // Option B: MILES o KM (The Inverse)
  const result = inputAmount / 0.621;
  document.getElementById("resultDisplay").innerHTML = "result: " + result.toFixed(2) + " km";
 }
}
