import React from 'react'
 import '../CSS/forgotpassword.css'
import Landing from '../IMAGES/landing.svg'
import { useFormik } from 'formik'
 import * as Yup from 'yup'
 import axios from 'axios'

export default function Forgotpassword() {
    const formik = useFormik({
        initialValues: {
			mobile:""
		},
        validationSchema: Yup.object({
			mobile: Yup.string()
                .min(10, "To short")
				.max(10, "To long")
                .required("Required!")
        
         }),
    onSubmit: values => {
      
      console.log('form data',values)
      axios.post("",values).then(response=>{
          
      })
    }
  });
    return (
        <div className="white">
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
							        <h3 >FORGOT PASSWORD?</h3>
							        <p className="errorMessage">
                                        errMsg
                                    </p>
						        </div>
                                    <form onSubmit={formik.handleSubmit}  className="forgot_password_form">
                                        <div className="float-right mt-1 forgot_label_msg">
                                            <p>Enter the email address or mobile phone number associated with your YESQ account.</p>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="" className="input-label">Mobile Number</label>
                                             <input type="text"
                                              className="form-control"
                                               name="mobile" 
                                               value={formik.values.mobile}
                                               onChange={formik.handleChange}
                                              onBlur={formik.handleBlur}
                                               id="mobile" />
                                                {formik.touched.mobile && formik.errors.mobile && (<div className="errorMessage">{formik.errors.mobile}</div>)} 
                                            <input type="hidden" className="d-none" name="appName" value="YESQ"/>
                                        </div>
                                        <div className="clearfix add_bottom_30">
                                        </div>
							            <button type="submit" className="btn_1 rounded full-width">CONTINUE</button>
							        </form>
                            </aside>
				        </div>
			        </div>
		        </div>
	        </div>
            
        </div>
    )
}

