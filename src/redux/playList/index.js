

const initialState = {
    mp3:'http://m10.music.126.net/20181014213508/db107cbdb60e012becb945741b83eab8/ymusic/9ddc/b10e/919e/2ef50b0473f7f2cce3193ed620898cd7.mp3?id=571338279',
    picUrl: 'http://p1.music.126.net/Kskaga6PwyOIvE7id7_J9A==/109951163303426318.jpg',
    singer: '',
    time: 0
  }

export const playList = (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_TOP_LAY':
      return {
          mp3: action.item.url,
          singer:'shiliangl'
        }
    default:
      return state
  }
}


