import React from "react";
import { Accordion } from "react-bootstrap";

const AccrodionSection = () => {
  return (
    <Accordion className="my-5">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
        <i class="fa-solid fa-people-roof"></i>ITO & Managed Services
        </Accordion.Header>
        <Accordion.Body>
        We help to reduce your IR  TCO by outsourcing activities  like infrastructure, content  and access management
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
        <i class="fa-brands fa-wpbeginner"></i>Engineering  Services
        </Accordion.Header>
        <Accordion.Body>
        Optimize your IT scale by  offering quality through  industrialized DevOps, QA,  and cyber security
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
        <i class="fa-brands fa-hive"></i>Blockchain  Services
        </Accordion.Header>
        <Accordion.Body>
        Offering STO/ICO services along  with blockchain and wallet  through custom blockchain  development.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
        <i class="fas fa-network-wired"></i>Interactive Services
        </Accordion.Header>
        <Accordion.Body>
        Interact with your  customers digitally by  using custom and  enterprise grade  applications
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
        <i class="fa-solid fa-calendar-days"></i>Data &  Analysis
        </Accordion.Header>
        <Accordion.Body>
        Interact with your  customers digitally by  using custom and  enterprise grade  applications
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
        <i class="fa-brands fa-autoprefixer"></i>Automation
        </Accordion.Header>
        <Accordion.Body>
        Perform automate  process activities by  using robotics,  chatbots, and  application workflow
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>
        <i class="fa-solid fa-money-bill-trend-up"></i>Digital Services
        </Accordion.Header>
        <Accordion.Body>
        Carrying out processes like  content marketing, SEO, and  SMM to generate more revenue
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>
        <i class="fa-solid fa-cloud"></i>Cloud
        </Accordion.Header>
        <Accordion.Body>
        Provide complete  responsiveness by hosting  your products in the cloud  to exploit cloud native  applications
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccrodionSection;
