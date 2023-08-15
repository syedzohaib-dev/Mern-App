import React, { useEffect } from 'react'
import { FaHome } from 'react-icons/fa'
import { BiCategoryAlt } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom';



export default function Sidebar() {

    const location = useLocation()

    const NavItems = [
        {
            tab: "Home",
            url: "/",
            icon: <FaHome />
        },
        {
            tab: "Categories",
            url: "/category",
            icon: <BiCategoryAlt />
        }

    ]



    return (

        <>
            <div className="bg-primary p-3 d-flex text-white justify-content-between align-items-center">
                <span>Admin Name</span>
                <button className="btn btn-danger">Logout</button>
            </div>

            <ul className="nav flex-column pt-3">
                {
                    NavItems.map((val, key) =>
                        <li key={key} className={`nav-item m-2 ${location.pathname == val.url ? 'bg-white rounded' : null}`}>
                            <Link className="nav-link d-flex align-items-center justify-content-between" to={val.url}>
                                <span>{val.icon}</span>
                                <span>{val.tab}</span>
                            </Link>
                        </li>)
                }
            </ul>

        </>
    )
}
