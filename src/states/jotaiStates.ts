import { atom } from "jotai";

export const selectedTagAtom = atom<string | null>(null);

export const modalAtom = atom<boolean> (false);