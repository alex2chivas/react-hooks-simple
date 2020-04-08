import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
	const [ resources, setResources ] = useState([]);

	//Note - one way doign the axios call and passing the value into the useEffect()
	// const fetchResource = async resource => {
	// 	const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

	// 	setResources(response.data);
	// };

	useEffect(
		() => {
			(async resource => {
				const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

				setResources(response.data);
			})(resource);
		},
		[ resource ]
	);

	return <div>{resources.length}</div>;
};

export default ResourceList;
