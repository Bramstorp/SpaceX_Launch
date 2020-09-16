import React from 'react';
import ReactPlayer from 'react-player'
import Moment from 'moment';

const MissionDetailView = ({ launches, loading }) => {
	const launch_data = launches
	const link_data = launches.links? launches.links || [] :[];
	const detail_data = launches.launch_failure_details? launches.launch_failure_details || [] :[];
	const rocket_data = launches.rocket? launches.rocket || [] :[];
	
	if (loading) {
		return <div className="container pt-4"><h2>Loading Details....</h2></div>
  	}
	  
	return (
		<div className="container">
			<img className="pt-5" src={link_data.mission_patch_small}/>

			<div className="row pt-5 pb-5">
				
				<div className="col-4">
					<h3>Mission Overview</h3>			
				</div>

				<div className="col-8 pt-2">
					<p>This is the mission overview the target planet for this mission was the exo planet {launch_data.target}</p>
					<p>This mission was flight mission Nr: {launch_data.flightNumber} of all SpaceX launch missions and the launch happend the {Moment(launch_data.launchDate).calendar()}</p>	
					<p>Customers that was part of this current mission was: {launch_data.customers}</p>	

					<p>{launch_data.details}</p>				
					<ul>						
						<li>Altitude: {detail_data.altitude}</li>
						<li>Reason: {detail_data.reason}</li>
						<li>Time: {detail_data.time}</li>
					</ul>			
				</div>

			</div>
			
			<div className="dropdown-divider"></div>

			<div className="row pt-5 pb-5">
				
				<div className="col-4">
					<h3>Rocket Overview</h3>			
				</div>

				<div className="col-8 pt-2">
					<p>This mission used the {rocket_data.rocket_name} as the rocket for this mission</p>	
					<ul>						
						<li>Rocket ID: {rocket_data.rocket_id}</li>
						<li>Rocket Type: {rocket_data.rocket_type}</li>
					</ul>
				</div>

			</div>

			<div className="dropdown-divider"></div>

			<div className="row pt-5 pb-5">
				
				<div className="col-4">
					<h3>Articles Overview</h3>			
				</div>

				<div className="col-8 pt-2">
					<p>If u wanna read all the information in more details u can read the artile about the whole mission</p>
					<ul>
						<li><a className="artile-link" href={link_data.article_link}>Article about the mission</a></li>
						<li><a className="artile-link" href={link_data.article_link}>Wikipedia about the mission</a></li>
					</ul>			
				</div>

			</div>

			<div className="dropdown-divider"></div>

			<div className="row pt-5 pb-5">
				
				<div className="col-4">
					<h3>Launch Video</h3>			
				</div>

				<div className="col-8 pt-2">
					<ReactPlayer controls url={link_data.video_link} />			
				</div>

			</div>

		</div>
	)
	
}

export default MissionDetailView