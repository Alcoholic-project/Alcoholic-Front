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

const RecipeNameInput = styled.input``;

const DrinkNameInput = styled.input``;

const DrinkAmountInput = styled.input``;

const Write = () => {
  const [input, setInput] = useState({
    recipeName: '',
    whatDrink: '',
    price: '',
    explaination: '',
    photo: '',
  });

  return (
    <>
      <Header />
    </>
  );
};
export default Write;
