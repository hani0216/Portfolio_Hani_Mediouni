import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiJenkins,
  SiGithub,
  SiJira ,
  SiMysql ,
  SiCisco ,
  SiGit ,
  SiKubernetes
} from "react-icons/si";

function Toolstack() {
  return (
    <>
      {/* Première ligne */}
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJira />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiCisco />
        </Col>
      </Row>

      {/* Deuxième ligne */}
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiDocker />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJenkins />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiKubernetes />
        </Col>
      </Row>
    </>
  );
}

export default Toolstack;
