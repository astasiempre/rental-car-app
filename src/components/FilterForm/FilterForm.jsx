import { Formik, Field } from 'formik';
import { StyledForm, StyledButton } from './FilterForm.styled';

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
