import Head from '../components/Head';
import Nav from '../components/Nav';
import SecaoCarro1 from '../components/SecaoCarros1';
import SecaoSeven from '../components/SecaoSeven';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head />
      <div className='container-fluid' style={{ padding: 0, margin: 0 }}>
        <main>
          <Nav />
          <section id='secao-corousel'>
            <img
              src='https://www.ford.com.br/content/ford/br/pt_br/site-wide-content/billboard-carousels/homepage-carousel/_jcr_content/par/billboard_999058049/imageComponent/image.imgs.full.high.jpg'
              alt=''
            />
          </section>

          <SecaoCarro1 />

          <section id='secao-banner'>
            <div>
              <h1 id='ofertas-text'>Ofertas Ford</h1>
              <p>
                Encontre a oportunidade
                <br />
                perfeita para você
              </p>
              <button
                className='btn btn-primary'
                style={{ background: '#008cba' }}
              >
                Saiba mais
              </button>
            </div>
          </section>
          <section id='section-five'>
            <div>
              <div className='boxes box1'>Box 1</div>
              <div className='boxes box2'>Box 2</div>
            </div>
            <div>
              <div className='boxes box3'>Box 3</div>
              <div className='boxes box4'>Box 4</div>
            </div>
            <div>
              <div className='boxes box5'>Box 5</div>
              <div className='boxes box6'>Box 6</div>
            </div>
          </section>
          <section id='section-six'>
            <h1>
              O que tem de Novo na Ford
              <br />
              Saiba aqui sobre as notícias, ofertas e lançamentos.
            </h1>
          </section>
          <SecaoSeven />
          <Footer />
        </main>
      </div>
    </>
  );
}
