import { people } from './data.jsx';
import { getImageUrl } from './utils.jsx';

// 예시는 모든 사람의 리스트를 보여줍니다.
// 두 개의 개별 리스트 Chemists와 Everyone Else을 차례로 표시하도록 변경하세요.
// 이전과 마찬가지로 person.profession === 'chemist'를 확인하여 어떤 사람이 chemist인지 확인할 수 있습니다.

// BEFORE:
// export default function List() {
//   const listItems = people.map((person) => (
//     <li key={person.id}>
//       <img src={getImageUrl(person)} alt={person.name} />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   ));
//   return (
//     <article>
//       <h1>Scientists</h1>
//       <ul>{listItems}</ul>
//     </article>
//   );
// }

// AFTER:
function ListContent({ title, people }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
        ;
      </ul>
    </>
  );
}

export default function List() {
  const chemist = people.filter((person) => person.profession === 'chemist');
  const isElse = people.filter((person) => person.profession !== 'chemist');

  return (
    <article>
      <h1>Scientists</h1>
      <ListContent title="Chemists" people={chemist} />
      <ListContent title="Everyone Else" people={isElse} />
    </article>
  );
}

// Another Solution : 중복 Filter 대신 배열 이용
// let chemists = [];
// let everyoneElse = [];
// people.forEach((person) => {
//   person.profession === 'chemist' ? chemists.push(person) : everyoneElse.push(person);
// });

// function ListSection({ title, people }) {
//   return (
//     <>
//       <h2>{title}</h2>
//       <ul>
//         {people.map((person) => (
//           <li key={person.id}>
//             <img src={getImageUrl(person)} alt={person.name} />
//             <p>
//               <b>{person.name}:</b>
//               {' ' + person.profession + ' '} known for {person.accomplishment}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default function List() {
//   return (
//     <article>
//       <h1>Scientists</h1>
//       <ListSection title="Chemists" people={chemists} />
//       <ListSection title="Everyone Else" people={everyoneElse} />
//     </article>
//   );
// }
