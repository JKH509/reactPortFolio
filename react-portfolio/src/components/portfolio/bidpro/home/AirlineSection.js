import React from 'react'

export default function AirlineSection(props) {
    return (
        <div className="col-sm-12 col-md">
            <h1>{props.airlineName}</h1>
            <p>
                View the monthly bid data, import history &amp; download statistics
            </p>
            <a href={props.airlinePath} className="btn btn-outline-dark" >
                <i className="fa fa-external-link"></i>View
            </a>
        </div>
    )
}
