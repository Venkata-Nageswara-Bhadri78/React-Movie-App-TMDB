import React from 'react'
import { Link } from 'react-router-dom';

const HeaderItems = ({showMenu, setShowMenu}) => {
    const classNameStyle = 'p-3 bg-black text-white text-white';
  return (
    <div className={`md:bg-black md:p-4 flex-col md:flex-row justify-between ${showMenu ? 'flex' : 'hidden md:flex'}`}>
        <Link to={'/'}><div className={classNameStyle}>Home</div></Link>
        <Link to={'/browse_movies'}><div className={classNameStyle}>Browse Movies</div></Link>
        <Link to={'/popular_movies'}><div className={classNameStyle}>Popular Movies</div></Link>
        <Link to={'/top_rated_movies'}><div className={classNameStyle}>Top Rated</div></Link>
        <Link to={'/trending_movies'}><div className={classNameStyle}>Trending Movies</div></Link>
    </div>
  )
}

export default HeaderItems