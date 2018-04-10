// Code ThemedDecoration Component Here
import React from 'react'

class ThemedDecoration extends React.Component {
  render(){
    const childrenWithClass = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });

    return <div>
    {childrenWithClass}
    </div>
  }
}

export default ThemedDecoration
// In the components/ThemedDecorations.js file, create a ThemedDecorations React component.
// This component renders out all of its children, while adding a className prop to every child.
