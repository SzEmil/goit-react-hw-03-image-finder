import React from 'react';
import clsx from 'clsx';
import css from './Button.module.css';
export class Button extends React.PureComponent {
  render() {
    const { handleOnClick } = this.props;
    return (
      <>
        <button
          className={clsx(css.loadMoreBtn)}
          type="button"
          onClick={handleOnClick}
        >
          <span>Load More</span>
        </button>
      </>
    );
  }
}
