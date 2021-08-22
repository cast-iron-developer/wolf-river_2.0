import * as React from "react"
import Layout from '../assets/components/layout';
import SingleColumn from '../assets/components/singleColumn';
import Head from 'next/head';
import Link from 'next/link';

const NotFoundPage = () => (
  <>
    <Head>
      <title>Uh Oh! | Wolf River Psychological Services</title>
    </Head>
    <Layout page="notFound">
      <SingleColumn sectionId="notFound">
        <h2 className="h1">Page not found.</h2>
        <Link href="/">Go Home.</Link>
      </SingleColumn>

    </Layout>
  </>
)

export default NotFoundPage
