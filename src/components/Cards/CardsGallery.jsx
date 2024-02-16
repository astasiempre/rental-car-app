import { useEffect, useState } from 'react';
import { CardsGalleryItem } from './CardsGalleryItem';
import css from './CardsGallery.module.css';

import { fetchRentalCarData } from '../../services/rentalCar';

import Loader from 'components/Loader/Loader';

export const CardsGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  //
  const [error, setError] = useState(null);
  //

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const requestData = await fetchRentalCarData();

        // console.log(requestData);

        setImages(prevData => [...prevData, ...requestData]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  return (
    <>
      {error && <h1>{error}</h1>}

      {loading && <Loader />}
      {images && (
        <>
          <ul className={css.CardsGallery}>
            {images.map(
              ({
                id,
                make,
                img,
                model,
                year,
                rentalPrice,
                address,
                rentalCompany,
                description
              }) => (
                <CardsGalleryItem
                  key={id}
                  url={img}
                  make={make}
                  model={model}
                  year={year}
                  rentalPrice={rentalPrice}
                  address={address}
                  rentalCompany={rentalCompany}
                  description={description}
                />
              )
            )}
          </ul>
        </>
      )}
    </>
  );
};
