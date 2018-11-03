

import React, { Component } from 'react';
import { List, InputItem, Flex, Button } from 'antd-mobile';

class Login extends Component {

  toRegister = () => {
    this.props.history.push('/register')
  }

  toLogin = () => {
    console.log(this.InputItem.state.value)
    if (this.name) {
      console.log(this.name)
    }
  }

  render() {
    return (
      <div>
        <List renderHeader={() => '欢迎光临'}>
          <InputItem clear ref={el => this.InputItemName = el } placeholder="">
            名称
          </InputItem>
          <InputItem clear ref={el => this.InputItemKey = el}  placeholder="">
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
    );
  }
}

export default Login;
