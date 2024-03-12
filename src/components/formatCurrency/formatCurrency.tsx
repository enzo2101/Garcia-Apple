 const formatCurrency = ({value}: {value: string}) => {
  const numericValue = parseFloat(value.replace(/\D/g, ""));

  const formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(numericValue / 100);
  return formattedValue;
}

export default formatCurrency;