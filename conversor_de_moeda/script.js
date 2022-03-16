function Converter() {
  let valueElement = document.getElementById("value");
  let value = valueElement.value; 
  let valueDolarNumber = parseFloat(value); //transformando a string em numero

  let priceDolar = 0.2;

  let valueDolar = valueDolarNumber *priceDolar;
  valueDolar = valueDolar.toFixed(2);
  
  let elementValueConvert = document.getElementById("valueConvert");
  let valueConvert = "O valor em Dolár é de " + "$ " + valueDolar;

  elementValueConvert.innerHTML = valueConvert;
}

function ConverterEuro() {
  let valueElement = document.getElementById("value");
  let value = valueElement.value; 
  let valueEuroNumber = parseFloat(value); //transformando a string em numero

  let priceEuro = 0.18;

  let valueEuro = valueEuroNumber * priceEuro;
  valueEuro = valueEuro.toFixed(1);
  
  let elementValueConvert = document.getElementById("valueConvert");
  let valueConvert = "O valor em Euro é de " + "€ " + valueEuro;

  elementValueConvert.innerHTML = valueConvert;
}

function ConverterBitcoin() {
  let valueElement = document.getElementById("value");
  let value = valueElement.value; 
  let valueBitcoinNumber = parseFloat(value); //transformando a string em numero

  let priceBitcoin = 0.0000048;

  let valueBitcoin = valueBitcoinNumber *priceBitcoin;
  valueBitcoin = valueBitcoin.toFixed(7);
  
  let elementValueConvert = document.getElementById("valueConvert");
  let valueConvert = "O valor em Bitcoin é de " + "BTC " + valueBitcoin;

  elementValueConvert.innerHTML = valueConvert;
}
