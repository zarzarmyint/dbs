// import React, { useState } from 'react';
// import './SignUpForm.css';

// const SignUpForm = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         name: '',
//         password: '',
//         confirmPassword: '',
//         weight: '',
//         height: '',
//         dateOfBirth: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form submitted:', formData);
//         setFormData({
//             email: '',
//             name: '',
//             password: '',
//             confirmPassword: '',
//             weight: '',
//             height: '',
//             dateOfBirth: ''
//         });
//     };

//     return (
//         <div className="signup-container">
//             <h1 className="signup-title">Sign Up</h1>

//             <form onSubmit={handleSubmit} className="signup-form">
//                 <div className="form-group">
//                     <label className="form-label">
//                         Email Address
//                     </label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         className="form-input"
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label className="form-label">
//                         Full Name
//                     </label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         className="form-input"
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label className="form-label">
//                         Password
//                     </label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                         className="form-input"
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label className="form-label">
//                         Confirm Password
//                     </label>
//                     <input
//                         type="password"
//                         name="confirmPassword"
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                         required
//                         className="form-input"
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label className="form-label">
//                         Current Weight (kg)
//                     </label>
//                     <input
//                         type="number"
//                         name="weight"
//                         value={formData.weight}
//                         onChange={handleChange}
//                         required
//                         className="form-input"
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label className="form-label">
//                         Current Height (cm)
//                     </label>
//                     <input
//                         type="number"
//                         name="height"
//                         value={formData.height}
//                         onChange={handleChange}
//                         required
//                         className="form-input"
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label className="form-label">
//                         Date of Birth
//                     </label>
//                     <input
//                         type="date"
//                         name="dateOfBirth"
//                         value={formData.dateOfBirth}
//                         onChange={handleChange}
//                         required
//                         className="form-input"
//                     />
//                 </div>

//                 <button type="submit" className="submit-button">
//                     Create Account
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default SignUpForm;