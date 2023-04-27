// import React,{useEffect, useState} from 'react';
// import {Link, useHistory} from "react-router-dom";
// import axios from "axios";
// import AdminSideNav from "./AdminSideNav";
// import '../CSS/Admin/tableEmployee.css';
// import Search from "../Common/Search";
// import AdminNav from '../Common/AdminSide/AdminNav';
import './ProductView.css'




const ProductView = () => {


    // // let his = useHistory();
    // const [Employee, setEmployee] = useState([]);
    // const [SearchWord, setSearchWord] = useState('');



    // //get logged Reviewer
    // useEffect(() => {
    //     // const loggedInUser = localStorage.getItem("user");
    //     // console.log(loggedInUser);

    //     function getEmployee() {
    //         axios.get("http://localhost:8070/Employee" ).then((res) => {
    //             setEmployee(res.data);
    //             console.log(res.data);
    //         }).catch((err) => {
    //         })
    //     }

    //     getEmployee();
    // }, [Employee]);
    // const deleteRoom = (id) =>{
    //     axios.delete('http://localhost:8070/Employee/delete/' + id).then(()=>{
    //         alert("Employee details deleted successfully!!");
    //     }).catch((err)=>{
    //         alert(err);
    //     })
    // };





    return (
            <div className="row1">
              
                {/* <div className="col-2"> <AdminNav/></div> */}
                <div className="col-10"> <br/>
                    {/*<Search/>*/}
                    <div className="col-xs-6">
                        {/* <div className="searchBar">
                            <input type="search" className="form-control" placeholder="Search Name or NIC NUMBER" onChange={event =>{setSearchWord(event.target.value)}}/>
                        </div> */}
                    </div>
                    {/*end*/}
                    <div className="">
                        <div className="row1">

                            <div className="col-12 col-sm-6 col-md-6">
                            </div>
                            <span className="counter pull-right"></span>
                            <br/><br/>
                        </div>

                            <div className='editAddEmployeeButton'>
                                <a href="/EmployeeAdd" className="btn-btn-primary" role="button">
                                    <i className="fa-fa-plus"></i> Add New Product
                                </a>
                            </div>

                        <br /><br />
                        <div className="row1">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <div className='tablePadding'>
                                    <table class="table">
                                        <thead class="thead-dark">
                                            <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                        </table>

                                        <table class="table">
                                        <thead class="thead-light">
                                            <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                    {/*<button className="btn btn-primary">*/}
                                    {/*    <Link to="/">+ Back to Home</Link>*/}
                                    {/*</button>*/}

                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div></div>

            </div>
    )
}
export default ProductView;
