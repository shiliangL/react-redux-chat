import React, { Component } from 'react';
import ListPage from '@/components/ListPage'
import { songDetail, fetchMusic } from '@/api/index.js';
import { connect } from 'react-redux';
import { clickToPlay } from '@/redux/actions'
import { Scrollbars } from 'react-custom-scrollbars';
import LoadingPage from '@/components/LoadingPage' 



@connect(
  ()=>({}),
  { clickToPlay }
)
class PageDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      resultData: null
    }
  }

  componentDidMount(){
    const { id } = this.props.match.params
    if (!id) return
    this.fetchDetail(id)
  }

  fetchDetail( id ){
    songDetail({ id }).then(({ playlist})=>{
      this.setState({ resultData: playlist })
    }).catch(e=>{
      console.log(e)
    })
  }

  fetchMusic( id ){
    fetchMusic({ id }).then(({ data})=>{
      if (data.length>0) {
        data.map3 = data.url
        this.props.clickToPlay(data[0])
      }
    }).catch(e=>{
      console.log(e)
    })
  }

  clickRow(item, index){
    this.fetchMusic(item.id )
  }

  render() {
    const { resultData } = this.state

    const page = (data)=>{
      return <div>
      <div className="page_Header">
        <div className="cover_img">
          <img src={data.coverImgUrl} alt="" /> 
        </div>
        <div className="cover_right">
          <p className="title"> {data.name} </p>
          <p className="description"> {data.description} </p>

          <div className="description">
            <div className="tag">
              标签: { [data.tags] }
            </div>

          </div>
        </div>
      </div>
        <Scrollbars
            autoHeight
            autoHeightMin={366}
            autoHeightMax={366}
            autoHide
            // Hide delay in ms
            autoHideTimeout={1000}
            // Duration for hide animation in ms.
            autoHideDuration={200}
          >
        <ListPage clickRow={(item, index) => this.clickRow(item, index) } data={ data.tracks } />
        </Scrollbars>
      </div>
    }
    return (
      <div className="PageDetail">
        {
          resultData ? page(resultData) : <LoadingPage/>
        }
        {/* <div className="pageHeader"></div>
        <div className="pageHeader"></div>
        <div className="pageHeader"></div>
        <div className="pageHeader"></div>
        <div className="pageHeader"></div> */}
      </div>
    );
  }
}

export default PageDetail;
