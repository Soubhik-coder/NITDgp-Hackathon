import React from 'react'
import Navbar from '../../Components/NavBar/Navbar'

const Repo = () => {
  return (
    <div>
        <Navbar/>
        <div className="repo-container">
            <div className="repo-main">
                <div className="repo-header">
                    <h2>Repo</h2>
                    <div className='public'>Public</div>
                </div>
                <div className="branch-dropdown">
                    <div className="branch">
                        <select name="" id="">
                            <option value="main">main</option>
                            <option value="master">master</option>
                        </select>
                    </div>
                    <div className="code">
                        <button>Code</button>
                    </div>
                    <div className="file-list">
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nam nostrum eaque animi deserunt cumque eius nemo maiores aspernatur consequatur, optio fugiat unde vel tempore necessitatibus saepe officiis obcaecati quas quae magnam veniam odit!</p>
                        </div>
                        <div className="add-commit">
                            <h2>Add new commit</h2>
                            <div className="file-upload-container">
                                <div className="file-upload">
                                    <div className="drag-drop" id='dropzone'>
                                        <span>Drag and Drop your files</span>
                                        <input type="file" id="filepicker" name='filelist' webkitdirectory="" directory="" />
                                        <button>Upload Directory</button>
                                    </div>
                                </div>
                                <input type="text" name='' id='' placeholder='Commit Message' />
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="side-bar">
                        <div className="about">
                            <h3>About</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quia odit nobis consequatur maiores eum blanditiis voluptas sint beatae numquam ad quos quam expedita facilis voluptatem vel fugiat molestiae qui repellendus, pariatur, perspiciatis quasi!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Repo
