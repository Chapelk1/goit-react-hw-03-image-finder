import { Btn } from "./Button.styled";

export const Button = (props) => {
    return (
      <Btn type="button" onClick={props.onClick} >
        Load more
      </Btn>
    );
}