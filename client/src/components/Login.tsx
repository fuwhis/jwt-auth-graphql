import { useState } from "react"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <h1>LOGIN</h1>

            <form style={{ marginTop: '1rem' }}>
                <input type="text" value={username} placeholder="username" onChange={(event) => setUsername(event.target.value)} />
                <input type="password" value={password} placeholder="password" onChange={(event) => setPassword(event.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login