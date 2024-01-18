import { atom } from "jotai";

export const selectedTagAtom = atom<string | null>(null);

//비밀번호 모달창 관리
export const modalAtom = atom<boolean>(false);

//원본이미지 모달창 관리
export const imgModalAtom = atom<boolean>(false);

//결과 저장하기 모달창 관리
export const submitModalAtom = atom<boolean>(false);

//마이페이지 메뉴 관리
export const menuAtom = atom<string>("/mypage");

//스토리지 스크랩, 작성글 관리
export const storageAtom = atom<string>("scrap");

//similar Item index 관리
export const similarAtom = atom<number>(0);

//밝기 조절
export const lightAtom = atom<boolean>(true);

export interface Detail {
  input_image: string;
  trademarks: [
    {
      result: string;
      similarity: string;
      title: string;
      image_path: string;
      application_number: string;
      application_name: string;
      application_status: string;
    }
  ];
}

export const detailAtom = atom<Detail | null>(null);
