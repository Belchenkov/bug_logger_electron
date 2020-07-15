import React, { useState, useEffect } from 'react';
import { ipcRenderer } from 'electron';
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

	useEffect(() => {
		ipcRenderer.send('logs:load');

		ipcRenderer.on('logs:get', (e, logs) => {
			setLogs(JSON.parse(logs));
		});
	}, [])

	const [logs, setLogs] = useState([]);

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

		ipcRenderer.send('logs:add', item);

		showAlert('Log Added');
	};

	const deleteItem = _id => {
		//setLogs(logs.filter(item => item._id !== _id));

		ipcRenderer.send('logs:delete', _id);

		showAlert('Log Deleted');
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
						<LogItem key={log._id} log={log} deleteItem={deleteItem} />
					)) }
				</tbody>
			</Table>
		</Container>
	)
}

export default App
