export const formatPrice = (price) => {
  const formatter = new Intl.NumberFormat("en", {
    currency: "USD",
    maximumSignificantDigits: 2,
    style: 'currency'
  });
  return formatter.format(price)
};
