import React from 'react'
import Navbar from '../../Components/NavBar/Navbar'
import './ProfilePage.scss'
import Repocard from '../../Components/Repocard/Repocard'

const ProfilePage = () => {
    return (
        <>
            <Navbar searchBar={true} />
            <div className="container">
                <div className="left-content">
                    <div className="img-container">
                        <img src="logo512.png" alt="" id='avatar' />
                    </div>
                    <div className="profile-description">
                        <h2 className="profile-name">Rishav Raj Kumar</h2>
                        <div className="profile-handle">rishav4101</div>
                        <div className="follow">
                            <span className="followers">
                                <span className='no-followers'>20 </span>
                                <span className='text-followers'>followers</span>
                            </span>
                            <span className="following">
                                <span className='no-following'>20 </span>
                                <span className='text-following'>following</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="right-content">
                    <h3 className="popular-repos">Popular Repositories</h3>
                    <Repocard name={"DRepo"} language={"JavaScript"} type={"Public"}/>
                </div>
            </div>
        </>
    )
}

export default ProfilePage