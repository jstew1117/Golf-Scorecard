import { useState, useEffect } from 'react';

function Overlook(props) {

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
    props.updateCourseScores("Overlook", sum)
  }, [holes]);

  return (
<div><h1>Overlook</h1>

    <div class="Overlook">

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>Hole:</div>
        <div>Par:</div>
        <div>Yardage:</div>
        <div>Score:</div>
        <div>Handicap:</div>
      </div>

      <div class="hole-1" style={{ display: 'flex', flexDirection: 'column' }}>
        <div>1</div>
        <div>5</div>
        <div>523</div>
        <div><input onChange={(e) => updateHoleScore(e, 0)}></input></div>
        <div>2</div>
      </div>

      <div class="hole-2" style={{ display: 'flex', flexDirection: 'column' }}>
        <div>2</div>
        <div>4</div>
        <div>325</div>
        <input onChange={(e) => updateHoleScore(e, 1)}></input>
        <div>8</div>
      </div>

      <div class="hole-3" style={{ display: 'flex', flexDirection: 'column' }}>
        <div>3</div>
        <div>4</div>
        <div>420</div>
        <input onChange={(e) => updateHoleScore(e, 2)}></input>
        <div>1</div>
      </div>

      <div class="hole-4" style={{ display: 'flex', flexDirection: 'column' }}>
        <div>4</div>
        <div>3</div>
        <div>151</div>
        <input onChange={(e) => updateHoleScore(e, 3)}></input>
        <div>9</div>
      </div>

      <div class="hole-5" style={{ display: 'flex', flexDirection: 'column' }}>
        <div>5</div>
        <div>3</div>
        <div>195</div>
        <input onChange={(e) => updateHoleScore(e, 4)}></input>
        <div>6</div>
      </div>

      <div class="hole-6" style={{ display: 'flex', flexDirection: 'column' }}>
        <div>6</div>
        <div>4</div>
        <div>343</div>
        <input onChange={(e) => updateHoleScore(e, 5)}></input>
        <div>4</div>
      </div>

      <div class="hole-7" style={{ display: 'flex', flexDirection: 'column' }}>
        <div>7</div>
        <div>5</div>
        <div>475</div>
        <input onChange={(e) => updateHoleScore(e, 6)}></input>
        <div>5</div>
      </div>

      <div class="hole-8" style={{ display: 'flex', flexDirection: 'column' }}>
        <div>8</div>
        <div>4</div>
        <div>309</div>
        <input onChange={(e) => updateHoleScore(e, 7)}></input>
        <div>7</div>
      </div>

      <div class="hole-9" style={{ display: 'flex', flexDirection: 'column' }}>
        <div>9</div>
        <div>4</div>
        <div>392</div>
        <input onChange={(e) => updateHoleScore(e, 8)}></input>
        <div>3</div>
      </div>

      <div>
        <label>Overlook Score:</label>
        <div>Par: 36</div>
        <div>Yardage: 3085</div>
        <div>{totalScore}</div>

      </div>

    </div>

    </div>





  );
};

export default Overlook;