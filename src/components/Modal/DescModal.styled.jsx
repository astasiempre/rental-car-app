import styled from 'styled-components';

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  padding-right: 17px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  background-color: #fff;

  padding: 37px 43px;

  border-radius: 24px;
  width: 541px;
  height: 752px;
`;

export const TextWithBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
`;

export const XCrosBtn = styled.button`
  display: flex;
  background-color: inherit;
  border: none;

  padding: 0;
  position: absolute;
  top: 20px;
  right: 20px;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;
`;
export const LinkButton = styled.button`
  border-radius: 12px;
  padding: 12px 50px;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: #fff;
  background: #3470ff;
  border: none;
  width: 168px;
  height: 44px;
  margin-top: 19px;
`;
