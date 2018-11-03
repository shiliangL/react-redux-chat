import React, { Component } from 'react'
import { fetchUserInfo } from '@/api'
import { withRouter } from "react-router-dom";

//非路由组件使用 路由组件方法
@withRouter
class AuthRoute extends Component {
  
  componentDidMount(){
    const {history} = this.props
    fetchUserInfo().then(({code})=>{
      if (code !== 0) history.push('/login')
    }).catch(e=>{
      console.log(e)
    })
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
export default AuthRoute