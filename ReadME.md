# Web-Auction

Web-Auction is a full-stack auction platform with a Next.js client and a Node.js server.

## Project Structure

``` 
/client   # Next.js frontend
/server   # Node.js backend
```

## Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

## Installation

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd web-auction
```

### 2. Install Dependencies

#### Client

```bash
cd client
npm install
```

#### Server

```bash
cd ../server
npm install
```

### 3. Environment Variables

Create `.env` files in both `client` and `server` folders as needed. Refer to sample files if provided.

### 4. Running Locally

#### Start Server

```bash
cd server
npm start
```

#### Start Client

Open a new terminal:

```bash
cd client
npm run dev
```

## Usage

- Access the frontend at `http://localhost:3000`
- The backend runs on `http://localhost:5000` (default)

## Contributing

Feel free to open issues or submit pull requests.

## License

MIT