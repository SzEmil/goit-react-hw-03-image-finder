import React from 'react';

export class ImageGalleryItem extends React.PureComponent {
  handleRenderList = images => (
    <>
      {images.map(image => {
        return (
          <li key={image.id}>
            <img
              src={image.webformatURL}
              alt={'some pic'}
              width={400}
              height={250}
            />
          </li>
        );
      })}
    </>
  );

  render() {
    const { images, isLoading } = this.props;

    return (
      <>{images.length > 0 && !isLoading && this.handleRenderList(images)}</>
    );
  }
}
