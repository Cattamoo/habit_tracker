import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
	render() {
		return (
			<div className="habits">
				<HabitAddForm onAdd={this.props.onAdd} />
				<ul>
					{this.props.habits.map(h => 
						<Habit 
							key={h.id} 
							habit={h} 
							onIncrement={this.props.onIncrement} 
							onDecrement={this.props.onDecrement}
							onDelete={this.props.onDelete}
						/>
					)}
				</ul>
				<button 
					type="button" 
					className="habits-reset"
					onClick={this.props.onReset}>
					Reset All
				</button>
			</div>
		)
	}
}

export default Habits;