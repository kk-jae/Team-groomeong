import * as S from "./index.styled";

export const ReservationTime = (props) => {
  const shopOpenTime = [];
  const time =
    Number(props.data?.fetchShop.closeHour.split(":")[0]) -
    Number(props.data?.fetchShop.openHour.split(":")[0]);
  shopOpenTime.push(props.data?.fetchShop.openHour);
  for (let i = 1; i <= time; i++) {
    shopOpenTime.push(
      `${Number(props.data?.fetchShop.openHour.split(":")[0]) + i}:00`
    );
  }

  const onClickTime = (event) => {
    // console.log(event.currentTarget.id);
    props.setReservationTime(event.currentTarget.id);
  };

  return (
    <S.ReservationWrapperBottomItemTimeWrapper>
      {shopOpenTime.map((el, index) => (
        <div key={index} id={el} onClick={onClickTime}>
          <S.ReservationWrapperBottomItemTimeDetail>
            {el}
          </S.ReservationWrapperBottomItemTimeDetail>
        </div>
      ))}
    </S.ReservationWrapperBottomItemTimeWrapper>
  );
};
