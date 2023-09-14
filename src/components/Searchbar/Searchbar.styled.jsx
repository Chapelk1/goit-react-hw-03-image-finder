import styled from "@emotion/styled";

export const Header = styled.header``

export const Form = styled.form`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 40px;
  padding: 5px;

  background-color: #355561;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const Input = styled.input`
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  outline-color: #429ebf;
`;

export const Btn = styled.button`
  background-color: #0587b6;
  border: none;
  border-radius: 5px;
  padding: 0px 10px;
  color: #152c33;
  font-weight: 600;
  transition-property: color, background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 0);
  cursor: pointer;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
    
  &:focus,
  :hover {
    background-color: #043547;
    outline: none;
    color: aliceblue;
  }
`;