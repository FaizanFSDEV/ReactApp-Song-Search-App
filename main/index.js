import React from 'react'
import ReactDOM from 'react-dom'
import SearchApp from '../Component/SearchApp'

function App () {
  return (
    <div className='container'>
      <SearchApp></SearchApp>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)