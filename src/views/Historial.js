import React from "react";

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
} from "react-bootstrap";

function Historial() {
  let fechaTmp = ["01/09/2021","02/09/2021","03/09/2021","04/09/2021","05/09/2021"];
  let horaInicioTmp = ["07:00","08:00","09:00","10:00","11:00"];
  let horaFinTmp = ["12:00","13:00","14:00","15:00","16:00"];

  let datosTabla = {
      datos:[]
  }
  for (let i = 0; i<5;i++){
    let dato = {
      fecha: fechaTmp[i],
      horaInicio: horaInicioTmp[i],
      horaFin: horaFinTmp[i]
    }
    datosTabla.datos.push(dato);
  }
  console.log(datosTabla);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12" >
          <Card className="card-stats" >
          <Card.Header>
            <Card.Title as="h4"  >Buscar</Card.Title>
          </Card.Header>
            <Col className="pr-1" md="6">
            <form>
              <label>
                Fecha:
                <input type="text" name="name" placeholder="DD/MM/YYYY"/>
              </label>
              <input type="submit" value="Filtrar" />
            </form>
            </Col>
          </Card>
          </Col>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Historial del tiempo</Card.Title>
                <p className="card-category"></p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Fecha</th>
                      <th className="border-0">Hora inicio</th>
                      <th className="border-0">Hora fin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datosTabla.datos.map(dato=>{
                      return(
                        <tr>
                          <td>{dato.fecha}</td>
                          <td>{dato.horaInicio}</td>
                          <td>{dato.horaFin}</td>
                        </tr>
                      )
                      })
                    }
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Historial;
