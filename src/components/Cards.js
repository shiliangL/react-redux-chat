import React, { Component } from 'react'

export default class Cards extends Component {
	render() {
		const { tags } = this.props;
		return (
			<div>
				<label> 评论列表 </label>
				<ul className="list-group mb-3">
					{tags.map((item, index) => {
						return <li className="list-group-item" key={index}> {item} </li>
					})}
				</ul>
				<p>
				</p>
			</div>
		)
	}
}
