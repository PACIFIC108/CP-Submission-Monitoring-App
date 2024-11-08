import React from 'react';
import App from './App.css';
const Options = ({userHandle,success})=>{
	if(!success){
		return;
	}
  const viewUpcomingContests = () => {
    window.open("https://codeforces.com/contests", "_blank");
  };
	const viewSubmissions = () => {
    window.open(`https://codeforces.com/submissions/${userHandle}`, "_blank");
  };

  const viewProfile = () => {
    window.open(`https://codeforces.com/profile/${userHandle}`, "_blank");
  };


		return (
			<div id="optionsSection" style={{marginTop: '20px'}}>

	        <button className="btn" onClick={viewSubmissions}>View Submissions</button>
	        <br />
	        <button className="btn" onClick={viewProfile}>View Profile</button>
	        <br />
	        <button className="btn" onClick={viewUpcomingContests}>View Upcoming Contests</button>
			
			</div>
		);
	
};



export default Options;