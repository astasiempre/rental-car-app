import { useEffect, useState } from 'react';
import { CardsGalleryItem } from './CardsGalleryItem';
import css from './CardsGallery.module.css';
import { Button } from '../Button/Button';
import FilterForm from '../../components/FilterForm/FilterForm';
import { fetchRentalCarData } from '../../services/rentalCar';
import Loader from 'components/Loader/Loader';
import { fetchAllRentalCarData } from '../../services/rentalCar';

export const CardsGallery = () => {
  const [originalImages, setOriginalImages] = useState([]);
  const [images, setImages] = useState([]);
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const allImages = async () => {
      try {
        const res = await fetchAllRentalCarData();

        setAllCars(res);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchCars = async () => {
      try {
        setLoading(true);
        const requestData = await fetchRentalCarData(currentPage);

        if (currentPage === 1) {
          setOriginalImages(requestData);
          setImages(requestData);
        } else {
          setImages((prevData) => [...prevData, ...requestData]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
    allImages();
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleFilterSubmit = (filter) => {
    if (filter === 'All Models') {
      setImages(originalImages);
      setCurrentPage(1);
    } else {
      const filteredImages = allCars.filter(({ make }) => make === filter);
      setImages(filteredImages);
    }
  };

  return (
    <div className={css.CardsGalleryContainer}>
      {error && <h1>{error}</h1>}
      <FilterForm onSubmit={handleFilterSubmit} />
      {loading && <Loader />}
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
            description,
            accessories,
            engineSize,
            fuelConsumption,
            type,
            functionalities,
            rentalConditions,
            mileage,
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
              _id={id}
              accessories={accessories}
              engineSize={engineSize}
              fuelConsumption={fuelConsumption}
              type={type}
              functionalities={functionalities}
              rentalConditions={rentalConditions}
              mileage={mileage}
            />
          )
        )}
      </ul>
      {images.length > 0 && images.length >= 12 && currentPage < 3 && (
        <Button
          onClick={handleLoadMore}
          className={css.CardsGalleryLoadMoreButton}
        />
      )}
    </div>
  );
};
