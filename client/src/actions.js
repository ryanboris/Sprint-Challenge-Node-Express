import React from 'react';

const Actions = props => {
    return (
        <div>
            <h2>Actions!</h2>
            {props.actions.map(action => {
                return (
                    <div key={action.id}>
                        <p>Description: {action.description}</p>
                        <p>Notes: {action.notes}</p>
                        <p>Project ID: {action.id}</p>
                    </div>
                );
            })}
        </div>
    );
};
export default Actions;
