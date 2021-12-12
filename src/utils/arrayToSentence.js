export default function arrayToSentence(arr) {
  arr
    .reduce(function (prev, curr, i) {
      return prev + curr + (i === arr.length - 2 ? " and " : ", ");
    }, "")
    .slice(0, -2);

  return arr;
}
