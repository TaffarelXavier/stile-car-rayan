import React from "react";
import App, { Container } from "next/app";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "antd/dist/antd.css";
// import "react-toastify/dist/ReactToastify.min.css";
// import "react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css";
import { PageTransition } from "next-page-transitions";

class MyApp extends App {

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <PageTransition timeout={300} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
      </>
    );
  }
}

export default MyApp;