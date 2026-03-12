export function fibs(n) {
  if (n <= 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let a = 0,
      b = 1,
      c = 0;
    const res = [0, 1];
    for (let i = 3; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
      res.push(c);
    }
    return res;
  }
}

export function fibsRec(n) {
  if (n <= 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const prev = fibs(n - 1);
    prev.push(prev[prev.length - 1] + prev[prev.length - 2]);
    return prev;
  }
}

console.log(fibs(8));
