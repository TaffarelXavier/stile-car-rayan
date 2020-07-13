import Header from '../Head';
import Nav from '../Nav';
import Footer from '../Footer';

export default function Home(props) {
  const { children } = props
  return (
    <>
      <Header />
      <div className='container-fluid' style={{ padding: 0, margin: 0 }}>
        <main>
          <Nav />
          <section id='secao-corousel'>
            <img
              src='https://www.ford.com.br/content/ford/br/pt_br/site-wide-content/billboard-carousels/homepage-carousel/_jcr_content/par/billboard_999058049/imageComponent/image.imgs.full.high.jpg'
              alt=''
            />
          </section>
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
}
