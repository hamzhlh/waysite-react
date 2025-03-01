import WayLogo from '../assets/img/WAY Logo no BG hi res-trans-01.png';

function HomePage() {
  return (
    <div className='container'>
      <div className='logo-container'>
        <img src={WayLogo} alt='logo'></img>
      </div>
      <div className='home-tag'>
        <h1>FOR A WAY BETTER FUTURE</h1>
      </div>
    </div>
  )
}

export default HomePage
