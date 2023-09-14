import styled from "@emotion/styled";

export const Btn = styled.button`
  position: absolute;
  bottom: 20px;
  left: 50%;
  display: block;
  background-color: #0587b6;
  border: none;
  border-radius: 5px;
  padding: 10px;
  color: #152c33;
  font-weight: 600;
  transition-property: color, background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 0);
  cursor: pointer;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  transform: translate(-50%);

  &:focus,
  :hover {
    background-color: #043547;
    outline: none;
    color: aliceblue;
  }
`;