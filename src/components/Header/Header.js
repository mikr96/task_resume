import './Header.css'
import React, { useState } from 'react'
import {Card, Button, ProgressBar} from 'react-bootstrap'


const Header = (props) => {

    const [allValues, setOpen] = useState({
        experience: true,
        education: false,
        portfolio: false,
        skills: false,
    });
    
    const viewExperience = () => {
        console.log(allValues)
        setOpen({
            experience: !allValues.experience,
            education: false,
            portfolio: false,
            skills: false,
        })
    }

    const viewEducation = () => {
        setOpen({
            experience: false,
            education: !allValues.education,
            portfolio: false,
            skills: false,
        })
    }

    const viewPortfolio = () => {
        setOpen({
            experience: false,
            education: false,
            portfolio: !allValues.portfolio,
            skills: false,
        })
    }

    const viewSkills = () => {
        setOpen({
            experience: false,
            education: false,
            portfolio: false,
            skills: !allValues.skills,
        })
    }

    return (
        <>
            <div className="row prl-15 mt-5">
                <div className="col-md-3 col-sm-12">
                    <button 
                        className="button" 
                        onClick={viewExperience}  
                    >
                        <b>{props.subs[0]}</b>
                    </button>
                </div>
                <div className="col-md-3 col-sm-12">
                    <button 
                    className="button" 
                    onClick={viewEducation}         
                    >
                        <b>{props.subs[1]}</b>
                    </button>
                </div>
                <div className="col-md-3 col-sm-12">
                    <button 
                        className="button" 
                        onClick={viewPortfolio}
                    >
                        <b>{props.subs[2]}</b>
                    </button>
                </div>
                <div className="col-md-3 col-sm-12">
                    <button 
                        className="button" 
                        onClick={viewSkills}
                    >
                        <b>{props.subs[3]}</b>
                    </button>
                </div>
            </div>
            <div className="row prl-15 mt-5">
                <div className="col-md-12 col-sm-12">
                    {allValues.experience &&
                        <div>
                            <Card>
                                <Card.Body>
                                    <strong>Freelance</strong>
                                    <br/>
                                    <p>Ikom Solutions | 2019 - Present</p>
                                    <ul>
                                        <li>Build a logbook system with a dashboard that records all activity madeby the employees</li>
                                        <li>Create a crowdfunding mobile app using Ionic framework</li>
                                        <li>Manage few projects, collect requirements and apply agiledevelopment cycle</li>
                                    </ul>

                                    <strong>Internship</strong>
                                    <br/>
                                    <p>TM Research & Development | 2018 - 2019</p>
                                    <ul>
                                        <li>Worked as a front-end developer using Angular framework</li>
                                        <li>Handle backend scripting using Node-RED</li>
                                        <li>Farmiliar with REST API</li>
                                    </ul>    
                                </Card.Body>
                            </Card>
                        </div> 
                    }
                    {allValues.education &&
                        <div>
                            <Card>
                                <Card.Body>
                                    <strong>Universiti Teknologi Malaysia</strong>
                                    <br/>
                                    <p>Master of Philosophy in Software Engineering | 2019 - Present</p>
                                    <ul>
                                        <li>Graduate Research Assistant</li>
                                        <li>Felow Assistant, Kolej Tun Hussien Onn</li>
                                    </ul>
                                    <p>Bachelor of Computer Science (Software Engineering) | 2016 - 2019</p>
                                    <ul>
                                        <li>CGPA of 3.51</li>
                                        <li>Program Director, Festival Faculty of Computing (FESCOMP)</li>
                                        <li>Department of Campus Welfare & Sustainability, Student Representative Council</li>
                                        <li>President, Persatuan Mahasiswa Sains Komputer (PERSAKA)</li>
                                    </ul>
                                    <strong>Universiti Teknologi MARA Malaysia</strong>
                                    <br/>
                                    <p>Foundation in Engineering | 2015 - 2016</p>
                                    <ul>
                                        <li>CGPA of 3.71</li>
                                    </ul>    
                                </Card.Body>
                            </Card> 
                        </div>
                    }
                    {allValues.portfolio &&
                        <div>
                            <Card>
                                <Card.Body>
                                    <div className="d-grid gap-2">
                                        <Button variant="outline-secondary">Project A</Button>{' '}
                                        <Button variant="outline-secondary">Project B</Button>{' '}
                                        <Button variant="outline-secondary">Project C</Button>{' '}
                                        <Button variant="outline-secondary">Project D</Button>{' '}
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    }
                    {allValues.skills &&
                        <div>
                            <Card>
                                <Card.Body>
                                    <div className="d-grid gap-2">
                                        <ProgressBar animated variant="success" now={50} label={`50%`} />{'C/C++'}
                                        <ProgressBar animated variant="info" now={50} label={`50%`} />{'JavaScript'}
                                        <ProgressBar animated variant="warning" now={30} label={`30%`} />{'Angular Framework'}
                                        <ProgressBar animated variant="danger" now={50} label={`50%`} />{'Express Framework'}
                                        <ProgressBar animated variant="danger" now={20} label={`20%`} />{'React Framework'}
                                        <ProgressBar animated variant="danger" now={50} label={`50%`} />{'Graphic Design'}
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    }
                </div>
            </div>
        </>
    );
} 


export default Header;