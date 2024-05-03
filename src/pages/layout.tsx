import React from 'react'

type Props = {Children:React.ReactNode}

const layout = ({Children}: Props) => {
  return (
    <div>
       {Children} 
    </div>
  )
}

export default layout
