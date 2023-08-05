import React from 'react'
import Layout from '../Componants/Layout'
import { Link } from 'react-router-dom'
import Banner from '../Images/banner.jpeg'
import '../Styles/HeaderStyle.css'
export default function Home() {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${Banner})`}}>
        <div className="headerContainer">
          <h1>Food WebSite</h1>
          <p>Best Food in India</p>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
