export const formatData = (rawStr: string): Set<string> => {
  // Create a Set to hold the unique extracted data.
  const resultSet = new Set<string>();

  // Regular expression to match everything between '{{' and '}}'.
  // The 'g' flag is used to find all matches.
  const regex = /\{\{(.*?)\}\}/g;

  // Iterate over all matches in the raw string.
  for (const match of rawStr.matchAll(regex)) {
    // match[1] contains the text between '{{' and '}}'.
    let extracted = match[1];

    // Add the final extracted and replaced string to the Set.
    resultSet.add(extracted);
  }

  return resultSet;
};

export function pairElements(arr: string[]): string[][] {
  const result = [];
  for (let i = 0; i < arr.length; i += 2) {
    // This slices out two elements at a time.
    result.push(arr.slice(i, i + 2));
  }
  return result;
}

export function transformString(input: string): string {
  return input
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
