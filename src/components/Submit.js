import { useState, useEffect } from 'react';
 function Submit(props) {
const [scores, updateScores] = useState([]);
//fetch all scores and update state 
useEffect(() => {
    
    fetch(`https://marietta-scorecard.onrender.com/user/${props.userId}/score`).then(res => res.json()).then(data => {
        console.log(data)
        updateScores(data.scores)
    })
    
  }, [props]);
  


return (
    <div>
        {props.score}
        
        {
            //display scores
        }

        {scores.map(score=>{
            return <div>score: {score.score}, date: {new Date(score.createdAt).toLocaleString()}</div>
        })}
    </div>
);
}

export default Submit;