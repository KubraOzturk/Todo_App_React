import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom ">
          <ul className="nav nav-pills">
            <div className="navbar allign-item-center py-3 mb-4 ">
             <Link className="nav-item nav-link " to="/login">
                Login
              </Link>
              <Link className="nav-item nav-link " to="/">
               Todo List
              </Link> 
            </div>
          </ul> 
        </header>
      </div>
    </>
  );
}

export default Nav;
