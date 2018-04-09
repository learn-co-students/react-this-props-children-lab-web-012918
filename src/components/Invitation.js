// Code Invitation Component Here
import React from 'react'

export default class Invitation extends React.Component {

  render(){
    const renderChildren = React.Children.map(this.props.children, child => {
        return <p>{child}</p>
      })

    return(
      <div>
        <h1>You've been invited!</h1>
        {renderChildren}
      </div>
    )
  }
}
