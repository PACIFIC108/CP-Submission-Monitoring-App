import React, { useState,useEffect } from 'react';
import App from './App.css'
const HandleVerdict = ({latestVerdict,userHandle}) => {
console.log(`the verdict is ${latestVerdict}`);
  const [verdictDisplay, setVerdictDisplay] = useState('');

useEffect(() => {

if (latestVerdict) {

  setVerdictDisplay(`Latest Verdict: ${latestVerdict}`);

  if (Notification.permission === 'granted') {
    new Notification('Codeforces Verdict', {
      body: `Your latest verdict is: ${latestVerdict}`,
      icon: 'CFlogo.png'
    });
  }
}
 
let audio;
    switch (latestVerdict) {
        case 'OK':
            // alert('ACCEPTED');
            audio = new Audio("./mp3 files/accepted.mp3"); 
            break;
        case 'MEMORY_LIMIT_EXCEEDED':
            // alert('MEMORY_LIMIT_EXCEEDED');
            audio = new Audio("./mp3 files/mle.mp3");
            break;
        case 'TIME_LIMIT_EXCEEDED':
            // alert('TIME_LIMIT_EXCEEDED');
            audio = new Audio("./mp3 files/tle.mp3");
            break;
        case 'WRONG_ANSWER':
            // alert('WRONG_ANSWER');
            audio = new Audio("./mp3 files/wrong ans.mp3");
            break;
        case 'COMPILATION_ERROR':
            // alert('COMPILATION_ERROR');
            audio = new Audio("./mp3 files/compilation err.mp3");
            break;
        case "IDLENESS_LIMIT_EXCEEDED":
            // alert('IDLENESS_LIMIT_EXCEEDED');
            audio = new Audio("./mp3 files/ile.mp3");
            break;
        case "RUNTIME_ERROR":
            // alert('RUNTIME_ERROR');
            audio = new Audio("./mp3 files/runtime err.mp3");
            break;
        case "FAILED":
            // alert('FAILED');
            audio = new Audio("./mp3 files/failed.mp3");
        break;
         case "SKIPPED":
            // alert('SKIPPED');
            audio = new Audio("./mp3 files/skipped.mp3");
            break;
        default:
            audio = new Audio('./mp3 files/testing.mp3'); 
            break;
    }

    audio.play();
 }, [latestVerdict]);
            
  return (
    <div id="verdictDisplay" style={{ fontSize: '20px', color: 'green' }}>
      {verdictDisplay}
    </div>
  );
};

export default HandleVerdict;
