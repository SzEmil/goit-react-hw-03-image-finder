import React from 'react';
import clsx from 'clsx';
import css from './Searchbar.module.css';

export class Searchbar extends React.PureComponent {
  handleFormOnSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const formInput = form.elements.text.value;
    this.props.onSubmit(formInput);
    form.reset();
  };
  render() {
    return (
      <>
        <header
          style={{
            backgroundColor: 'purple',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <form
            className={clsx(css.searchForm)}
            onSubmit={this.handleFormOnSubmit}
          >
            <button className={css.searchFormBtn} type="submit">
              <span></span>
            </button>
            <input
              className={clsx(css.searchFormInput)}
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
