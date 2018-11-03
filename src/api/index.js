import service from '../utlis/request.js'

// 推荐歌单
// 说明: 调用此接口, 可获取推荐歌单
export function fetchNewSong(params) {
  return service({
    url: '/personalized',
    method: 'get',
    params
  })
}

//歌单 ( 网友精选碟 )
// 调用例子: /top/playlist ? limit = 10 & order= new
// order: 可选值为 'new' 和 'hot', 分别对应最新和最热, 默认为 'hot'
export function fetchPlayList(params) {
  return service({
    url: '/top/playlist',
    method: 'get',
    params
  })
}

// 通过 id 获取 mp3 播放接口
export function fetchMusic(params) {
  return service({
    url: '/music/url',
    method: 'get',
    params
  })
}

// 获取热门推荐
export function fetchHot(params) {
  return service({
    url: '/personalized',
    method: 'get',
    params
  })
}

export function songDetail(params) {
  return service({
    url: '/playlist/detail',
    method: 'get',
    params
  })
}


export function fetchUserInfo(params) {
  return service({
    url: '/api/userInfo',
    method: 'get',
    params
  })
}
export function regisger(data) {
  return service({
    url: '/api/regisger',
    method: 'POST',
    data
  })
}
export function login(data) {
  return service({
    url: '/api/login',
    method: 'POST',
    data
  })
}
