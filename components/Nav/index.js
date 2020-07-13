import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
const NavBar = () => {
  return (
    <>
       {/* <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a class='navbar-brand' href='#'>
          <img
          className="navbar-brand-image-logo"
            width={50}
            src='https://yt3.ggpht.com/a/AATXAJyKR008ypX-XnkBZjmFhMjMqotsV2WL0VFTaxOiuwA=s100-c-k-c0xffffffff-no-rj-mo'
            alt=''
          />{' '}
          Stilo Tech
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarsExample08'
          aria-controls='navbarsExample08'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>

        <div
          class='collapse navbar-collapse justify-content-end'
          id='navbarsExample08'
        >
          <ul class='navbar-nav'>
            <li class='nav-item active'>
              <a class='nav-link' href='#'>
                Veículos
              </a>
            </li>
            <li class='nav-item active'>
              <a class='nav-link' href='#'>
                Veículos
              </a>
            </li>
            <li class='nav-item active'>
              <a class='nav-link' href='#'>
                Veículos
              </a>
            </li>
            <li class='nav-item active'>
              <a class='nav-link' href='#'>
                Veículos
              </a>
            </li>
          </ul>
        </div>
      </nav> */}

      <Navbar  expand='lg'  bg="dark" variant="dark">
        <Navbar.Brand href='#home'>
          <img
            className='navbar-brand-image-logo'
            width={50}
            src='https://yt3.ggpht.com/a/AATXAJyKR008ypX-XnkBZjmFhMjMqotsV2WL0VFTaxOiuwA=s100-c-k-c0xffffffff-no-rj-mo'
            alt=''
          />{' '}
          Stilo Tech
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav className='justify-content-end'>
            <Nav.Link href='#link'>Sobre</Nav.Link>
            <Nav.Link href='#link'>Veículos</Nav.Link>
            <Nav.Link href='#link'>Vídeos</Nav.Link>
            <Nav.Link href='#link'>Etc.</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <header>
        <nav>
          <div id='div1'>
            <a>
              <img
                src='https://yt3.ggpht.com/a/AATXAJyKR008ypX-XnkBZjmFhMjMqotsV2WL0VFTaxOiuwA=s100-c-k-c0xffffffff-no-rj-mo'
                alt=''
              />{' '}
              Stilo Tech
            </a>
          </div>
          <div id='div2'>
            <a>Veículos</a>
            <a>Compre o seu</a>
            <a>Serviços Ford</a>
            <a>Veículos</a>
            <a>Veículos</a>
          </div>
        </nav>
      </header> */}
    </>
  );
};

export default NavBar;
