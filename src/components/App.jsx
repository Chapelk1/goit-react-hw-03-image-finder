import { Component } from "react";
import {Searchbar} from 'components/Searchbar/Searchbar'
import {ImageGallery} from 'components/ImageGallery/ImageGallery'




export class App extends Component {
  state = {
    request: '',
  };


    submitForm = state => {
        const request = state.trim()
        if (request !== '') {
          this.setState({
            request: state,
          });
        }
    
  };

    

  render() {
    const {  request } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.submitForm} />

        <ImageGallery request={request} />
      
      </>
    );
  }
}