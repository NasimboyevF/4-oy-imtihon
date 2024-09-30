//1 mashq

const findAve = (a) => a.reduce((acc,num) => acc+num, 0)/a.length

  console.log(findAve([1,3,5,7]));
  
//2 mashq

const cutVowel = (a) => {
  let c = "";
  for (let w of a) {
    b = w.toLowerCase();
    if (b != "i" && b != "e" && b != "a" && b != "o" && b != "u") {
      c += w;
    }
  }
  return c;
};

console.log(cutVowel("This website is for losers LOL"));

//3 mashq

const replaceCh = (a) => {
  let c = "";
  for (let b of a) {
    z = 0;
    for (let d of a) {
      if (b == d) {
        z++;
      }
    }
    z > 1 ? (c += ")") : (c += "(");
  }
  return c;
};

console.log(replaceCh("(( @"));

//4 mashq

const firstNon = (a) => {
  let b = a[0];
  for (let c of a) {
    if (b != c) {
      return c;
    }
    b++;
  }
};

console.log(firstNon([3, 4, 5, 7, 8, 9]));

//5 mashq

const doTest = (a) => {
  let c = [];
  for (b = 0; b < a.length; b++) {
    let z = 0;
    for (d = 0; d < a.length; d++) {
      if (a[b] == a[d]) {
        z++;
      }
    }
    if (z % 2 == 1 && !c.includes(a[b])) {
      c.push(a[b]);
    }
  }

  return c;
};

console.log(doTest([0, 1, 0, 1, 0, 2, 2, 3, 7, 7, 11, 7, 11]));

//6 mashq

const findSmol = (a) => {
  let b = a[0];
  for (let c of a) {
    b > c ? (b = c) : "";
  }
  return b;
};

console.log(findSmol([56, 232, -7, 1, 12, 8]));

//7 mashq

const getSum = (a, b) => {
  let c = 0;
  for (a; a <= b; a++) {
    c += a;
  }
  return c;
};
console.log(getSum(-4, 7));

//8 mashq

const number = (a) => {
  let z = [];
  for (let b = 0; b < a.length; b++) {
    z.push(b + 1 + " : " + a[b]);
  }
  return z;
};
console.log(number(["a", "b", "c"]));

// 9 masala

const isTriangle = (a, b, c) => {
  if (a > b + c) {
    return true;
  } else if (b > a + c) {
    return true;
  } else if (c > a + b) {
    return true;
  } else {
    return false;
  }

  // if (a > b && a > c) {
  //   if (a - (b + c) > 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // } else if (b > a && b > c) {
  //   if (b - (a + c) > 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // } else if (c > a && c > b) {
  //   if (c - (a + b) > 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // } else {
  //   return false;
  // }
};

console.log(isTriangle(15, 7, 7));

// 10 masala

const beetween = (a, b) => {
  let z = [];
  for (a; a <= b; a++) z.push(a);
  return z;
};

console.log(beetween(-2, 4));
