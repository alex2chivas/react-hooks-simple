import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResourceList = () => {
	const [ resources, setResource ] = useState([]);

	const fetchResource = async () => {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
	};

	return <div>{resources.length}</div>;
};

export default ResourceList;
