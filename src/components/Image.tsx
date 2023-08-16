import React from 'react';

type ImagePropsType = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const Image: React.FC<ImagePropsType> = (props) => {
  return (
    <img
      {...props}
      onError={(e) => {
        e.currentTarget.src = '/assets/no_image_placholder.jpg';
      }}
    />
  );
};

export default Image;
