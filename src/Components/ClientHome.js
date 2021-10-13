import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Row, Col } from "react-bootstrap"
import { FormContext } from "../Contexts/FormContext"

import QuillEditor from './QuillEditor/QuillEditor';

import '../App.css';



const ClientHome = () => {

    const { stateEditor } = FormContext()


    const { stateText } = QuillEditor()

    const onChangeHandler = (props) => {
        console.log(props);

    }

    function createMarkup() {
        return { __html: `${stateEditor}` };
    }

    return (
        <>
            <Jumbotron fluid>
                <Container>
                    <h1>Client Home.</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                </Container>
            </Jumbotron>

            <Container>
                <Row>
                    <Col >
                        <QuillEditor />
                    </Col>

                    <Col style={{
                            'width': '90%',
                            'max-width': '90%',
                            backgroundColor: 'white'
                            }}>
                        <div dangerouslySetInnerHTML={createMarkup()} />
                    </Col>
                </Row>
            </Container>




        </>
    )
}

export default ClientHome;