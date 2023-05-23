import React, { useEffect, useRef, useState } from "react";
import Formio from "formiojs/Formio";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const MyForm = () => {
  const formRef = useRef(null);
  const [formio, setFormio] = useState(null);

  useEffect(() => {
    const formioInstance = new Formio("https://your-formio-project-url");
    formioInstance.loadForm().then((form) => {
      formioInstance.on("change", (event) => {
        // Handle form field changes here
        console.log(event.changed);
      });
      formioInstance.appendTo(formRef.current);
      setFormio(formioInstance);
    });

    return () => {
      if (formio) {
        formio.destroy(true);
      }
    };
  }, [formio]);

  const handleCustomFieldChange = (event) => {
    console.log("Custom Field Change:", event.target.value);
  };

  const handleSubmit = () => {
    if (formio) {
      formio
        .submit()
        .then((submission) => {
          // Handle form submission success
          console.log(submission);
        })
        .catch((error) => {
          // Handle form submission error
          console.error(error);
        });
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <div ref={formRef}></div>
          <Form>
            <Form.Group controlId="customField">
              <Form.Label>Custom Field</Form.Label>
              <Form.Control type="text" onChange={handleCustomFieldChange} />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MyForm;
