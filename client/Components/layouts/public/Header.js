import './styles/header.css'
import Link from "next/link";
import React from 'react'
export default function Header() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='bg-success'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <h1 className='title ps-2'> Web Audition </h1>
                        </div>
                        <div className='col-md-9'>
                            <div className='d-flex flex-row justify-content-end align-items-center h-100 pe-2'>
                                <Link href="/" className='me-3 login-text text-white'> <i className="fa-solid fa-home"></i> Home </Link>
                                <Link href="/user/login" className='me-3 login-text text-white'> <i className="fa-solid fa-arrow-right-to-bracket"></i> Login</Link>
                                <Link href="/user/register" className='login-text text-white'> <i className="fa-solid fa-user-plus"></i> New Account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
