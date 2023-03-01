import {useState, useEffect} from 'react';


function MountainView(props) {

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
      props.updateCourseScores("mountainView",sum)
    }, [holes]);
    
     return (
        
       <div><h1>Mountain View</h1>
          <div class="Mountain-View">
    
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div>Hole:</div>
              <div>Par:</div>
              <div>Yardage:</div>
              <div>Score:</div>
              <div>Handicap:</div>
            </div>
    
            <div class="hole-1" style={{display: 'flex', flexDirection: 'column'}}>
              <div>1</div>
              <div>4</div>
              <div>402</div>
              <div><input onChange={(e) => updateHoleScore(e, 0)}></input></div>
              <div>8</div>
            </div>
            
            <div class="hole-2" style={{display: 'flex', flexDirection: 'column'}}>
              <div>2</div>
              <div>3</div>
              <div>167</div>
              <input onChange={(e) => updateHoleScore(e, 1)}></input>
              <div>9</div>
            </div>
            
            <div class="hole-3" style={{display: 'flex', flexDirection: 'column'}}>
              <div>3</div>
              <div>4</div>
              <div>317</div>
              <input onChange={(e) => updateHoleScore(e, 2)}></input>
              <div>3</div>
            </div>
            
            <div class="hole-4" style={{display: 'flex', flexDirection: 'column'}}>
              <div>4</div>
              <div>3</div>
              <div>193</div>
              <input onChange={(e) => updateHoleScore(e, 3)}></input>
              <div>7</div>
            </div>
           
            <div class="hole-5" style={{display: 'flex', flexDirection: 'column'}}>
              <div>5</div>
              <div>4</div>
              <div>391</div>
              <input onChange={(e) => updateHoleScore(e, 4)}></input>
              <div>1</div>
            </div>
            
            <div class="hole-6" style={{display: 'flex', flexDirection: 'column'}}>
              <div>6</div>
              <div>5</div>
              <div>451</div>
              <input onChange={(e) => updateHoleScore(e, 5)}></input>
              <div>6</div>
            </div>
            
            <div class="hole-7" style={{display: 'flex', flexDirection: 'column'}}>
              <div>7</div>
              <div>4</div>
              <div>410</div>
              <input onChange={(e) => updateHoleScore(e, 6)}></input>
              <div>5</div>
            </div>
           
            <div class="hole-8" style={{display: 'flex', flexDirection: 'column'}}>
              <div>8</div>
              <div>5</div>
              <div>518</div>
              <input onChange={(e) => updateHoleScore(e, 7)}></input>
              <div>4</div>
            </div>
            
            <div class="hole-9" style={{display: 'flex', flexDirection: 'column'}}>
              <div>9</div>
              <div>4</div>
              <div>417</div>
              <input onChange={(e) => updateHoleScore(e, 8)}></input>
              <div>2</div>
            </div>
            
            <div>
            <label>Mountain View Score</label>
            <div>Par: 36</div>
            <div>Yardage: 3266</div>
            <div>{totalScore}</div>
            
            </div>
    
          </div>
          </div>
        
    
    
    
          
      );
    };

    export default MountainView;