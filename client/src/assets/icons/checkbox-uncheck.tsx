import { Box } from '@mui/material'
import { BoxState } from '~/constants/types.type'

const getState = (state: BoxState) => {
  const HEIGHT = 20
  const WIDTH = 20
  switch (state) {
    case 'normal':
      return (
        <Box height={HEIGHT} width={WIDTH}>
          <svg width='100%' height='100%' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='.child/_Base CB Structure'>
              <rect width='20' height='20' transform='translate(0.375 0.5)' fill='#7e7e86' fillOpacity='0.01' />
              <rect
                id='Rectangle'
                x='1.075'
                y='1.2'
                width='18.6'
                height='18.6'
                rx='2.3'
                stroke='#7e7e86'
                strokeWidth='1.4'
              />
            </g>
          </svg>
        </Box>
      )
    case 'hover':
      return (
        <Box height={HEIGHT} width={WIDTH}>
          <svg width='100%' height='100%' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='.child/_Base CB Structure'>
              <rect width='20' height='20' transform='translate(0.375)' fill='#none' fillOpacity='0.01' />
              <rect
                id='Rectangle'
                x='1.075'
                y='0.7'
                width='18.6'
                height='18.6'
                rx='2.3'
                fill='#fff'
                stroke='#A3A5AE'
                strokeWidth='1.4'
              />
            </g>
          </svg>
        </Box>
      )
    case 'focused':
      return (
        <Box height={HEIGHT} width={WIDTH}>
          <svg width='100%' height='100%' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='.child/_Base CB Structure'>
              <rect width='20' height='20' transform='translate(2.375 2.5)' fill='#101014' fillOpacity='0.01' />
              <g id='Rectangle' filter='url(#filter0_dd_560_11791)'>
                <rect x='2.375' y='2.5' width='20' height='20' rx='3' fill='none' />
                <rect x='3.075' y='3.2' width='18.6' height='18.6' rx='2.3' stroke='#7e7e86' strokeWidth='1' />
              </g>
            </g>
            <defs>
              <filter
                id='filter0_dd_560_11791'
                x='0.375'
                y='0.5'
                width='24'
                height='24'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                />
                <feMorphology radius='2' operator='dilate' in='SourceAlpha' result='effect1_dropShadow_560_11791' />
                <feOffset />
                <feColorMatrix type='matrix' values='0 0 0 0 0.286275 0 0 0 0 0.72549 0 0 0 0 0.756863 0 0 0 1 0' />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_560_11791' />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                />
                <feMorphology radius='1' operator='dilate' in='SourceAlpha' result='effect2_dropShadow_560_11791' />
                <feOffset />
                <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0' />
                <feBlend mode='normal' in2='effect1_dropShadow_560_11791' result='effect2_dropShadow_560_11791' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow_560_11791' result='shape' />
              </filter>
            </defs>
          </svg>
        </Box >
      )
    case 'disabled':
      return (
        <Box height={HEIGHT} width={WIDTH}>
          <svg width='100%' height='100%' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='.child/_Base CB Structure' opacity='0.8'>
              <rect width='20' height='20' transform='translate(0.375)' fill='white' fillOpacity='0.01' />
              <rect
                id='Rectangle'
                x='1.075'
                y='0.7'
                width='18.6'
                height='18.6'
                rx='2.3'
                fill='white'
                stroke='#E1E2E5'
                strokeWidth='1.4'
              />
            </g>
          </svg>
        </Box>
      )
  }
}

const CheckboxUncheckIcon = ({ state = 'normal' }: { state?: BoxState }) => {
  return getState(state)
}

export default CheckboxUncheckIcon
