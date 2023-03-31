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
import { StarRate } from "../../StarRate";
import useMapOverlayView from "../../../../commons/hooks/custom/useMapOverlayView";

export const MapOverlayVeiwContents = () => {
  const {
    mapInfo: { shop },
    onClickMoveToPage,
  } = useMapOverlayView();

  return (
    <>
      <TitleWrapper
        variants={V.TitleWrapperVariants}
        initial={"initial"}
        animate={"visible"}
      >
        <Div style={{ width: "100%" }} justyfyContents="space-between">
          <H3>{shop?.name}</H3>
          <Div left="16px">
            <Span right={"8px"}>영업시간: </Span>
            <HighlightSpan>{shop?.openHour} - </HighlightSpan>
            <HighlightSpan>{shop?.closeHour}</HighlightSpan>
          </Div>
        </Div>
        <Div justyfyContents="flex-start" alignItems="center">
          <Span right="16px">리뷰 ({shop?.review?.length})건</Span>
          <StarRate star={shop?.averageStar} state={true} />
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
          <Span>{shop?.address}</Span>
        </Div>
        <Div top="8px">
          <Div>
            <>
              <ContentsButton
                whileHover={{
                  backgroundColor: GS.blue[600],
                }}
                onClick={onClickMoveToPage(`/map/${shop?.id as string}/detail`)}
              >
                상세보기
              </ContentsButton>
            </>
          </Div>
          <Div left="8px">
            <ContentsButton
              whileHover={{
                backgroundColor: GS.blue[600],
              }}
              onClick={onClickMoveToPage(
                `/map/${shop?.id as string}/reservation`
              )}
            >
              예약하기
            </ContentsButton>
          </Div>
        </Div>
      </ContentsWrapper>
    </>
  );
};
