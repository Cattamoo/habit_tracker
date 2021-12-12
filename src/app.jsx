import React, { Component } from 'react';
import './app.css';
import Navbar from './components/navbar';
import Habits from './components/habits';

class App extends Component {
	
	state = {
		habits: [],
	}
	

	handleIncrement = (habit) => {
		const habits = this.state.habits.map(h => {
			if(h.id === habit.id) {
				return {...habit, count: habit.count + 1};
			}
			return h;
		});

		this.setState({habits});
    }

    handleDecrement = (habit) => {
		const habits = this.state.habits.map(h => {
			if(h.id === habit.id) {
				const count = habit.count - 1;
				return {...habit, count: count < 0 ? 0 : count};
			}
			return h;
		});
		this.setState({habits});
    }

    handleDelete = (habit) => {
        const habits = this.state.habits.filter(h => h.id !== habit.id);
		this.setState({habits});
    }

	handleAdd = (name) => {
		const id = Date.now();
		const habits = [...this.state.habits, {id, name, count: 0}];
		this.setState({habits});
	}

	handleReset = () => {
		const habits = this.state.habits.map(h => {
			if(h.count !== 0) {
				return {...h, count: 0};
			}
			return h;
		});
		this.setState({habits});
	}

	render() {
		return (
			<>
				<Navbar totalCount={this.state.habits.filter(h => h.count > 0).length} />
				<Habits 
					habits={this.state.habits} 
					onAdd={this.handleAdd}
					onIncrement={this.handleIncrement} 
					onDecrement={this.handleDecrement} 
					onDelete={this.handleDelete} 
					onReset={this.handleReset}
				/>
			</>
		);
	}
}

export default App;