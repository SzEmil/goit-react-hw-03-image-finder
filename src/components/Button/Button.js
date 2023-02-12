import React from 'react';

export class Button extends React.PureComponent {
  render() {
    const { handleOnClick } = this.props;
    return (
      <>
        <button type="button" onClick={handleOnClick}>
          <span>Load More</span>
        </button>
      </>
    );
  }
}
