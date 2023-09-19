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
              <circle id='Circle Outer' cx='10' cy='10.5' r='10' fill='#2D68FE' />
              <circle id='Circle Inner' cx='10' cy='10.5' r='4.5' fill='white' />
            </g>
          </svg>
        </Box>
      )
    case 'hover':
      return (
        <Box height={HEIGHT} width={WIDTH}>
          <svg width='100%' height='100%' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='.child / _Base RB Structure'>
              <rect x='4' y='4' width='20' height='20' rx='10' fill='white' fillOpacity='0.01' />
              <g id='Circle Outer' filter='url(#filter0_d_560_10815)'>
                <circle cx='14' cy='14' r='13.4' fill='#2D68FE' />
              </g>
              <circle id='Circle Inner' cx='14' cy='14' r='6' fill='#96ADFB' />
            </g>
          </svg>

        </Box>
      )
    case 'focused':
      return (
        <Box height={HEIGHT} width={WIDTH}>
          <svg width='100%' height='100%' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='.child / _Base RB Structure'>
              <rect x='2' y='2.5' width='20' height='20' rx='10' fill='white' fillOpacity='0.01' />
              <g id='Circle Outer' filter='url(#filter0_dd_560_12748)'>
                <circle cx='12' cy='12.5' r='12' fill='#2D68FE' />
              </g>
              <circle id='Circle Inner' cx='12' cy='12.5' r='5.5' fill='#FEF1F7' />
            </g>
          </svg>
        </Box>
      )
    case 'disabled':
      return (
        <Box height={HEIGHT} width={WIDTH}>
          <svg width='100%' height='100%' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='.child / _Base RB Structure' opacity='0.8'>
              <rect width='20' height='20' rx='10' fill='white' fillOpacity='0.01' />
              <circle id='Circle Outer' cx='10' cy='10' r='10' fill='#8AB3FF' />
              <circle id='Circle Inner' cx='10' cy='10' r='4.5' fill='white' />
            </g>
          </svg>
        </Box>
      )
  }
}

const RadioSelectedIcon = ({ state = 'normal' }: { state?: BoxState }) => {
  return getState(state)
}

export default RadioSelectedIcon
