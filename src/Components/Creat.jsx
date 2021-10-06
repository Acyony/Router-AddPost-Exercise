import React, { useState } from "react";
import { InputGroup, Button, Form } from "react-bootstrap";
import styled from "styled-components";
import { useHistory } from "react-router-dom";


const Container = styled.div`
  margin: 0 8rem;
`;

export default function Creat(props) {
    const [newPost, setNewPost] = useState("");

  const history = useHistory();

    function handleOnChange(e) {
        setNewPost(e.target.value)
    }

    function submitData(e) {
        e.preventDefault();
        props.addNewPost(newPost)
    history.push('/all-posts')

    }

    return (
        <>
            <Container>
                <InputGroup className="mb-3">
                    <Button
                        variant="outline-secondary"
                        id="button-addon1"
                        onClick={submitData}
                    >
                        Add Post
                    </Button>
                    <Form.Control type="text"
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                        onChange={handleOnChange} />

                </InputGroup>
            </Container>
        </>
    );
}
