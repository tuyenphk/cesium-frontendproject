import React from 'react'
import ReactCircleColorPicker from 'react-circle-color-picker'
import './materialList.css'

function materialList(props) {
    console.log('run')
    return (
        <div>
            {props.materials.length > 0 && props.materials.map(material => {
                const {id, color, name, volume} = material
                console.log('testColor', color)

                return (
                    <div className="materialList">
                        <div className="materialList-left">
                            {/* <ReactCircleColorPicker colors={[{hex: `${color}`}]} */}
                            <div style={{width: "20px", height: "20px", borderRadius: "50%", backgroundColor: color }}></div>
                        </div>
                        <div className="materialList-right">
                            <p onClick={() => props.editMaterial(id, material)}>{name}</p>
                            <p>
                                {volume} <span>&#13221;</span>
                            </p>

                        </div>
                    </div>           
                )
            })}
        </div>
    )
}

export default materialList
