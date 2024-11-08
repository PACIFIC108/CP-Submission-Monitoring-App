import React from 'react';


const Logo=()=>{
    const openLogo=()=>{
    	window.open('https://codeforces.com/');
    };

    return(

           <div id="mylogo" onClick={openLogo}>
             <img src="CFlogo.png"
                height='50px'
                alt="Codeforces logo"
          
             />

           </div>
    	);
};


export default Logo;