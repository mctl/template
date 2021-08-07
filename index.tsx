import React, { ReactNode, ReactText, FC, CSSProperties } from 'react'
import classNames from 'classnames'

export interface <%= name + 'Props' %> {
  className?: string;
  style?: CSSProperties;
}

const <%= name %>: FC<<%= name + 'Props' %>> = (props) => {

  const {
    className,
    style
  } = props
  
  const rootClassNames = classNames(className, 'zet-top-list')

  return (
    <div className={rootClassNames} style={{...style}}>
      
    </div>
  )
}

export default <%= name %>