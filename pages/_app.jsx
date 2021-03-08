import Link from 'next/link';
import React from 'react';
import content from '../page.content';

export default function MyApp({Component, pageProps}) {
   const mappedPages = content.page.map(page => (Object.values(page)[0]))
  return (
      <>
        <nav>
          <ul>
            {mappedPages.map(page => 
                <li key={page.url}>
                  <Link href="[...slug]" as={page.url}><a>{page.title}</a></Link>
                </li>
            )}
          </ul>
        </nav>
        <main>
          <Component {...pageProps} />
        </main>
      </>
  );
}