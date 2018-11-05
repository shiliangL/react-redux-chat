const express = require('express')
const Router = express.Router()
const Model = require('./model')
const User = Model.getModel('user')
const utils = require('utility')
const _filter = { key: 0, __v:0 }
 
// 密码加密加严
function md5keyRa(key){
const rd = 'shilianglAllAwayOnlinex2018'
  return utils.md5(utils.md5(rd+key));
}

Router.get('/userInfo',(req,res)=>{
  const { userid } = req.cookies
  if (!userid) return res.json({ code: 503, msg: '登录过期' })
  User.findOne({ _id: userid }, _filter, (err, doc) => {
    if (err) return res.json({ code: 1, msg: '系统异常' })
    return res.json({ code: 0, msg: '获取个人信息成功',data:doc })
  })
})

Router.get('/list',(req,res)=>{
  User.find({},(err,doc)=>{
    return res.json(doc)
  })
})

Router.post('/regisger',(req,res)=>{
  const { name,key,type } = req.body
  User.findOne({ name },(err,doc)=>{
    if (doc) return res.json({ code: 1, msg:'重复'})
    User.create({ name, key: md5keyRa(key),type },(err,doc)=>{
      if (err){
        return res.json({ code: 1, msg: '服务器异常' })
      }  
      return res.json({ code: 0, msg: '注册成功' })
    })
  })
})

Router.post('/login', (req, res) => {
  const { name, key } = req.body
  User.findOne({ name, key: md5keyRa(key) }, _filter,(err,doc)=>{
    if (err) {
      return res.json({ code: 1, msg: '服务器异常' })
    }
    if (!doc) {
      return res.json({ code: 1, msg: '用户名称或者密码错误' })
    }  
    res.cookie('userid', doc._id)
    return res.json({ code: 0, msg: '登录成功',data: doc })
  })
})

module.exports = Router