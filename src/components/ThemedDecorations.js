import React, {Component} from 'react'

export default class ThemedDecorations extends Component {

  constructor(){
    super()
  }

  render(){
    const childrenWithExtraProp = React.Children.map(this.props.children, child => React.cloneElement(child, {
      className: this.props.theme,
    }));

    return(
      <div>
        {childrenWithExtraProp}
      </div>
    )
  }
}
