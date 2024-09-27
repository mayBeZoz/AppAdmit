import React from 'react'
import Hero from './_components/Hero'
import Features from './_components/Features'
import Articles from './_components/Articles'
import AdComponent from '../_layout/AdComponent'

function BlogPage() {
    return (
        <>
            <Hero/>
            {/* <Features/> */}
            <Articles/>
            <AdComponent/>
        </>
    )
}

export default BlogPage