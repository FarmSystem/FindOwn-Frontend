import { Global, css } from '@emotion/react';

export const GlobalStyle = css`
  :root {
    /* --rti-border: #e2e8f0; */
    --rti-tag: #F1F5F9 !important;
    --rti-radius: 50% !important;
    --rti-main: #fff !important;
    --rti-tag-remove: #7c3aed !important;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Noto Sans KR", "Inter", sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  /* 스크롤바 전체 기본 꾸미기 */
  body::-webkit-scrollbar {
    width: 12px; /* 세로축 스크롤바 폭 너비 */
  }

  /* 스크롤바 막대 꾸미기 */
  body::-webkit-scrollbar-thumb {
    background-color: #cbd5e1;
    border-radius: 10px;
  }

  /* 스크롤바 트랙 꾸미기 */
  body::-webkit-scrollbar-track {
    background-color: transparent;
  }

  a, table {
    all: unset;
  }

  p {
    margin: 0;
  }

  input, textarea {
    border: none;
    outline: none;
    font-family: "Noto Sans KR", "Inter", "sans-serif";
    /* font-weight: 500; */
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #94a3b8;
    }
  }

  button {
    background: transparent;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: "Noto Sans KR", "Inter", "sans-serif";
    /* font-weight: 500; */
    &:focus {
      outline: none;
    }
  }

  .rti--container {
    display: flex;
    flex-wrap: nowrap;
    overflow-y: hidden; /* y축 스크롤바를 숨김 */
    width: 623px;
    min-height: 50px;
    border: 0 !important;
    border-bottom: 1px solid #e2e8f0 !important;
    background: #fff;
    font-size: 17px;
    font-weight: 400 !important;
    padding-left: 10px;
    margin-left: 15px;
    color: #64748B;
    &:focus {
      outline: none !important;
      border: 0 !important;
    }
    &:focus-within {
      box-shadow: none !important;
    }
    .rti--input {
      flex: 1;
      &:placeholder {
        color: #94a3b8 !important;
      }
    }
    .rti--tag {
      background: var(--rti-tag) !important;
      border: 0 !important;
      border-radius: 20px !important;
      padding: 5px 3px 5px 10px !important;
      > button:hover {
        color: #7c3aed !important;
      }
    }
  }
  .css-1y1yng-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
      background-color: #8B5CF6 !important;
      color: white !important;
      border: 1px solid #8B5CF6 !important;
      &:hover {
        background-color: #7c3aed !important;
        border: 1px solid #7c3aed !important;
      }
  }
`;
