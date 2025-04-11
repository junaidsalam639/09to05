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
                    <div
                        className='w-full bg-center bg-no-repeat bg-cover'
                        style={{
                            backgroundImage: "url(/assets/images/bg-light.png)",
                        }}>
                        <HeroSection />
                        <StorySection />
                    </div>
                    <MenuSection />
                    <ReviewsSection />
                </Layout>
            </main>
        </>
    )
}


