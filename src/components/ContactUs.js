import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../api/axiosDefaults";
import styles from "../styles/ContactUs.module.css";
import btnStyles from "../styles/Button.module.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axiosReq.post("/contact/", formData);
      setSuccess(true);
      setErrors({});
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      // console.log(err);
      setSuccess(false);
      setErrors(err.response?.data || {});
    }
  };

  return (
    <div className={styles.ContactUs}>
      <h3>Contact Us</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.name?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.email?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.subject?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.message?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        {success && (
          <Alert variant="success" className="mt-2 mb-3">
            Message sent successfully!
          </Alert>
        )}

        <Button
          className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.LightGray}`}
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactUs;
