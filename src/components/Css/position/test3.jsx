import React, { Component } from 'react';
import bg from './bg.svg';
import logo from './logo.svg';
import "./test3.css"
class Test3 extends Component {
  state = {};
  render() {
    return (
      <div className="containerfluid  ">
          {/* <div className="w-100">
              <img id="hiddenImg111" className=" w-100 position-relative" src={bg} alt="bg" style={{ marginTop: "-8%", zIndex: "1", position: "relative" }} />
          </div> */}
          
       {/* ----------container-start--------------- */}
       <div
          className="row   w-100 "
        //   style={{ position: "absolute", top: "3%", zIndex: "2" }}
        >
          <div className="col-12 d-flex justify-content-end   ">
            <p className="Dont-have-an-account-yet m-2"> Don't have an account yet? </p>
             <button type="button" className="Rectangle-540  " onClick={this.switchRegister} style={{ cursor: "pointer" }} >
              
              Sign up
            </button>
          </div>

          <div className=" col-12 d-flex flex-column       ">
            <div className="row  ">
              <div className="col-md-6 ">
              <div className=" d-flex justify-content-center " > <img className="   w-50  " src={logo} alt="logo" /> </div>
<p className="Register text-center "> Register </p>
<p className="Enter-your-details-below-to-create-your-account  text-center"> Enter your details below to create your account </p>

  
  
   <form>
     <div className=" d-lg-flex flex-row justify-content-center  " style={{margin:'0% 19%'}}>
      <div className="d-flex flex-column    " >
        
        <label className='First-Name'  htmlFor="">First Name </label>
        <input className='Rectangle-523' type="text" />
            
        
      </div>
      <div className="d-flex flex-column  " >
        
        <label className='First-Name' htmlFor="">Last Name </label>
         <input className='Rectangle-523' type="text " />  
               
      </div>
  
    </div>
        <div className="d-flex flex-column  justify-content-center  " style={{margin:'0% 19%'}}>
        
        <label className='User-Name '  htmlFor="">User Name</label>
        <input className='Rectangle-524' type="text" />
                  
      </div>
        <div className="d-flex flex-column  justify-content-center  " style={{margin:'0% 19%'}}>
        
        <label className='User-Name '  htmlFor="">Adress Email</label>
        <input className='Rectangle-524' type="email" />
                  
      </div>
        <div className="d-flex   justify-content-center  " style={{margin:'0% 19%'}}>
        
        <button className='Rectangle-525'>Next</button>
        
                  
      </div>




   </form>
    
 
    


              </div>
            </div>
          </div>
        </div>
      
      {/* ----------------------------------container-end--------------------------------------------- */}
    
      </div>
    );
  }
}

export default Test3;
