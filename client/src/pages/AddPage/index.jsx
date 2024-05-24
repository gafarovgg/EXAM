import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Helmet } from "react-helmet";
import { AddProductSchema } from "../../validation/AddProductSchema";
import axios from "axios";
import { BASE_URL } from "../../services/constant";

const AddPage = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      imageUrl: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: AddProductSchema,
  });
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.post(BASE_URL).then((res) => {
      setProduct(res.data.data);
    });
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.errors.title && formik.touched.title && (
            <div id="feedback">{formik.errors.title}</div>
          )}
          <label htmlFor="description">Description</label>
          <input
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.errors.description && formik.touched.description && (
            <div id="feedback">{formik.errors.description}</div>
          )}
          <label htmlFor="imageUrl">ImageUrl</label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.imageUrl}
          />
          {formik.errors.imageUrl && formik.touched.imageUrl && (
            <div id="feedback">{formik.errors.imageUrl}</div>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
export default AddPage;
