export const parcelCalculator = (value: string, parcel: string) => {
  const formattedValue = value.replace("R$", "");

  const valueWithoutDot = formattedValue.replace(/\./g, "");
  const valueFloat = parseFloat(valueWithoutDot.replace(",", "."));

  const parcelInt = parseInt(parcel);

  const interestRates = [
    2.99, 2.86, 3.60, 4.33, 5.06, 5.78, 6.39, 7.09, 7.78,
    8.47, 9.16, 9.83, 10.50, 11.16, 11.82, 12.46, 13.11, 13.74
  ];

  const interest = interestRates[parcelInt - 1];

  const parcelValue = ((valueFloat * (interest / 100)) + valueFloat) / parcelInt;

  const roundedParcelValue = Math.ceil(parcelValue * 100) / 100;

  const formattedParcelValue = roundedParcelValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: 'BRL' });

  return `O valor da parcela para o valor de ${value} em ${parcelInt} vezes é: ${formattedParcelValue}`;
}
