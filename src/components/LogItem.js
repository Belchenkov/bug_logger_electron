import React from 'react';
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const LogItem = ({ log: { _id, priority, text, user, created } }) => {
    const setVariant = () => {
        switch (priority) {
            case 'high':
                return 'danger';
            case 'moderate':
                return 'warning';
            default:
                return 'success';
        }
    };

    return (
        <tr>
            <td>
                <Badge variant={setVariant()} className="p-2">
                    { priority.charAt(0).toUpperCase() + priority.slice(1) }
                </Badge>
            </td>
            <td>{ text }</td>
            <td>{ user }</td>
            <td>{ created }</td>
            <td>
                <Button variant='danger' size='sm'>
                    <i className="fas fa-trash" />
                </Button>
            </td>
        </tr>
    );
};

export default LogItem;