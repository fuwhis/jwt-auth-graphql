import { Box } from '@mui/material';
import React, { useState } from 'react';
import DefaultImg from '~/assets/icons/image-default.svg';
import LoadingImg from '~/assets/icons/image-loading.svg';
import { ImageProps } from '~/types/image.interface';
import './style.scss';

const Image = ({ src, alt }: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  function handleImageLoaded() {
    setIsLoading(false);
  }

  const imgUrl = src ?? DefaultImg;
  return (
    <>
      {isLoading && (
        <Box display="flex" alignItems="center" justifyContent="center" width="100%">
          <Box component="img" className='img-loading' alt={alt} width="50px !important" src={LoadingImg} loading="lazy" />
        </Box>
      )}
      <Box
        component="img"
        className="custom-img app-img"
        alt={alt}
        src={imgUrl}
        loading="lazy"
        onLoad={handleImageLoaded}
        onError={event => {
          if (event.currentTarget.src.includes('http://localhost:3000/'))
            return;
          event.currentTarget.src = DefaultImg;
        }}
        style={{ opacity: isLoading ? 0 : 1 }}
      />
    </>
  );
};

export default React.memo(Image);
