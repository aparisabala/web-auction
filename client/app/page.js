import HomePage from '@components/pages/HomePage';

require('dotenv').config();
export const metadata = {
  title: `${process.env.APP_NAME} | Welcome`,
};
export default function Home() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
            <HomePage />
        </div>
      </div>
    </div>
  );
}
