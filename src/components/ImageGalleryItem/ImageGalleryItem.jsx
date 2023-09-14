import { Component } from "react"
import {Modal} from 'components/Modal/Modal'
import { Item } from "./ImageGalleryItem.styled"
import PropTypes from 'prop-types';
export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  }

  onToggleModal = () => {
    this.setState(state => ({showModal: !state.showModal}))
  }

  render() {
    const { img, secondImg, tag } = this.props;
    
    return (
      <>
        <Item onClick={this.onToggleModal}>
          <img src={img} alt={tag} />
        </Item>
        {this.state.showModal && <Modal tag={tag} img={secondImg} onToggle={this.onToggleModal}/>}
      </>
    );
  }
  
  
};


ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  secondImg: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};