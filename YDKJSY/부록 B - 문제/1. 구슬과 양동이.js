var total = 0;

function createCart() {
  var cart = [];

  function findItem(itemId) {
    return cart.findIndex((item) => item.id === itemId);
  }

  function addItem(id, name, price) {
    let total = price; // 외부 total 변수 섀도잉
    {
      const item = { id, name, price };
      cart.push(item);
    }
    return total;
  }

  function removeItem(itemId) {
    let idx = findItem(itemId);
    if (idx >= 0) {
      cart.splice(idx, 1);
    }
  }

  function calculate() {
    return cart.reduce((acc, item) => acc + item.price, 0);
  }

  return {
    addItem,
    removeItem,
    calculate,
    getCart: () => cart,
  };
}

const myCart = createCart();

// 상품 추가
myCart.addItem(1, '노트북', 1000000);
myCart.addItem(2, '마우스', 30000);
myCart.addItem(3, '키보드', 100000);

// 현재 장바구니 확인
console.log(myCart.getCart());

// 상품 제거
myCart.removeItem(3);

// 총액 계산
console.log(myCart.calculate());

console.log('************************');
