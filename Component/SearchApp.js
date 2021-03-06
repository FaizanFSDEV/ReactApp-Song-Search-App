import React, { Component } from 'react'
import SearchForm from './SearchForm'
import ResultItem from './ResultItem'

class SearchApp extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoading: false,
       results: []
    }
    this.makeSearch = this.makeSearch.bind(this)
  }

  makeSearch(text){

    const mergeText = text.replace(/ /g,'+')

    this.setState({
      isLoading: true,
      results: []
    })
    fetch(`https://itunes.apple.com/search?term=${mergeText}&entity=song`)
      .then((response)=>{
        if(response.status >=200 && response.status <300){
          return response.json()
        } else {
          throw new Error()
        }
      })
      .then((json)=>{
        this.setState({
          results: json.results
        })
      })
      .catch((err)=>{
        console.log(err);
      })
      .then(()=>{
        this.setState({
          isLoading: false
        })
      })
  }
  
  render() {
    return (
      <div>

        <div className='jumbotron'>
          
          <h1 className='text-center'>Song Search App</h1>
          <p className='lead text-center'>Search any song. Powered by iTunes</p>
        

        <SearchForm
          onSearch={this.makeSearch}/>
          {this.state.isLoading?'Loading...':`${this.state.results.length} results found`}
        </div>  
        
        <ul className='media-list'>
          {
            this.state.results.map((item,index)=>{
              return <ResultItem key={index} item={item}/>
            })
          }
          
          
        </ul>
      
      </div>
    )
  }
}

export default SearchApp
