

import React, { Component } from 'react';
import { ListPage ,UserInfo, Contact } from "@/views";
import { Route, Switch, Redirect} from "react-router-dom";
import { NavBar, Icon, Drawer, List } from 'antd-mobile';
import NavTabBar from '@/components/NavTabBar';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      open:false
    };
  }


  componentDidMount() {
    console.log(this.props)    
  }

  clickEllipsis = (e)=>{
    this.props.history.push('/setting')
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
        component: ListPage,
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
        <NavBar mode="dark" rightContent={location.pathname === '/my' ? [<Icon key="1" onClick={this.clickEllipsis} type="ellipsis" />] : [] }
        >{location.pathname==='/'? '首页': navLists.find(item => item.path === location.pathname).title}</NavBar>

        <div className="content" style={{ marginTop:''}}>
          <Switch>
            {location.pathname === '/' ? <Redirect to='/listPage' /> : null}
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
