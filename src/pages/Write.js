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

const PriceInput = styled.input``;

const DescriptionInput = styled.textarea``;

const PhotoInput = styled.input``;

const SubmitBtn = styled.button``;

let num = 0;

const Write = () => {
  const [input, setInput] = useState({
    recipeName: '',
    price: '',
    description: '',
    photo: '',
  });

  const [drinkPlus, setDrinkPlus] = useState([0]);
  const [drinkName, setDrinkName] = useState({});
  const [drinkAmount, setDrinkAmount] = useState({});

  const onChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

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

  const onClickSubmit = () => {
    console.log(input, drinkName, drinkAmount);
  };

  return (
    <>
      <Container>
        <RecipeNameInput
          onChange={onChangeInput}
          value={input.recipeName}
          name="recipeName"
        />
        {drinkPlus.map((n) => (
          <DrinkBox key={n}>
            <DrinkNameInput
              name={n}
              onChange={onChangeDrinkName}
              value={drinkName.n}
            />
            <DrinkAmountInput
              name={n}
              onChange={onChangeDrinkAmount}
              value={drinkAmount.n}
            />
          </DrinkBox>
        ))}

        <DrinkPlusBtn onClick={onClickDrinkPlus}>추가</DrinkPlusBtn>
        {/* 동그라미 플러스 버튼으로 넣기  */}

        <PriceInput onChange={onChangeInput} value={input.price} name="price" />
        <DescriptionInput
          maxLength="500"
          onChange={onChangeInput}
          value={input.description}
          name="description"
        />
        <PhotoInput
          type="file"
          accept="image/*"
          value={input.photo}
          name="photo"
          onChange={onChangeInput}
        />
        <SubmitBtn onClick={onClickSubmit}>완료</SubmitBtn>
      </Container>
    </>
  );
};
export default Write;
