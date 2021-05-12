import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

class colorPicker extends React.Component {
  state = {
    displayColorPicker: false,
    // color: {
    //   r: '241',
    //   g: '112',
    //   b: '19',
    //   a: '1',
    // }
    color: '#F17013'
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
    
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = async(color) => {
    await(this.setState({ color: color.hex }))
    this.props.bringColor(this.state.color)
  };

  render() {

    const styles = reactCSS({
      'default': {
        color: {
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          // background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
          background: `${this.state.color}`,
          cursor: 'pointer'
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div>
        <div onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>
          <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
        </div> : null }

      </div>
    )
  }
}

export default colorPicker
