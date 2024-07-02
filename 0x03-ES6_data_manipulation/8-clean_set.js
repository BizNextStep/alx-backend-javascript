export default function cleanSet(set, startString) {
  if (!set || !startString || typeof startString !== 'string') {
    return '';
  }

  const filteredValues = [];
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      filteredValues.push(value.slice(startString.length));
    }
  });

  return filteredValues.join('-');
}
