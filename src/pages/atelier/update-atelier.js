import React, { useState, useContext, useEffect, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import ErrorModel from "../../models/error-models";
import SuccessModel from "../../models/success-models";
import { useParams } from "react-router-dom";

const UpdateAtelier = () => {
  const [error, seterror] = useState(null);
  const [success, setsuccess] = useState(null);
  const [matiere, setmatiere] = useState(null);
  const [date_ins, setdate_ins] = useState(null);
  const [nbr_exe, setnbr_exe] = useState(null);

  const onchange = (e) => {
    if (e.target.name === "matiere") {
      setmatiere(e.target.value);
    } else if (e.target.name === "date_ins") {
      setdate_ins(e.target.value);
    } else if (e.target.name === "nbr_exe") {
      setnbr_exe(e.target.value);
    }
  };

  const id = useParams().id;

  const submit = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(`http://localhost:5000/api/atelier/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          matiere: matiere,
          date_ins: date_ins,
          nbr_exe: nbr_exe,
        }),
      });
      let responsedata = await response.json();
      if (!response.ok) {
        throw new Error(responsedata.message);
      }
      setsuccess("Atelier modifiée.");
    } catch (err) {
      console.log(err);
      seterror(err.message || "probleme!!");
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <ErrorModel error={error} />
            <SuccessModel success={success} />
            <Form onSubmit={submit}>
              <Form.Group controlId="formGridEmail">
                <Form.Label>matiere</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="tapez matiere"
                  name="matiere"
                  onChange={onchange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formGridEmail">
                <Form.Label>date_ins</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="tapez date_ins"
                  name="date_ins"
                  onChange={onchange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formGridEmail">
                <Form.Label>date_ins</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="tapez nbr_exe"
                  name="nbr_exe"
                  onChange={onchange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Enregistrer
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};
export default UpdateAtelier;
