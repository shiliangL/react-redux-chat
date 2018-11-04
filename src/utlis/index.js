/**
 *  随机字母数字
 *  参数 随机长度
 */
export function md5keyRa(L){
  let s= '';
  const randomchar=()=>{
   var n= Math.floor(Math.random()*62);
   if(n<10) return n; //1-10
   if(n<36) return String.fromCharCode(n+55); //A-Z
   return String.fromCharCode(n+61); //a-z
  }
  while(s.length< L) s+= randomchar();
  return s;
}

//跳转地址
export const redirectTo = ({ type, userImg }) => {

}