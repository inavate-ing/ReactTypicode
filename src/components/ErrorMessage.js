import React from 'react';

export default function ErrorMessage(props) {

        return (
            <div className="d-flex flex-column text-white vh-100 align-items-center justify-content-center h1">
                {props.message}
            </div>
        );

}

