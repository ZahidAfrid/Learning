import React from 'react'

function Alert(props) {

// i make the mistake of not using the camal case there for the js is the case sensitive:
    const capitalizer = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }

  return (
  props.Alert &&   <div className={`alert alert-${props.Alert.typ} alert-dismissible fade show`} role="alert">
  <strong>{capitalizer(props.Alert.typ)}</strong>{props.Alert.msg}
  </div>
    
  )
}

export default Alert  