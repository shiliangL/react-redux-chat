const express = require('express')
const Router = express.Router()
const Model = require('./model')
const User = Model.getModel('user')
const utils = require('utility')
 
// 密码加密加严
function md5keyRa(L,key){
  let s= '';
  const randomchar=()=>{
   const n= Math.floor(Math.random()*62);
   if(n<10) return n; //1-10
   if(n<36) return String.fromCharCode(n+55); //A-Z
   return String.fromCharCode(n+61); //a-z
  }
  while(s.length< L) s+= randomchar();
  return utils.md5(utils.md5(s+key));
}

Router.get('/userInfo',(req,res)=>{
  return res.json({code:1})
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
    User.create({ name, key: md5keyRa(11,key),type },(err,doc)=>{
      if (err){
        return res.json({ code: 1, msg: '服务器异常' })
      }  
      return res.json({ code: 0, msg: '添加成功' })
    })
  })
})

Router.post('/login', (req, res) => {
  const { name, key, type } = req.body
  User.findOne({ name }, (err, doc) => {
    if (doc) return res.json({ code: 1, msg: '重复' })
    User.create({ name, key, type }, (err, doc) => {
      if (err) {
        return res.json({ code: 1, msg: '服务器异常' })
      }
      return res.json({ code: 0, msg: '添加成功' })
    })
  })
})

module.exports = Router