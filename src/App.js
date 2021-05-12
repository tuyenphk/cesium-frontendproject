import React, { useState } from 'react'
import './App.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import dataList from './components/data'
import MaterialList from './components/list/materialList'
import AddMaterial from './components/form/AddMaterial'
import EditMaterial from './components/form/EditMaterial';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: '20px'
  },
}));

function App() {
  const classes = useStyles();
  const [materials, setMaterials] = useState(dataList)
  const [refresh, doRefresh] = useState(0);
  const [editing, setEditing] = useState(false)
  const initialMaterial = { id: null, name: '', volume: '', color: '', cost: '', date: '' }
  const [currentMaterial, setCurrentMaterial] = useState(initialMaterial)

  const addMaterial = material => {
    material.id = materials.length + 1
    setMaterials([...materials, material])
  }

  const deleteMaterial = (id) => {
    setMaterials(materials.filter(material => material.id !== id))
  }

  const editMaterial = (id, material) => {
    setEditing(true);
    setCurrentMaterial(material);
  }

  const updateMaterial = async(newMaterial) => {
    console.log('inApp', newMaterial)
    const newMaterials = [...materials].map(item => item.id === newMaterial.id ? newMaterial: item)
    console.log('result', newMaterials)
    setMaterials(newMaterials);   
  }

  return (
    <div className="app">
        <div className="appMaterials">
          <h1>Materials</h1>

          <div className="appMaterials-button">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<AddIcon />}
              onClick={() => doRefresh(prev => prev + 1)}
            >
              Add
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={() => deleteMaterial(currentMaterial.id)}
            >
              Delete
            </Button>
          </div>

          <div className="appMaterials-info">
            {/* Display material list */}
            <div className="appMaterials-list">
              <MaterialList
                materials={materials} 
                deleteMaterial={deleteMaterial}
                editMaterial={editMaterial}
              />
            </div>

            {/* Edit material otherwise Add material */}
            <div className="appMaterials-detail">
            { editing ? (
              <div>
                <EditMaterial 
                  currentMaterial={currentMaterial}
                  setEditing={setEditing}
                  updateMaterial={updateMaterial}
                />
              </div>
              ) : (
              <div>
                <AddMaterial refresh={refresh} addMaterial={addMaterial} />
              </div>
              )}
            </div>
          </div>

          {/* Display the current cost of the chosen material otherwise the total cost of material listed */}
          <p>Total Cost: 
            <span style={{marginLeft: '50px'}}>
              {editing ? (
                <span>
                  $ {(currentMaterial.volume * currentMaterial.cost).toFixed(2)}
                </span>
                ) : (
                <span>
                  $ {([...materials].reduce((total, currentMaterial) => total = total + currentMaterial.volume * currentMaterial.cost, 0)).toFixed(2)}
                </span>
                )
              }
            </span>
          </p>
        </div>
    </div>
  );
}

export default App;
