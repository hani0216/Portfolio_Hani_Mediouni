import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import devops from "../../Assets/Projects/DEvops.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="EcoPact"
              description="This project involves the development of a web platform designed to streamline the monitoring of marine waste discharged into Lake Bizerte by connecting the National Agency for Environmental Protection (ANPE) with its clientele."
              ghLink="https://github.com/hani0216/Lake-waste-management-app"
             />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devops}
              isBlog={false}
              title="Pipeline CI/CD"
              description="This project aims to establish a Continuous Integration/Continuous Deployment (CI/CD) pipeline leveraging Git ,GitHub, Docker Compose, Docker Hub, Jenkins, and Kubernetes. The primary goal is to automate infrastructure provisioning and administration tasks  ."
              ghLink="https://github.com/hani0216/Lake-waste-management-app"
        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Trading simulator "
              description="A C++ trading simulation that generates random buy, sell, or hold decisions for a trader in a virtual stock market. Explore trading algorithms and test investment strategies."
              ghLink="https://github.com/hani0216/trading_simulator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Project Task Manager"
              description="JEE application for project management. Create tasks, assign contributors, manage time constraints, and skills. User-friendly interface for visualizing and optimizing project scheduling."
              ghLink="https://github.com/hani0216/ProjectTaskManager"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Meme generator app"
              description="Meme Generator is a simple React application that generates meme images using an API and allows users to add custom text to create memes. This project utilizes React to create a user-friendly interface where users can interact with the application. "
              ghLink="https://github.com/hani0216/meme-generator-app"
             />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="cafe-website"
              description="This is a visually captivating advertising website crafted exclusively with HTML and CSS. Its purpose is to showcase a café, its services, and facilitate customer interactions through features like online reservations and contact forms."
              ghLink="https://github.com/hani0216/cafe-website.github.io"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
