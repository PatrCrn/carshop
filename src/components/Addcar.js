import * as React from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import {useState} from "react";

export default function Addcar(props) {
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = useState({
        brand:'', model:'', color:'', fuel:'', year:'', price:''
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handeInputChange = (event) => {
        setCar({...car, [event.target.name]: event.target.value})
    }

    const addCar = () => {
        props.saveCar(car);
        handleClose();
    }

    return (
        <div>
            <Button style={{margin: 20}} variant="outlined" onClick={handleClickOpen}>
                Add new car
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add a car</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="brand"
                        value={car.brand}
                        onChange={e=>handeInputChange(e)}
                        label="Brand"
                        fullWidth
                        variant="standard"
                        required={true}
                    />
                    <TextField
                        margin="dense"
                        name="model"
                        value={car.model}
                        onChange={e=>handeInputChange(e)}
                        label="Model"
                        fullWidth
                        variant="standard"
                        required={true}
                    />
                    <TextField
                        margin="dense"
                        name="color"
                        value={car.color}
                        onChange={e=>handeInputChange(e)}
                        label="Color"
                        fullWidth
                        variant="standard"
                        required={true}
                    />
                    <TextField
                        margin="dense"
                        name="fuel"
                        value={car.fuel}
                        onChange={e=>handeInputChange(e)}
                        label="Fuel"
                        fullWidth
                        variant="standard"
                        required={true}
                    />
                    <TextField
                        margin="dense"
                        name="year"
                        value={car.year}
                        onChange={e=>handeInputChange(e)}
                        label="Year"
                        type='number'
                        fullWidth
                        variant="standard"
                        required={true}
                    />
                    <TextField
                        margin="dense"
                        name="price"
                        value={car.price}
                        onChange={e=>handeInputChange(e)}
                        label="Price"
                        type='number'
                        fullWidth
                        variant="standard"
                        required={true}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addCar}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}