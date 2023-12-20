import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/NavBar/Navbar'
import { useParams } from 'react-router-dom';

const commitData = [
    { id: 1, message: 'Initial commit', author: 'John Doe', date: '2023-01-01' },
    { id: 2, message: 'Add feature X', author: 'Jane Doe', date: '2023-01-05' },
    { id: 3, message: 'Add feature X', author: 'Jane Doe', date: '2023-01-05' },
    { id: 4, message: 'Add feature X', author: 'Jane Doe', date: '2023-01-05' },
    { id: 5, message: 'Add feature X', author: 'Jane Doe', date: '2023-01-05' },
    { id: 6, message: 'Add feature X', author: 'Jane Doe', date: '2023-01-05' },
    { id: 7, message: 'Add feature X', author: 'Jane Doe', date: '2023-01-05' },
    // Add more commit data as needed
];

const Commit = () => {

    const [commits, setCommits] = useState([]);
    const { profilename, reponame } = useParams();

    return (
        <div className='comit-history'>
            <Navbar />
            <div className="commit-history-page">
                <h1>Commits</h1>
                <ul>
                    {commitData.map(
                        (commit) => {
                            <li>
                                <div className="commit-info">
                                    <div className="commit-message">
                                        {commit.message}
                                    </div>
                                    <div className="profile-name">{commit.author}</div>
                                </div>
                            </li>
                        }
                    )}
                    {/* <li>
                        <div className="commit-info">
                            <div className="commit-message">
                                {commitData.message}
                            </div>
                            <div className="profile-name">{commitData.author}</div>
                        </div>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default Commit
