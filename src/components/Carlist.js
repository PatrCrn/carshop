import React, {useEffect} from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"
import {Button} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditCar from "./EditCar";

export default function Carlist(props) {
    useEffect(() => props.fetchData(), [props]);

    const deleteCar = (link) => {
        if (window.confirm("Are you sure ?")) {
            fetch(link, {method:'DELETE'})
                .then(() => props.fetchData())
                .catch(err => console.log(err))
        }
    }

    const editCar = (car, link) => {
        fetch(link, {
            method:'PUT',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(car)
        })
            .then(() => props.fetchData())
            .catch(err => console.log(err))
    }

    const columns = [
        {
            Header : 'Brand',
            accessor: 'brand'
        },
        {
            Header : 'Model',
            accessor: 'model'
        },
        {
            Header : 'Color',
            accessor: 'color'
        },
        {
            Header : 'Fuel',
            accessor: 'fuel'
        },
        {
            Header : 'Year',
            accessor: 'year'
        },
        {
            Header : 'Price',
            accessor: 'price'
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            Cell: row => <EditCar car={row.original} editCar={editCar} />
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: "_links.self.href",
            Cell: row => <Button
                onClick={() => deleteCar(row.value)}
                startIcon={<DeleteIcon />}
                color="secondary"
                size='small'
                variant="contained"
            >
                Delete
            </Button>
        }
    ]

    return (
        <div>
            <ReactTable filterable={true} data={props.cars} columns={columns} />
        </div>
    );
}