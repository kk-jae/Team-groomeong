import * as V from "../index.variants";
import * as GS from "../../../../../../theme/global";
import {
  ContentsButton,
  ContentsWrapper,
  Div,
  Divider,
  H3,
  HighlightSpan,
  Span,
  TitleWrapper,
} from "../index.style";
import { IShop } from "../../../../../commons/types/generated/types";
import { StarRate } from "../../StarRate";

interface IMapOverlayViewContentsProps {
  shop?: IShop;
}

export const MapOverlayVeiwContents = (props: IMapOverlayViewContentsProps) => {
  return (
    <>
      <TitleWrapper
        variants={V.TitleWrapperVariants}
        initial={"initial"}
        animate={"visible"}
      >
        <Div style={{ width: "100%" }} justyfyContents="space-between">
          <H3>{props.shop?.name}</H3>
          <Div left="16px">
            <Span right={"8px"}>영업시간: </Span>
            <HighlightSpan>{props.shop?.openHour} - </HighlightSpan>
            <HighlightSpan>{props.shop?.closeHour}</HighlightSpan>
          </Div>
        </Div>
        <Div justyfyContents="flex-start" alignItems="center">
          <Span right="16px">리뷰 ({props.shop?.review.length})건</Span>
          <StarRate star={props.shop?.averageStar} state={true} />
        </Div>
      </TitleWrapper>
      <Divider
        variants={V.DividerVariants}
        initial={"initial"}
        animate={"visible"}
      />
      <ContentsWrapper
        variants={V.ContentWrapperVariants}
        initial={"initial"}
        animate={"visible"}
      >
        <Div>
          <Span>{props.shop?.address}</Span>
        </Div>
        <Div top="8px">
          <Div>
            <ContentsButton
              whileHover={{
                backgroundColor: GS.blue[600],
              }}
            >
              상세보기
            </ContentsButton>
          </Div>
          <Div left="8px">
            <ContentsButton
              whileHover={{
                backgroundColor: GS.blue[600],
              }}
            >
              예약하기
            </ContentsButton>
          </Div>
        </Div>
      </ContentsWrapper>
    </>
  );
};
