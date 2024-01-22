import {
  ItemContainer,
  LockContainer,
  IconImg,
  ImageContain,
  ImageBox,
  DateBox,
  LowerLayer,
} from "./BoxStyle";
import { useState } from "react";
import lock from "../../assets/images/lock_icon.svg";
import unlock from "../../assets/images/unlock_icon.svg";
import trash from "../../assets/images/trash_icon.svg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { deleteResult } from "../../apis/comparison";

export const WrittenBox = (props: any) => {
  const { data, listIndex, itemIndex } = props;
  const [locked, setLocked] = useState(data?.open);
  // const [itemIndex, setItemIndex] = useState<number>();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  //비공개로 바꾸기
  const Locked = () => {
    setLocked(!locked);
  };

  //특정 판단결과로 이동
  const navToItem = () => {
    navigate(`/list/${itemIndex}`);
  };

  // 삭제 api 업데이트
  const { mutate } = useMutation({
    mutationFn: deleteResult,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["userWrite"],
      });
    },
  });

  //작성글 삭제하기
  const goTrash = () => {
    alert("삭제하시겠습니까?");
    mutate({ id: itemIndex });
  };
  // console.log(data);
  // console.log(listIndex);
  // console.log(data.data[listIndex]);

  return (
    <>
      {data && (
        <ItemContainer>
          <LockContainer>
            {data[listIndex].open === false ? (
              <IconImg src={lock} onClick={Locked} />
            ) : (
              <IconImg src={unlock} onClick={Locked} />
            )}
          </LockContainer>
          <ImageContain onClick={navToItem}>
            <ImageBox src={data[listIndex].image_path} />
          </ImageContain>
          <LowerLayer>
            <DateBox>{data[listIndex].created_at}</DateBox>
            <IconImg style={{ margin: 0 }} src={trash} onClick={goTrash} />
          </LowerLayer>
        </ItemContainer>
      )}
    </>
  );
};
