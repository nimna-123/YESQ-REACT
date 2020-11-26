import React from 'react'
import '../CSS/Register.css'
import Landing from '../IMAGES/landing.svg'
import { useFormik } from 'formik'
 import * as Yup from 'yup'
 import axios from 'axios'


export default function Register() {
	const formik = useFormik({
        initialValues: {
			name: "",
			mobile:"",
			password: "",
			confirm_password: ""
			
		},
		validationSchema: Yup.object({
			
			name: Yup.string()
			
			  
			 .required("Required!"),
			mobile: Yup.string()
				
			
				.min(10, "To short")
				.max(10, "To long")
				.required("Required!"),
			password: Yup.string()
		
			  .min(6, "Minimum 6 characters")
			  .required("Required!"),
			confirm_password: Yup.string()
		
			  .oneOf([Yup.ref("password")], "Password's not match")
			  .required("Required!")
		  }),
		  onSubmit: values => {
			//   let newv=values.name
			// 	let newv2 =newv.trim()
			//   console.log(values.name)
			
			 console.log('form data',values)
			 axios.post("",values).then(response=>{
				
			 })
		  }
		});
	
    return (
        <div>
            <div className="container">
		        <div className="row d-flex align-items-center vh-100">
			        <div className="col-md-6 card-new">
						<div className=" pb-5">
                   			<div className="row px-3  mt-4 mb-5 "> 
                                <img src={Landing}  alt='logo'/> 
                            </div>
                        </div>

			        </div>
			        <div className="col-md-5 m-auto">
			            <div id="login">
				            <aside>
				                <div className="text-center"> 
					                <h3>Create Account</h3>
				                </div>
                                 <form onSubmit={formik.handleSubmit}>
				
									<div className="form-group">
                						<label htmlFor="" className="input-label">Full Name</label>
										<input
										 type="name"
										 className="form-control"
										 name="name"
										 value={formik.values.full_name}
										  onChange={formik.handleChange}
										 onBlur={formik.handleBlur}
										// {...formik.getFieldProps('name')}
										  id="name"/>
										   {formik.touched.name && formik.errors.name && (<div className="errorMessage">{formik.errors.name}</div>)} 
									</div>
									<div className="form-group">
                						<label htmlFor="" className="input-label">Mobile Number</label>
										<input type="text"
												name="mobile" 
												id="mobile"
												value={formik.values.mobile}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												// {...formik.getFieldProps('mobile')}
										 		className="form-control"  />
												 {formik.touched.mobile && formik.errors.mobile && (<div className="errorMessage">{formik.errors.mobile}</div>)}
					
									</div>
									<div className="form-group">
                						<label htmlFor="" className="input-label">Password</label>
										<input type="password"
										 		name="password"
										  		id="password"
												  value={formik.values.password} 
												  onChange={formik.handleChange}
												  onBlur={formik.handleBlur}
												// {...formik.getFieldProps('password')}
										   		placeholder="Passwords must be at least 6 characters"
										   		className="form-control"/>
												   {formik.touched.password && formik.errors.password && (<div className="errorMessage">{formik.errors.password}</div>)}
									</div>
									<div className="clearfix add_bottom_15"></div>
									<div className="form-group">
                						<label htmlFor="" className="input-label">Confirm Password</label>
										<input type="password"
											name="confirm_password"
											 id="confirmPassword"
											 value={formik.values.confirmPassword}
											 onBlur={formik.handleBlur}
											 onChange={formik.handleChange}
											// {...formik.getFieldProps('confirm_password')}
											placeholder="Re-type password"
											className="form-control" 
											/>
											{formik.touched.confirm_password && formik.errors.confirm_password && (<div className="errorMessage">{formik.errors.confirm_password}</div>)}
											
					
									</div>
									<div className="clearfix add_bottom_15">
										<div className="text-center">
                         					<p id="forgot" className="font-10"> We will send you a verification code to your phone.</p> 
                            			</div>
									</div>
									 <button type="submit" className="btn_1 rounded full-width">CONTINUE</button>
									{/* <div className="text-center add_top_10">Already have an account? <strong><a
										href="signin">Log In</a></strong></div> */}
								</form>
                            </aside>
	                    </div>
		            </div>
				</div>
	        </div>
        </div>
    )
}




