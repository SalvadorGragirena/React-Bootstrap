import React, { Fragment } from "react";
import ItemListContainer from './ItemListContainer';
import { Container, Row, Col, Image, Button, Card, } from "react-bootstrap";



const Main = () => {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col sm={7}>
                    <Image src="https://picsum.photos/900/400"
                        fluid
                        rounded
                        className="" />
                </Col>
                <Col sm={5}>
                    <h1 className="font-weigh-light">Tagline</h1>
                    <p>
                        Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido.
                        También es una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras, un texto es un entramado de signos con una intención comunicativa que adquiere sentido en determinado contexto.
                    </p>
                    <Button variant="outline-primary"> Call to action </Button>
                </Col>
            </Row>
            <Row>
                <Card className="text-center bg-secondary text-white my-5 py-4">
                    <Card.Body>
                        Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <ItemListContainer greeting={"Listado de productos top en ventas"} dimetop={true} />
            </Row>

            <Row>
                <ItemListContainer greeting={"Listado de todos los productos"} dimetop={false} />
            </Row>

        </Container>
    )
}
export default Main;