

import React, { Component } from 'react';
import { List, InputItem, Flex, Button, Radio } from 'antd-mobile';
import { connect } from 'react-redux';
import { userRegisger } from '@/redux/user_redux'

@connect(
  ()=>({}),
  {
    userRegisger
  }
)
class Register extends Component {


  toRegister = () => {
    const { userRegisger } = this.props
    const data = {
      name: this.InputItemName.state.value,
      key: this.InputItemKey.state.value,
      type: 1
    }
    userRegisger(data)
  }

  render() {
    return (
      <div>
       <List renderHeader={() => '欢迎注册'}>
          <InputItem clear ref={el => this.InputItemName = el } >
            名称
          </InputItem>
          <InputItem clear ref={el => this.InputItemKey = el } >
            密码
          </InputItem>

          <Flex style={{ padding: '15px' }}>
            <Flex.Item>
              <Radio className="my-radio" onChange={e => console.log('checkbox', e)}>个人</Radio>
            </Flex.Item>
            <Flex.Item>
              <Radio className="my-radio" onChange={e => console.log('checkbox', e)}>企业</Radio>
            </Flex.Item>
          </Flex>
        </List>

        <Flex style={{ marginTop: '10px' }}>
          <Flex.Item>
            <Button size="small" type="primary" onClick={this.toRegister}>注册</Button>
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}

export default Register;
