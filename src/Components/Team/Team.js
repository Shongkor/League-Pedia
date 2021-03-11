import React from 'react';
import './Team.css'
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';


const Team = (props) => {
    const {idTeam,strTeamBadge,strTeam,strSport} = props.team;
    const history = useHistory();
    const showDetails = idTeam => {
        const url = `/explore/${idTeam}`
        history.push(url);
    }
    return (

        <div className="col-md-6 col-lg-3">
            <div className="singleCard">
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img className="cardImg" variant="top" src={strTeamBadge} />
                    <Card.Body>
                        <Card.Title>{strTeam}</Card.Title>
                        <Card.Text>Sport Type : {strSport}</Card.Text>
                        <Button onClick={() => showDetails(idTeam)} variant="primary">Explore </Button>
                    </Card.Body>
                </Card>
            
            </div>
        </div>
    );
};

                
export default Team;