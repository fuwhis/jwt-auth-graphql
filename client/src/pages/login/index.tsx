import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../context/AuthContext"
import { useLoginMutation } from "../../generated/graphql"
import JWTManager from '../../utils/jwt'

const Login = () => {
    const { setIsAuthenticated } = useAuthContext()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const [login, _] = useLoginMutation()

    const onSubmitSignIn = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response = await login({ variables: { loginInput: { username, password } } })

        if (response.data?.login.success) {
            localStorage.setItem('accessToken', response.data?.login.accessToken as string) // localStorage
            JWTManager.setToken(response.data?.login.accessToken as string)
            setIsAuthenticated(true) // set isAuthenticated in context
            navigate('..')
        } else {
            console.log('ERROR', response.data?.login.message);
            if (response.data?.login.message) {
                setError(response.data?.login.message)
            }
        }
    }

    return (
        <div>
            <h1>LOGIN</h1>
            {error && <h3 style={{ color: 'red' }}>{error}</h3>}
            <form style={{ marginTop: '1rem' }} onSubmit={onSubmitSignIn}>
                <input type="text" value={username} placeholder="username" onChange={(event) => setUsername(event.target.value)} />
                <input type="password" value={password} placeholder="password" onChange={(event) => setPassword(event.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login