import React, { useEffect, useState } from "react";
import "./guess.css";

export default function Guess() {

    const [computer,setComputer] = useState();
    const [mynum,setMynum] = useState();
    const [feed,setFeed] = useState(`Don't Worry I will Guide You .`);
    const [count,setCount] = useState(5);
    const [trigger,setTrigger] = useState(true);

  useEffect(()=>{
    const generatenum = Math.ceil(Math.random() * 20);
    setComputer(generatenum);
    console.log('generater:',generatenum);
  },[])


  const onfindGuess = (e) => {
    e.preventDefault();

    console.log('Final:',computer,mynum);

    if(mynum){
      setCount((prevCount) => {
        const newCount = prevCount - 1;
        console.log('count:', newCount);
    
        if (newCount !== 0) {
          if (computer > mynum) {
            setFeed('Your Guess is too less');
          } else if (computer < mynum) {
            setFeed('Your Guess is too high');
          } else {
            setFeed('Congratulations!! Your Guess is Correct!');
            setTrigger(!trigger);
          }
        } else {
          if (computer === mynum) {
            console.log('else:true');
            setFeed('Congratulations!! Your Guess is Correct!');
            setTrigger(!trigger);
          } else {
            console.log('else:false');
            setFeed('Your attempt is over, Try to restart');
            setTrigger(!trigger);
          }
        }
    
        return newCount;
      });
    }else{
      alert('Enter the Guess Number...')
    }
    // console.log('count:',count);
    

  };

  const onInput = (e) => {
    const number = e.target.value;
    setMynum(number);

    // console.log('my num:',number)

  };

  const onReset = () => {
    window.location.reload(); 
    setFeed('Loading...');
    setCount('Loading...');
    setTrigger(true)
  }

  return (
    <>
      <div className="main">
        <div className="box">
          <form onSubmit={onfindGuess} className="form">
            <h2>Guess The Number Between 1 to 20</h2>
            <h3>Remining Attempts : {count>=0 && count<=5 ? count:'Loading...'}</h3>
            <input
              type="text"
              placeholder="Numbers Only Allowed"
              name="number"
              onChange={onInput}
            />
            <h3>{feed}</h3>
            {trigger ? 
            <button type="submit">Check Guess</button>:
            <button onClick={onReset}>Restart Game</button>
            }
          </form>
        </div>
      </div>
    </>
  );
}
