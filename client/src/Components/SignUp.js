import Signup_ from '../Images/signup.gif'
// import Logo from '../Images/logo.png';
import react , {useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';


//POST
  const registerNewUser = (data) =>{
    fetch("/signup",{
         method: 'POST',
         body: JSON.stringify(
          data
         ),
      headers: {
         'Content-type':'application/json; charset=UTF-8',
      },
    }).then((res) => res.json())
    .then((post) => {
      console.log(post)
     

      toast.success('User succesfully added!')
    })
    .catch((err) => {
      //  console.log(err.message);
    toast.error('Failed to create user account')

      // toast.error(err.message)

    });
};


  
  const SignUp = () => {
  
  //HOOKS
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  //TOAST

  //SUBMITTING THE FORM
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email:email,
      password:password,
      password_confirmation:confirmPassword,}
      console.log(userData)
      registerNewUser(userData);
      setEmail("")
      setPassword("")
      setConfirmPassword("")

  }
//HANDLING INPUTS
 

  const handleEmail =(e)=>{

    setEmail(e.target.value)
  }

  const handlePassword =(e)=>{
    setPassword(e.target.value) 
  
  }

  const handleConfirmPassword =(e)=>{
    setConfirmPassword(e.target.value)
  }


  return (
    <section class="single-section contact-area alt-bg" id="contact-area">
  <Toaster />

      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-heading">
              <img src={Signup_} class="logo" /><br /><br />
              <h2 class="section-title">Sign Up</h2>
              <p>Don't damage your job hunt before it starts. Using our handcrafted portfolio builder, you can create a professional portfolio.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <form class="contact-form"  onSubmit={handleSubmit}>
              <div class="row">
               
                <div class="col-12 col-md-6 form-group"><input value={email} onChange={handleEmail} class="form-control" id="contact-email" type="email" name="email" placeholder="Email addres" required="" /></div>
                <div class="col-12 col-md-6 form-group"><input value={password} onChange={handlePassword} class="form-control" id="contact-email" type="password" name="re-password" placeholder="Password" required="" /></div>
                <div class="col-12 col-md-6 form-group"><input value={confirmPassword} onChange={handleConfirmPassword} class="form-control" id="contact-email" type="password" name="re-password" placeholder="Password" required="" /></div>
               
                <div class="col-12 text-left form-submit">
                <button class="btn button-main button-scheme"  type="submit">Log in</button> <button class="btn button-main button-scheme mr-2"  type="submit">Sign Up</button>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
