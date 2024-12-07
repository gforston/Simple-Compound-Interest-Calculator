function calculate() {
  const principal = Number(document.getElementById("principal").value);
  const rate = Number(document.getElementById("rate").value) / 100;
  const times = Number(document.getElementById("times").value);
  const years = Number(document.getElementById("years").value);

  if (isNaN(principal) || isNaN(rate) || isNaN(times) || isNaN(years)) {
    alert("Please enter valid numbers in all fields.");
    return;
  }

  const amount = principal * (1 + rate / times) ** (times * years);
  const earned = amount - principal;

  document.getElementById("earned").textContent = `$${earned.toFixed(2)}`;
  document.getElementById("total").textContent = `$${amount.toFixed(2)}`;
  document.getElementById("progress").value = 100;
}
