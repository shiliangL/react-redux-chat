

import React, { Component } from 'react';
import { ListPage,List ,UserInfo, Contact } from "@/views";
import { Route, Switch } from "react-router-dom";
import { NavBar } from 'antd-mobile';
import NavTabBar from '@/components/NavTabBar';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
    };
  }


  componentDidMount() {
    console.log(this.props)    
  }


  render(){

    const { location } = this.props

    const navLists = [
      {
        title:'首页',
        path:'/listPage',
        icon:'',
        isHide:'',
        component: ListPage,
      },
      {
        title: '列表',
        path: '/list',
        icon: '',
        isHide: '',
        component: List,
      },
      {
        title: '信息',
        path: '/contact',
        icon: '',
        isHide: '',
        component: Contact,
      },
      {
        title: '我的',
        path: '/my',
        icon: '',
        isHide: '',
        component: UserInfo,
      }
    ]

    return (
      <div style={{ height: '100%'}}>
        <NavBar mode="dark">{navLists.find(item => item.path === location.pathname).title}</NavBar>
        <div className="content" style={{ marginTop:''}}>
          <Switch>
            {
              navLists.map(item=>{
                return <Route key={item.path}  path={item.path} component={item.component} />
              })
            }
          </Switch>
        </div>
        <NavTabBar data={navLists}></NavTabBar>
      </div>
    )
  }
}

export default Home;
