import React from 'react';
import {useParams} from "react-router-dom";

const ServiceDetails = () => {
    const {serviceId} = useParams()
    return (
        <div>
            Welcome to Service Details: {serviceId}
        </div>
    );
};

export default ServiceDetails;