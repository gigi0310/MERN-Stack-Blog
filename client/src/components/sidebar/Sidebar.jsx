import "./sidebar.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Sidebar = () => {
    const [cats, setCat] = useState([]);

    useEffect(()=>{
        const getCats = async () =>{
            const res = await axios.get('/categories')
            setCat(res.data)
           
        }
        getCats()
    },[])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://images.pexels.com/photos/931154/pexels-photo-931154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident ad explicabo rem ipsum a beatae dolor sint, pariatur quasi optio numquam eligendi quaerat quidem dicta quia! Dolorum nobis error aliquam!</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map(cat=>(
                        <Link to={`/?cat=${cat.name}`} className="link">
                            <li className="sidebarListItem">
                                {cat.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
