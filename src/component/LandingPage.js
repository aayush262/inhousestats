import React from 'react';

import { Link } from 'react-router-dom';

export const LandingPage = () => {
    return (<>
        <section className="content" style={{ background: 'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url("https://i.imgur.com/1TXR1ab.jpeg")', margin: '0', border: 'none', borderRadius: '0', height: '100vh', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className="body_scroll">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-12">

                            <h2 style={{ color: 'white' }}>inhouseStats</h2>
                            <br></br>

                        </div>


                    </div>
                </div>
                <div className="container-fluid ">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12">
                            <div className="card mcard_3">
                                <div className="body" style={{ height: '530px', background: 'transparent' }}>

                                    <Link to ="/admin"><button className="btn btn-secondary" style={{margin:'140px', fontSize:'30px',marginBottom:'40px'}}>Admin</button></Link>
                                    <Link to = "/leaderboard"><button className="btn btn-warning" style={{marginTop:'30px', fontSize:'30px'}}>Leaderboard</button></Link>
                                    
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="card">
                                <iframe width="956" height="538" src="https://www.youtube.com/embed/Ao3R8UKCy3k" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)

}