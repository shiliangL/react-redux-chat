import { regisger, login } from "@/api";
const initState={
  redirectTo:'',
  isAuth:false,
  hasError: false,
  meg:null,
}
// reducer
export const user = (state=initState,actions)=>{
  switch (actions.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, meg: null, isAuth: true, redirectTo:'/' }

    case 'ERROR_MSG':
      return { ...state, meg: actions.meg, isAuth: false, hasError: true }

    case 'REGISTER_SUCCESS':
      return { ...state, meg: null, isAuth: true, redirectTo: '/userInfo' }
    default:
    return state
  }
}

// actions Type
const errorMsg = (meg)=>{
  return { meg, type:'ERROR_MSG'}
}


// actions
export const userLogin = (props) => {
  if (!props.name || !props.key) return errorMsg('请输入')
  return dispatch=>{
    login(props).then(res=>{
      dispatch({type:'LOGIN_SUCCESS'})
    }).catch(e=>{
      dispatch({ type: 'ERROR_MSG',data: e })
    })
  }
}

export const userRegisger = (props) => {
  if (!props.name || !props.key) return errorMsg('请输入')
  return dispatch=>{
    regisger(props).then(res=>{
      dispatch({ type: 'REGISTER_SUCCESS' })
    }).catch(e=>{
      dispatch({ type: 'ERROR_MSG' })
    })
  }
}

