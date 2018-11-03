import { regisger, login } from "@/api";
const initState={
  redirectTo:'',
  isAuth:false,
  hasError: false,
  meg:null,
}
// reducer
export const user = (state=initState,actions)=>{
  return state
}

const errorMsg = (meg)=>{
  return { meg, type:'ERROR_MSG'}
}

export const userLogin = (props) => {
  if (!props.name || !props.key) return errorMsg('请输入')
  return dispatch=>{
    login(props).then(res=>{
      console.log(res,'xx')
    }).catch(e=>{
      errorMsg(e.msg)
    })
  }
}
export const userRegisger = (props) => {
  if (!props.name || !props.key) return errorMsg('请输入')
  return dispatch=>{
    regisger(props).then(res=>{
      console.log(res,'xx')
    }).catch(e=>{
      errorMsg(e.msg)
    })
  }
}

