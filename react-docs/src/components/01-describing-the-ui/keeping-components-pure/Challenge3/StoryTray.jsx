// 깨진 StoryTray를 수리해보세요

// BEFORE:
// export default function StoryTray({ stories }) {
//   stories.push({
//     id: 'create',
//     label: 'Create Story'
//   });

//   return (
//     <ul>
//       {stories.map(story => (
//         <li key={story.id}>
//           {story.label}
//         </li>
//       ))}
//     </ul>
//   );
// }

// AFTER:
// 기존 배열을 직접 수정하면 side-effect 발생!!

// 배열 조작하지 않고, props만 사용 (순수 함수에 가장 가까움!!)
export default function StoryTray({ stories }) {
  return (
    <ul>
      {stories.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
      <li>Create Story</li>
    </ul>
  );
}

// 또는 배열을 copy하여 새로운 배열로 작업할 수도 있다.
// export default function StoryTray({ stories }) {
//   let copyArr = stories.slice(); // shallow copy

//   copyArr.push({
//     id: 'create',
//     label: 'Create Story'
//   });

//   return (
//     <ul>
//       {copyArr.map(story => (
//         <li key={story.id}>
//           {story.label}
//         </li>
//       ))}
//     </ul>
//   );
// }
