import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'midun'
      }
      console.log('lifecycleB constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps ')
        return null
    }
    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }
    
  render() {
    console.log('lifecycleB render')
    return (
      <div>
        lifecycleB
      </div>
    )
  }
}

export default LifecycleB
