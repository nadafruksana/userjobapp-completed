import React from 'react'
//import axios from 'axios'
//import UserForm from './UserForm'
import axios from './config/axios'

class UserForm extends React.Component {
    constructor(){
        super()
        this.state = {
            name:"",
            email:"",
            contact:"",
            job:"",
            experience:"",
            skills:""
        
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value

        })
    }
    handleSubmit = (e) => {

        e.preventDefault()
        const formData={
            name: this.state.name,
            email: this.state.email,
            phone: this.state.contact,
            jobTitle: this.state.job,
            experience: this.state.experience,
            skills: this.state.skills
        }
        axios.post('/users/application-form',formData)

            
        .then((response)=>{
            //console.log(response.data)
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }else{
                alert('Your application has been submitted')
            
            this.setState({
                name: '',
            email: '',
            contact: '',
            skills: '',
            job: '',
            experience: ''
        })
                
    }
        })
        .catch((err)=>{
            console.log(err)
        })

        }


    render(){

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Full Name" />
                     <br/><br/>

                    <label htmlFor="email">Email Address</label>
                    <input type="text" id="email" name="email"
                           value={this.state.email} onChange={this.handleChange}
                           placeholder="example@gmail.com" />
                    <br/><br/>


                    <label htmlFor="contact">Contact Number</label>
                    <input type="text" id="contact" name="contact"
value={this.state.contact} onChange={this.handleChange}
placeholder="+91 9090909090" />
                    <br/><br/>
                    <label htmlFor="job">Apply for Job</label>
                    <select id="job" name="job"
placeholder="---select---" value={this.state.job}
onChange={this.handleChange} >
                        <option value="-- select--">--Select--</option>
                        <option value="Front-End Developer">Front-End
Developer</option>
                        <option value="Node.js Developer">Node.js
Developer</option>
                        <option value="MEAN Stack Developer">MEAN
Stack Developer</option>
                        <option value="FULL Stack Developer">FULL
Stack Developer</option>

                    </select>

                    <br/><br/>
                   <label htmlFor="experience">Experience</label>
                    <input type="text" id="experience"
name="experience" value={this.state.experience}
onChange={this.handleChange}
placeholder="experience (2years,3months)" />
                    <br/><br/>
                    <label htmlFor="skills">Technical skills</label>
                    <textarea type="text" id="skills" name="skills"
value={this.state.skills} onChange={this.handleChange} 
/>
                    <br/><br/>
                    <input type="submit" value="send Apllication" />

                </form>
            </div>
        )
    }

}

export default UserForm
