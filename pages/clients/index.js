import * as React from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "../../assets/components/layout";
import SingleColumn from "../../assets/components/singleColumn";

const Clients = () => (
    <>
        <Head>
            <title>Wolf River Psychology | Client Portal</title>
        </Head>

        <Layout page="client">
            <SingleColumn isSplit={false}>
                <h3 className="h1 margin-bottom-1">Client Portal:</h3>
                <Link href="https://krystin-coldwell.clientsecure.me/" passHref={true}>Schedule Appointment*</Link>
                <p><small><sup>*</sup>This is for existing clients only.</small></p>

            </SingleColumn>
        </Layout>
    </>
)

export default Clients;