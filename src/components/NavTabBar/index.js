import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
// import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";

@withRouter
class NavTabBar extends Component {

  // static PropTypes = {
  //   data: PropTypes.array.isRequired
  // }

  render() {

    const { data } = this.props
    const { location } = this.props

    return (
      <div className="fixed-bottom">
        <TabBar>
          {
            data.map(item => {
              return <TabBar.Item
                unselectedTintColor="#949494"
                tintColor="#00c2b3"
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                }} />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                }}
                />
                }
                onPress={() => {
                  this.props.history.push(item.path)
                }}
                selected={item.path === location.pathname}
                title={item.title}
                key={item.path}>
              </TabBar.Item>
            })
          }
        </TabBar>
      </div>
    )
  }
}

export default NavTabBar
