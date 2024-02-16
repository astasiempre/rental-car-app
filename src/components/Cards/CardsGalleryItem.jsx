import css from './CardsGalleryItem.module.css';
import { ReactComponent as Stick } from '/src/icons/stick.svg';
export const CardsGalleryItem = ({ url, make, model, year, rentalPrice }) => {
  const modelLength = model.length;
  const isModelLong = modelLength > 7;

  return (
    <li className={css.CardsGalleryItem}>
      <img src={url} alt={make} className={css.CardsGalleryItemImage} />
      <div className={css.CardsGalleryItemBox}>
        <div className={css.CardsGalleryItemUpperBox}>
          <span className={css.CardsGalleryItemMake}>{make},</span>
          {isModelLong ? null : <span className={css.CardsGalleryItemModel}>{model},</span>}
          <span>{year}</span>
          <span className={css.CardsGalleryRentalPrice}>{rentalPrice}</span>
        </div>
        <div className={css.CardsGalleryItemBottomBox}>
<Stick/>
        </div>

      </div>
    </li>
  );
};

// import css from './ImageGalleryItem.module.css';

// export const ImageGalleryItem = ({ url, make, model, year, rentalPrice }) => {
  

//   return (
//     <li className={css.ImageGalleryItem}>
//       <img src={url} alt={make} className={css.ImageGalleryItemImage} />
//       <div className={css.ImageGalleryItemBox}>
//         <div className={css.ImageGalleryItemUpperBox}>
          
//             <span className={css.ImageGalleryMake}>{make} </span>
//           <span>{model}, </span>
//             <span>{year}</span>
          
//           <span className={css.ImageGalleryRentalPrice}>{rentalPrice}</span>
//         </div>
//       </div>
//     </li>
//   );
// };