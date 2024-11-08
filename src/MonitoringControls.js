import React, { useState,useEffect } from 'react';
import HandleVerdict from './HandleVerdict';
import App from './App.css'
const MonitoringControls =({userHandle,success})=> {
	
	const [statusmessage,setstatusmessage]=useState('');
	const [monitoring,setMonitoring]=useState(false);
	let lastsubmissionId='';
	const [monitoringInterval,setMonitoringInterval]=useState(null);
	const [latestVerdict,setlatestVerdict]=useState('');
	
useEffect(()=>{
	if (Notification.permission !== 'granted') {
        Notification.requestPermission().then(permission => {
            if (permission !== 'granted') {
                console.warn("Notification permission not granted.");
            }
        });
    }
 },[success,userHandle]);

	if(!success){
		return;
	}

const getLastSubmission= async()=>{
       try{
       	const response=await fetch(`https://codeforces.com/api/user.status?handle=${userHandle}&from=1&count=1`);
       	const data=await response.json();
       	if(data.status==='OK' && data.result.length>0){
       		let submissionId=data.result[0].id;
	       	lastsubmissionId=submissionId;
	       	console.log({submissionId},{lastsubmissionId});
       	}
       	else{
       		console.warn("submission not fetched");
       	}
       }catch (error) {
         console.error("Error fetching submission status:", error);
       }
};

const StartMonitoring=()=>{
	
	setstatusmessage("Monitoring has started");
	getLastSubmission();
	setMonitoring(true);
	alert("Monitoring has started!");

	const interval=setInterval(async()=>{
         try{
         	const response = await fetch(`https://codeforces.com/api/user.status?handle=${userHandle}&from=1&count=1`);
	        const data = await response.json();
	        if(data.status==='OK' && data.result.length>0){
	        	 const latestSubmission = data.result[0];
		         const submissionId = latestSubmission.id;
	        	console.log({lastsubmissionId});
	        	if(lastsubmissionId!==submissionId && latestSubmission.verdict!=='TESTING'){
                   lastsubmissionId=submissionId;
                   setlatestVerdict(latestSubmission.verdict);
	        	}
	        }
         }catch (error) {
        console.error("Error fetching submission status:", error);
      }
	},5000);
  setMonitoringInterval(interval);
  return () => clearInterval(interval);

}

const stopMonitoring = () => {
		setstatusmessage("");
    setMonitoring(false);
    setlatestVerdict(null);
    if (monitoringInterval) {
      clearInterval(monitoringInterval);
    }
    alert('Monitoring stopped');
};


	return (
		<div >
		<p id="statusofmonitoring">
		{statusmessage}
         {monitoring && (
          <span className="dots">
            <span>.</span><span>.</span><span>.</span>
          </span>
        )}
		</p>
			{
				!monitoring?<button id="start" onClick={StartMonitoring} style={{ marginTop: '20px' }}>
		        Start Monitoring Your Submission
		      </button>:
		      <button id="stop" onClick={stopMonitoring} style={{ marginTop: '20px' }}>
		        Stop Monitoring
		      </button>
	       }
	      {latestVerdict && <HandleVerdict latestVerdict={latestVerdict} userHandle={userHandle} />}
		</div>
	);
}



export default MonitoringControls;
