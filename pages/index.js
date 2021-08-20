import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Layout from "../assets/components/layout";
import SingleColumn from "../assets/components/singleColumn";
import OffsetColumns from "../assets/components/OffsetColumns";
import FullWidthColumn from "../assets/components/FullWidthColumn";
import LeftOffset from "../assets/components/partials/LeftOffset";
import RightOffset from "../assets/components/partials/RightOffset";
import Blockquote from "../assets/components/partials/Blockquote";
import SpaSharpIcon from "@material-ui/icons/SpaSharp";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

import classes from "../assets/scss/modules/index.module.scss";
import drColdwell from "../assets/images/dr-coldwell-homepage.jpg";

const Homepage = () => (
    <>
        <Head>
            <title>Wolf River Psychology | Home</title>
            <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <Layout page="home">
            <SingleColumn sectionId="homeIntro">
                <article className={classes.homeTextOuter}>
                    <div className={classes.homeTextInner}>
                        <p
                            className={`${classes.homeText} margin-none h1 text-uppercase text-center`}
                        >
                            "Insight for your <em>present</em> to inspire your{" "}
                            <em>future</em>."
                        </p>
                    </div>
                </article>
            </SingleColumn>

            <FullWidthColumn sectionId="homeServices">
                <div className={classes.flexContainer}>
                    <div className={classes.innerContainer}>
                        <Link href="/services#anxiety-disorders" scroll={false}>
                            <a className={classes.iconLink}>
                                <SpaSharpIcon className={classes.largeIcon} />
                                <p className={`${classes.iconCaption} h1`}>
                                    Anxiety <br />
                                    Disorders
                                </p>
                            </a>
                        </Link>
                    </div>
                    <div className={classes.innerContainer}>
                        <Link href="/services#ocd" scroll={false}>
                            <a className={classes.iconLink}>
                                <PermIdentityIcon
                                    className={classes.largeIcon}
                                />
                                <p className={`${classes.iconCaption} h1`}>
                                    Obsessive <br />
                                    Compulsive Disorder
                                </p>
                            </a>
                        </Link>
                    </div>
                    <div className={classes.innerContainer}>
                        <Link href="/services#sleep-disorders" scroll={false}>
                            <a className={classes.iconLink}>
                                <NightsStayIcon className={classes.largeIcon} />
                                <p className={`${classes.iconCaption} h1`}>
                                    Sleep <br />
                                    Disorders
                                </p>
                            </a>
                        </Link>
                    </div>
                </div>
            </FullWidthColumn>

            <OffsetColumns sectionId="homeOffsetColumns">
                <LeftOffset parent="homeLeft">
                    <p className="margin-top-0">
                        Welcome to Wolf River Psychological Services.
                    </p>
                    <p>
                        Please take a moment to explore this site for additional
                        information about me and the services offered. I also
                        encourage you to reach out via the contact page for any
                        additional questions.
                    </p>
                    <p>Thank you for your interest.</p>
                    <p className="margin-none">Sincerely,</p>
                    <p className="bold margin-none">Krystin Coldwell, Psy.D</p>
                    <p className="bold margin-none">Clinical Psychologist</p>
                </LeftOffset>
                <RightOffset parent="homeRight">
                    <Image
                        className={classes.drColdwellImg}
                        src={drColdwell}
                        layout="responsive"
                        title="Dr. Coldwell"
                    />
                </RightOffset>
            </OffsetColumns>

            <SingleColumn sectionId="homeQuote">
                <Blockquote attribution="Irvin D. Yalom">
                    The ultimate goal of therapy…it’s too hard a question. The
                    words come to me like tranquility, like fulfillment, like
                    realizing your potential.
                </Blockquote>
            </SingleColumn>
        </Layout>
    </>
);

export default Homepage;
