import MountainView from './mountainView';
import LakeView from './lakeView';
import Overlook from './overlook';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

function Scorecard() {
    const [courseScores, setCourseScores] = useState({ "mountainView": 0, "lakeView": 0, "Overlook": 0 });
    const [totalScore, setTotalScore] = useState(0);

    let updateCourseScore = (course, score) => {
        let newCourseScores = { ...courseScores };
        newCourseScores[course] = score
        setCourseScores(newCourseScores)
    }

    useEffect(() => {
        const sum = courseScores['mountainView'] + courseScores["lakeView"] + courseScores["Overlook"]
        setTotalScore(sum);
    }, [courseScores]);
    return (
        <>
            <MountainView updateCourseScores={updateCourseScore} />
            <br />
            <LakeView updateCourseScores={updateCourseScore} />
            <br />
            <Overlook updateCourseScores={updateCourseScore} />
            <br />
            
            <div>
                Total Score: {totalScore}
            </div>
            <Button type="submit" variant="contained">Submit Score</Button>
      
        </>
    )
}

export default Scorecard