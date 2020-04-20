import React from 'react';

class TodoListItem extends React.Component {
    handleCheckboxChange = (event) => {
        let checked = event.target.checked;
        this.props.onItemUpdate({
            ...this.props.data,
            checked
        });
    }

    handleLabelChange = (event) => {
        let title = event.target.value;
        this.props.onItemUpdate({
            ...this.props.data,
            title
        });
    }

    removeItem = (event) => {
        event.preventDefault();
        this.props.onItemRemove(this.props.data.id);
    }

    render() {
        const { data } = this.props;
        return (
            <div className="item">
                <input
                    type="checkbox"
                    checked={data.checked}
                    onChange={this.handleCheckboxChange} />
                <input value={data.title} onChange={this.handleLabelChange} />
                <a href="#" onClick={this.removeItem}>xóa</a>
            </div>
        );
    }
}

export default TodoListItem;
