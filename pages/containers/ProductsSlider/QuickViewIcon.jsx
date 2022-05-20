import React, { useState } from 'react'
import { css, cx } from '@emotion/css'
import { BsEye } from 'react-icons/bs'
import { Modal } from 'react-bootstrap'
import { Button, H2, H3, H5, Small, Space } from '../../components'
import Link from 'next/link'
import AddToCartButton from '../../Product/AddToCartButton'
import BREACKPOINT from './../../components/Styles/BREACKPOINT.json'
const QuickViewIcon = ({ product }) => {
  const mq = BREACKPOINT.map((bp) => `@media (max-width: ${bp}px)`)

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <p title="Quick View">
        <div
          onClick={handleShow}
          className={css`
            position: absolute;
            top: 15px;
            right: 15px;
            padding: 10px 7px;
            border-radius: 100px;
            background-color: white;
            width: 38px;
            height: 38px;
            color: #0c1c6c;
            transition: all 400ms;
            text-align: center;
            &:hover {
              background-color: #0c1c6c;
              color: white;
              .tooltiptext {
                display: block;
                opacity: 1;
              }
            }
          `}
        >
          <BsEye />
        </div>
      </p>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <div
          className={css`
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            justify-content: space-evenly;
            ${mq[1]} {
              flex-direction: column;
            }
          `}
        >
          <img
            className={css`
              height: :400px;
              width:400px;
              ${mq[2]} {
                width:250px;
              } 
              ${mq[1]} {
                width:180px;
              } 
            `}
            src={`../${product.Picture}`}
            alt=""
          />
          <div
            className={css`
              padding: 20px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              gap: 10px;
            `}
          >
            <H5 lineHeight="1.5" fontFamily="font5" color="#0c1c6c">
              {product.Name}
            </H5>
            <H5 lineHeight="1.5" fontFamily="font5" color="#0c1c6c">
              {product.Price}
            </H5>
            <Small
              fontSize="0.8em"
              lineHeight="1.5"
              fontFamily="font5"
              color="rgba(25, 25, 25, 0.75)"
            >
              {product.Description}
            </Small>
            <Link href={`/Product/${product.Id}`}>
              {/* <BottonWithDisplayNone> */}
              <Button padding="10px 10px" width="145px" fontSize="15px">
                Discover now →
              </Button>
              {/* </BottonWithDisplayNone> */}
            </Link>
            <AddToCartButton productId={product.Id} />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default QuickViewIcon
