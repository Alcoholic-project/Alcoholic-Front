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

const PriceSelect = styled.select``;

const DescriptionInput = styled.textarea``;

let num = 0;

const Write = () => {
  const [input, setInput] = useState({
    recipeName: '',
    price: '',
    explaination: '',
    photo: '',
  });

  const [drinkPlus, setDrinkPlus] = useState([0]);
  const [drinkName, setDrinkName] = useState({});
  const [drinkAmount, setDrinkAmount] = useState({});

  const onClickDrinkPlus = () => {
    if (num < 4) {
      num++;
      setDrinkPlus([...drinkPlus, num]);
    }
  };

  const onChangeDrinkName = (e) => {
    setDrinkName({ ...drinkName, [e.target.name]: e.target.value });
  };

  const onChangeDrinkAmount = (e) => {
    setDrinkAmount({ ...drinkAmount, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      <Container>
        <RecipeNameInput />
        {drinkPlus.map((n) => (
          <DrinkBox key={n}>
            <DrinkNameInput name={n} onChange={onChangeDrinkName} />
            <DrinkAmountInput name={n} onChange={onChangeDrinkAmount} />
          </DrinkBox>
        ))}

        <DrinkPlusBtn onClick={onClickDrinkPlus}>추가</DrinkPlusBtn>
        {/* 동그라미 플러스 버튼으로 넣기  */}

        <PriceSelect>
          <option>10,000원 이하</option>
          <option>10,000원 ~ 30,000원</option>
          <option>30,000원 ~ 50,000원</option>
          <option>50,000원 ~ 100,000원</option>
          <option>100,000원 이상</option>
        </PriceSelect>
        <DescriptionInput maxLength="500" />
      </Container>
    </>
  );
};
export default Write;
