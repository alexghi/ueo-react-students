import React from "react";

class Login extends React.Component{
    render(){
      return(
        <div id="loginform">
          <FormHeader title="Login" />
          <Form />
        </div>
      )
    }
  }
  
  const FormHeader = props => (
      <h2 id="headerTitle">{props.title}</h2>
  );
  
  
  const Form = () => (
    <div>
      <FormInput description="Username" placeholder="Enter your username" type="text" />
      <FormInput description="Password" placeholder="Enter your password" type="password"/>
      <FormButton title="Log in"/>
    </div>
  );
  
  const FormButton = props => (
    <div id="button" className="row">
      <button>{props.title}</button>
    </div>
  );
  
  const FormInput = props => (
    <div class="row">
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder}/>
    </div>  
  );
  
  

export default Login;
