// Drink 컴포넌트는 일련의 ? : 조건을 사용하여 name props가 tea인지 coffee인지에 따라 다른 정보를 표시합니다.
// 문제는 각 음료에 대한 정보가 여러 가지 조건에 걸쳐 퍼져 있다는 것입니다.
// 세 가지 ? : 조건 대신 하나의 if 문을 사용하도록 이 코드를 리팩토링하세요.

// BEFORE:
// function Drink({ name }) {
//   return (
//     <section>
//       <h1>{name}</h1>
//       <dl>
//         <dt>Part of plant</dt>
//         <dd>{name === 'tea' ? 'leaf' : 'bean'}</dd>
//         <dt>Caffeine content</dt>
//         <dd>{name === 'tea' ? '15–70 mg/cup' : '80–185 mg/cup'}</dd>
//         <dt>Age</dt>
//         <dd>{name === 'tea' ? '4,000+ years' : '1,000+ years'}</dd>
//       </dl>
//     </section>
//   );
// }

// AFTER:

const drinks = {
  tea: {
    plant: 'leaf',
    caffeine: '15–70 mg/cup',
    age: '4,000+ years',
  },
  coffee: {
    plant: 'bean',
    caffeine: '80–185 mg/cup',
    age: '1,000+ years',
  },
};

function Drink({ name }) {
  const teaOrCoffee = drinks[name];
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{teaOrCoffee.plant}</dd>
        <dt>Caffeine content</dt>
        <dd>{teaOrCoffee.caffeine}</dd>
        <dt>Age</dt>
        <dd>{teaOrCoffee.age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
