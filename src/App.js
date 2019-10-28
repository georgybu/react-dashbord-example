import React from 'react';

import '@fortawesome/fontawesome-free/css/all.css'
import TopNumber from './widgets/topNumber/topNumber';
import WidgetBadgeTitle from './components/widget/WidgetBadgeTitle';
import SideMenu from './components/menu/SideMenu';
import Row from './components/layout/Row';
import Col from './components/layout/Col';
import WidgetControlsTitle from './components/widget/WidgetControlsTitle';

const App = () => (
  <div className="app">
    <SideMenu/>

    <div className="widget-container">
      <Row>

        <Col col={4}>
          <div className="widget-item">
            <div className="widget-title">
              <WidgetBadgeTitle/>
            </div>
            <div className="widget-body">
              <TopNumber/>
            </div>
          </div>
        </Col>

        <Col col={4}>
          <div className="widget-item">
            <div className="widget-title">
              <WidgetBadgeTitle/>
            </div>
            <div className="widget-body">
              <TopNumber/>
            </div>
          </div>
        </Col>

        <Col col={4}>
          <div className="widget-item">
            <div className="widget-title">
              <WidgetBadgeTitle/>
            </div>
            <div className="widget-body">
              <TopNumber/>
            </div>
          </div>
        </Col>

        <Col col={4}>
          <div className="widget-item">
            <div className="widget-title">
              <WidgetBadgeTitle/>
            </div>
            <div className="widget-body">
              <TopNumber/>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col col={12}>
          <div className="widget-item">
            <div className="widget-title">
              <WidgetControlsTitle/>
            </div>
            <div className="widget-body">
              <TopNumber/>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col col={3}>
          <div className="widget-item">
            <div className="widget-title">
              <WidgetControlsTitle/>
            </div>
            <div className="widget-body">
              <TopNumber/>
            </div>
          </div>
        </Col>

        <Col col={9}>
          <Row>
            <Col col={6}>
              <div className="widget-item">
                <div className="widget-title">
                  <WidgetControlsTitle/>
                </div>
                <div className="widget-body">
                  <TopNumber/>
                </div>
              </div>
            </Col>

            <Col col={6}>
              <div className="widget-item">
                <div className="widget-title">
                  <WidgetControlsTitle/>
                </div>
                <div className="widget-body">
                  <TopNumber/>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col col={12}>
              <div className="widget-item">
                <div className="widget-title">
                  <WidgetControlsTitle/>
                </div>
                <div className="widget-body">
                  <TopNumber/>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

    </div>
  </div>
);

export default App;
