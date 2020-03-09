import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader.js';
import TodoListTasks from './TodoListTasks.js';
import TodoListFooter from './TodoListFooter.js';

class App extends React.Component {
    tasks = [
        {title: "JS, ", isDone: true, priority: "priority: low"},
        {title: "CSS, ", isDone: true, priority: "priority: high"},
        {title: "HTML, ", isDone: true, priority: "priority: medium"},
        {title: "ReactJS, ", isDone: false, priority: "priority: low"}];

    filterValue = "All";

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader/>
                    <TodoListTasks tasks={this.tasks}/>
                    <TodoListFooter filterValue={this.filterValue}/>
                </div>
            </div>
        );
    }
}
export default App;

