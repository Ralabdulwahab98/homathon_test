//Activities 

import "./activities.css"
import React from 'react';
import { getAllServiceInOnProgress } from '../api';
import { getInfo } from '../login/decodeToken'

export default class ReceivedServices extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            Emp_ReceivedServices: [],
        };
    }

    componentDidMount() {
        // get the id of curretn user
        let ID = getInfo().data._id

        // Mack API call 
        getAllServiceInOnProgress(ID)
            .then((reponse) => {
                this.setState({ Emp_ReceivedServices: reponse.data });
            })
            .catch((error) => {
            })
    }
    render() {
        // variable to show when there no Services in the array 
        let allServices = <h3> No Received Services.. </h3>
        // if condtion to check the array is greater than zero return and pass the data to ReceivedService components 
        if (this.state.Emp_ReceivedServices.length > 0) {
            allServices = this.state.Emp_ReceivedServices.map((Services, index) => {
                return (
                    <li className='work'>
                        <input className='radio' id={`work${index}`} name='works' type='radio'></input>

                        <div className="relative">
                            <label for={`work${index}`} >{Services.ServiceType}</label>
                            <span className='date'>{Services.ServiceState}</span>
                            <span className='circle'></span>
                        </div>

                        <div className='content'>
                            <p> {Services.ServiceDescription} </p>
                        </div>
                    </li>

                    // <ReceivedService
                    //     id={Services._id}
                    //     ServiceType={Services.ServiceType}
                    //     ServiceState={Services.ServiceState}
                    //     ServiceDescription={Services.ServiceDescription}
                    //     key={index} />
                );
            })
        }

        return (
            <>
                <h2>Time line</h2>
                <p>All Received Services..</p>
                <ul className='timeline'>
                    {allServices}
                </ul>
            </>
            // <div className="allServices">
            //     {allServices}
            // </div>
        );
    }

} 
