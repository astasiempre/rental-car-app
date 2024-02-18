import { useEffect } from 'react';
import css from './DescModal.module.css';
import { ReactComponent as Xcros } from '/src/icons/xcros.svg';
import { ReactComponent as Stick } from '/src/icons/stick.svg';

import { Modal, Overlay, XCrosBtn, LinkButton } from './DescModal.styled';

const DescModal = ({
  onClose,
  url,
  make,
  model,
  year,
  city,
  country,
  type,
  fuelConsumption,
  engineSize,
  _id,
  description,
  accessories,
  functionalities,
  rentalConditions,
  mileage,
  rentalPrice,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  const sizeEngine = engineSize.split(' ');
  const numberSizeEngine = sizeEngine[0];
  const accessorie1 = accessories[0].split(' ').slice(0, 3).join(' ');
  const accessorie2 = accessories[1].split(' ').slice(0, 3).join(' ');
  const accessorie3 = accessories[2].split(' ').slice(0, 3).join(' ');

  const functionalitie1 = functionalities[0].split(' ').slice(0, 3).join(' ');
  const functionalitie2 = functionalities[1].split(' ').slice(0, 3).join(' ');
  const functionalitie3 = functionalities[2].split(' ').slice(0, 3).join(' ');
  const validDriverLicens = rentalConditions.split('\n').slice(1, 2);

  const agelines = rentalConditions.split('\n');
  const minAgeLine = agelines.find((line) => line.includes('Minimum age:'));
  const minimumAge = minAgeLine.split(':')[1].trim();

  const security = rentalConditions.split('\n').slice(2, 3);

  const formattedMileage = mileage.toLocaleString('en-US', {
    useGrouping: true,
  });

  return (
    <Overlay onClick={handleClick}>
      <Modal>
        <img src={url} alt={make} className={css.CardsModalItemImage} />
        <div>
          <span className={css.CardsModalItemMake}>{make} </span>
          <span className={css.CardsModalItemModel}>{model}, </span>
          <span className={css.CardsModalItemYear}>{year}</span>
        </div>
        <div className={css.WrapCityCounIdYearTypeConsSize}>
          <span className={css.CardsGalleryItemCity}>{city}</span>
          <Stick className={css.Stick} />
          <span className={css.CardsGalleryItemCountry}>{country}</span>
          <Stick className={css.Stick} />
          <span className={css.CardsGalleryItemId}>Id: {_id}</span>
          <Stick className={css.Stick} />
          <span className={css.CardsGalleryItemYear}>Year: {year}</span>
          <Stick className={css.Stick} />
          <span className={css.CardsGalleryItemType}>Type: {type}</span>

          <span className={css.CardsGalleryItemFuelConsumption}>
            Fuel Consumption: {fuelConsumption}
          </span>
          <Stick className={css.Stick} />
          <span className={css.CardsGalleryItemYear}>
            Engine Size: {numberSizeEngine}
          </span>
        </div>
        <div className={css.WrapDescription}>{description}</div>

        <h2 className={css.TitleAccesories}>
          Accessories and functionalities:
        </h2>
        <div className={css.WrapAccessories}>
          <span>{accessorie1}</span>
          <Stick className={css.Stick} />
          <span>{accessorie2}</span>
          <Stick className={css.Stick} />
          <span>{accessorie3}</span>
        </div>
        <div className={css.WrapFunctionalities}>
          <span>{functionalitie1}</span>
          <Stick className={css.Stick} />
          <span>{functionalitie2}</span>
          <Stick className={css.Stick} />
          <span>{functionalitie3}</span>
        </div>
        <h2 className={css.TitleRentalConditions}>Rental Conditions:</h2>
        <div className={css.WrapRentalCondition}>
          <div className={css.WrapMinimumAge}>
            <p>
              Minimum age :{' '}
              <span className={css.TextSpanMinumumAge}>{minimumAge}</span>
            </p>
          </div>
          <div className={css.WrapValidDriverLicens}>
            <p>{validDriverLicens}</p>
          </div>
          <div className={css.WrapSecurity}>
            <p>{security}</p>
          </div>
          <div className={css.WrapMileage}>
            <p>
              Mileage:{' '}
              <span className={css.TextMileage}>{formattedMileage}</span>
            </p>
          </div>
          <div className={css.WrapPrice}>
            <p>
              Price: <span className={css.TextTentalPrice}>{rentalPrice}</span>
            </p>
          </div>
        </div>
       
        <LinkButton
          onClick={() => (window.location.href = 'tel:+380730000000')}
        >
          Rental car
        </LinkButton>
        <XCrosBtn type="button">
          <Xcros onClick={handleClick} />
        </XCrosBtn>
      </Modal>
    </Overlay>
  );
};

export default DescModal;
