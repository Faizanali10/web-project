import React from 'react'
import MobileDetail from './MobileDetail'
export default function Conditional(props) {
  if(props.mobilename)
    return (
    <MobileDetail/>
  )
    }