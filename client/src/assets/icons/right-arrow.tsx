const RightArrowIcon = ({ className }: any) => {
  return (
    <svg
      className={className}
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Icon'>
        <rect width='12' height='12' fill='white' fillOpacity='0.01' />
        <path
          id='stroke'
          d='M6 1L11 6L6 11'
          stroke='#A3A5AE'
          strokeWidth='1.4'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  )
}

export default RightArrowIcon
