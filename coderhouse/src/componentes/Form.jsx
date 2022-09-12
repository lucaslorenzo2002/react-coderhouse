import React, {useState} from "react";

const initial = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    domicilio: "",
    documento: "",
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
        <form className="col-12" onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder="ingrese su nombre" value={form.nombre} onChange={handleChange}/>
            <input type="text" name="apellido" placeholder="ingrese su apellido" value={form.apellido} onChange={handleChange}/>
            <input type="email" name="email" placeholder="ingrese su email" value={form.email} onChange={handleChange}/>
            <input type="tel" name="telefono" placeholder="ingrese su telefono" value={form.telefono} onChange={handleChange}/>
            <input type="text" name="domicilio" placeholder="ingrese su domicilio" value={form.domicilio} onChange={handleChange}/>
            <input type="number" name="documento" placeholder="ingrese su nro de documento" value={form.documento} onChange={handleChange}/>
            <input type="submit" value="enviar" />
        </form> 
        </>
    )
}

export default Form