

import React, { Component } from 'react';
import { List, InputItem, Flex, Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { userLogin } from "@/redux/user_redux";

@connect(
  (state) => (state.user),
  {
    userLogin
  }
)
class Login extends Component {

  toRegister = () => {
    this.props.history.push('/register')
  }

  toLogin = () => {
    const { userLogin } = this.props
    const data = {
      name: this.InputItemName.state.value,
      key: this.InputItemKey.state.value,
    }
    userLogin( data )
  }

  render() {
    return (
      <div className="front-page">
        <div className="front-content">
        <List renderHeader={() => '欢迎光临'}>
          <InputItem ref={el => this.InputItemName = el } placeholder="">
            名称
          </InputItem>
          <InputItem ref={el => this.InputItemKey = el}  placeholder="">
            密码
          </InputItem>
        </List>

        <Flex style={{ marginTop: '10px' }}>
          <Flex.Item>
            <Button size="small" type="primary" onClick={this.toLogin}>登录</Button>
          </Flex.Item>
          <Flex.Item>
            <Button size="small" onClick={this.toRegister}>注册</Button>
          </Flex.Item>
        </Flex>
        </div>
      </div>
    );
  }
}

export default Login;
