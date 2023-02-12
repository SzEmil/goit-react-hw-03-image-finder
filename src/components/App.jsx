import React from 'react';
import { fetchPhoto } from 'js/FetchPhoto';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
export class App extends React.PureComponent {
  state = {
    images: [],
    isLoading: false,
    error: null,
    pageNumber: 1,
    search: '',
    modalProp: null,
  };

  handleOnSubmit = async searchData => {
    this.setState({ isLoading: true, search: searchData });

    try {
      const allImages = await fetchPhoto(searchData, this.state.pageNumber);
      this.setState(prevState => {
        return {
          pageNumber: prevState.pageNumber + 1,
          images: allImages,
        };
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleOnClick = async () => {
    this.setState({ isLoading: true });
    try {
      const allImages = await fetchPhoto(
        this.state.search,
        this.state.pageNumber
      );
      this.setState(prevState => {
        return {
          pageNumber: prevState.pageNumber + 1,
          images: [...prevState.images, ...allImages],
        };
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  handleModal = dataModal => {
    this.setState(prevState => {
      return { modalProp: dataModal, modalOpen: !prevState.modalOpen };
    });
  };

  handleModalClosed = infoClosed => {
    if (infoClosed) {
      this.setState({ modalProp: null });
    }
  };
  render() {
    const { images, isLoading, error } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleOnSubmit} />
        {error && <p>Oh, something went wrong :c error: {error.message}</p>}
        <ImageGallery onClick={this.handleModal} images={this.state.images}>
          <ImageGalleryItem images={images} isLoading={isLoading} />
        </ImageGallery>
        {isLoading && <p>Loading data...</p>}
        {this.state.images.length > 0 ? (
          <Button handleOnClick={this.handleOnClick} />
        ) : (
          <p>no photos found</p>
        )}
        {this.state.modalProp !== null && (
          <Modal
            modalProp={this.state.modalProp}
            onKeyDown={this.handleModalClosed}
            onClick={this.handleModalClosed}
          />
        )}
      </div>
    );
  }
}
