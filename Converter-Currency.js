const inputDollar = document.querySelector('input[name="dollar"]');
const resultDiv = document.querySelector('.result');
const convertButton = document.getElementById('convert');


convertButton.addEventListener('click', async () => {
  const dollarValue = parseFloat(inputDollar.value);
  if (!dollarValue) {
    resultDiv.textContent = 'Please enter a valid dollar amount';
    return;
  }


  try {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();

    const exchangeRate = data.rates.EGP;
    const poundValue = dollarValue * exchangeRate;

    resultDiv.textContent = `${dollarValue} USD Dollar = ${poundValue.toFixed(2)} Egyptian Pound`;
  } catch (error) {
    resultDiv.textContent = 'Error fetching exchange rate';
  }
});