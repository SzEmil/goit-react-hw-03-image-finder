import React from 'react';
import { fetchPhoto } from 'js/FetchPhoto';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { ImageGallery } from './ImageGallery/ImageGallery';
export class App extends React.PureComponent {
  state = {
    images: [],
    isLoading: false,
    error: null,
    search: '',
  };
  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const allImages = await fetchPhoto('cat');
      this.setState({ images: allImages });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { images, isLoading, error } = this.state;
    return (
      <div>
        {error && <p>Oh, something went wrong :c error: {error.message}</p>}
        {isLoading && <p>Loading data...</p>}
        <ImageGallery>
          <ImageGalleryItem images={images} isLoading={isLoading} />
        </ImageGallery>
      </div>
    );
  }
}
