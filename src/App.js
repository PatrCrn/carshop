import './App.css';
import Carlist from "./components/Carlist";
import {AppBar, Box, Toolbar, Typography} from "@material-ui/core";
import Addcar from "./components/Addcar";
import {useState} from "react";

function App() {
    const [cars, setCars] = useState([]);

    const fetchData = ()=>{
        fetch('https://carstockrest.herokuapp.com/cars')
            .then(resp => resp.json())
            .then(data => setCars(data._embedded.cars))
    }

    const saveCar = (car) => {
        fetch('https://carstockrest.herokuapp.com/cars', {
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(car)
        })
            .then(res => fetchData())
            .catch(err => console.log(err))
    }

    return (
        <div className="App">
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6">
                        CarShop
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Addcar saveCar={saveCar}/>
                </Toolbar>
            </AppBar>
            <Carlist cars={cars} setCars={setCars} fetchData={fetchData} />
        </div>
    );
}

export default App;
