import React, {useState} from "react";
import '../hojas-de-estilo/form.css'

const initial = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    domicilio: "",
    documento: "",
    consulta: ""
}

function Form (){
    const[form, setForm] = useState(initial)

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(!form.apellido || !form.documento || !form.domicilio || !form.nombre || !form.apellido || !form.email){
            alert("datos incompletos")
            return;
        }

        alert("datos enviados con exito")
    }


    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className="col-12">
            <input type="text" name="nombre" placeholder="ingrese su nombre" value={form.nombre} onChange={handleChange}/>
            <input type="text" name="apellido" placeholder="ingrese su apellido" value={form.apellido} onChange={handleChange}/>
            <input type="email" name="email" placeholder="ingrese su email" value={form.email} onChange={handleChange}/>
            <input type="tel" name="telefono" placeholder="ingrese su telefono" value={form.telefono} onChange={handleChange}/>
            <input type="text" name="domicilio" placeholder="ingrese su domicilio" value={form.domicilio} onChange={handleChange}/>
            <input type="number" name="documento" placeholder="ingrese su nro de documento" value={form.documento} onChange={handleChange}/>
            </div>
            <div className="consulta">
            <textarea name="consulta" placeholder="deposite su consulta" value={form.consulta} onChange={handleChange} cols="30" rows="10"></textarea>
            </div>
            <input className="subBtn" type="submit" value="enviar" />
        </form> 
        </>
    )
}

export default Form