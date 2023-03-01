import React, {useState, useEffect} from 'react'

 function DummyPrac() {

    const[x, setX] = useState(0)
    const[y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=> {
        console.log('useEffect Called')
        window.addEventListener('mousemove', logMousePosition)
    })
  return (
    <div>
  Hooks X- {x} Y- {y}
    </div>
  )
}
export default DummyPrac