import styled, { css } from "styled-components";

const StyledFlexRow = css`
  display: flex;
  align-items: center;
`;

export const StyledContainer = styled.div`
  ${StyledFlexRow};
`;

export const StyledTodo = styled.div`
  background-clip: initial;
  background-color: #fff;
  border: 0.0625rem solid rgba(0, 0, 0, 0.05);
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07) !important;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  margin: 10px;
  max-width: 800px;
  min-width: 0;
  padding: 1.5rem;
  word-wrap: break-word;

  @media screen and (min-width: 300px) {
  }
`;

export const StyledTodoControls = styled.div`
  ${StyledFlexRow};
  justify-content: space-between;
`;

export const StyledDateContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  color: #d0d6e2;

  svg {
    margin-right: 6px;
  }
`;

export const StyledEditTodo = styled.a`
  ${StyledFlexRow};
  padding: 5px;
  color: #d0d6e2;
  border: 1px dashed #d0d6e2;
  border-radius: 5px;
  transition: all 0.15s ease-in-out;
  margin-right: 1em;
  justify-content: center;

  &:hover {
    border: 1px dashed transparent;
    background-color: #5e72e4;
    color: white;
  }
`;

export const StyledDeleteTodo = styled.a`
  ${StyledFlexRow};
  padding: 5px;
  color: #d0d6e2;
  border: 1px dashed #d0d6e2;
  border-radius: 5px;
  transition: all 0.15s ease-in-out;

  &:hover {
    border: 1px dashed transparent;
    background-color: #5e72e4;
    color: white;
  }
`;

export const StyledTodoName = styled.h1`
  font-size: 1em;
  margin: 0.5em 0 0.9em;
`;

export const StyledTodoDesc = styled.p`
  font-size: 0.75em;
  color: #bbc0cc;
  text-align: justify;
  margin: 0;
  line-height: 1.8em;
`;

export const StyledSeperator = styled.hr`
  width: 100%;
  border: 1px dashed #f3f3f3;
  margin: 18px 0;
`;

export const StyledTodoFooter = styled.div`
  ${StyledFlexRow};
  justify-content: space-between;
`;

export const StyledTodoLeft = styled.div`
  ${StyledFlexRow};
`;

export const StyledTodoRight = styled.div`
  ${StyledFlexRow};

  a {
    border: 1px dashed #d0d6e2;
    border-radius: 22px;
    padding: 2px 2px;
    display: flex;
    align-items: center;
    border-top-left-radius: 0;
    color: #a3a9b7;
    transition: all 0.15s ease-in;

    &:hover {
      border: 1px dashed transparent;
      background-color: #5e72e4;
      color: white;
    }
  }

  svg {
  }
`;

export const StyledTodoAttachments = styled.div`
  ${StyledFlexRow};
  justify-content: flex-start;
  color: #d0d6e2;
  font-size: 13px;
  svg {
    margin-right: 4px;
  }
`;

export const StyledTodoChat = styled.div`
  ${StyledFlexRow};
  justify-content: flex-start;
  color: #d0d6e2;
  font-size: 13px;
  margin-left: 1.2em;
  svg {
    margin-right: 4px;
  }
`;
