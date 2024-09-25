import React from 'react'

const Heading = ({title, tclass, desc, dclass, conClass}) => {
  return (
    <div className={conClass}>
      <h1 className={tclass}>{title}</h1>
      <p className={dclass}>{desc}</p>
    </div>
  )
}

export default Heading
