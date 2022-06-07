import Header from '../components/Header';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// 1. 레시피 이름
// 2. 술 종류
// 3. 술 양
// 4. 가격
// 5. 설명 (특이사항)
// 6. 사진

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecipeNameInput = styled.input``;

const DrinkBox = styled.div``;

const DrinkNameInput = styled.input``;

const DrinkAmountInput = styled.input``;

const DrinkPlusBtn = styled.button``;

const Write = () => {
  const [input, setInput] = useState({
    recipeName: '',
    price: '',
    explaination: '',
    photo: '',
  });

  const [drink, setDrink] = useState([]);

  const onClickDrinkPlus = () => {};

  return (
    <>
      <Header />
      <Container>
        <RecipeNameInput />
        {drink.map((num) => (
          <DrinkBox key={num}>
            <DrinkNameInput />
            <DrinkAmountInput />
          </DrinkBox>
        ))}

        <DrinkPlusBtn onClick={onClickDrinkPlus}>추가</DrinkPlusBtn>
        {/* 동그라미 플러스 버튼으로 넣기  */}
        {/* 빼기 버튼도 넣기  */}
      </Container>
    </>
  );
};
export default Write;
