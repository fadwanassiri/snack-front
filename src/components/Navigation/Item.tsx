import * as React from 'react';

interface PropsTypes {
  name: string
}

interface StateTypes {
  isActive: boolean
}

const defaultState: StateTypes = {
  isActive: false
}

class NavigationItem extends React.Component<PropsTypes, StateTypes>  {
  constructor(props: PropsTypes) {
    super(props)

    this.state = defaultState
  }
  render() {
    const { name } = this.props
    const { isActive } = this.state

    return (
      <li className={`nav-item mT-30${isActive ? ' active' : ''}`} >
        <a className="sidebar-link" href="index.html">
          <span className="icon-holder">
            <i className="c-blue-500 ti-home" />
          </span>
          <span className="title">{name}</span>
        </a>
      </li >
    );
  }
}

export default NavigationItem