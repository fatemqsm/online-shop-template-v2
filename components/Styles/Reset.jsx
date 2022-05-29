import React from 'react'
import { Global, css, cx } from '@emotion/react'
// import BREACKPOINT from './../../components/Styles/BREACKPOINT.json'

const Reset = () => {
  const BREACKPOINT = [576, 768, 992, 1200]
  const mq = BREACKPOINT.map((bp) => `@media (max-width: ${bp}px)`)

  return (
    <div>
      <Global
        styles={css`
          html,
          body,
          div,
          span,
          applet,
          object,
          iframe,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          blockquote,
          pre,
          a,
          abbr,
          acronym,
          address,
          big,
          cite,
          code,
          del,
          dfn,
          em,
          ins,
          kbd,
          q,
          s,
          samp,
          small,
          strike,
          strong,
          sub,
          sup,
          tt,
          var,
          b,
          u,
          i,
          center,
          dl,
          dt,
          dd,
          ol,
          ul,
          li,
          fieldset,
          form,
          label,
          legend,
          table,
          caption,
          tbody,
          tfoot,
          thead,
          tr,
          th,
          td,
          article,
          aside,
          canvas,
          details,
          embed,
          figure,
          figcaption,
          footer,
          header,
          hgroup,
          menu,
          nav,
          output,
          ruby,
          section,
          summary,
          time,
          mark,
          audio,
          video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
          }
          article,
          aside,
          details,
          figcaption,
          figure,
          footer,
          header,
          hgroup,
          menu,
          nav,
          section {
            display: block;
          }
          * {
          box-sizing: border-box;
          ${mq[0]} {
            font-size: 80%;
          }
          }
          body {
            line-height: 1;
          }
          p {margin-bottom: 1rem;}

          h1, h2, h3, h4, h5 {
            line-height: 1.3;
          }
          ol,
          ul {
            list-style: none;
          }
          blockquote,
          q {
            quotes: none;
          }
          blockquote:before,
          blockquote:after,
          q:before,
          q:after {
            content: '';
            content: none;
          }
          table {
            border-collapse: collapse;
            border-spacing: 0;
          }
          .slick-slide Image {
            margin: auto;
          }
          .slick-prev:before,
          .slick-next:before {
            color: black;
          }
          
          @font-face {
            font-family: 'font1';
            src: url('fonts/IBMPlexSerif-Thin.ttf');
            src: url('fonts/IBMPlexSerif-Thin.eot?#iefix') format('embedded-opentype'),
              url('fonts/IBMPlexSerif-Thin.woff') format('woff'),
              url('fonts/IBMPlexSerif-Thin.ttf') format('truetype'),
            font-weight: 100;
          }
          @font-face {
            font-family: 'font2';
            src: url('fonts/IBMPlexSerif-ExtraLight.ttf');
            src: url('fontsIBMPlexSerif-ExtraLight.eot?#iefix')
                format('embedded-opentype'),
              url('fonts/IBMPlexSerif-ExtraLight.woff') format('woff'),
              url('fonts/IBMPlexSerif-ExtraLight.ttf') format('truetype'),
            font-weight: 200;
          }
          @font-face {
            font-family: 'font3';
            src: url('fonts/IBMPlexSerif-Light.ttf');
            src: url('fonts/IBMPlexSerif-Light.eot?#iefix')
                format('embedded-opentype'),
              url('fonts/IBMPlexSerif-Light.woff') format('woff'),
              url('fonts/IBMPlexSerif-Light.ttf') format('truetype'),
            font-weight: 300;
          }
          @font-face {
            font-family: 'font4';
            src: url('fonts/IBMPlexSerif-Regular.ttf');
            src: url('fonts/IBMPlexSerif-Regular.eot?#iefix')
                format('embedded-opentype'),
              url('fonts/IBMPlexSerif-Regular.woff') format('woff'),
              url('fonts/IBMPlexSerif-Regular.ttf') format('truetype'),
            font-weight: 400;
          }
          @font-face {
            font-family: 'font5';
            src: url('fonts/IBMPlexSerif-Medium.ttf');
            src: url('fonts/IBMPlexSerif-Medium.eot?#iefix')
                format('embedded-opentype'),
              url('fonts/IBMPlexSerif-Medium.woff') format('woff'),
              url('fonts/IBMPlexSerif-Medium.ttf') format('truetype'),
            font-weight: 500;
          }
          @font-face {
            font-family: 'font6';
            src: url('fonts/IBMPlexSerif-SemiBold.ttf');
            src: url('fonts/IBMPlexSerif-SemiBold.eot?#iefix')
                format('embedded-opentype'),
              url('fonts/IBMPlexSerif-SemiBold.woff') format('woff'),
              url('fonts/IBMPlexSerif-SemiBold.ttf') format('truetype'),
            font-weight: 600;
          }
          @font-face {
            font-family: 'font7';
            src: url('fonts/IBMPlexSerif-Bold.ttf');
            src: url('fonts/IBMPlexSerif-Bold.eot?#iefix')
                format('embedded-opentype'),
              url('fonts/IBMPlexSerif-Bold.woff') format('woff'),
              url('fonts/IBMPlexSerif-Bold.ttf') format('truetype'),
            font-weight: 700;
          }

        
        `}
      />
    </div>
  )
}

export default Reset
