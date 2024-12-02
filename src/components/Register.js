import React, {useState} from 'react';
import axios from 'axios';

const Register = ()=>{
    const [formData, setFormData] = useState({firstName:'', lastName:'',username:'', email:'', password:''
    });

    const handleChange = e =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const handleSubmit = async e =>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5500/api/auth/register', formData);
            alert(response.data.message);
        }
        catch (err){
            console.error(err);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Register</button>
        </form>
    );

}
export default Register;