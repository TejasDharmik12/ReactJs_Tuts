import React from 'react'

export default function Switchbutton({children,onSelect}) {
  return (
    <div>
        <button onClick={onSelect}>{children}</button>
    </div>
  )
}
