const ErrorMessage = (props) => {
   const { title, message, onConfirm } = props
   return (
     <div className="error">
       <h2>{title}</h2>
       <p>{message}</p>
       {onConfirm && (
         <div id="confirmation-actions">
           <button onClick={onConfirm} className="button">
             Okay
           </button>
         </div>
       )}
     </div>
   );
 }

export default ErrorMessage