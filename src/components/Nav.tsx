import {Link} from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div className='nav'>
      <Link to='/' className='nav-link nav-item'>Home</Link>
      <Link to='/SavedCandidates' className='nav-link nav-item'>Potential Candidates</Link>
    </div>
  )
};

export default Nav;
