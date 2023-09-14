import { Component } from "react";
import { Header, Form, Input, Btn ,} from './Searchbar.styled';
import PropTypes from 'prop-types'
export class Searchbar extends Component {
  state = {
    request: ''
  }


  handleInputValue = (e) => {
    this.setState({request: e.currentTarget.value})
  }

  onSubmitForm = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.request)
    this.setState({request: ''})
  }

  render() {
    const {request} = this.state
      return (
        <Header>
          <Form onSubmit={this.onSubmitForm}>
            <Input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={request}
              onChange={this.handleInputValue}
            />

            <Btn type="submit">
              Search
            </Btn>
          </Form>
        </Header>
      );
  }
}


Searchbar.propTypes = {
  onSubmit: PropTypes.func,
}