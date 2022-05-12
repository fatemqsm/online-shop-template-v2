import React, { useState, useEffect } from 'react'
import { css, cx } from '@emotion/css'
import { jsx, ThemeProvider, useTheme } from '@emotion/react'

const JumpUpButton = ({
  onClick = () => {},
  position = 'fixed',
  showInStorybook = 'false',
}) => {
  const [scrollYForJumpUp, setScrollYForJumpUp] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollYForJumpUp(window.scrollY)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button
      onClick={onClick}
      className={css`
        font-family: font5;
        font-size: 35px;
        color: #777;
        font-weight: 400;
        background-color: #fbede7;
        border: none;
        transition: all 400ms;
        width: 70px;
        height: 70px;
        &:hover {
          padding-bottom: 60;
          color: #ffffff;
          background-color: rgba(25, 25, 25, 0.75);
        }
        bottom: 40px;
        right: 20px;
        position: ${position};
        ${scrollYForJumpUp > 400 || showInStorybook === 'true'
          ? `
            display:block; 
          `
          : `display:none;`}
      `}
    >
      &#94;
    </button>
  )
}

export default JumpUpButton
