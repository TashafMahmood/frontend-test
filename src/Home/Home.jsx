import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [users, setUsers] = useState([])
    const getAllUsers = () => {
        axios.get('http://localhost:5000/getusers')
            .then(res => setUsers(res?.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <div>
            {
                users?.map((item, id) => <h1 key={id}>{item?.name}</h1>)
            }
        </div>
    )
}

export default Home
