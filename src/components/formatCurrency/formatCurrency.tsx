 const formatCurrency = ({value}: {value: string}) => {
  let numericValue = parseFloat(value.replace(/\D/g, ""));

  if (isNaN(numericValue)) {
    numericValue = 0;
  }

  const formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(numericValue / 100);
  return formattedValue;
}

export default formatCurrency;