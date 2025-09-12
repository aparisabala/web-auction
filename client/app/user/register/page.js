import RegisterForm from "@components/pages/user/register/RegisterForm";

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
                   <RegisterForm />
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
