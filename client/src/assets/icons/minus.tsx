const MinusIcon = ({ color }: any) => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g id='Minus'>
        <rect width='16' height='16' fill='white' fillOpacity='0.01' />
        <path
          id='fill'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M13.3346 8.8002L2.66797 8.8002L2.66797 7.2002L13.3346 7.2002L13.3346 8.8002Z'
          fill={color}
        />
      </g>
    </svg>
  )
}

export default MinusIcon
