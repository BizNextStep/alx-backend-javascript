export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  let next = reportWithIterator.next();
  while (!next.done) {
    result += next.value;
    next = reportWithIterator.next();
    if (!next.done) {
      result += ' | ';
    }
  }
  return result;
}
