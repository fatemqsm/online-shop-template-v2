import React, { useState } from 'react'
import { css, cx } from '@emotion/css'
import { BsEye } from 'react-icons/bs'
import { Modal } from 'react-bootstrap'
import { Button, H2, H3, H5, Small, Space } from '../../components'
import Link from 'next/link'
import AddToCartButton from '../../Product/AddToCartButton'

const Gallary = ({ productPicture }) => {
  function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy
    img = document.getElementById(imgID)
    result = document.getElementById(resultID)
    /*create lens:*/
    lens = document.createElement('DIV')
    lens.setAttribute('class', 'img-zoom-lens')
    /*insert lens:*/
    // img.parentElement.insertBefore(lens, img)
    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth
    cy = result.offsetHeight / lens.offsetHeight
    /*set background properties for the result DIV:*/
    result.style.backgroundImage = "url('" + img.src + "')"
    result.style.backgroundSize =
      img.width * cx + 'px ' + img.height * cy + 'px'
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener('mousemove', moveLens)
    img.addEventListener('mousemove', moveLens)
    /*and also for touch screens:*/
    lens.addEventListener('touchmove', moveLens)
    img.addEventListener('touchmove', moveLens)
    function moveLens(e) {
      var pos, x, y
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault()
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e)
      /*calculate the position of the lens:*/
      x = pos.x - lens.offsetWidth / 2
      y = pos.y - lens.offsetHeight / 2
      /*prevent the lens from being positioned outside the image:*/
      if (x > img.width - lens.offsetWidth) {
        x = img.width - lens.offsetWidth
      }
      if (x < 0) {
        x = 0
      }
      if (y > img.height - lens.offsetHeight) {
        y = img.height - lens.offsetHeight
      }
      if (y < 0) {
        y = 0
      }
      /*set the position of the lens:*/
      lens.style.left = x + 'px'
      lens.style.top = y + 'px'
      /*display what the lens "sees":*/
      result.style.backgroundPosition = '-' + x * cx + 'px -' + y * cy + 'px'
    }
    function getCursorPos(e) {
      var a,
        x = 0,
        y = 0
      e = e || window.event
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect()
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left
      y = e.pageY - a.top
      /*consider any page scrolling:*/
      x = x - window.pageXOffset
      y = y - window.pageYOffset
      return { x: x, y: y }
    }
  }

  imageZoom('myimage', 'myresult')

  return (
    <>
      <div className="img-zoom-container">
        <img id="myimage" src={productPicture} width="300" height="240" />
        <div id="myresult" className="img-zoom-result"></div>
      </div>
    </>
  )
}

export default Gallary
