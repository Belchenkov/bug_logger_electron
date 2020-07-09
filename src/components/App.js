import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";

import LogItem from "./LogItem";
import AddLogItem from "./AddLogItem";

const App = () => {
	const [alert, setAlert] = useState({
		show: false,
		message: '',
		variant: 'success'
	});
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

	const showAlert = (message, variant = 'success', seconds = 3000) => {
		setAlert({
			show: true,
			message,
			variant
		});

		setTimeout(() => {
			setAlert({
				show: false,
				message: '',
				variant: 'success'
			});
		}, seconds);
	};

	const addItem = item => {
		if (item.text === '' || item.user === '' || item.priority === '') {
			showAlert('Please enter all fields', 'danger');

			return false;
		}

		item._id = Math.floor(Math.random() * 90000) + 10000;
		item.created = new Date().toString();
		setLogs([...logs, item]);

		showAlert('Log Added');
	};

	return (
		<Container>
			<AddLogItem addItem={addItem} />

			{ alert.show && <Alert variant={alert.variant}>{alert.message}</Alert> }

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
