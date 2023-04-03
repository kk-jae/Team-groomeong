import { ListChildComponentProps } from "react-window";
import { IAutocompleteShopsOutput } from "../../../../../commons/types/generated/types";
import useColumn from "../../../../commons/hooks/custom/useColumn";
import { StarRate } from "../../../atoms/StarRate";
import { MainPopupBoxContentsButton, MainPopupBoxContentsTitle, MainPopupBoxContentsWrapper } from "../index.style";

export const Column = ({
  data,
}: ListChildComponentProps<IAutocompleteShopsOutput[]>): JSX.Element => {
  const { onClickPopupContent } = useColumn()
  return (
    <>
      {data.map((shop) => (
        <MainPopupBoxContentsButton
          key={shop.id}
          initial={{
            backgroundColor: "#fff",
          }}
          whileHover={{
            backgroundColor: `rgba(32, 148, 255, .1)`,
          }}
          onClick={onClickPopupContent(shop)}
        >
          <MainPopupBoxContentsWrapper key={shop.id}>
            <MainPopupBoxContentsTitle>{shop.name}</MainPopupBoxContentsTitle>
            <div>
              <StarRate star={shop.averagestar} state={true} />
            </div>
          </MainPopupBoxContentsWrapper>
        </MainPopupBoxContentsButton>
      ))}
    </>
  );
};
