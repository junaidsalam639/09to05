import React from 'react'
import Layout from '../components/layout/Layout'
import HeroSection from '../components/home/HeroSection'
import StorySection from '../components/home/StorySection'
import MenuSection from '../components/home/MenuSection'
import ReviewsSection from '../components/home/ReviewsSection'

export default function HomePage() {
    return (
        <>
            <main className="min-h-screen overflow-x-hidden">
                <Layout>
                    <HeroSection />
                    <StorySection />
                    <MenuSection />
                    <ReviewsSection />
                </Layout>
            </main>
        </>
    )
}


