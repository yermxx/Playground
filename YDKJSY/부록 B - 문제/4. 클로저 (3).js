const calculator = function () {
  let total = 0;
  let oper = '';
  let num = '';

  const calculate = (v1, oper, v2) => {
    switch (oper) {
      case '+':
        return v1 + v2;
      case '-':
        return v1 - v2;
      case '*':
        return v1 * v2;
      case '/':
        return v2 === 0 ? 'ERR' : v1 / v2;
      default:
        return v1; // 연산자 없을 때는 첫 번째 값 반환
    }
  };

  return function calculator(key) {
    // 숫자 입력
    if (/\d/.test(key)) {
      // 새로운 값이 입력되면 초기화
      if (oper === '' && total !== 0) {
        total = 0;
      }
      num += key;
      return num;
    }

    // 연산자 입력
    if (['+', '-', '*', '/'].includes(key)) {
      // num이나 total이 있을 때만 계산
      if (num || total) {
        total = total === 0 ? +num : calculate(total, oper, +num);
      }
      num = '';
      oper = key;
      return key;
    }

    // = 입력
    if (key === '=') {
      if (!num && !total) return ''; // 아무 것도 없을 때
      if (!num) return formatTotal(total); // 숫자 없이 = 입력 시 total 반환

      total = calculate(total, oper, +num);
      num = '';
      oper = '';
      return formatTotal(total);
    }

    return '';
  };
};
var calc = calculator();

function useCalc(calc, keys) {
  return [...keys].reduce(function showDisplay(display, key) {
    var ret = String(calc(key));
    return display + (ret != '' && key == '=' ? '=' : '') + ret;
  }, '');
}

function formatTotal(display) {
  if (Number.isFinite(display)) {
    let maxDigits = 11;
    if (Math.abs(display) > 99999999999) {
      maxDigits -= 6;
    }
    if (display < 0) maxDigits--;
    if (Number.isInteger(display)) {
      display = display.toPrecision(maxDigits).replace(/\.0+$/, '');
    } else {
      maxDigits--;
      if (Math.abs(display) >= 0 && Math.abs(display) < 1) {
        maxDigits--;
      }
      display = display.toPrecision(maxDigits).replace(/0+$/, '');
    }
  } else {
    display = 'ERR';
  }
  return display;
}

console.log(useCalc(calc, '4+3=')); // "4+3=7"
console.log(useCalc(calc, '+9=')); // "+9=16"
console.log(useCalc(calc, '*8=')); // "*8=128"
console.log(useCalc(calc, '7*2*3=')); // "7*2*3=42"
