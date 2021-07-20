import React, { useState} from 'react'
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input'
import { login} from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const auth = useSelector(state => state.auth)


    const dispatch = useDispatch()

    const userLogin = (e) => {
        e.preventDefault()
        const user = {
            username,
            password
        }
        dispatch(login(user))
    }

    // useEffect(() => {
    //     if(!auth.authenticate){
    //         dispatch(isUserLoggedIn());
    //     }
    // }, [])

    if(auth.authenticate){
       return <Redirect to="/" />
    }
    return (
        <Layout>
        <div className="container">
        <div className="row mt-5">
        <div className="col-6 offset-3">
            <form onSubmit={userLogin}>
            <Input
                label="username"
                placeholder="username"
                value={username}
                type="text"
                onChange={(e) => setUsername(e.target.value)}
            />
                 
                 <Input
                label="Password"
                placeholder="password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
                 
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
            </div>
            </div>
        </Layout>
    )
}

export default Signin
