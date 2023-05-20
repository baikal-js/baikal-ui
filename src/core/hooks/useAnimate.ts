import { useState, useEffect } from 'react'

const useAnimate = (classNames: string) => {
  const [animate, setAnimate] = useState(false)
  const [state, setState] = useState(false)

  const handleAnimate = (event: any) => {
    setState((prevState) => !prevState)
  }

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimate(false)
    }, 1000)

    return () => clearTimeout(animationTimeout)
  }, [state])

  return [animate, handleAnimate]
}

export default useAnimate
