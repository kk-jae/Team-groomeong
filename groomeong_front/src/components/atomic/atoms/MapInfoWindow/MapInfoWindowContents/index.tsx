import { IAutocompleteShopsOutput } from "../../../../../commons/types/generated/types"
import useInfoWindow from "../../../../commons/hooks/custom/useInfoWindow"
import * as GS from "../../../../../../theme/global"
import { 
  Div, 
  Divider,
} from "../../../../commons/style"
import { StarRate } from "../../StarRate"
import { 
  H3,
  Span,
  ContentsButton,
  ContentsWrapper,
  HighlightSpan,
  TitleWrapper,
} from "../index.style"
import { ContentWrapperVariants, DividerVariants, TitleWrapperVariants } from "./index.variants"

interface IMapInfoWindowContentsProps {
  autoShop: IAutocompleteShopsOutput
}

const MapInfoWindowContents = ({ autoShop }: IMapInfoWindowContentsProps) => {
  const { shop, onClickMoveToPage, reviewCount } = useInfoWindow(autoShop)

  return (
    <>
      <TitleWrapper
        variants={TitleWrapperVariants}
        initial={"initial"}
        animate={"visible"}
      >
        <Div style={{ width: "100%" }} justyfyContents="space-between">
          <H3>{shop?.name}</H3>
          <Div left="16px">
            <Span className="phoneDisable" right={"8px"}>
              영업시간:{" "}
            </Span>
            <HighlightSpan className="phoneDisable">
              {shop?.openHour}-{" "}
            </HighlightSpan>
            <HighlightSpan className="phoneDisable">
              {shop?.closeHour}
            </HighlightSpan>
          </Div>
        </Div>
        <Div style={{ width: "100%"}} justyfyContents="space-between" alignItems="center">
          <Span className="phoneDisable" right="16px">
            <span>리뷰 ({reviewCount.length})건</span>
          </Span>
          <StarRate star={shop?.averageStar} state={true} />
        </Div>
      </TitleWrapper>
      <Divider
        variants={DividerVariants}
        initial={"initial"}
        animate={"visible"}
      />
      <ContentsWrapper
        variants={ContentWrapperVariants}
        initial={"initial"}
        animate={"visible"}
      >
        <Div>
          <Span className="phoneDisable">{shop?.address}</Span>
        </Div>
        <Div top="8px">
          <Div>
            <ContentsButton
            type="button"
              whileHover={{
                backgroundColor: GS.blue[600],
              }}
              onClick={onClickMoveToPage(`/map/${shop?.id as string}/detail`)}
            >
              상세보기
            </ContentsButton>
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
  )
}

export default MapInfoWindowContents