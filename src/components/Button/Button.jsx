import { Btn } from "./Button.styled";
import PropTypes from 'prop-types';
export const Button = (props) => {
    return (
      <Btn type="button" onClick={props.onClick} >
        Load more
      </Btn>
    );
}


Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};