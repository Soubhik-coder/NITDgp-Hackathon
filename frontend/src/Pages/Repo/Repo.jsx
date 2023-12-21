import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import "./Repo.scss";

const Repo = () => {

    return (
        <div>
            <Navbar />
            <div className="repo-container">
                <div className="repo-main">
                    <div className="repo-header">
                        <h2>DRepo</h2>
                        <div className="access">Public</div>
                    </div>
                    <div className="branch-dropdown">
                        <div className="branch">
                            <select className="options">
                                <option value="main">main</option>
                                <option value="master">master</option>
                            </select>
                        </div>
                        <div className="code">
                            <button className="code-btn">
                                Code
                            </button>
                        </div>
                    </div>
                    <div className="files-list">
                        <table>
                            <thead>
                                <tr>
                                    <th>Profile Name</th>
                                    <th></th>
                                    <th>commits</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>path</td>
                                    <td>commit</td>
                                    <td>2 days ago</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="readme-container">
                        <div className="readme-header">
                            <h3>README.md</h3>
                        </div>
                        <div className="readme-body">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                                explicabo qui vero voluptatibus ipsum. Saepe nesciunt
                                laudantium laboriosam eligendi, numquam iste, odio aut quasi,
                                minima alias est velit sunt culpa!
                            </p>
                        </div>
                    </div>
                    <div className="add-commit">
                        <h2>Add new commit</h2>
                        <div className="file-upload-container">
                            <div className="file-upload">
                                <div className="drag-drop-area">
                                    <span>Drag and Drop your files</span>
                                    <input
                                        type="file"
                                        id="filepicker"
                                        name="fileList"
                                        webkitdirectory=""
                                        directory=""
                                    //   style={{ display: 'none' }}

                                    />
                                    <button className="select-files"
                                    >Select Directory</button>
                                </div>
                            </div>
                            <div className="commit-section">
                                <input type="text" name="" id="commitMessage" placeholder="Commit Message" />
                                <button id="submitBtn">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="repo-sidebar">
                    <div className="about">
                        <h3>About</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, assumenda labore nihil, velit sed voluptatem molestias incidunt ut ea illo ipsum porro facilis magnam? Fugit deleniti debitis reprehenderit, fugiat ipsum provident officiis praesentium ipsam voluptatem corrupti.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Repo;