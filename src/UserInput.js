import React,{useState} from 'react';

const UserInput=({userHandle,setUserHandle,setsuccess})=>{
   
  const [loginStatus, setLoginStatus] = useState('');
   const [rating, setrating] = useState('');
    const [maxrating, setmaxrating] = useState('');
     const [rank, setrank] = useState('');
     const [maxrank, setmaxrank] = useState('');
     const [friends, setfriends] = useState('');

  const login = async () => {
    setrating('');
    setmaxrating('');
    setrank('');
    setmaxrank('');
    setfriends('');
    setsuccess(false);

    if (!userHandle) {
      setLoginStatus('Please enter a Codeforces handle.');
      return;
    }

    try {
      const response = await fetch(`https://codeforces.com/api/user.info?handles=${userHandle}`);
      const data = await response.json();

      if (data.status === 'OK') {
        setLoginStatus(`Logged in as ${userHandle}.`);
         setsuccess(true);console.log(data);
         setrating(data.result[0].rating);
         setmaxrating(data.result[0].maxRating);
         setrank(data.result[0].rank);
         setmaxrank(data.result[0].maxRank);
         setfriends(data.result[0].friendOfCount);
      } else {
        setLoginStatus('Invalid handle. Please try again.');
        setUserHandle("");
        setsuccess(false);
      }
    } catch (error) {
      setLoginStatus('Error: Could not connect to Codeforces.');
      console.error('Fetch error:', error);
    }
  };
   return(
   	<div>
   	<label htmlFor="user">User</label>
   	<input 
   	type="text" 
   	id="user" 
   	value={userHandle}
   	onChange={(e)=>setUserHandle(e.target.value)}
   	placeholder="Enter Codeforces Handle"
   	/>
   	
   	<button onClick={login} style={{cursor:'pointer'}}>Login</button>
   	<p>{loginStatus}</p>
    <ul>

        { rating && maxrating?<li>Rating={rating}  (maxRating={maxrating})</li>:""}
        { rank && maxrank?<li>Ranking={rank}  (maxRanking={maxrank})</li>:""}
        { friends?<li>Friends=({friends})</li>:""}
      
    </ul>
   	</div>
   	);

};


export default UserInput;