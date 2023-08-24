import { useUsersQuery } from "../generated/graphql";

const Home = () => {
    const { data, loading } = useUsersQuery({ fetchPolicy: 'no-cache' })

    return (
        <div>
            <h1>HOME</h1>
            <div style={{ justifyContent: 'center', display: 'flex' }}>
                {loading ?
                    <h1>Loading</h1> :
                    <ul>
                        {data?.users.map(user => <li key={user.id}>{user.username}</li>)}
                    </ul>
                }
            </div>

        </div>
    )
}

export default Home