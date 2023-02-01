import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import MountainView from './components/mountainView';
import LakeView from './components/lakeView';


function App() {

  const [courseScores, setCourseScores] = useState({"mountainView": 0, "lakeView":0});
  const [totalScore, setTotalScore] = useState(0);
  
let updateCourseScore = (course, score) => {
  let newCourseScores = {...courseScores};
  newCourseScores[course] = score
  setCourseScores(newCourseScores)
}

  useEffect(() => {
    const sum = courseScores['mountainView']+courseScores["lakeView"]
    setTotalScore(sum);
  }, [courseScores]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Marietta Country Club
        </div>
        <div></div>
      </header>
      <MountainView updateCourseScores={updateCourseScore}/>
      <LakeView updateCourseScores={updateCourseScore}/>
      <div>
totalScore: {totalScore}
      </div>

    </div>




  );
};


export default App;
