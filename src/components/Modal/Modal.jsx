import { createPortal } from "react-dom";
import { BackDrop, Mod } from 'components/Modal/Modal.styled';
import { Component } from "react";

const modalRoot = document.querySelector('#modal-root')
const body = document.querySelector('body');

export class Modal extends Component  {

    componentDidMount = () => {
        window.addEventListener('keydown', this.onKeyDown)
        body.classList.add('hidden-scroll');
        
    }

    componentWillUnmount = () => {
        window.removeEventListener('keydown', this.onKeyDown);
        body.classList.remove('hidden-scroll');
    }

    onKeyDown = (e) => {
        if (e.code === 'Escape') {
            this.props.onToggle()
        }
    }
    onClickBackDrop = (e) => {
        if (e.target === e.currentTarget) {
            this.props.onToggle();
        }
    }

    render() {
        const{img, tag} = this.props
        return createPortal(
          <BackDrop onClick={this.onClickBackDrop}>
            <Mod>
              <img src={img} alt={tag} />
            </Mod>
          </BackDrop>,
          modalRoot
        );
    }
    
}

