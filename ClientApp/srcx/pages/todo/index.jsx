import React from 'react';
import List from './list';

class TodoPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            newItemLabel: ""
        }
    }

    componentDidMount() {
        fetch('/api/todo-items')
            .then(res => res.json())
            .then(data => {
                this.setState({ list: data })
            })
            .catch(error => {
                console.warn(error);
            })
    }

    handleInputChange = event => {
        this.setState({ newItemLabel: event.target.value });
    }


    handleFormSubmit = event => {
        event.preventDefault();

        const body = JSON.stringify({
            title: this.state.newItemLabel
        });

        fetch('/api/todo-items', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body
        })
            .then(res => res.json())
            .then(newItem => {
                this.setState({
                    list: [
                        ...this.state.list,
                        newItem
                    ],
                    newItemLabel: ""
                })
            })
            .catch(error => {
                console.warn(error);
            })
    }


    handleItemUpdate = (item) => {
        fetch('/api/todo-items/' + item.id, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                let list = [...this.state.list];
                let index = list.findIndex(t => t.id == item.id);
                list[index] = data;

                this.setState({
                    list
                })
            })
            .catch(error => {
                console.warn(error);
            })


    }

    handleItemRemove = id => {
        if (window.confirm('Bạn có chắc chắn muốn xóa không?')) {
            fetch('/api/todo-items/' + id, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        this.setState({
                            list: this.state.list.filter(item => item.id != id)
                        })
                    }
                })
                .catch(error => {
                    console.warn(error);
                })
        }
    }


    render() {
        console.log('index render')
        return (
            <div className="App">
                <List data={this.state.list}
                    onItemUpdate={this.handleItemUpdate}
                    onItemRemove={this.handleItemRemove} />

                <form onSubmit={this.handleFormSubmit}>
                    <input type="text"
                        onChange={this.handleInputChange}
                        value={this.state.newItemLabel} />
                </form>
            </div>
        );
    }
}

export default TodoPage;
