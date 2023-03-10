import React, { Component } from 'react';
import classNames from 'classnames';
import checkImg from '../img/checked.png';
import checkComplete from '../img/check-mark.png';
class TodoList extends Component {

    render() {
        const { item, onClick } = this.props;
        //let className = "todolist";
        //if (item.isComplete) {
        //className += ' todolist-complete';
        //}
        let url = checkImg;
        if (item.isComplete) {
            url = checkComplete;
        }
        return (
            <div onClick={onClick} className={classNames('TodoList', {
                'todolist-complete': item.isComplete
            })}>
                <img src={url} alt='#' width={30} />
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}
export default TodoList;