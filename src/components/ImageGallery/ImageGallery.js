import React from 'react';
import css from './ImageGallery.module.css';
import clsx from 'clsx';
import { PropTypes } from 'prop-types';
export class ImageGallery extends React.PureComponent {
  handleOnClick = (event, images) => {
    if (event.target.nodeName !== 'IMG') {
      return;
    }
    const filterImage = images.find(
      image => Number(image.id) === Number(event.target.id)
    );

    return this.props.onClick(filterImage);
  };
  render() {
    const { images, children } = this.props;
    return (
      <>
        <ul
          className={clsx(css.gallery)}
          onClick={event => this.handleOnClick(event, images)}
        >
          {children}
        </ul>
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object,
    })
  ),
  children: PropTypes.element,
};
