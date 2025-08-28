require('dotenv').config();
export const metadata = {
  title: `${process.env.APP_NAME} | Welcome`,
};
export default function Register() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className="auction-card">
            <div className="auction-header">
              <h1>Create Account</h1>
            </div>
            <div className="auction-items container">
              <div className='row'>
                <div className='col-md-4 offset-md-4'>
                  <div className='card p-2'>
                    <form>
                      <div className="form-group mb-3">
                        <label>Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label>User Name </label>
                        <input
                          type="email"
                          className="form-control"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>
                      <div  className='text-end'>
                        <button type="submit" className="btn btn-primary">
                          Login
                        </button>
                      </div>
                      <hr></hr>
                      <div className="form-check mb-3">
                         <p> Don't have account ? Create Account</p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
