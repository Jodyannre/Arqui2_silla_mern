import React from "react";
import ChartistGraph from "react-chartist";
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

function Dashboard() {
  var myStyleClass = "Uso total (hrs)";
  var targetOfGreeting = 8;
  //Numeros o variables fijas
  var usoTotal = 15;
  //Datos para las gráficas
  let datosPesoEvolucion = [50, 51, 52, 53, 54, 55, 56];
  //Horas de uso promedio
  let promedioUsoDiario = 8;
  //Promedio de veces en que se levanta diario
  let promedioLevantaDiario = 44;
  //Días y los datos de cada día
  var pesoEvolucion = {
    labels: ["Día 1",2,3,4,5,6,7],
    series: [datosPesoEvolucion]
  }
  //Uso en tiempo real
  let estadoActual = "Usando";
  let horaInicio = "13:00";
  let tiempoUsoActual = 4;
  //Gráfica de dias de mayor uso
  //Debería de ser porcentajes por día
  let datosDiasMayorUso = [50, 51, 52, 53, 54, 55, 56];
  //Array con la información de los días de mayor uso sin variables cuantitativas
  var diasMayorUso = {
    labels: ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],
    series: [datosDiasMayorUso]
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
                      <i className="nc-icon nc-badge text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">{myStyleClass}</p>
                      <Card.Title as="h4">{usoTotal}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>

              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-time-alarm text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Uso total (días)</p>
                      <Card.Title as="h4">{usoTotal}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>

              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Prom. levanta</p>
                      <p className="card-category">Diario</p>
                      <Card.Title as="h4">{promedioLevantaDiario}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>

              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Prom. uso</p>
                      <p className="card-category">Diario (hrs)</p>
                      <Card.Title as="h4">{promedioUsoDiario}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>

              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Peso</Card.Title>
                <p className="card-category">Evolución</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHoras">
                  <ChartistGraph
                    data={pesoEvolucion}
                    type="Line"
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
                  Kilos/día
                </div>
                <hr></hr>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Uso actual</Card.Title>
                <p className="card-category">Tiempo real (hrs)</p>
              </Card.Header>
              <Card.Body>
                <div>
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0"></th>
                      <th className="border-0"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Estado actual:</td>
                      <td>{estadoActual}</td>
                    </tr>
                    <tr>
                      <td>Hora de inicio:</td>
                      <td>{horaInicio}</td>
                    </tr>
                    <tr>
                      <td>Tiempo de uso:</td>
                      <td>{tiempoUsoActual} horas</td>
                    </tr>
                  </tbody>
                </Table>
                </div>
                <hr></hr>

              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="10">
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
                    axisY: {
                      offset: 0,
                      labelInterpolationFnc: () => ''
                    }                   
                    }}
                  />
                  </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Días de la semana 
                </div>
                <hr></hr>

              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
