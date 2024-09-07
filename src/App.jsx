import { useState, useRef } from 'react';
import './App.css';

function App() {
  // const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [emailApplied, setEmailApplied] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = emailRef.current.value;

    if(email === '') {
      setError(true);
      setErrorText("Field can't be empty" )
    } else if (!emailRegex.test(email)) {
      setError(true);
      setErrorText("Valid email required")
    } else {
      setError(false);
      setErrorText('');
      setEmailApplied(email);
      setSubmitted(true)
    };
  };

  const handleDismiss = () => {
    setSubmitted(false);
  };

  return (
    <>
      <div className="App">
        {!submitted ? (
          <div className='container'>
              <div className="texts">
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul>
                  <li>Product discovery and building what matters</li>
                  <li>Measuring to ensure updates are a success</li>
                  <li>And much more!</li>
                </ul>
                <form className={`form ${error ? 'active' : ''}`}>
                  <h1>Email address</h1>
                  {error && <h6 className='error'>{errorText}</h6>}
                  <input 
                    ref={emailRef} 
                    // onChange={(e) => setEmail(e.target.value)}
                    // value={email}
                    className='input' 
                    placeholder='email@company.com' 
                  />
                  <button 
                    onClick={handleSubmit} 
                    type='button' 
                    className='submit'
                  >
                    Subscribe to monthly newsletter
                  </button>
                </form>
              </div>
              <div className='image'>
                <img className="desktop" src="/illustration-sign-up-desktop.svg" alt='banner' />
                <img className="mobile" src="/illustration-sign-up-mobile.svg" alt="banner" />
              </div>
          </div>
        ) : (
          <div className='container-2'>
            <div className='box'>
              <img src="/icon-success.svg" alt='success' />
              <h1>Thanks for subscribing!</h1>
              <p>A confirmation email has been sent to&nbsp; <span className='drop'>{emailApplied}</span>. 
              Please open it and click the button inside to confirm your subscription.</p>
              <button 
                onClick={handleDismiss} 
                type='button' 
                className='dismiss'
              >
                Dismiss message
              </button>
            </div>
          </div> 
        )};
      </div>
    </>
  );
};

export default App

//LEGEND.DEV coded this


















//below is a more professional and concise way of writing the code above



// import { useState, useRef } from 'react';
// import './App.css';

// function App() {
//   const [state, setState] = useState({
//     error: false,
//     errorText: '',
//     emailApplied: '',
//     submitted: false,
//   });

//   const emailRef = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const email = emailRef.current.value.trim();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!email) {
//       setState({ ...state, error: true, errorText: "Field can't be empty" });
//     } else if (!emailRegex.test(email)) {
//       setState({ ...state, error: true, errorText: "Valid email required" });
//     } else {
//       setState({ ...state, error: false, errorText: '', emailApplied: email, submitted: true });
//     }
//   };

//   const handleDismiss = () => setState({ ...state, submitted: false });

//   return (
//     <div className="App">
//       {!state.submitted ? (
//         <div className="container">
//           <div className="texts">
//             <h1>Stay updated!</h1>
//             <p>Join 60,000+ product managers receiving monthly updates on:</p>
//             <ul>
//               <li>Product discovery and building what matters</li>
//               <li>Measuring to ensure updates are a success</li>
//               <li>And much more!</li>
//             </ul>
//             <form className={`form ${state.error ? 'active' : ''}`} onSubmit={handleSubmit}>
//               <h1>Email address</h1>
//               {state.error && <h6 className="error">{state.errorText}</h6>}
//               <input 
//                 ref={emailRef} 
//                 className="input" 
//                 placeholder="email@company.com" 
//               />
//               <button type="submit" className="submit">
//                 Subscribe to monthly newsletter
//               </button>
//             </form>
//           </div>
//           <div className="image">
//             <img className="desktop" src="/illustration-sign-up-desktop.svg" alt="banner" />
//             <img className="mobile" src="/illustration-sign-up-mobile.svg" alt="banner" />
//           </div>
//         </div>
//       ) : (
//         <div className="container-2">
//           <div className="box">
//             <img src="/icon-success.svg" alt="success" />
//             <h1>Thanks for subscribing!</h1>
//             <p>
//               A confirmation email has been sent to&nbsp;
//               <span className="drop">{state.emailApplied}</span>. 
//               Please open it and click the button inside to confirm your subscription.
//             </p>
//             <button onClick={handleDismiss} type="button" className="dismiss">
//               Dismiss message
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
