import Signup_ from '../Images/signup.gif'
// import Logo from '../Images/logo.png';
import react , {useState} from 'react'



//POST
  const registerNewUser = () =>{


  }
  const SignUp = () => {
  
  //HOOKS
  const [fName, setfName] = useState('')
  const [sName, setsName] = useState('')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  //SUBMITTING THE FORM
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      fName:fName,
      sName:sName,
      email:email,
      password:password,
      confirmPassword:confirmPassword,}


      //POST INFORMATION TO  BACKEND
      fetch("/signup",{
      method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)}
      ).then
    
    // console.log(name, email, password, confirmPassword)
    // console.log(name, email, password, confirmPassword)
  }
//HANDLING INPUTS
  const handleFname =(e)=>{
    setfName(e.target.value)
  }

  const handleSname= (e) => {
    setsName(fName)
    console.log(e.target.valuesword)
    alert(e.target.value)
  }

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
                <div class="col-12 col-md-6 form-group"><input value={fName} onChange={handleFname} class="form-control" id="contact-name" type="text" name="name" placeholder="First Name" required="" /></div>
                <div class="col-12 col-md-6 form-group"><input value={sName} onChange={handleSname} class="form-control" id="contact-name" type="text" name="name" placeholder="Last Name" required="" /></div>
                <div class="col-12 col-md-6 form-group"><input value={email} onChange={handleEmail} class="form-control" id="contact-email" type="email" name="email" placeholder="Email addres" required="" /></div>
                <div class="col-12 col-md-6 form-group"><input value={password} onChange={handlePassword} class="form-control" id="contact-email" type="password" name="re-password" placeholder="Password" required="" /></div>
                <div class="col-12 col-md-6 form-group"><input value={confirmPassword} onChange={handleConfirmPassword} class="form-control" id="contact-email" type="password" name="re-password" placeholder="Password" required="" /></div>
                <div class="col-12 col-md-6 form-group"><input class="form-control" id="contact-email" type="password" name="re-password" placeholder="Repeat Password" required="" />
                </div>
                <div class="col-12 text-left form-submit">
                <button class="btn button-main button-scheme" id="contact-submit" type="submit">Log in</button> <button class="btn button-main button-scheme mr-2" id="contact-submit" type="submit">Sign Up</button>

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
