import * as React from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "../../assets/components/layout";
import SingleColumn from "../../assets/components/singleColumn";
import LeftOffset from "../../assets/components/partials/LeftOffset";

import classes from "../../assets/scss/modules/clients.module.scss";

const Clients = () => (
    <>
        <Head>
            <title>Wolf River Psychology | Client Portal</title>
        </Head>

        <Layout page="client">
            <SingleColumn sectionId="clientsIntro">
                <LeftOffset parent="clientLeft">
                    <h1 className="text-white text-shadow-dark">Clients:</h1>
                </LeftOffset>
            </SingleColumn>
            <SingleColumn>
                <h3 className="h1 margin-bottom-1">Client Portal:</h3>
                <Link
                    href="https://krystin-coldwell.clientsecure.me/"
                    passHref={true}
                >
                    <a className={classes.button}
                       target="_blank">Schedule Appointment*</a>
                </Link>
                <p>
                    <small>
                        <sup>*</sup>This is for existing clients only.
                    </small>
                </p>
            </SingleColumn>
        </Layout>
    </>
);

export default Clients;
