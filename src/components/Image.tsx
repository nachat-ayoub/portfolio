import React from 'react';

type ImagePropsType = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  sm?: boolean;
};

const Image: React.FC<ImagePropsType> = ({ sm, src, ...rest }) => {
  // Custom logic based on the "sm" prop
  let modifiedSrc = src;
  if (sm && src) {
    if (src.includes('i.imgur.com')) {
      modifiedSrc = src.replace('.png', 'l.png');
    } else if (src.includes('res.cloudinary.com')) {
      modifiedSrc = src.replace('/w_600', '/w_1200');
    }
  }

  return (
    <img
      {...rest}
      src={modifiedSrc}
      onError={(e) => {
        e.currentTarget.src = '/portfolio/assets/no_image_placholder.jpg';
      }}
    />
  );
};

export default Image;
