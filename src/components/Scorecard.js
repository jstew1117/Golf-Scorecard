import MountainView from './mountainView';
import LakeView from './lakeView';
import Overlook from './overlook';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

function Scorecard(props) {
    const [courseScores, setCourseScores] = useState({ "mountainView": 0, "lakeView": 0, "Overlook": 0 });
    const [totalScore, setTotalScore] = useState(0);

    let updateCourseScore = (course, score) => {
        let newCourseScores = { ...courseScores };
        newCourseScores[course] = score
        setCourseScores(newCourseScores)
    }

    function submitScore() {
        props.printScore(totalScore)
    }

    useEffect(() => {
        const sum = courseScores['mountainView'] + courseScores["lakeView"] + courseScores["Overlook"]
        setTotalScore(sum);
    }, [courseScores]);
    return (
        <>
            <hr style={{
                background:'black'
            }}></hr>
            <MountainView updateCourseScores={updateCourseScore} />
            <br />
            <hr style={{
                background:'black'
            }}></hr>
            <LakeView updateCourseScores={updateCourseScore} />
            <br />
            <hr style={{
                background:'black'
            }}></hr>
            <Overlook updateCourseScores={updateCourseScore} />
            <br />
            <hr style={{
                background:'black'
            }}></hr>

            <div>
                Total Score: {totalScore}
            </div>
            <Button onClick={submitScore} type="submit" variant="contained">Submit Score</Button>

        </>
    )
}

export default Scorecard