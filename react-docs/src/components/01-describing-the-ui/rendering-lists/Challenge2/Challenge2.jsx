import { recipes } from './recipes.jsx';

// 이 배열에서 레시피 리스트를 만들어 보세요! 배열의 각 레시피에 대해 이름을 <h2>로 표시하고 재료를 <ul>에 나열합니다.

// export default function RecipeList() {
//   const RecipeItems = recipes.map((recipe) => {
//     return (
//       <div key={recipe.id}>
//         <h2>{recipe.name}</h2>
//         <ul>
//           {recipe.ingredients.map((ingredient) => (
//             <li key={`${recipe.id}-${ingredient}`}>{ingredient}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   });

//   return (
//     <div>
//       <h1>Recipes</h1>
//       {RecipeItems}
//     </div>
//   );
// }

// 리스트 항목 컴포넌트 추출하기
// RecipeList 컴포넌트에는 두 개의 중첩된 map 호출이 포함되어 있습니다.
// 이를 단순화하기 위해 id, name, ingredients props를 허용하는 Recipe 컴포넌트를 추출합니다.
// 외부 key를 어디에 위치하고 그 이유는 무엇일까요?

function Recipe({ id, name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe {...recipe} key={recipe.id} />
      ))}
    </div>
  );
}
