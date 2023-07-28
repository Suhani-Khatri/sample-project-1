import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin: 0px;
  padding: 0px;
`;

export const StyledContainer = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
`;

export const StyledBlock = styled.div`
  padding: 40px 20px;
  max-width: 454px;
  width: 100%;
  margin: auto;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.white};
  padding: 30px 70px;
`;

export const StyledCardTitle = styled.div`
  text-align: center;
  padding: 10px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-cotent: center;
  align-items: center;
  gap: 10px;
  max-width: 245px;
  width: 100%;
`;

export const StyledFormItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledCardHeading = styled.h1`
  font-size: 26px;
  font-weight: bold;
  size: 18px;
`;

export const StyledLabel = styled.label`
  margin: 0 0 1px;
  font-size: 15px;
  color: rgb(96, 96, 96);
  font-weight: 400;
  line-height: 1.6rem;
`;

export const StyledInput = styled.input`
  max-width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.black};
  outline: none;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${({ errors }) => (errors ? 'red' : '')};
`;

export const StyledTermsandCondition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 100%;
`;

export const StyledText = styled.span`
  position: absolute;
  left: 30px;
  font-size: 13px;
`;

export const StyledAstrix = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;

export const StyledErrors = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.red};
`;

export const StyledAccountBlock = styled.div`
  display: flex;
  justify-context: flex-start;
`;

export const StyledButton = styled.button`
  margin: 10px 0 0 0;
`;

export const StyledLoginButton = styled.button`
  margin: 20px 0 0 0;
  background-color: ${({ theme }) => theme.colors.blue};
  color: white;
  font-size: 16px;
  outline: none;
  border-radius: 10px;
  border: none;
  padding: 8px 15px;
  max-width: 100%;
  cursor: pointer;
`;
