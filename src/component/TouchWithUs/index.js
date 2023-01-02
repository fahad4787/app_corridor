import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle";

const GetTouchUs = () => {
  return (
    <section className="pb-0">
      <Container>
      <SectionTitle
      title="Get in touch"
      colorText='with us'
      />

        <Form className="my-5 p-5 rounded shadow touch_us_form">
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group
                className="mb-5"
              >
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>

              <Form.Group
                className="mb-3"
              >
                <Form.Control className="from_btn" type="submit" value="Send us message" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
        </Container>
    </section>
  );
};

export default GetTouchUs;
