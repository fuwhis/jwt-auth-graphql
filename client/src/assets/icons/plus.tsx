const PlusIcon = ({ color }: any) => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g id='Plus'>
        <rect width='16' height='16' fill='white' fillOpacity='0.01' />
        <path
          id='fill'
          d='M7.2394 8.76174V13.3332H8.76321V8.76174H13.3346V7.23793L8.76321 7.23793V2.6665H7.2394V7.23793H2.66797V8.76174H7.2394Z'
          fill={color}
        />
      </g>
    </svg>
  )
}

export default PlusIcon
