import React from 'react';
import style from './style'

const Features = (props)=>{
  const {features} = props
  var align, startIndex
  const keys = Object.keys(features)
  const half = keys.length / 2
  props.left ? align = 'left': align = 'right'
  var mapingAry = keys.slice(half, keys.length+1)
  if (props.left){
    mapingAry = keys.slice(0, half)
  }

  return (
    <div className={`row features-${align}`}>
      {mapingAry.map((feature, i)=>(
          <div key={i} className="col-md-12 feature">
            <h3 className="title-features wow fadeInLeft"><i className={`fa fa-lg pull-feature-${align} ${features[feature].icon}`}></i>{feature}</h3>
            <p>{features[feature].text}</p>
          </div>
        )
      )}


    </div>
  )

}


export default Features
