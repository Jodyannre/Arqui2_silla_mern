import React from "react";
import ChartistGraph from "react-chartist";
import DatePicker from 'react-date-picker'

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";



function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <DatePicker
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

function Dashboard() {
  //Numeros o variables fijas
  var usoTotal = 15;
  //Debería de ser porcentajes por día
  let datosDiasMayorUso = [50, 51, 52, 53, 54, 55, 56];
  let datosDiasMenorUso = [50, 51, 52, 53, 54, 55, 56];
  //Array con la información de los días de mayor uso sin variables cuantitativas
  var diasMayorUso = {
    labels: ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],
    series: [datosDiasMayorUso]
  }
  //Array para los días de menor uso
  var diasMenorUso = {
    labels: ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],
    series: [datosDiasMenorUso]
  }


  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </Col>
                  <div>
    </div>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Peso actual (kg)</p>
                      <Card.Title as="h4">{usoTotal}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="5" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="3">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-time-alarm text-success"></i>
                    </div>
                  </Col>
                  <Col xs = "5">
                    <form>
                      <label>
                        Fecha:
                        <input type="text" name="name" placeholder="DD/MM/YYYY"/>
                      </label>
                      <input type="submit" value="Buscar" />
                    </form>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">                           
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Días de mayor uso</Card.Title>
                <p className="card-category"></p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHoras">
                  <ChartistGraph
                    data={diasMayorUso}
                    type="Bar"
                    options={{
                      seriesBarDistance: 1,
                      low: 10,
                      high: 80,
                      showArea: false,
                      height: "245px",
                      fullWidth: true,
                      showLabel: false,              
                    }}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Veces/día
                </div>
                <hr></hr>
                <div className="stats">
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
        <Col md="12" xs="2">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Días de menor uso</Card.Title>
                <p className="card-category"></p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHoras">
                  <ChartistGraph
                    data={diasMenorUso}
                    type="Bar"
                    options={{
                      seriesBarDistance: 1,
                      low: 10,
                      high: 80,
                      showArea: false,
                      height: "245px",
                      fullWidth: true,
                      showLabel: false,  
                      reverseData: true,
                      horizontalBars: true,  
                      axisY: {
                        offset: 75
                      },
                      style: 'stroke-width: 30px',  
                      stackBars: true
                       
                    }}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Veces/día
                </div>
                <hr></hr>
                <div className="stats">
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
