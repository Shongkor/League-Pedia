import React, { useState , useEffect } from 'react';
import { useParams } from "react-router-dom";
import ExploreDetails from '../ExploreDetails/ExploreDetails';

const Explore = () => {
    let { idTeam } = useParams();

    const [details , setDetails] = useState([]);
    useEffect( () => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json() )
            .then(data => setDetails(data.teams))


    } , [idTeam])

  
        
    return (
        <div>
           {
               details.map(detail => <ExploreDetails detail={detail} key={detail.idTeam}></ExploreDetails>)
           }
        </div>
    );
};

export default Explore;