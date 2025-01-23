import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav'>
      <p className='nav-item'><Link to='/' className='nav-link'>Home</Link></p>
      <p className='nav-item'><Link to='/SavedCandidates' className='nav-link'>Potential Candidates</Link></p>
    </div>
  )
};

export default Nav;
