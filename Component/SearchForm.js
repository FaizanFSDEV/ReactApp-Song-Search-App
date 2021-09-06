import React, { Component } from 'react'

class SearchForm extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       text:''
    }

    this.updateText = this.updateText.bind(this)
  }

  updateText(e){
    this.setState({
      text: e.target.value
    })
  }
  
  render() {
    return (
      <form className='input-group input-group-lg'>
        
        <input 
            type='text'
            className='form-control'
            onChange={this.updateText}
            value={this.state.text}>
        </input>

        <span className='input-group-btn'>
          <input 
              type='submit'
              className='btn btn-default'
              value='Search'
              onClick={(e)=>{
                e.preventDefault()
                this.props.onSearch(this.state.text)
              }}>
              
          </input>
        </span>

      </form>
    )
  }
}

export default SearchForm
