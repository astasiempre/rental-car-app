import { useEffect, useState } from 'react';
import { CardsGalleryItem } from './CardsGalleryItem';
import css from './CardsGallery.module.css';
import { Button } from '../Button/Button';
import FilterForm from '../../components/FilterForm/FilterForm';
import { fetchRentalCarData } from '../../services/rentalCar';

import Loader from 'components/Loader/Loader';

export const CardsGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  //
  const [error, setError] = useState(null);
  //
  const [currentPage, setCurrentPage] = useState(1);
  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1); // Увеличиваем номер текущей страницы на 1 при нажатии на кнопку
  };
  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const requestData = await fetchRentalCarData(currentPage);

        // console.log(requestData);

        setImages((prevData) => [...prevData, ...requestData]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, [currentPage]);
  const handleFilterSubmit = (filter) => {
    if (filter === 'All Makes') {
      setCurrentPage(1);
    }
    const filteredImages = images.filter(({ make }) => make === filter);
    setImages(filteredImages);
  };

  return (
    <div className={css.CardsGalleryContainer}>
      {error && <h1>{error}</h1>}
      <FilterForm onSubmit={handleFilterSubmit} />
      {loading && <Loader />}

      {images && (
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
              />
            )
          )}
        </ul>
      )}
      {images.length > 0 && currentPage < 3 && (
        <Button
          onClick={handleLoadMore}
          className={css.CardsGalleryLoadMoreButton}
        />
      )}
    </div>
  );
};

// import { useEffect, useState } from 'react';
// import { CardsGalleryItem } from './CardsGalleryItem';
// import css from './CardsGallery.module.css';
// import { Button } from '../Button/Button';
// import FilterForm from '../../components/FilterForm/FilterForm';
// import { fetchRentalCarData } from '../../services/rentalCar';

// import Loader from 'components/Loader/Loader';

// export const CardsGallery = () => {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         setLoading(true);
//         const requestData = await fetchRentalCarData(currentPage);
//         setImages((prevData) => [...prevData, ...requestData]);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCars();
//   }, [currentPage]);

//   const handleLoadMore = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handleFilterSubmit = (filter) => {
//     if (filter === "All Makes") {
//       fetchCars();
//     };
//     const filteredImages =
//       filter
//         ? images.filter(({ make }) => make === filter)
//         : [];
//     setImages(filteredImages);
//     setCurrentPage(1); // Сброс текущей страницы при фильтрации
//   };

//   return (
//     <div className={css.CardsGalleryContainer}>
//       {error && <h1>{error}</h1>}
//       <FilterForm onSubmit={handleFilterSubmit} />
//       {loading && <Loader />}
//       {images.length > 0 ? (
//         <ul className={css.CardsGallery}>
//           {images.map(
//             ({
//
