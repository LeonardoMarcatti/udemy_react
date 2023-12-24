import { useState } from "react"

export default function Signup() {
  const [unequalPasswords, setUnequalPasswords] = useState(false)

  const handleSubmit = (e) => {
      e.preventDefault()

      const formData = new FormData(e.target)
      const checkBoxes = formData.getAll('acquisition')
      const data = Object.fromEntries(formData.entries())
      data.acquisition = checkBoxes

      if (data.password != data['confirm-password']) {
        setUnequalPasswords(true)
        return null        
      }

      console.log(data);
      e.target.reset()
   }

   return (
     <form onSubmit={handleSubmit}>
       <h2>Welcome on board!</h2>
       <p>We just need a little bit of data from you to get you started 🚀</p>
 
       <div className="control">
         <label htmlFor="email">Email</label>
         <input id="email" type="email" name="email" placeholder="Your email address" required/>
       </div>
 
       <div className="control-row">
         <div className="control">
           <label htmlFor="password">Password</label>
           <input id="password" type="password" name="password" placeholder="Your password" required  minLength={6}/>
         </div>
 
         <div className="control">
           <label htmlFor="confirm-password">Confirm Password</label>
           <input
             id="confirm-password"
             type="password"
             name="confirm-password"
             required
             placeholder="Repeat password"
             minLength={6}
           />
            <small className="control-error">{unequalPasswords && 'Passwords are not equal'}</small>
         </div>
       </div>
 
       <hr />
 
       <div className="control-row">
         <div className="control">
           <label htmlFor="first-name">First Name</label>
           <input type="text" id="first-name" name="first-name" placeholder="You name" required/>
         </div>
 
         <div className="control">
           <label htmlFor="last-name">Last Name</label>
           <input type="text" id="last-name" name="last-name" placeholder="Your surname" required/>
         </div>
       </div>
 
       <div className="control">
         <label htmlFor="phone">What best describes your role?</label>
         <select id="role" name="role" required>
            <option value="" disabled>Select option</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="employee">Employee</option>
            <option value="founder">Founder</option>
            <option value="other">Other</option>
         </select>
       </div>
 
       <fieldset>
         <legend>How did you find us?</legend>
         <div className="control">
           <input
             type="checkbox"
             id="google"
             name="acquisition"
             value="google"
           />
           <label htmlFor="google">Google</label>
         </div>
 
         <div className="control">
           <input
             type="checkbox"
             id="friend"
             name="acquisition"
             value="friend"
           />
           <label htmlFor="friend">Referred by friend</label>
         </div>
 
         <div className="control">
           <input type="checkbox" id="other" name="acquisition" value="other" />
           <label htmlFor="other">Other</label>
         </div>
       </fieldset>
 
       <div className="control">
         <label htmlFor="terms-and-conditions">
           <input type="checkbox" id="terms-and-conditions" name="terms" />I
           agree to the terms and conditions
         </label>
       </div>
 
       <p className="form-actions">
         <button type="reset" className="button button-flat">
           Reset
         </button>
         <button type="submit" className="button">
           Sign up
         </button>
       </p>
     </form>
   );
 }