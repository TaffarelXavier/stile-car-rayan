import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
const NavBar = () => {
  return (
    <>
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
