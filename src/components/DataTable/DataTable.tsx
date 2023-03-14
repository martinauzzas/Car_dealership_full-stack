import React, { useState }from 'react';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { ContactForm } from '../ContactForm';
import { makeStyles } from '@material-ui/core';
// MUI STUFF
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { Button, Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle } from '@material-ui/core';
// MAYBE THE IMPORT BELOW WILL BE DIFFERENT (CarForm)
// import mui style stuff

// MUI DATAGRID: Sticky header 

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    { field: 'make', headerName: 'Make', flex: 1 },
    { field: 'model', headerName: 'Model', flex: 1 },
    { field: 'year', headerName: 'Year', flex: 1 },
    { field: 'infos', headerName: 'Infos', flex: 2 },
    { field: 'price', headerName: 'Price', flex: 1}
];

const useStyle = makeStyles ({
    backgroundColor: {
        backgroundColor : 'white'
    }
});

interface gridData {
    data: {
        id?:string
    }
}

export const DataTable = () => {

    let classes = useStyle();
    let { carData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data:{}});
    const [selectionModel, setSelectionModel] = useState<any>([]);
    

    let handleOpen = () => {
        setOpen(true)
    };
    let handleClose = () => {
        setOpen(false)
    };

    let deleteData = () => {
        server_calls.delete(selectionModel);
        getData();
        setTimeout( () => { window.location.reload(); }, 1000)
    }
    return (
        <div style={{ height: 400, width: '100%', backgroundColor: 'white' }}>
            <h2>Cars</h2>

        <DataGrid rows={ carData } columns={ columns } pageSize={ 5 } checkboxSelection={true} 
        onSelectionModelChange={ (item) => {
            setSelectionModel(item)
						// console.log(item)
          }}
        />

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

        {/* Dialog pop-up */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Contact {selectionModel}</DialogTitle>
            <DialogContent>
                <DialogContentText>Update Contact</DialogContentText>
                    <ContactForm id={selectionModel!}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel</Button>
                <Button onClick={handleClose} color="primary">Done</Button>
            </DialogActions>
        </Dialog>
            
        </div>
    )

}
