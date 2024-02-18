import styled from 'styled-components';
import { Form } from 'formik';
export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 32px;
  margin-bottom: 45px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0px;
  border-radius: 12px;
  padding: 14px 44px;
  width: 136px;
  height: 48px;
  background: #3470ff;
  border: none;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: #fff;
  &:hover {
    background-color: #0056b3;
  }
`;
