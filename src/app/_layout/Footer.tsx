import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear() 
    return (
        <footer className='bg-slate-200'>
            <div className="container flex justify-center items-center py-12">
                <p className=' text-whit font-medium'>All Rights Reserved © AppAdmit {currentYear}</p>
            </div>
        </footer>
    )
}

export default Footer