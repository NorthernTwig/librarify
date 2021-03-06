import React, { Component } from 'react'
import addIcon from './BookIcons/clear.svg'
import Add from './Add'
import Search from './Search'
import './Header.css'

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      displayTemplate: false
    }
  }

  toggleTemplate = () => {
    this.props.toggleTemplate()
  }

  getAddIcon = () => {
    return {
      backgroundImage: `url(${addIcon})`
    }
  }

  render() {
    return (
      <div className='header'>
        <div className='text-field'>
          <h1 className='header-text'><a href='#'>Librarify</a></h1>
        </div>
        <div className='action-field'>
          <Search filter={this.props.filter} toggleSearch={this.props.toggleSearch} />
          <Add toggle={this.toggleTemplate} />
        </div>
      </div>
    )
  }
}