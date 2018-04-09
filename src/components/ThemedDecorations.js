// Code ThemedDecoration Component Here
import React from 'react'

export default class ThemedDecoration extends React.Component {

  render() {
    let childrenAddClassName = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        className: this.props.theme
      })
    )
    return (
      <div>
        {childrenAddClassName}
      </div>
    )
  }
}
