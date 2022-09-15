import React from "react";
import Form from "./Form";
import '../hojas-de-estilo/form.css'

function FormContainer(){
    return(
        <div className="row contact-wrapper">
            <div className="contact-form">
            <h1 className="contactTitle text-center">Deposite su consulta</h1>
            <div className="contact-contenido">
            <Form />
            </div>
            </div>
        </div>
    )
}

export default FormContainer 