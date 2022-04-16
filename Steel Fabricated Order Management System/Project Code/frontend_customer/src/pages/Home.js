
import { Card, Col, Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

const Home = ()=>{
    return (
        <div>
           <Row>
                <Col>
                    <Table>
                        {/* <thead>
                            <tr>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody> 
                            <tr> <td>CategoryName</td></tr>
                            <tr> <td>CategoryName</td></tr>
                            <tr> <td>CategoryName</td></tr>
                            <tr> <td>CategoryName</td></tr>



                        </tbody> */}
                        
                        
                        <Dropdown>
                <Dropdown.Toggle variant="link" id="dropdown-basic" style={{ color: 'gray' }}>
                    Shop By Category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Category1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Category1</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Category1</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
                    </Table>
                </Col>

                <Col>



                    <Table>
                        <tbody>
                            <tr>
                                <th>  <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>ProductName</Card.Title>
                                        <Card.Text>
                                            Details
                                        </Card.Text>
                                        <Button variant="primary">Add To Cart</Button>
                                    </Card.Body>
                                </Card> </th>
                                <th>  <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>ProductName</Card.Title>
                                        <Card.Text>
                                            Details
                                        </Card.Text>
                                        <Button variant="primary">Add To Cart</Button>
                                    </Card.Body>
                                </Card> </th>
                                <th> <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>ProductName</Card.Title>
                                        <Card.Text>
                                            Details
                                        </Card.Text>
                                        <Button variant="primary">Add To Cart</Button>
                                    </Card.Body>
                                </Card>  </th>
                            </tr>
                            <tr>
                                <th>  <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>ProductName</Card.Title>
                                        <Card.Text>
                                            Details
                                        </Card.Text>
                                        <Button variant="primary">Add To Cart</Button>
                                    </Card.Body>
                                </Card> </th>
                                <th> <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>ProductName</Card.Title>
                                        <Card.Text>
                                            Details
                                        </Card.Text>
                                        <Button variant="primary">Add To Cart</Button>
                                    </Card.Body>
                                </Card>  </th>
                                <th> <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>ProductName</Card.Title>
                                        <Card.Text>
                                            Details
                                        </Card.Text>
                                        <Button variant="primary">Add To Cart</Button>
                                    </Card.Body>
                                </Card>  </th>
                            </tr>
                            <tr>
                                <th>  <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>ProductName</Card.Title>
                                        <Card.Text>
                                            Details
                                        </Card.Text>
                                        <Button variant="primary">Add To Cart</Button>
                                    </Card.Body>
                                </Card> </th>
                                <th> <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>ProductName</Card.Title>
                                        <Card.Text>
                                            Details
                                        </Card.Text>
                                        <Button variant="primary">Add To Cart</Button>
                                    </Card.Body>
                                </Card>  </th>
                                <th> <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>ProductName</Card.Title>
                                        <Card.Text>
                                            Details
                                        </Card.Text>
                                        <Button variant="primary">Add To Cart</Button>
                                    </Card.Body>
                                </Card>  </th>
                            </tr>
                        </tbody>
                    </Table>


                </Col>
            </Row>
        </div>
    )
}

export default Home;