import classNames from "classnames/bind"
import styles from './OperatorLayout.module.scss'
import Sidebar from "./Sidebar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const cx = classNames.bind(styles)

function Operator(){
    
    const [isOpen, setIsOpen] = useState(true);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
      

    return (
        <div className={cx('wrapper')}>
            { isOpen && (<div id="menu" className="show">
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
                            <h2>Thêm mới khách sạn</h2>
                            <div className={cx('mb-4')}>
                                <label className={cx('block')}>Tên Khách Sạn</label>
                                <input type="text" className={cx('input-border')} />
                            </div>
                            
                            <div className={cx('mb-4')}>
                                <label className={cx('block')} >Tỉnh Thành</label>
                                <select className={cx('input-border')}>
                                    <option></option>
                                </select>
                            </div>
                            <div className={cx('mb-4')}>
                                <label className={cx('block')} >Thông Tin</label>
                                <input type="text" className={cx('input-border')} />
                            
                            </div>
                            <div className={cx('mb-4')}>
                                <label className={cx('block')}>Hình Ảnh</label>
                                <input type="file" />
                            </div>
                            <div className={cx('mb-4')}>
                                <label className={cx('block')}>Trạng Thái</label>
                                <select className={cx('input-border')}>
                                    <option value="1">Còn phòng</option>
                                    <option value="2">Hết phòng</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className={cx('content-header')}>
                            <h2>Danh Sách Khách Sạn</h2>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Tên Khách Sạn</th>
                                        <th>ID Tỉnh Thành</th>
                                        <th>Thông Tin</th>
                                        <th>Hình Ảnh</th>
                                        <th>Trạng Thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>g</th>
                                        <th>b</th>
                                        <th>c</th>
                                        <th>b</th>
                                        <th>g</th>
                                    </tr>
                                    <tr>
                                        <th>gbvcsdsf</th>
                                        <th>csdfsdsfsd</th>
                                        <th>sdsdgvsdgvsdbv</th>
                                        <th>vsdgvsdbv   </th>
                                        <th>sdgvsdgvsdbv</th>
                                    </tr>
                                </tbody>
                
                            </Table>
                        </div>

                    </div>
                </div>

                
                
            </div>
        </div>
    )
}

export default Operator