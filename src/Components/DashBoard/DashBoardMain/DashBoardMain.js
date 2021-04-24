import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const DashBoardMain = () => {
    return (
        <section className='container'>
            <div className='container-fluid row'>
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className='col-md-5'>
                   <h3>Dashboard</h3>
                </div>
                <div className='col-md-5'>
                </div>
            </div>
        </section>
    );
};

export default DashBoardMain;