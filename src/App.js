import React, { Component } from 'react'
import {
  Route, BrowserRouter
} from 'react-router-dom';
import { GlobalStyle } from './assets/styled';
import Home from './pages/Home';
import TodosDetail from './pages/TodosDetail';
export class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <BrowserRouter basename="/" >
          <Route exact path="/" component={Home} />
          <Route path="/todosDetail" component={TodosDetail} />
        </BrowserRouter>
      </>
    )
  }
}


export default App
