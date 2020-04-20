import React from 'react';
import ListItem from './item';

class TodoList extends React.Component {

    handleItemUpdate = (item) => {
        this.props.onItemUpdate(item);
    }

    handleItemRemove = index => {
        this.props.onItemRemove(index);
    }


    render() {
        const { data } = this.props;
        return (
            <div className="list">
                {
                    data.map((item, index) => (
                        <ListItem
                            data={item}
                            key={index}
                            index={index}
                            onItemUpdate={this.handleItemUpdate}
                            onItemRemove={this.handleItemRemove} />
                    ))
                }
            </div>
        );
    }
}

export default TodoList;
