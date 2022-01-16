import React from "react";
import withLayout from "../../hoc/withLayout";
import { Container, Col, Row } from "react-bootstrap";

import DashboardSearch from "../../components/DashboardSearch";
import Equipment from "../../components/Equipment";
import PublicationDate from "../../components/PublicationDate";
import HomeType from "../../components/HomeType";
import BedRoom from "../../components/BedRoom";
import BathRoom from "../../components/BathRoom";
import Condition from "../../components/Condition";
import PriceRange from "../../components/PriceRange";
import OtherFilter from "../../components/OtherFilter";

const Dashboard = () => {
  return (
    <Container style={{ marginTop: "2rem" }}>
      <Row>
        <Col xs={12} md={6}>
          <DashboardSearch />
        </Col>
      </Row>
      <Row style={{ marginTop: "2rem" }}>
        <Container>
          <Row>
            <Col sm>
              <Row>
                <Col sm>
                  <HomeType />
                </Col>
                <Col sm>
                  <BedRoom />
                </Col>
              </Row>
            </Col>
            <Col sm>
              <Row>
                <Col sm>
                  <BathRoom />
                </Col>
                <Col sm>
                  <Equipment />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "2rem" }}>
            <Col sm>
              <Row>
                <Col sm>
                  <Condition />
                </Col>
                <Col sm>
                  <PriceRange />
                </Col>
              </Row>
            </Col>
            <Col sm>
              <Row>
                <Col sm>
                  <PublicationDate />
                </Col>
                <Col sm>
                  <OtherFilter />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default withLayout(Dashboard);
