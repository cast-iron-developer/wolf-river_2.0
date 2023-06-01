import * as React from "react";
import Head from "next/head";
import Layout from "../../assets/components/layout";
import SingleColumn from "../../assets/components/singleColumn";
import TwoColumns from "../../assets/components/TwoColumns";
import Link from "next/link";
import classes from "../../assets/scss/modules/contact.module.scss";

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact | Wolf River Psychological Services</title>
            </Head>
            <Layout page="contact">
                <SingleColumn sectionId="contactIntro">
                    <div className={classes.contactBox}>
                        <h1 className="margin-0">Contact</h1>
                        <p className="margin-bottom-0">
                            This information is not intended for emergency
                            contact. 
                            <strong>
                                If you are experiencing a medical or mental
                                health emergency, please call 911 or go to your
                                local Emergency Department for evaluation.
                            </strong>
                            You can also reach the National Suicide Prevention
                            Lifeline at:
                            <Link href="tel:18002738255">
                                <a
                                    className="phoneLink"
                                    title="National Suicide Prevention Lifelines"
                                >
                                    1 (800) 273-8255
                                </a>
                            </Link>
                            .
                        </p>
                    </div>
                </SingleColumn>
                <SingleColumn>
                    <h5 className="h1 margin-vert-0">Contact Information:</h5>
                    <TwoColumns
                        sectionId="contactInfo"
                        left={<LeftContact />}
                        right={<RightContact />}
                    ></TwoColumns>
                </SingleColumn>
            </Layout>
        </>
    );
};

export default Contact;

const LeftContact = () => (
    <h5 className="h2 margin-vert-0 text-underline">
        Wolf River Psychological Services, LLC
    </h5>
);

const RightContact = () => (
    <>
        <p className="margin-top-0 text-no-underline text-white">
            <a
                href="https://goo.gl/maps/idFvFZf2gi7Zaq1F9"
                target="_blank"
            >
                <a
                    className="text-white text-no-underline"
                    target="_blank"
                    without="true"
                    rel="noreferrer"
                    title="Wolf River Psychological Services Location"
                >
                    5050 Poplar Ave. <br />
                    Suite 405 <br />
                    Memphis, TN 38157
                </a>
            </a>
        </p>
        <p>
            Phone:
            <Link href="tel:+9013007320">
                <a className="text-white text-no-underline"> (901) 300-7320</a>
            </Link>
        </p>
    </>
);
