import styles from "../styles/login.module.css";

export default function Login() {
  return (
    <>
    <div className={styles.topnav}>
      <a class="active" href="/home"><b>Lum&lambda;</b></a>
    </div>
      <div className={styles.splitscreen}>
          <div className={styles.shape1}>
              <div className={styles.left}>
                  <h1 className={styles.h1}>
                      SIGN UP
                  </h1>
                  <form>
                      <input className={styles.fname} placeholder="  First Name"></input> 
                      <input className={styles.lname} placeholder="  Last Name"></input>
                      <input className={styles.username} placeholder="  Username"></input>
                      <input className={styles.email} placeholder="  Email"></input>
                      <input className={styles.password} placeholder="  Password"></input>
                      <input type="checkbox" id="stayin" className={styles.stayinbutton}></input> 
                      <label for="stayin" className={styles.stayintext}> Stay signed in? </label>
                      <input type="button" className={styles.signup} onClick="alert('Signed Up!')" value="Sign Up"></input>
                  </form>
              </div>
          </div>
          <div className={styles.shape2}>
              <div className={styles.right}>
                  <h1 className={styles.h1}>
                      LOGIN
                  </h1>
                  <form>
                      <input className={styles.username} placeholder="  Username"></input> 
                      <input className={styles.password} placeholder="  Password"></input> 
                      <a className={styles.forgotpass} href="https://www.google.com"> Forgot password? </a>
                      <br></br>
                      <input type="button" className={styles.login} onClick="alert('Logged In!')" value="Login"></input>
                  </form>
                  <br></br>
                  <h2 className={styles.h2}>
                      SIGN IN WITH
                  </h2>
                  <a href="http://www.facebook.com">
                      <img 
                        className={styles.signinwithpics}
                        src="/facebook.png">
                      </img>
                  </a>
                  &emsp; &emsp; &emsp; {/* horizontal spacing */}
                  <a href="http://www.google.com">
                      <img 
                        className={styles.signinwithpics}
                        src="/google.png">
                      </img>
                  </a>
                  &emsp; &emsp; &emsp; {/* horizontal spacing */}
                  <a href="http://www.twitter.com">
                      <img 
                        className={styles.signinwithpics}
                        src="/twitter.png">
                      </img>
                  </a>
                  &emsp; &emsp; &emsp; {/* horizontal spacing */}
                  <a href="http://www.apple.com">
                      <img 
                        className={styles.signinwithpics}
                        src='/apple.png'>
                      </img>
                  </a>
              </div>
          </div>
      </div>
    </>
  );
}

