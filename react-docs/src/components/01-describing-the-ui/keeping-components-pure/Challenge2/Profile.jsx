// 망가진 프로필을 고쳐보세요

import Panel from './Panel.jsx';
import { getImageUrl } from './utils.js';

// BEFORE:
// let currentPerson;

// export default function Profile({ person }) {
//   currentPerson = person;
//   return (
//     <Panel>
//       <Header />
//       <Avatar />
//     </Panel>
//   )
// }

// function Header() {
//   return <h1>{currentPerson.name}</h1>;
// }

// function Avatar() {
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(currentPerson)}
//       alt={currentPerson.name}
//       width={50}
//       height={50}
//     />
//   );
// }

// AFTER:
// React는 렌더링 중에 기존 변수에 직접 값을 재할당하는 것을 권장하지 않는다.
// 대신 props나 state를 통해 데이터를 전달하고 참조하는 것이 더 안전하고 예측 가능한 방법이다.

export default function Profile({ person }) {
  return (
    <Panel>
      <Header person={person} />
      <Avatar person={person} />
    </Panel>
  );
}

function Header({ person }) {
  return <h1>{person.name}</h1>;
}

function Avatar({ person }) {
  return <img className="avatar" src={getImageUrl(person)} alt={person.name} width={50} height={50} />;
}
