import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css'
import stadium from './banner.jpg'


const Home = () => {
    const [teams , setTeams] = useState([]);
    useEffect( () => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
            .then(res => res.json() )
            .then(data => firstTen(data.teams))


    } , [])
    
    const firstTen =(fun) => {
        let newArray = fun.slice(0,12)
        setTeams(newArray)
    }
    return (
        <div>
            <div className="imgContainer">
                <div className="text-center header" style={{backgroundImage:`url(${stadium})`,height:"400px",width:"100%",backgroundRepeat: "round"}}>
                    <h1 className="heading">LEAGUE-PEDIA</h1>
                </div>
            </div>
            <div className="row text-center">
                {
                    teams.map( team => <Team team={team} key={team.idTeam}></Team>)
                }
           </div>
        </div>
    );
};

export default Home;