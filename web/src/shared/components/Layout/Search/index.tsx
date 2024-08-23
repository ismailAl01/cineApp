import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Formik, Form, Field } from 'formik';


const SearchForm = ({ onSearch }) => (
  <Formik
    initialValues={{ name: '' }}
    onSubmit={onSearch}
  >
    {(props) => (
      <Form className="search__form">
        <Field name="name">
          {({ field }) => (
            <input
              {...field}
              className="search__form--input"
              placeholder="Search for movies"
            />
          )}
        </Field>
        <button
          type='submit'
          disabled={props.isSubmitting}
          className="search__form--button"
        >
          <BsSearch />
        </button>
      </Form>
    )}
  </Formik>
);

export default SearchForm;
