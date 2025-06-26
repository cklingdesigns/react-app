// ContactModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ContactModal = ({ show, handleClose }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', form);
    // You could hook this up with EmailJS, Formspree, or an API call
    handleClose(); // Close modal after submission
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="contactName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contactEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              name="email" 
              value={form.email} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contactMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control 
              as="textarea" 
              name="message" 
              value={form.message} 
              onChange={handleChange} 
              rows={3} 
              required 
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Send Message
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ContactModal;