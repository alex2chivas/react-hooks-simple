import React, { useState } from 'react';

import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
	const [ resource, setResource ] = useState('posts');

	return (
		<div className='container' style={{ padding: '20px' }}>
			<div>
				<UserList />
				<div>
					<button className='positive ui button' onClick={() => setResource('posts')}>
						Posts
					</button>
					<button className='negative ui button' onClick={() => setResource('todos')}>
						Todos
					</button>
				</div>
			</div>
			<ResourceList resource={resource} />
		</div>
	);
};

export default App;
