import React from 'react';
import './ExploreDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faTwitter , faYoutubeSquare ,  } from '@fortawesome/free-brands-svg-icons'


const ExploreDetails = (props) => {
    const { strTeam , intFormedYear, strSport ,strGender,strTeamBadge , strCountry,strTwitter ,strWebsite , strYoutube } = props.detail
    
    return (
        <div className="detailContainer">
            <div className = 'Banner'>
                <div className="text-center  mb-5 container">
                    <img className="exploreImg" src={strTeamBadge} alt=""/>
                </div>
            </div>
            <div className=" row ">
                <div className="container infoContainer">
                    <div className="row p-5">
                        <div className="col-md-6 ">
                            <h1>{strTeam}</h1>
                            <p><img className="infoIcon" src="/founded.png" alt=""/>Founded : {intFormedYear}</p>
                            <p><img className="infoIcon" src="/flag.png" alt=""/>Country : {strCountry}</p>
                            <p> <img className="infoIcon" src="/football.png" alt=""/>Sport Type : {strSport}</p>
                            <p><img className="infoIcon" src="/male.png" alt=""/>Gender : {strGender}</p>
                        </div>
                        <div className="col-md-6">
                            {
                                strGender === 'Male' ? <img className="w-100" src="/Ismale.png" alt=""/> : <img className="w-100" src="/female.png" alt=""/>
                            }
                        </div>
                    </div>

                </div>

                
                
            </div>
            <div className="container Font">
                <div className="mt-5 mb-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus repellat nam repudiandae, modi esse dolorum numquam ab nesciunt doloribus distinctio, molestias consectetur. Omnis, quod sit quaerat laudantium ab eveniet molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis magni beatae nostrum totam, eius, recusandae cupiditate nam quod exercitationem, excepturi doloremque sapiente? Aut nisi vel similique dolores incidunt! Ratione, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ab deleniti nemo fugit, voluptatum quis delectus voluptas culpa natus explicabo!
                </div>
                <div className="mb-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus repellat nam repudiandae, modi esse dolorum numquam ab nesciunt doloribus distinctio, molestias consectetur. Omnis, quod sit quaerat laudantium ab eveniet molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis magni beatae nostrum totam, eius, recusandae cupiditate nam quod exercitationem, excepturi doloremque sapiente? Aut nisi vel similique dolores incidunt! Ratione, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ab deleniti nemo fugit, voluptatum quis delectus voluptas culpa natus explicabo!
                </div>
            </div>
            <div className="inline-block text-center mb-5">
                <a href={`https://${strTwitter}`}><FontAwesomeIcon className="icon text-center" icon={faTwitter} /></a>
                <a href={`https://${strWebsite}`}><FontAwesomeIcon className="icon text-center" icon={faFacebook} /></a>
                <a href={`https://${strYoutube}`}><FontAwesomeIcon className="icon text-center" icon={faYoutubeSquare} /></a>
            </div>
        </div>
    );
};

export default ExploreDetails;