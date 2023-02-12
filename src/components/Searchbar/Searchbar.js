import React from 'react';

export class Searchbar extends React.PureComponent {
  handleFormOnSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const formInput = form.elements.text.value;
    this.props.onSubmit(formInput);
    form.reset();
  };
  render() {
    // const { onSubmit } = this.props;
    return (
      <>
        <header>
          <form onSubmit={this.handleFormOnSubmit}>
            <button type="submit">
              <span>Search</span>
            </button>
            <input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="text"
            />
          </form>
        </header>
      </>
    );
  }
}
