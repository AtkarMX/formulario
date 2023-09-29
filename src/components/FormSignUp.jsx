import { useState } from "react";
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';
import { Switch, FormGroup, FormControlLabel } from "@mui/material";

function FormSignUp(props) {

    const { handleSubmit } = props

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [promociones, setPromociones] = useState(true)
    const [novedades, setNovedades] = useState(false)

    const [errores, setErrores] = useState({
        name: {
            error: false,
            message: "Deben ser al menos 3 caracteres"
        }
    })

    function validarNombre(nombre) {
        if(nombre.length >= 3){
            return { name: { error: false, message: ""}}
        }else{
            return { name: { error: true, message: "Deben ser al menos 3 caracteres"}}
        }
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit({ name, lastName, email, promociones, novedades })
        }}>
            <TextField
                id="name"
                label="Nombre"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }}
                error={errores.name.error}
                helperText={errores.name.error ? errores.name.message : ""}
                onBlur={(e) => {
                    setErrores(validarNombre(e.target.value))
                }}
            />
            <TextField
                id="lastName"
                label="Apellidos"
                variant="outlined"
                fullWidth
                margin="normal"
                value={lastName}
                onChange={(e) => {
                    setLastName(e.target.value)
                }}
            />
            <TextField
                id="email"
                label="Correo electrónico"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
            />

            <FormGroup>
                <FormControlLabel control={<Switch checked={promociones} onChange={(e) => setPromociones(e.target.checked)} />} label="Promociones" />
                <FormControlLabel control={<Switch checked={novedades} onChange={(e) => setNovedades(e.target.checked)} />} label="Novedades" />
            </FormGroup>
            <Button variant="contained" type="submit">Registrarse</Button>
        </form>
    )
}

export default FormSignUp