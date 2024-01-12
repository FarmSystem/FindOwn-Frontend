import { atom } from "jotai";

export const selectedTagAtom = atom<string | null>(null);

//비밀번호 모달창 관리
export const modalAtom = atom<boolean> (false);

//마이페이지 메뉴 관리
export const menuAtom = atom<string>("/mypage");