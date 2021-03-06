import React, { useState } from 'react';
import { Button,Col, Container, Row, Form,  Card } from "react-bootstrap";

function SenhaCard(props){
    const [senhaRep, setSenhaRep] = useState({senha:""});

    function guardar_variaveis_inseridas(senha_var){
        props.setUsuario({nome: props.egresso.nome, 
            email: props.egresso.email, 
            senha:senha_var})
    }

    function validar(senhaRep_var){
        if(!(props.usuario.senha != senhaRep || (!senhaRep))){
            props.salvar_cadastro()
        }else{
            alert("senhas diferentes")
        }
    }

    return (
            <Container className="mb-5 mt-5 px-5 ">
                <div  className=" px-5 ">
                    <Card className="cards-cadastro">
                        <Card.Header>Crie uma senha</Card.Header>
                        <Card.Body>
                        <Form className=" px-5 ">
                            <Form.Group controlId="formGridAddress1" className="mb-3">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control  type="password" onChange={(e) => guardar_variaveis_inseridas(e.target.value)} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
                                <Form.Label>Repita a senha</Form.Label>
                                <Form.Control  type="password" onChange={(e) => setSenhaRep(e.target.value)} />
                            </Form.Group>
                        </Form>
                        </Card.Body>
                    </Card>
                </div>
                <div className="mb-3 mt-3 px-5">
                    <Button  variant="secondary" onClick={() => props.setSenhasShow(false)} type="submit" >Voltar</Button>
                    <Button  variant="secondary" onClick={() => validar()} type="submit" className="mx-3">Finalizar cadastro</Button>
                </div>
            </Container>
    )
}


export default SenhaCard;