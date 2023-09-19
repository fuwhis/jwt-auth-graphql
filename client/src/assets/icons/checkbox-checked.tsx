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
              <rect width='20' height='20' transform='translate(0.625 0.5)' fill='white' fillOpacity='0.01' />
              <rect id='Rectangle' x='0.625' y='0.5' width='20' height='20' rx='3' fill='#2D68FE' />
              <path
                id='Check'
                d='M6.875 10.6954L9.6201 13.8327L14.326 7.16602'
                stroke='white'
                strokeWidth='1.4'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </svg>
        </Box>
      )
    case 'hover':
      return (
        <Box height={HEIGHT} width={WIDTH}>
          <svg width='100%' height='100%' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='.child/_Base CB Structure'>
              <rect width='20' height='20' transform='translate(0.625 0.5)' fill='white' fillOpacity='0.01' />
              <rect id='Rectangle' x='0.625' y='0.5' width='20' height='20' rx='3' fill='#2D68FE' />
              <path
                id='Check'
                d='M6.875 10.1954L9.6201 13.3327L14.326 6.66602'
                stroke='white'
                strokeWidth='1.4'
                strokeLinecap='round'
                strokeLinejoin='round'
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
              <rect width='20' height='20' transform='translate(2.625 2.5)' fill='white' fillOpacity='0.01' />
              <g id='Rectangle' filter='url(#filter0_dd_560_13387)'>
                <rect x='2.625' y='2.5' width='20' height='20' rx='3' fill='#2D68FE' />
              </g>
              <path
                id='Check'
                d='M8.875 12.6954L11.6201 15.8327L16.326 9.16602'
                stroke='white'
                strokeWidth='1.4'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
            <defs>
              <filter
                id='filter0_dd_560_13387'
                x='0.625'
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
                <feMorphology radius='2' operator='dilate' in='SourceAlpha' result='effect1_dropShadow_560_13387' />
                <feOffset />
                <feColorMatrix type='matrix' values='0 0 0 0 0.286275 0 0 0 0 0.72549 0 0 0 0 0.756863 0 0 0 1 0' />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_560_13387' />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                />
                <feMorphology radius='1' operator='dilate' in='SourceAlpha' result='effect2_dropShadow_560_13387' />
                <feOffset />
                <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0' />
                <feBlend mode='normal' in2='effect1_dropShadow_560_13387' result='effect2_dropShadow_560_13387' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow_560_13387' result='shape' />
              </filter>
            </defs>
          </svg>
        </Box>
      )
    case 'disabled':
      return (
        <Box height={HEIGHT} width={WIDTH}>
          <svg width='100%' height='100%' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='.child/_Base CB Structure' opacity='0.4'>
              <rect width='20' height='20' transform='translate(0.625)' fill='white' fillOpacity='0.01' />
              <rect id='Rectangle' x='0.625' width='20' height='20' rx='3' fill='#2D68FE' />
              <path
                id='Check'
                d='M6.875 10.1954L9.6201 13.3327L14.326 6.66602'
                stroke='white'
                strokeWidth='1.4'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </svg>
        </Box>
      )
  }
}

const CheckboxCheckedIcon = ({ state = 'normal' }: { state?: BoxState }) => {
  return getState(state)
}

export default CheckboxCheckedIcon
