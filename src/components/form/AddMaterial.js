import React, { useState, useEffect } from 'react'
import './materialForm.css'
import DatePicker from 'react-date-picker';
import ColorPicker from '../colorPicker'

function AddMaterial(props) {
    const [valueDate, onChangeDate] = useState(new Date());
    const  [colorApp, setColorApp] = useState('#F17013');
    const initMaterial = {id: null, name: '', volume: '', cost: '', color: '', date: ''};
    const [material, setMaterial] = useState(initMaterial);

    useEffect(() => {
        handleSubmit2(); //children function 
    }, [props.refresh]);

    const bringColor = (color) =>{
        console.log('add material', color);
        setColorApp(color)
    }

    const handleChange = e => {
        const {name, value} = e.target;
        setMaterial({...material, [name]: value});
    }
    const handleSubmit2 = () => { 
        if (material.name && material.volume) {
           const newValue = {...material}
           newValue.color = colorApp
           newValue.date = valueDate
           props.addMaterial(newValue);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (material.name && material.volume) {
           const newValue = {...material}
           newValue.color = colorApp
           newValue.date = valueDate
           handleChange(e, props.addMaterial(newValue));
        }
    }

    return (
        <div>
            <form onClick={handleSubmit}>
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
                        onChange={onChangeDate}
                        value={valueDate}
                        style={{borderRadius: '2px', minHeight: '2vh', maxWeight: '10vw'}}
                    />
                </div>

                {/* <div className={classes.root} style={{textAlign: 'center', marginTop: '20px'}}>
                    <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>Add material</Button>
                </div> */}
              
            </form>
        </div>
           

    )
}

export default AddMaterial
