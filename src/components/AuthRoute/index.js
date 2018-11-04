import { Component } from 'react'
import { fetchUserInfo } from '@/api'
import { withRouter } from "react-router-dom";

//非路由组件使用路由组件方法
@withRouter
class AuthRoute extends Component {
  
  componentDidMount(){
    const paths = ['/login','/register']
    const { history, location} = this.props
    fetchUserInfo().then(({code})=>{
      if (code !== 0 && !paths.includes(location.pathname)) history.push('/login')
    }).catch(e=>{
      console.log(e)
    })
  }

  render() {
    return null
  }
}
export default AuthRoute