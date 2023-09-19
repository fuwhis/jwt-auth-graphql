import { Box } from '@mui/material'
import { BoxState } from '~/constants/types.type'

const getState = (state: BoxState) => {
  const HEIGHT = 20
  const WIDTH = 20
  switch (state) {
    case 'normal':
      return (
        <Box height={HEIGHT} width={WIDTH}>
          <svg width='100%' height='100%' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='.child / _Base RB Structure'>
              <rect y='0.5' width='20' height='20' rx='10' fill='white' fillOpacity='0.01' />
              <circle id='Circle Outer' cx='10' cy='10.5' r='9.3' stroke='#A3A5AE' strokeWidth='1.4' />
            </g>
          </svg>
        </Box>
      )
    case 'hover':
      return (
        <Box height={HEIGHT} width={WIDTH}>
          <svg width='100%' height='100%' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect width='20' height='20' fill='white' fillOpacity='0.01' />
            <rect width='20' height='20' rx='10' fill='white' fillOpacity='0.01' />
            <circle cx='10' cy='10' r='9.3' fill='#F1F2F3' stroke='#A3A5AE' strokeWidth='1.4' />
          </svg>
        </Box>
      )
    case 'focused':
      return (
        <Box height={HEIGHT} width={WIDTH}>
          <svg width='100%' height='100%' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect width='20' height='20' transform='translate(2 2.5)' fill='white' fillOpacity='0.01' />
            <rect x='2' y='2.5' width='20' height='20' rx='10' fill='white' fillOpacity='0.01' />
            <g filter='url(#filter0_dd_461_224764)'>
              <circle cx='12' cy='12.5' r='10' fill='#F1F2F3' />
              <circle cx='12' cy='12.5' r='9.3' stroke='#A3A5AE' strokeWidth='1.4' />
            </g>
          </svg>
        </Box>
      )
    case 'disabled':
      return (
        <Box height={HEIGHT} width={WIDTH}>
          <svg width='100%' height='100%' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect width='20' height='20' fill='white' fillOpacity='0.01' />
            <g opacity='0.8'>
              <rect width='20' height='20' rx='10' fill='white' fillOpacity='0.01' />
              <circle cx='10' cy='10' r='9.3' fill='#F1F2F3' stroke='#C4C6CD' strokeWidth='1.4' />
            </g>
          </svg>
        </Box>
      )
  }
}

const RadioUnselectIcon = ({ state = 'normal' }: { state?: BoxState }) => {
  return getState(state)
}

export default RadioUnselectIcon
