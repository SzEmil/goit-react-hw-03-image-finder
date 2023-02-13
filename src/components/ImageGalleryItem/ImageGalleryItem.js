import React from 'react';
import clsx from 'clsx';
import css from './ImageGalleryItem.module.css';
export class ImageGalleryItem extends React.PureComponent {
  handleRenderList = images => (
    <>
      {images.map(image => {
        return (
          <li className={clsx(css.ImageGalleryItem)} key={image.id}>
            <img
              className={clsx(css.ImageGalleryPhoto)}
              src={image.webformatURL}
              alt={'pixabay pic'}
              width={400}
              height={250}
              id={image.id}
            />
          </li>
        );
      })}
    </>
  );

  render() {
    const { images } = this.props;

    return <>{images.length > 0 && this.handleRenderList(images)}</>;
  }
}
