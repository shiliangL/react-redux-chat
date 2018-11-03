
import React, { Fragment } from 'react'
import './index.scss'

export default function Loading(props) {
  const { loading, children } = props
  return (
    <Fragment>
      <div className="Loading">
        {children}
        {loading && <div className="loading" />}
      </div>
    </Fragment>
  )
}