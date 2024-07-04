export function camelCaseToTitleCase(camelCaseString) {
  const spacedString = camelCaseString.replace(/([a-z])([A-Z])/g, '$1 $2');
  const titleCaseString = spacedString.charAt(0).toUpperCase() + spacedString.slice(1);

  return titleCaseString;
}

export function convertToRupiah(amount) {
  return `Rp${new Intl.NumberFormat("id-ID").format(amount)}`
}

export function convertToRupiahVShort(amount) {
  return `Rp${Math.round(amount/1000)}K`
}

export function calculateDiscount(price, discount) {
  return price - Math.round(price * discount)
}