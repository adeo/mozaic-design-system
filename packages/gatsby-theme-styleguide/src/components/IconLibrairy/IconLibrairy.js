import React from 'react'

const getPath = (name, fill) => {
  switch (name) {
    case 'fullscreen':
      return (
        <path
          fill={fill}
          d="M16 0v6.5l-2.5-2.5-3 3-1.5-1.5 3-3-2.5-2.5zM7 10.5l-3 3 2.5 2.5h-6.5v-6.5l2.5 2.5 3-3z"
        />
      )
    case 'reducescreen':
      return (
        <path
          fill={fill}
          d="M7 9v6.5l-2.5-2.5-3 3-1.5-1.5 3-3-2.5-2.5zM16 1.5l-3 3 2.5 2.5h-6.5v-6.5l2.5 2.5 3-3z"
        />
      )
    case 'mobile':
      return (
        <path
          fill={fill}
          d="M20 2c0-1.105-.896-2-2-2h-12c-1.105 0-2 .896-2 2v20c0 1.104.895 2 2 2h12c1.104 0 2-.896 2-2v-20zm-9.501 0h3.001c.276 0 .5.224.5.5s-.224.5-.5.5h-3.001c-.275 0-.499-.224-.499-.5s.224-.5.499-.5zm1.501 20c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm6-3h-12v-14.024h12v14.024z"
        />
      )
    case 'copy':
      return (
        <path
          fill={fill}
          d="M10 4v-4h-7l-3 3v9h6v4h10v-12h-6zM3 1.414v1.586h-1.586l1.586-1.586zM1 11v-7h3v-3h5v3l-3 3v4h-5zM9 5.414v1.586h-1.586l1.586-1.586zM15 15h-8v-7h3v-3h5v10z"
        />
      )
    case 'checked':
      return (
        <path fill={fill} d="M13.5 2l-7.5 7.5-3.5-3.5-2.5 2.5 6 6 10-10z" />
      )
    case 'grid':
      return (
        <path
          fill={fill}
          d="M6 6h-6v-6h6v6zm9-6h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6z"
        />
      )
    case 'arrowdown':
      return (
        <path
          fill={fill}
          d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
        />
      )
    case 'circleDown':
      return (
        <>
          <path
            fill={fill}
            d="M16 8c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8 8-3.582 8-8zM1.5 8c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5z"
          />
          <path
            fill={fill}
            d="M4.957 5.543l-1.414 1.414 4.457 4.457 4.457-4.457-1.414-1.414-3.043 3.043z"
          />
        </>
      )
    case 'circleUp':
      return (
        <>
          <path
            fill={fill}
            d="M0 8c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8-8 3.582-8 8zM14.5 8c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5z"
          />
          <path
            fill={fill}
            d="M11.043 10.457l1.414-1.414-4.457-4.457-4.457 4.457 1.414 1.414 3.043-3.043z"
          />
        </>
      )

    case 'display':
      return (
        <path
          fill={fill}
          d="M0 1v10h16v-10h-16zM15 10h-14v-8h14v8zM10.5 12h-5l-0.5 2-1 1h8l-1-1z"
        />
      )
    case 'external-link':
      return (
        <>
          <polygon
            id="box"
            points="0,0 6,0 6,2 2,2 2,14 14,14 14,10 16,10 16,16 0,16"
          />
          <polygon
            id="arrow_13_"
            points="8.4,0 16,0 16,7.6 13.1,4.8 8.9,9 7,7.1 11.2,2.9"
          />
        </>
      )
    default:
      return <path />
  }
}

const IconLibrairy = ({ name = '', style = {}, fill = '#000', size = '' }) => (
  <svg
    fill={fill}
    width={size}
    style={style}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, fill)}
  </svg>
)

export default IconLibrairy
