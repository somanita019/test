import React from 'react'

export const signup = () => {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <title>OpenEdu | Sign Up</title>
      <link rel="stylesheet" href="assets/css/log.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
    </head>
    <body>
      <div className="container-wrapped">
        <div className="container" id="container1">
          <div className="signin-panel">
            <h1>Sign Up</h1>
            <p>Enter your personal details to use all of site features</p>
          </div>
        </div>
        <div className="container" id="container2">
          <div className="form-container sign-in">
            <form>
              <h1>Sign Up</h1>
              <div className="social-icons">
                <button className="icon">
                  <i className="fa-brands fa-google-plus-g"></i>
                  Sign up With Google
                </button>
                <button className="icon">
                  <i className="fa-brands fa-facebook-f"></i>
                  Sign up With Facebook
                </button>
                <button className="icon">
                  <i className="fa-brands fa-twitter"></i>
                  Continue With Twitter
                </button>
                <button className="icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                  Sign up With Linkedin
                </button>
              </div>
              <span className="use-email">or signup with your email</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
              <a href="#">Already have an account?</a>
            </form>
          </div>
        </div>
      </div>
      <script src="assets/js/log.js"></script>
    </body>
  </html>
  )
}
