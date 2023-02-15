import React from 'react'

const Container = (props) => {
  return (
    <div className={props.styler}  id={props.id}><p>{props.words}</p></div>
  )
}

export default Container