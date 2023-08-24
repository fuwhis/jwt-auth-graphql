import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRegisterMutation } from "../generated/graphql"

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [register, _] = useRegisterMutation()

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await register({ variables: { registerInput: { username, password } } })
        navigate('..')
    }

    return (
        <div>
            <h1>REGISTER FORM</h1>

            <form style={{ marginTop: '1rem' }} onSubmit={onSubmit}>
                <input type="text" value={username} placeholder="username" onChange={(event) => setUsername(event.target.value)} />
                <input type="password" value={password} placeholder="password" onChange={(event) => setPassword(event.target.value)} />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register