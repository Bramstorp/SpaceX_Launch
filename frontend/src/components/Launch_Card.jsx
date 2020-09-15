import React from 'react';
import ReactPlayer from 'react-player'

const LaunchDetailCard = (props) => {
	
	console.log(props.state)

	const launch_data = props.state
	const link_data = props.state.links? props.state.links || [] :[];
	const detail_data = props.state.launch_failure_details? props.state.launch_failure_details || [] :[];

	return (
		<div className="container">
			<img className="pt-5" src={link_data.mission_patch_small}/>

			<h2 className="pt-5">This is the mission overview: {launch_data.target}</h2>
			<p> - This mission was flight number: {launch_data.flightNumber} of all SpaceX launch missions and the launch happend the {launch_data.launchDate}</p>
			<p className="pt-3"> - This mission used the {launch_data.rocket} as the rocket for this mission</p>
			<p> - Customers that was part of this current mission was: {launch_data.customers}</p>

			<p className="pt-3">Details about this mission</p>
			
			<ul>
				<li>{launch_data.details}</li>
				<li>Altitude: {detail_data.altitude}</li>
				<li>Reason: {detail_data.reason}</li>
				<li>Time: {detail_data.time}</li>
			</ul>

			<p className="pt-3">All information about the mission</p>
			<ul>
				<li><a href={link_data.article_link}>Artile about the mission</a></li>
				<li><a href={link_data.article_link}>Wikipedia about the mission</a></li>
			</ul>

			<div className="pt-2 pb-5">
				<p>Launch Video</p>
				<ReactPlayer controls url={link_data.video_link} />
			</div>


		</div>
	)
	
}

export default LaunchDetailCard