import { useState } from "react"

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <h1>REGISTER FORM</h1>

            <form style={{ marginTop: '1rem' }}>
                <input type="text" value={username} placeholder="username" onChange={(event) => setUsername(event.target.value)} />
                <input type="password" value={password} placeholder="password" onChange={(event) => setPassword(event.target.value)} />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register