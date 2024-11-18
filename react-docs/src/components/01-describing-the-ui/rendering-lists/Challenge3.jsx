// 각 단락 사이에 <hr /> 구분 기호 삽입하기

const poem = {
  lines: ['I write, erase, rewrite', 'Erase again, and then', 'A poppy blooms.'],
};

// BEFORE:
// export default function Poem() {
//   return (
//     <article>
//       {poem.lines.map((line, index) => (
//         <p key={index}>
//           {line}
//         </p>
//       ))}
//     </article>
//   );
// }

// AFTER:
export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, idx) => (
        <div key={idx}>
          {idx > 0 && <hr />}
          <p key={idx}>{line}</p>
        </div>
      ))}
    </article>
  );
}

// cf. 공식 문서 코드 (선언형)
// export default function Poem() {
//   let output = [];

//   // 출력할 배열을 작성합니다.
//   poem.lines.forEach((line, i) => {
//     output.push(
//       <hr key={i + '-separator'} />
//     );
//     output.push(
//       <p key={i + '-text'}>
//         {line}
//       </p>
//     );
//   });
//   // 첫 번째 <hr />을 삭제합니다.
//   output.shift();

//   return (
//     <article>
//       {output}
//     </article>
//   );
// }
