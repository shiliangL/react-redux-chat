import React, { Component } from 'react'

export default class InputBox extends Component {

	handlerSubmit(){
		if (!this.input.value) return
		this.props.handleAdd(this.input.value)
	}

	render() {
		return (
			<form className="p-5">
				<div className="form-group">
					<label> 输入评论 </label>
					<input type="text" className="form-control" placeholder="请输入" 
					ref={(input)=>{ this.input = input }}/>
					<p> 已有{this.props.length }条评论</p>
				</div>
				<button type="button" onClick={()=>{this.handlerSubmit()}} className="btn btn-primary">提交</button>
			</form>
		)
	}
}
