
'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'
import Header from "@components/layouts/public/Header";
import Footer from "@components/layouts/public/Footer";
import React, { useEffect } from "react";
export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, [])
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" /> 
      </head>
        <body>
            <Header />
              <div className='container'>
                <div className='card'>
                  <div className='row no-gutters'>
                    <div className='col-md-12 p-0'>
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            <Footer />
        </body>
    </html>
  );
}
