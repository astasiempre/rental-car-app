// import { Formik, Form, Field } from 'formik';

// const FilterForm = ({ onSubmit }) => {
//   return (
//     <Formik
//       initialValues={{ make: '' }}
//       onSubmit={(values, { setSubmitting }) => {
//         onSubmit(values.make);
//         setSubmitting(false);
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <Field as="select" name="make">
//             <option value="All Makes">All Makes</option>
//             <option value="GMC">GMC</option>
//             <option value="Buick">Buick</option>
//             <option value="MINI">MINI</option>
//             <option value="Volvo">Volvo</option>
//             <option value="HUMMER">HUMMER</option>
//             <option value="Lincoln">Lincoln</option>
//             <option value="Mercedes-Benz">Mercedes-Benz</option>
//             <option value="Aston Martin">Aston Martin</option>
//             Aston Martin
//           </Field>
//           <button type="submit" disabled={isSubmitting}>
//             Apply
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default FilterForm;
// import { Formik, Form, Field } from 'formik';
// import styled from 'styled-components'; // Импортируем styled из библиотеки styled-components

// // Создаем стилизованный компонент для формы
// const StyledForm = styled(Form)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: row;
//   gap: 32px;
// `;

// // Создаем стилизованный компонент для выпадающего списка
// const StyledSelect = styled(Field)`
//   /* padding: 14px 160px 14px 18px; */
//   background: #f7f7fb;
//   border: 1px solid #ccc;
//   border-radius: 14px;
//   font-size: 1rem;
//   width: 224px;
//   height: 48px;
// `;

// // Создаем стилизованный компонент для кнопки
// const StyledButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: row;
//   gap: 0px;
//   border-radius: 12px;
//   padding: 14px 44px;
//   width: 136px;
//   height: 48px;
//   background: #3470ff;
//   border: none;
//   font-family: var(--font-family);
//   font-weight: 600;
//   font-size: 14px;
//   line-height: 1.42857;
//   color: #fff;
//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const FilterForm = ({ onSubmit }) => {
//   return (
//     <Formik
//       initialValues={{ make: '' }}
//       onSubmit={(values, { setSubmitting }) => {
//         onSubmit(values.make);
//         setSubmitting(false);
//       }}
//     >
//       {({ isSubmitting }) => (
//         <StyledForm>
//           <StyledSelect as="select" name="make">
//             <option value="All Makes">All Makes</option>
//             <option value="GMC">GMC</option>
//             <option value="Buick">Buick</option>
//             <option value="MINI">MINI</option>
//             <option value="Volvo">Volvo</option>
//             <option value="HUMMER">HUMMER</option>
//             <option value="Lincoln">Lincoln</option>
//             <option value="Mercedes-Benz">Mercedes-Benz</option>
//             <option value="Aston Martin">Aston Martin</option>
//           </StyledSelect>
//           <StyledButton type="submit" disabled={isSubmitting}>
//             Search
//           </StyledButton>
//         </StyledForm>
//       )}
//     </Formik>
//   );
// };

// export default FilterForm;




import { Formik, Field } from 'formik';
import {StyledForm, StyledButton} from './FilterForm.styled'

const FilterForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ make: '' }}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values.make);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <Field
            as="select"
            name="make"
            style={{
              background: '#f7f7fb',
              border: 'none',
              borderRadius: '14px',
              fontSize: '1rem',
              width: '224px',
              height: '48px',
            }}
          >
            <option value="All Models">All Models</option>
            <option value="GMC">GMC</option>
            <option value="Buick">Buick</option>
            <option value="MINI">MINI</option>
            <option value="Volvo">Volvo</option>
            <option value="HUMMER">HUMMER</option>
            <option value="Lincoln">Lincoln</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Aston Martin">Aston Martin</option>
          </Field>
          <StyledButton type="submit" disabled={isSubmitting}>
            Search
          </StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};

export default FilterForm;