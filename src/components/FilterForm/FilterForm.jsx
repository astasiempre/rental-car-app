import { Formik, Form, Field } from 'formik';

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
        <Form>
          <Field as="select" name="make">
            <option value="All Makes">All Makes</option>
            <option value="GMC">GMC</option>
            <option value="Buick">Buick</option>
            {/* Добавьте другие варианты, если необходимо */}
          </Field>
          <button type="submit" disabled={isSubmitting}>
            Apply
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FilterForm;
