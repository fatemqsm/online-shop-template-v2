import React from 'react'
import { Global, css, cx } from '@emotion/react'

const Reset = () => {
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
          img,
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

          
          .slick-slide img {
            margin: auto;
          }
          .slick-prev:before, .slick-next:before{
            color: black;
          }

          
          .row{
            width:100%; 
            float:right;
            &::after {
              content: "";
              clear: both;
              display: table;
            } 
          }
          [class*="col-"] {
            float: left;
            padding: 15px;
          }
          
          @media only screen and (min-width: 600px) {
            /* For tablets: */
            .col-s-1 {width: 8.33%;}
            .col-s-2 {width: 16.66%;}
            .col-s-3 {width: 25%;}
            .col-s-4 {width: 33.33%;}
            .col-s-5 {width: 41.66%;}
            .col-s-6 {width: 50%;}
            .col-s-7 {width: 58.33%;}
            .col-s-8 {width: 66.66%;}
            .col-s-9 {width: 75%;}
            .col-s-10 {width: 83.33%;}
            .col-s-11 {width: 91.66%;}
            .col-s-12 {width: 100%;}
            
          }
          
          @media only screen and (min-width: 768px) {
            /* For desktop: */
            .col-1 {width: 8.33%;}
            .col-2 {width: 16.66%;}
            .col-3 {width: 25%;}
            .col-4 {width: 33.33%;}
            .col-5 {width: 41.66%;}
            .col-6 {width: 50%;}
            .col-7 {width: 58.33%;}
            .col-8 {width: 66.66%;}
            .col-9 {width: 75%;}
            .col-10 {width: 83.33%;}
            .col-11 {width: 91.66%;}
            .col-12 {width: 100%;}
          }
        `}
      />
    </div>
  )
}

export default Reset
