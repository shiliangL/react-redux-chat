

import React, { Component } from 'react';
import { List, InputItem, Flex, Button, Radio } from 'antd-mobile';
import { connect } from 'react-redux';
import { userRegisger } from '@/redux/user_redux'
import { Redirect } from "react-router-dom";

@connect(
  (state) => (state.user),
  {
    userRegisger
  }
)
class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      type: 1
    }
  }

  toRegister = () => {
    const { userRegisger } = this.props
    const data = {
      name: this.InputItemName.state.value,
      key: this.InputItemKey.state.value,
      type: 1
    }
    userRegisger(data)
  }

  clickRadio = () => {
    const { type } = this.state
    type === 1 ? this.setState({ type: 2 }) : this.setState({ type: 1 })
  }

  render() {
    const { type } = this.state
    const { redirectTo } = this.props

    return (
      <div className="front-page">
        <div className="front-content">
          {/* 注册成功后跳转到个人完善 */}
          {redirectTo ? <Redirect to={redirectTo} /> : null }
          <List renderHeader={() => '欢迎注册'}>
            <InputItem ref={el => this.InputItemName = el} >
              名称
          </InputItem>
            <InputItem ref={el => this.InputItemKey = el} >
              密码
          </InputItem>

            <Flex style={{ padding: '15px' }}>
              <Flex.Item>
                <Radio className="my-radio" checked={type === 1} onClick={this.clickRadio}>个人</Radio>
              </Flex.Item>
              <Flex.Item>
                <Radio className="my-radio" checked={type === 2} onClick={this.clickRadio}>企业</Radio>
              </Flex.Item>
            </Flex>
          </List>

          <Flex style={{ marginTop: '10px' }}>
            <Flex.Item>
              <Button size="small" type="primary" onClick={this.toRegister}>注册</Button>
            </Flex.Item>
          </Flex>
        </div>
      </div>
    );
  }
}

export default Register;
