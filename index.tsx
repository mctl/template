import React, { ReactNode, ReactText, FC, CSSProperties } from 'react'
import classNames from 'classnames'

export interface <%= upperCamelName + 'Props' %> {
  className?: string;
  style?: CSSProperties;
}

const <%= upperCamelName %>: FC<<%= upperCamelName + 'Props' %>> = (props) => {

  const {
    className,
    style
  } = props
  
  const rootClassNames = classNames(className, 'zet-<%= name %>')

  return (
    <div className={rootClassNames} style={{...style}}>
      
    </div>
  )
}

export default <%= upperCamelName %>