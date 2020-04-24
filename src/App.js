import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';


// Testing my vs code git hub
class App extends Component {

  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">
              Todo input
            </h3>
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
