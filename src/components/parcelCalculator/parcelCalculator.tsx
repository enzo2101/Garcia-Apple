export const parcelCalculator = (value: string, parcel: string): string => {
  const formattedValue: string = value.replace("R$", "");

  const valueWithoutDot: string = formattedValue.replace(/\./g, "");
  const valueFloat: number = parseFloat(valueWithoutDot.replace(",", "."));

  const parcelInt: number = parseInt(parcel);

  if (parcelInt < 1 || parcelInt > 18) {
    throw new Error("Número de parcelas inválido. Por favor, escolha um número de 1 a 18.");
  }

  const interestRates: number[] = [
    2.99, 2.86, 3.60, 4.33, 5.06, 5.78, 6.39, 7.09, 7.78,
    8.47, 9.16, 9.83, 10.50, 11.16, 11.82, 12.46, 13.11, 13.74
  ];

  const interestIndex: number = parcelInt - 1;
  const interest: number = interestRates[interestIndex] ?? 0;
  const calculatedParcel: number = ((valueFloat * (interest / 100)) + valueFloat) / parcelInt;
  const roundedParcelValue: number = Math.ceil(calculatedParcel * 100) / 100;
  const formattedParcelValue: string = roundedParcelValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: 'BRL' });

  return formattedParcelValue;
}
