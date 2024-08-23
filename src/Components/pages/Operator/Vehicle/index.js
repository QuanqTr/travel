import classNames from "classnames/bind"
import styles from "./Vehicle.module.scss"
import Sidebar from "../Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const cx = classNames.bind(styles)

function Vehicle() {

    const [isOpen, setIsOpen] = useState(true);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return ( 
        <div className={cx('wrapper')}>
            { isOpen && (<div className={cx('menu')}>
                <Sidebar/>
            </div>)}
            <div className={cx('content')}>
                <div className={cx('nav')}>
                    <div className={cx('nav-home')}>
                        <button onClick={toggleMenu} className={cx('header')}>
                            <FontAwesomeIcon icon={faBars}/>
                        </button>
                        <p className={cx('pading10px')}>Home</p>
                        <p className={cx('pading10px')}>Contact</p>
                    </div>
                    <div className={cx('header-icon')}>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faComment} />
                        </button>
                        
                    </div>
                </div>

                <div>
                    <div className={cx('form-create')}>
                        <div className={cx('form-content')}>
                            <h2>Quản lý dịch vụ</h2>
                            <div className={cx('mb-4')}>
                                <label className={cx('block')}>Tên Dịch vụ</label>
                                <input type="text" className={cx('input-border')} />
                            </div>

                            <div className={cx('mb-4')}>
                                <label className={cx('block')} >Loại Dịch Vụ</label>
                                <input type="text" className={cx('input-border')} />
                            </div>
                            <div className={cx('mb-4')}>
                                <label className={cx('block')} >Chỗ ngồi</label>
                                <input type="text" className={cx('input-border')} />
                            </div>
                            
                            <div className={cx('mb-4')}>
                                <label className={cx('block')} >Tỉnh Thành</label>
                                <select className={cx('input-border')}>
                                    <option></option>
                                </select>
                            </div>
                           
                            <div className={cx('mb-4')}>
                                <label className={cx('block')}>Trạng Thái</label>
                                <select className={cx('input-border')}>
                                    <option value="1">Còn Xe</option>
                                    <option value="2">Hết Xe</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className={cx('content-header')}>
                            <h2>Danh Sách Dịch Vụ</h2>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Tên Dịch vụ</th>
                                        <th>Loại Dịch Vụ</th>
                                        <th>Chỗ ngồi</th>
                                        <th>Tỉnh Thành</th>
                                        <th>Trạng Thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Xe khách Huế-Đà Nẵng</th>
                                        <th>Ô tô 40 chỗ</th>
                                        <th>40</th>
                                        <th>75</th>
                                        <th>Còn xe</th>
                                    </tr>
                                    <tr>
                                        <th>Xe khách Huế-Đà Nẵng</th>
                                        <th>Ô tô 40 chỗ</th>
                                        <th>40</th>
                                        <th>75</th>
                                        <th>Còn xe</th>
                                    </tr>
                                </tbody>
                
                            </Table>
                        </div>

                    </div>
                </div>

                
                
            </div>
        </div>
     );
}

export default Vehicle;