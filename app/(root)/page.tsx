"use client";
import React from 'react'
import HeaderBox from '../components/HeaderBox'
import TotalBalanceBox from '../components/TotalBalanceBox'

const Home = () => {
    const loggedIn = { firstNmae: 'Zunair' }
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstNmae || 'Guest'}
                        subtext="Access and manage your account and transactions
                        efficiently." />
                </header>

                <TotalBalanceBox accounts={[]} totalBanks={0} totalCurrentBalance={0} />
            </div>

        </section>
    )
}

export default Home
