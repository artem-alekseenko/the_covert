import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from './components/MainPage'
import ButtonBackOnMainPage from './components/ButtonBackOnMainPage'

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
    this.onCreateEmployee = this.onCreateEmployee.bind(this)
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
      return (<ViewPage
        employee={employee}
        onCreateEmployee={this.onCreateEmployee}
        onCreateComment={this.onCreateComment}
        employeesForCarousel={this.state.employeesArray}
      />
      )
    }
    return (
      <div>
        <h1>
          Загрузка страницы
        </h1>
        <ButtonBackOnMainPage />
      </div>
    )
  }

  onCreateEmployee(employee) {
    employee.id = this.state.employeesArray.length + 2 + ""
    const getImgSrcForEmployee = () => {
      return Math.floor(Math.random() * (71 - 1) + 1)
    }
    employee.imgSrc = "?img=" + getImgSrcForEmployee()
    employee.comments = []
    const changedState = this.state
    changedState.employeesArray.push(employee)
    this.setState(changedState)
  }

  async onCreateComment(employee, comment) {
    const commentBody = Object.assign(comment, {employee_id: employee.id})
    await request({url:"http://2m6rw.mocklab.io/comments", method: "POST", json: commentBody }) 
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
