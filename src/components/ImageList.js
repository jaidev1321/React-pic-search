import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

// const ImageList = props => {
//   console.log(props.images);
//   const images = props.images.map(image => {
//     console.log(image.urls.thumb);
//     return (
//       <img src={image.urls.thumb} alt={image.alt_description} key={image.id} />
//     );
//   });
//   return <div>{images}</div>;
// };

// with object destructuring

const ImageList = props => {
  console.log(props.images);
  const images = props.images.map(image => {
    // return <img src={urls.thumb} alt={alt_description} key={id} />;
    return <ImageCard key={image.id} image={image} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
