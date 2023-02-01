import { useState } from 'react'
import './Home.css';

function home() {

const [players, updatePlayers] = useState([]);

    return (
     <div className="homeScreen">
        <div>
            <h1>Marietta Country Club</h1>
            <form>
                <TextField
                required
                id="outlined-required"
                label="Name"
                defaultValue=""
                />
                <TextField
                required
                id="outlined-required"
                label="Email"
                defaultValue=""
                />
            </form>
        </div>

     </div>



    )
}