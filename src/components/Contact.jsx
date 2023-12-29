import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

import { Container, Row, Col, Table, Image } from "react-bootstrap";

export const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50" }}>
        <Row>
          <Col md={6}>
            <h1>Free Pizza Shop</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ad
              at, laboriosam beatae, enim placeat nostrum debitis sunt sapiente
              quam unde saepe? Tenetur totam libero delectus blanditiis dolores
              quas dolore, at quod perspiciatis culpa praesentium ex quam
              eligendi ad aliquid autem, sapiente necessitatibus atque nisi
              nemo, sequi incidunt. Asperiores vel, voluptatem totam veritatis
              repellendus similique exercitationem rerum provident, harum
              expedita corporis recusandae optio neque libero, at nulla ex dicta
              itaque. Hic repudiandae doloribus nobis placeat impedit
              consequatur, maiores quas accusantium nam, ipsa facere cumque, eum
              tempora laborum rerum dolor excepturi consequuntur quae numquam
              repellendus quibusdam vel eos veniam amet. Consectetur, repellat,
              tempore nulla officiis iste praesentium doloribus optio amet earum
              ut numquam natus consequatur et ratione tenetur excepturi facere,
              eum neque nesciunt ducimus impedit sint eos ex? Fugit, corporis.
              Odio asperiores voluptates vero molestiae aliquid dignissimos
              exercitationem totam! Asperiores officia sit unde, saepe
              repudiandae delectus nesciunt itaque doloribus consequatur
              perferendis ut, dolor tempora ad rerum aspernatur iusto,
              voluptatum magni? Dolores, minima deserunt! Neque nostrum incidunt
              natus cum fugit unde minima magni corrupti velit ab quaerat eaque
              accusantium eligendi reprehenderit molestiae quo totam at, porro
              repellat nobis officiis recusandae aliquid placeat. Labore nobis
              optio quos vel aspernatur quidem, obcaecati molestias. Quasi?
            </p>
            {/* Our Table */}
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    ------------Contact Details------------
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FaPhoneAlt />
                  </td>
                  <td>Phone</td>
                  <td>03456123123123</td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <FaPhoneAlt />
                  </td>
                  <td>Call</td>
                  <td>051-5151511</td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <FaPhoneAlt />
                  </td>
                  <td>Email</td>
                  <td>imrankhandev7@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?rs=1&pid=ImgDetMain"
              alt="Test"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
