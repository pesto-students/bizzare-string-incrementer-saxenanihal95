// Start your implementation here
function bizarreStringIncrementer(providedString) {
  const regExp = /\d+$/;
  let result = "";
  // if last digit is number
  if (regExp.test(providedString)) {
    result = providedString.replace(/\d+$/, (lastString) => {
      let r = lastString
        // create array with empty string if 0 else number
        .split("0")
        .map((d) =>
          d
            ? // if number add 1 to number
              parseInt(d) + 1
            : // else return 0
              "0"
        )
        .join("");
      // if digit is increased on addition (eg: 99, 999) and string contains 0
      if (lastString.includes("0") && r.length > lastString.length) {
        r = r.slice(1, lastString.length + 1);
      }
      return r;
    });
  } else {
    result = `${providedString}1`;
  }
  return result;
}
