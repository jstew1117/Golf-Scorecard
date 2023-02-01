import {useState, useEffect} from 'react'

function LakeView(props) {

    const [totalScore, setTotalScore] = useState(0);
    const [holes, setHoles] = useState([]);
    
    let updateHoleScore = (e, hole) => {
      let copy = [...holes];
      copy[hole] = Number(e.target.value);
      setHoles(copy);
    };
    
    useEffect(() => {
      const sum = holes.reduce((a, b) => a + b, 0);
      setTotalScore(sum);
      props.updateCourseScores("lakeView",sum)
    }, [holes]);
  
  return(
  <div class="Lake-View">
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <div>Hole:</div>
    <div>Par:</div>
    <div>Yardage:</div>
    <div>Score:</div>
    <div>Handicap:</div>
  </div>
  
  <div class="hole-10" style={{display: 'flex', flexDirection: 'column'}}>
    <div>10</div>
    <div>5</div>
    <div>522</div>
    <div><input onChange={(e) => updateHoleScore(e, 0)}></input></div>
    <div>7</div>
  </div>
  
  <div class="hole-11" style={{display: 'flex', flexDirection: 'column'}}>
    <div>11</div>
    <div>4</div>
    <div>416</div>
    <div><input onChange={(e) => updateHoleScore(e, 0)}></input></div>
    <div>3</div>
  </div>
  
  <div class="hole-12" style={{display: 'flex', flexDirection: 'column'}}>
    <div>12</div>
    <div>3</div>
    <div>158</div>
    <div><input onChange={(e) => updateHoleScore(e, 0)}></input></div>
    <div>8</div>
  </div>
  
  <div class="hole-13" style={{display: 'flex', flexDirection: 'column'}}>
    <div>13</div>
    <div>5</div>
    <div>519</div>
    <div><input onChange={(e) => updateHoleScore(e, 0)}></input></div>
    <div>1</div>
  </div>
  
  <div class="hole-14" style={{display: 'flex', flexDirection: 'column'}}>
    <div>14</div>
    <div>5</div>
    <div>502</div>
    <div><input onChange={(e) => updateHoleScore(e, 0)}></input></div>
    <div>4</div>
  </div>
  
  <div class="hole-15" style={{display: 'flex', flexDirection: 'column'}}>
    <div>15</div>
    <div>3</div>
    <div>159</div>
    <div><input onChange={(e) => updateHoleScore(e, 0)}></input></div>
    <div>6</div>
  </div>
  
  <div class="hole-16" style={{display: 'flex', flexDirection: 'column'}}>
    <div>16</div>
    <div>4</div>
    <div>377</div>
    <div><input onChange={(e) => updateHoleScore(e, 0)}></input></div>
    <div>5</div>
  </div>
  
  <div class="hole-17" style={{display: 'flex', flexDirection: 'column'}}>
    <div>17</div>
    <div>3</div>
    <div>123</div>
    <div><input onChange={(e) => updateHoleScore(e, 0)}></input></div>
    <div>9</div>
  </div>
  
  <div class="hole-18" style={{display: 'flex', flexDirection: 'column'}}>
    <div>18</div>
    <div>4</div>
    <div>410</div>
    <div><input onChange={(e) => updateHoleScore(e, 0)}></input></div>
    <div>2</div>
  </div>
  
  <div>
  <label>Lake View Score</label>
  <div>Par: 36</div>
  <div>Yardage: 3186</div>
  <div>{totalScore}</div>
  
  </div>
  
  </div>
  );
  };

  export default LakeView;
  