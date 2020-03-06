import React from 'react';
import './App.css';
import './TodoListHeader.js';
import './TodoListTasks.js';
import './TodoListFooter.js';

class App extends React.Component {
    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader />
                    <TodoListTasks />
                    <TodoListFooter />
                </div>
            </div>
        );
    }
}

export default App;

