function StringScramble(str1, str2) {
  // code goes here
  if (str1.length > str2.length) {
    for (let i = 0; i < str1.length; i++) {
      let index = str2.indexOf(str1.charAt(i));
      if (index > -1) {
        str2 = str2.replace(str1.charAt(i), "");
      }
    }

    return str2 === "";
  }

  for (let i = 0; i < str2.length; i++) {
    let index = str1.indexOf(str2.charAt(i));
    if (index > -1) {
      str1 = str1.replace(str2.charAt(i), "");
    }
  }

  return str1 === "";
}

// keep this function call here
// console.log(StringScramble(readline()));
console.log(StringScramble("okldheodl", "hello"));
