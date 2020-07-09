import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import LogItem from "./LogItem";
import AddLogItem from "./AddLogItem";

const App = () => {
	const [logs, setLogs] = useState([
		{
			_id: 1,
			text: 'This is log one',
			priority: 'low',
			user: 'Brad',
			created: new Date().toString(),
		},
		{
			_id: 2,
			text: 'This is log two',
			priority: 'moderate',
			user: 'Kate',
			created: new Date().toString(),
		},
		{
			_id: 3,
			text: 'This is log three',
			priority: 'high',
			user: 'John',
			created: new Date().toString(),
		},
	]);

	const addItem = item => {
		item._id = Math.floor(Math.random() * 90000) + 10000;
		item.created = new Date().toString();
		setLogs([...logs, item]);
	};

	return (
		<Container>
			<AddLogItem addItem={addItem} />
			<Table>
				<thead>
					<tr>
						<th>Priority</th>
						<th>Log Text</th>
						<th>User</th>
						<th>Created</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{ logs.length > 0 && logs.map(log => (
						<LogItem key={log._id} log={log} />
					)) }
				</tbody>
			</Table>
		</Container>
	)
}

export default App
