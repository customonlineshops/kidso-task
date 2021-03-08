import Head from 'next/head';
import content from '../page.content.json';

export default function Page({page}) {
  if (!page) {
    return null;
  }
  const pageValue = Object.values(page)[0]
  return (
      <>
        <Head>
          <title>{pageValue.title}</title>
          <meta name="og:title" content={pageValue.meta.meta_title} key="title"/>
          <meta name="description" content={pageValue.meta.meta_description} key="description"/>
        </Head>
        <h1>{pageValue.title}</h1>
        <div dangerouslySetInnerHTML={{__html: pageValue.content}}></div>
      </>
  );
}

export async function getStaticPaths() {
  const paths = content.page.map(p => {
    const slug = Object.values(p)[0].url.split('/').slice(1);
    return {params: {slug}};
  });
  return {paths, fallback: false};
}

export async function getStaticProps({params}) {
  const currentPath = `/${params.slug.join('/')}`;
  const page = content.page.find(page => Object.values(page)[0].url === currentPath) || {notfound: true};
  return {props: {page}};
}