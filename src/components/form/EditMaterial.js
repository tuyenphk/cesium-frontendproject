import React, { useState, useEffect } from 'react'
import './materialForm.css'
import DatePicker from 'react-date-picker';
import ColorPicker from '../colorPicker'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        borderRadius: '20px'
      },
    },
}));

function EditMaterial(props) {
    const classes = useStyles();
    const [value, onChange] = useState(new Date());
    const  [colorApp, setColorApp] = useState("");

    useEffect(() => {
        setMaterial(props.currentMaterial)
    }, [props])

    const [material, setMaterial] = useState(props.currentMaterial);

    const handleChange = e => {
        const {name, value} = e.target;
        setMaterial({...material, [name]: value});
    }
    const bringColor = (color) =>{
        console.log('Add material in Edit', color);
        setColorApp(color)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (material.name && material.volume ) {
            const newValue = {...material}
            newValue.color = colorApp
            newValue.date = value
            console.log('Edit value',newValue)
            props.updateMaterial(newValue)
        }
    }

    return (
        <div>
            <form className="materialForm">
                <div className="materialForm-row">
                    <div className="materialFormRow-left">
                        <p>Name</p>
                        <input type="text" name="name" value={material.name} onChange={handleChange} ></input>
                    </div>
                    <div className="materialFormRow-right">
                        <p>Color</p>
                        <ColorPicker bringColor={bringColor} />
                    </div>
                </div>

                <div className="materialForm-row">
                    <div className="materialFormRow-left">
                        <p>Volume (<span>&#13221;</span>)</p>
                        <input type="number" name="volume" value={material.volume} onChange={handleChange} ></input>
                    </div>
                    <div className="materialFormRow-right">
                        <p>Cost (USD per <span>&#13221;</span>)</p>
                        <input type="number" name="cost" value={material.cost} onChange={handleChange}></input>
                    </div>
                </div>

                <div className="materialFormRow-left">
                    <p>Delivery Date</p>
                    <DatePicker
                        onChange={onChange}
                        value={value}
                    />
                </div>

                <div className={classes.root} style={{textAlign: 'center', marginTop: '20px'}}>
                    <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>Save</Button>
                    <Button variant="contained" color="primary" type="submit" onClick={() => props.setEditing(false)}>Cancel</Button>
                </div>
            
            </form>
        </div>
    )
}

export default EditMaterial
