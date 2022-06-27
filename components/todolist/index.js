import React from 'react';

const TodoList = ({dtoList}) => {

    return (
        <ul>
            {dtoList.map( ({tno,title,dueDate}) => <li key={tno}>{tno}---{title}---{dueDate}</li>)}
        </ul>
    );
};

export default TodoList;