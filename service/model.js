const mongoose = require('mongoose')
const DB_URL = 'mongodb://127.0.0.1:27017/cmm'

//链接数据库
mongoose.connect(DB_URL)
mongoose.connection.on('connected', () => {
  console.log('数据库链接成功')
})

const models = {
  user:{
    name:{ type: String,require: true },
    key:{ type: String,require: true },
    type:{ type: Number,require: true },

    userImg:{ type: String},
    desc:{ type: String },
    title:{ type: String },
    company:{ type: String },
  },
  chat:{}
}

for (const key in models) {
  if (models.hasOwnProperty(key)) {
    mongoose.model(key, new mongoose.Schema(models[key]))
  }
}
 

module.exports = {
  getModel(name){
    return mongoose.model(name)
  }
}

 