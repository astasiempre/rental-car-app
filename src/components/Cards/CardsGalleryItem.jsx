import css from './CardsGalleryItem.module.css';
import { ReactComponent as Stick } from '/src/icons/stick.svg';
import  DescModal   from '../../components/Modal/DescModal';
import { useState } from 'react';
export const CardsGalleryItem = ({
  url,
  make,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  description,
  _id,
  accessories,
  type,
  engineSize,
  fuelConsumption,
  functionalities,
  rentalConditions,
  mileage,
}) => {
  const modelLength = model.length;
  const isModelLong = modelLength > 7;
  const addressParts = address.split(',');
  const city = addressParts[1].trim();
  const country = addressParts[2].trim();
  const descriptionPhrase = description.split(' ');
  const descriptionPhrase1 = descriptionPhrase[7];
  const descriptionPhrase2 = descriptionPhrase[8];
  const firstAccessory = accessories[0];
  const firstTwoWordsAccessory = firstAccessory
    .split(' ')
    .slice(0, 2)
    .join(' ');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <li className={css.CardsGalleryItem}>
      <img src={url} alt={make} className={css.CardsGalleryItemImage} />
      <div className={css.CardsGalleryItemBox}>
        <div className={css.CardsGalleryItemUpperBox}>
          <span className={css.CardsGalleryItemMake}>{make},</span>
          {isModelLong ? null : (
            <span className={css.CardsGalleryItemModel}>{model},</span>
          )}
          <span>{year}</span>
          <span className={css.CardsGalleryRentalPrice}>{rentalPrice}</span>
        </div>
        <div className={css.CardsGalleryItemBottomBox}>
          <span className={css.CardsGalleryItemCity}>{city}</span>
          <Stick className={css.Stick} />
          <span className={css.CardsGalleryItemCountry}>{country}</span>
          <Stick className={css.Stick} />
          <span className={css.CardsGalleryItemRentalCompany}>
            {rentalCompany}
          </span>
          <Stick className={css.Stick} />
          <span className={css.CardsGalleryItemDescription}>
            {descriptionPhrase1} {descriptionPhrase2}
          </span>
          <Stick className={css.Stick} />
          <span className={css.CardsGalleryKey}>{_id}</span>
          <Stick className={css.Stick} />
          <span className={css.CardsGalleryItemMakeDown}>{make}</span>
          <Stick className={css.Stick} />
          <span className={css.CardsGalleryItemAccessory}>
            {firstTwoWordsAccessory}
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={onModalOpen}
        className={css.CardsGalleryItemButton}
      >
        Learn more
      </button>
      {isModalOpen && (
        <DescModal
          onClose={() => setIsModalOpen(false)}
          url={url}
          make={make}
          model={model}
          year={year}
          city={city}
          country={country}
          _id={_id}
          type={type}
          engineSize={engineSize}
          fuelConsumption={fuelConsumption}
          description={description}
          accessories={accessories}
          functionalities={functionalities}
          rentalConditions={rentalConditions}
          mileage={mileage}
          rentalPrice={rentalPrice}
        />
      )}
    </li>
  );
};

