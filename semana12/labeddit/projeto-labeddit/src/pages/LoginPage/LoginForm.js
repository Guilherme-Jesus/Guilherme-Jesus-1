import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { login } from '../../services/user'
import CircularProgress from '@material-ui/core/CircularProgress';


const LoginForm = ({setRightButton}) => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButton, setIsLoading)
    }



    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={'outlined'}
                    fullWidth
                    margin={'dense'}
                    required
                    type={'email'}
                />
                <TextField
                    name={'password'}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={'outlined'}
                    fullWidth
                    margin={'dense'}
                    required
                    type={'password'}
                />
                <Button
                    type={'onSubmit'}
                    fullWidth
                    variant={'contained'}
                >
                    {isLoading? <CircularProgress size= {40} color ={'primary'}/> : <>Login</>}
                    
                    </Button>
            </form>
        </div>


    )
}

export default LoginForm