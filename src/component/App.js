import React, { Component, useState } from 'react';

class App extends Component {
	state = { resource: 'posts' };

	render() {
		return (
			<div className='container' style={{ padding: '20px' }}>
				<div>
					<div>
						<button
							className='positive ui button'
							onClick={() => this.setState({ resource: 'posts' })}>
							Posts
						</button>
						<button
							className='negative ui button'
							onClick={() => this.setState({ resource: 'todos' })}>
							Todos
						</button>
					</div>
				</div>
				{this.state.resource}
			</div>
		);
	}
}

export default App;
