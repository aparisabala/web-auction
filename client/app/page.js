require('dotenv').config();
export const metadata = {
  title: `${process.env.APP_NAME} | Welcome`,
};
export default function Home() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className="auction-card">
            <div className="auction-header">
              <h1>Live Auction</h1>
              <p>Create an account and bid on the items to win</p>
            </div>
            <div className="auction-items container">
              <div className="row">
                <div className="col-md-3">
                  <div className="auction-item">
                    <img src="https://placehold.co/600x400" alt="Item 1" />
                    <h4>Antique Vase</h4>
                    <p>Starting Bid: $100</p>
                    <a href="#" className="bid-btn">
                      Place Bid
                    </a>
                  </div>
                </div>
                 <div className="col-md-3">
                  <div className="auction-item">
                    <img src="https://placehold.co/600x400" alt="Item 1" />
                    <h4>Antique Vase</h4>
                    <p>Starting Bid: $100</p>
                    <a href="#" className="bid-btn">
                      Place Bid
                    </a>
                  </div>
                </div>
                 <div className="col-md-3">
                  <div className="auction-item">
                    <img src="https://placehold.co/600x400" alt="Item 1" />
                    <h4>Antique Vase</h4>
                    <p>Starting Bid: $100</p>
                    <a href="#" className="bid-btn">
                      Place Bid
                    </a>
                  </div>
                </div>
                 <div className="col-md-3">
                  <div className="auction-item">
                    <img src="https://placehold.co/600x400" alt="Item 1" />
                    <h4>Antique Vase</h4>
                    <p>Starting Bid: $100</p>
                    <a href="#" className="bid-btn">
                      Place Bid
                    </a>
                  </div>
                </div>
                 <div className="col-md-3">
                  <div className="auction-item">
                    <img src="https://placehold.co/600x400" alt="Item 1" />
                    <h4>Antique Vase</h4>
                    <p>Starting Bid: $100</p>
                    <a href="#" className="bid-btn">
                      Place Bid
                    </a>
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
