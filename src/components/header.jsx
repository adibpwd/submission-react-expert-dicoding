import React, {} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncUnsetUser } from '../states/auth/action';

function Header() {
    const auth = useSelector((state) => state.auth);
    // const [showDropdown, setShowDropdown] = useState(false);
    const dispatch = useDispatch();

    // const toggleDropdown = () => {
    //     setShowDropdown(!showDropdown);
    // };

    const handleLogout = () => {
        dispatch(asyncUnsetUser());
        // setShowDropdown(false);
    };

    return (
      <header>
        <nav>
          <div className="left-section">
            <h1>Submission Test</h1>
          </div>
          <ul className="right-section">
            <li><a href="/">Beranda</a></li>
            <li><a href="/leaderboard">Leaderboard</a></li>
            <li><a href="/all-users">Semua Pengguna</a></li>
            {/* <li id="userStatus" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}> */}
            {auth ? (
              <>
                <li>
                  <a href="#">{auth.name}</a>
                </li>
                <li>
                  <a href="#" onClick={handleLogout}>Keluar</a>
                </li>
              </>
                        ) : (
                          <a href="/login">Login</a>
                        )}
            {/* </li> */}
          </ul>
        </nav>
      </header>
    );
}

export default Header;
