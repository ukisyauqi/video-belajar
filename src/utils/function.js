export function camelCaseToTitleCase(camelCaseString) {
  // Step 1: Insert a space before all uppercase letters
  const spacedString = camelCaseString.replace(/([a-z])([A-Z])/g, '$1 $2');
  
  // Step 2: Capitalize the first letter of the string
  const titleCaseString = spacedString.charAt(0).toUpperCase() + spacedString.slice(1);

  return titleCaseString;
}