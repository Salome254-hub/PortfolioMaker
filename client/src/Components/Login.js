import React, { useState } from 'react';
import LoginPic from '../Images/login.gif'
import toast, { Toaster } from 'react-hot-toast';

// import Logo from '../Images/logo.png';



const Login = () => {

    //STATES
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    //HANDLING INPUT
    const handlePassword = (e) => {
        setPassword(e.target.value)
        alert("working")
        toast.success('Successfully added!')
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    //HANDLING SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();
        const objectTosend={
            password: password,
            email: email
        }
       fetch("/Login", 
       {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(objectTosend)
        })
        .then((rawData)=>{
            rawData.json()
        })
      .then((response)=>   {

            console.log(response.status)
      }).catch((err) => {
        //  console.log(err.message);
        toast.error('Successfully added:')
  
      });
  
    }
    return (
        <section class="single-section contact-area alt-bg" id="contact-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-heading">

                            <img src={LoginPic} class="logo" /><br /><br />
                            <h2 class="section-title">Welcome To PortMaker</h2>
                            <p>Don't damage your job hunt before it starts. Using our handcrafted portfolio builder, you can create a professional portfolio.</p>

                            <p class="section-description">Please Log in to proceed</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-6">
                                <form class="contact-form " onSubmit={handleSubmit} id="contact-form" action="http://likeabawz.dk/exill/demo/codex/template/php/contact.php">
                                    <div class="row">
                                        <div class="col-12 col-md-12 form-group pt-4"><input class="form-control" id="contact-name" value={email} onChange={handleEmail} type="email" placeholder=" Email" required="" /></div>
                                        <div class="col-12 col-md-12 form-group text-left "><input  class="form-control mb-3" id="contact-email" value={email} onChange={handlePassword} type="password"  placeholder="Password" required="" />
                                            <button class="btn button-main button-scheme" id="contact-submit" type="submit">Log in</button> <button class="btn button-main button-scheme mr-2" id="contact-submit" type="submit">Sign Up</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
