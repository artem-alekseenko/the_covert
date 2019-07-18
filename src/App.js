import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from './components/MainPage'

import './App.css';
import ViewPage from './components/ViewPage';

const request = require('request-promise')

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      employeesArray: []
    }
    this.renderMainPage = this.renderMainPage.bind(this)
    this.onCreateComment = this.onCreateComment.bind(this)
  }

  async componentDidMount() {
    const employeesArray = await this.getEmployeesInfo()
    const changedState = this.state
    changedState.employeesArray = employeesArray
    this.setState(changedState)
  }

  async getEmployeesInfo() {
    const employeesInfo = await request({
      url: 'http://2m6rw.mocklab.io',
      json: true
    })
    return employeesInfo.employees
  }

  renderMainPage() {
    return (
      <MainPage employeesArray={this.state.employeesArray} />
    )
  }

  renderViewPage({ match }) {    
    const employee = this.state.employeesArray.find((elem) => elem.id === match.params.id)
    if (employee) {
      return (<ViewPage employee={employee} onCreateComment={this.onCreateComment} employeesForCarousel={this.state.employeesArray} />)
    }
    return "Ошибка при генерации страницы сотрудника"
  }

  onCreateComment(employee, comment) {
    const changedState = this.state
    employee.comments.push(comment)
    changedState.employeesArray = changedState.employeesArray.map((elem) => {
      if (elem.id === employee.id) {
        return employee
      }
      return elem
    })
    this.setState(changedState)
  }


  render() {

    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={
            () => this.renderMainPage()
          } />
          <Route path="/employee/:id" component={
            (props) => this.renderViewPage(props)
          } />
        </div>
      </Router >
    );
  }
}

export default App;
