import React from 'react';
import clsx from 'clsx';
import css from './Modal.module.css';
import { PropTypes } from 'prop-types';
export class Modal extends React.PureComponent {
  handleModalCLick = event => {
    if (event.target.nodeName !== 'IMG') {
      return this.props.onClick(true);
    } else {
      return;
    }
  };

  handleCloseModal = event => {
    if (event.code === 'Escape') {
      return this.props.onKeyDown(true);
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleCloseModal);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleCloseModal);
  }
  render() {
    const { modalProp } = this.props;
    return (
      <>
        <div className={clsx(css.overlay)} onClick={this.handleModalCLick}>
          <div className={clsx(css.modal)} onKeyDown={this.handleCloseModal}>
            <img src={modalProp.largeImageURL} alt="pixabay pic" />
          </div>
        </div>
      </>
    );
  }
}
Modal.propTypes = {
  modalProp: PropTypes.object,
};
