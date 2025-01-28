"use client"
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='border-2 relative min-h-96' style={{ background: 'linear-gradient(to bottom, #F3F4F6, #F7D7AC)'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    {/* <img src="/logo.png" alt="Logo" style={{ height: '50px' }} /> */}
                    Logo
                </div>
                <div>
                    <nav>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>
                    <form>
                        <input type="email" placeholder="Sign up for newsletter" style={{ padding: '5px' }} />
                        <button type="submit" style={{ padding: '5px 10px', marginLeft: '5px' }}>Sign Up</button>
                    </form>
                </div>
            </div>
            <div className='absolute bottom-1 border text-[#faebd7] w-full text-center text-4xl md:text-5xl lg:text-6xl font-bold'>Orange County Fun Frenzy</div>
        </footer>
    );
};

export default Footer;