import React from 'react'

export default function loginwithgg() {
  return (
    <div>
      <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>OpenEdu | Login</title>
        <link rel="shortcut icon" href="assets/images/favicon.png" type="image/x-icon" />
        <link rel="stylesheet" href="assets/css/log.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body>
        <div className="container-wrapped">
          <div className="container" id="container1">
            <div className="signin-panel">
              <h1>Sign In</h1>
              <p>Enter your personal details to use all of site features</p>
            </div>
          </div>
          <div className="container" id="container2">
            <div className="form-container sign-in">
              <form>
                <h1>Sign In</h1>
                <div className="social-icons">
                  <button className="icon">
                    <i className="fa-brands fa-google-plus-g"></i>
                    Continue With Google
                  </button>
                  <button className="icon">
                    <i className="fa-brands fa-facebook-f"></i>
                    Continue With Facebook
                  </button>
                  <button className="icon">
                    <i className="fa-brands fa-twitter"></i>
                    Continue With Twitter
                  </button>
                  <button className="icon">
                    <i className="fa-brands fa-linkedin-in"></i>
                    Continue With Linkedin
                  </button>
                </div>
                <span className="use-email">or use your email</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign In</button>
                <a href="#">Forget Your Password?</a>
              </form>
            </div>
          </div>
        </div>
        <script src="assets/js/log.js"></script>
      </body>
    </html>

    </div>
  )
}
