import React from 'react';
import styled from 'styled-components';

export const DivAct = styled.div`
    display: flex;
    flex-flow: column nowrap;
    border: 3px solid black;
    max-width: 100%;
    height: auto;
    font-family: Monaco;

    h2 {
        text-align: center;
        font-size: 4.00rem;
        font-family: Monaco;
    }
`;
export const CardAct = styled.div`
    font-size: 2.250rem;
    text-align: center;
    padding: 40px;
`;

const Actions = props => {
    return (
        <DivAct>
            <h2>Actions!</h2>
            {props.actions.map(action => {
                return (
                    <CardAct key={action.id}>
                        <p>Description: {action.description}</p>
                        <p>Notes: {action.notes}</p>
                        <p>Project ID: {action.id}</p>
                    </CardAct>
                );
            })}
        </DivAct>
    );
};
export default Actions;
