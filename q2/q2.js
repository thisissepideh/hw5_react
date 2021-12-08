function max() {
  try {
    if (arguments.length == 0) {
      return null;
    }
    let max = BigInt(Number.MIN_SAFE_INTEGER);

    for (item of arguments) {
      if (typeof item == "string" && item.trim() === "") {
        throw Error("Big Error");
      }

      if (
        typeof Number(item) != "number" ||
        Number.isInteger(Number(item)) == false ||
        BigInt(item) > BigInt(Number.MAX_SAFE_INTEGER)
      ) {
        throw Error("Big Error");
      }
      if (BigInt(Number(item)) > max) {
        max = BigInt(Number(item));
      }
    }
    return BigInt(max);
  } catch (err) {
    console.error(err.message);
  }
}

console.log(max(1n, 10n, 5n));
console.log(max("10", 5n, 1));
console.log(max());
console.log(max(2 ** 53 - 1));
console.log(max(2 ** 53));
console.log(max("10" / 3));
console.log(max("10" / 2));
console.log(max(10 - 12, 10 - 10, 10 - 11));
console.log(max(0n));
console.log(max(""));

