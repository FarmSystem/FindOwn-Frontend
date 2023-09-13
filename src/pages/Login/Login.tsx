import React from 'react';
import {
  PageStyle,
  InnerPageStyle,
  HeadingStyle,
  grayTextStyle,
} from './style';
import { DefaultSignInForm } from '../../components/SignIn/DefaultSignInForm';
import { SocialLoginButtons, ForSignUp } from '../../components/SignUp';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  padding: 15px;
  `;
  
const Options = styled.div`
  display: flex;
  gap: 15px;
`;

const Label = styled.label`
  margin-left: 5px;
`;

export const Login = () => {
  return (
    <PageStyle>
      <InnerPageStyle>
        <PageStyle>로그인</PageStyle>
        <DefaultSignInForm />
        <OptionWrapper>
          <Options>
            <div>
              <input type="checkbox" id="saveId" />
              <grayTextStyle htmlFor="saveId">
                아이디 저장
              </grayTextStyle>
            </div>
            <div>
              <input type="checkbox" id="savePassword" />
              <Label
                htmlFor="savePassword"
                css={grayTextStyle}
              >
                자동 로그인
              </Label>
            </div>
          </Options>
          <Options>
            {/* <span css={grayTextStyle}>아이디 찾기</span> */}
            {/* <span css={grayTextStyle}>|</span> */}
            {/* <span css={grayTextStyle}>비밀번호 찾기</span> */}
          </Options>
        </OptionWrapper>
        <SocialLoginButtons />
        <ForSignUp/>
      </InnerPageStyle>
    </PageStyle>
  );
}
