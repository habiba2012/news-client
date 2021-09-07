import React from 'react';
import { Card } from 'react-bootstrap';

const Testimonial = (props) => {
    console.log(props)
    const { name, from, imageURL } = props?.testimonial;


    return (
        <Card className="my-4">
            <Card.Img variant="top" src={imageURL} width="60" />
            <Card.Body className="text-center">
                <h5>{name} <br />
                    <span>{from}</span>
                </h5>
                {/* <Card.Text>{quote}</Card.Text> */}
            </Card.Body>
        </Card>
    );
};

export default Testimonial;