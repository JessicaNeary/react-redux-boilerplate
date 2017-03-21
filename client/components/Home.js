import React from 'react'

export default React.createClass({
  componentDidMount () {
    this.props.getCategories()
  },
  render () {
    const content = <div>Content found</div>
    return (
      <div>
        <h4>Home</h4>
        {this.props.categories ? content : <div>No content found</div>}
      </div>
    )
  }
})
