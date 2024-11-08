import React,{useState} from 'react';
import './App.css';
import Logo from './Logo';
import UserInput from './UserInput';
import MonitoringControls from './MonitoringControls';
import Options from './Options'
import Footer from './Footer'

function App() {
  const [userHandle, setUserHandle] = useState('');
  const [success,setsuccess]=useState(false);
  return (
    <div className="App">
          <Logo />
          <UserInput userHandle={userHandle} setUserHandle={setUserHandle} setsuccess={setsuccess}/>
          <MonitoringControls userHandle={userHandle} success={success}/>
          <Options userHandle={userHandle} success={success}/>
          <Footer />
    </div>
  );
}

export default App;