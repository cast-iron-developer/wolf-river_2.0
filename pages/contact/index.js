import * as React from "react";
import Head from "next/head";
import Layout from "../../assets/components/layout";
import SingleColumn from "../../assets/components/singleColumn";
import LeftOffset from "../../assets/components/partials/LeftOffset";
import RightOffset from "../../assets/components/partials/RightOffset";
import TwoColumns from "../../assets/components/TwoColumns";
import Link from "next/link";

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact | Wolf River Psychological Services</title>
            </Head>
            <Layout page="contact">
                <SingleColumn>
                    <h5 className="h1 margin-vert-0">Contact Information:</h5>
                    <p>
                        <strong>
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
                        </strong>
                    </p>
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
            <Link
                href="www.google.com/maps/dir/284+German+Oak+Dr+%23100,+Cordova,+TN+38018/@35.1231417,-89.7991513,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x887f9b8ba5d99feb:0x56fa7567c22187db!2m2!1d-89.7969626!2d35.1231417"
                passHref={true}
            >
                <a
                    className="text-white text-no-underline"
                    target="_blank"
                    without="true"
                    rel="noreferrer"
                    title="Wolf River Psychological Services Location"
                >
                    284 German Oak Drive <br />
                    Suite 100 <br />
                    Cordova, TN 38018
                </a>
            </Link>
        </p>
        <p>
            Phone:
            <Link href="tel:+9013007320">
                <a className="text-white text-no-underline"> (901) 300-7320</a>
            </Link>
        </p>
        <p>
            Fax: <strong>(901) 255-1158</strong>
        </p>
    </>
);
