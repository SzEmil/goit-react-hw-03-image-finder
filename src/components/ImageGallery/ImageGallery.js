import React from 'react';
import css from './ImageGallery.module.css';
import clsx from 'clsx';
export class ImageGallery extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <>
        <ul className={clsx(css.gallery)}>{children}</ul>
      </>
    );
  }
}
