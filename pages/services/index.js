import * as React from "react";
import Head from "next/head";
import Layout from "../../assets/components/layout";
import SingleColumn from "../../assets/components/singleColumn";
import RightOffset from "../../assets/components/partials/RightOffset";
import LeftOffset from "../../assets/components/partials/LeftOffset";
import classes from "../../assets/scss/modules/services.module.scss";

const Services = () => {
    return (
        <>
            <Head>
                <title>Services | Wolf River Psychological Services</title>
            </Head>
            <Layout page="services">
                <SingleColumn sectionId="servicesIntro">
                    <RightOffset parent="rightServicesIntro">
                        <h5 className="h1 text-white text-shadow-dark margin-bottom-0">
                            Services:
                        </h5>
                        <p className="text-white text-shadow-dark">
                            Wolf River Psychological Services provides
                            individual assessment and psychotherapy to adult
                            clients and teenage clients. Please contact me for
                            information on availability and scheduling.
                        </p>
                    </RightOffset>
                </SingleColumn>

                <SingleColumn sectionId="firstSession">
                    <h5 className="h2">
                        What to Expect at Your First Session:
                    </h5>
                    <p>
                        Starting with a new therapist can be a difficult
                        decision. Knowing what to expect can reduce some of the
                        anxiety about the initial meeting. I take the first
                        session to extensively review the history of the
                        client’s symptoms by asking a series of questions about
                        their current functioning and history, sometimes dating
                        back to early childhood. While this may seem daunting,
                        the initial interview allows me to get a good
                        understanding of how a client’s difficulties developed,
                        and to understand how they are coping at present. Once
                        the interview is complete, I work collaboratively with
                        the patient to develop an individualized treatment plan,
                        including the estimated number of sessions, treatment
                        approach and expectations for the course of therapy.
                        Expect the initial session to take 60-90 minutes.
                    </p>
                    <h5 className="h2">Follow-up Sessions:</h5>
                    <p>
                        Psychotherapy sessions will be structured around the
                        client’s treatment plan. This will vary based on the
                        presenting issue, as well as the client’s strengths and
                        needs. Expect follow-up sessions to take 45-50 minutes
                        each.
                    </p>
                    <h5 className="h2">Additional Assessment:</h5>
                    <p>
                        Psychotherapy sessions will be structured around the
                        client’s treatment plan. This will vary based on the
                        presenting issue, as well as the client’s strengths and
                        needs. Expect follow-up sessions to take 45-50 minutes
                        each.
                    </p>
                </SingleColumn>

                <SingleColumn sectionId="costSection">
                    <h5 className="h1 margin-vert-0">Cost for Services</h5>
                    <LeftOffset parent="leftCostSection">
                        <h5 className="h2 margin-top-1 margin-bottom-0">
                            Insurance:
                        </h5>
                        <p>
                            I accept Aetna plans as an “in-network,” provider.
                        </p>
                        <p>
                            For all other plans I am “out-of-network,” but in
                            most cases can either file claims with your
                            insurance if you have out-of-network coverage.
                            Please check with your insurance plan to determine
                            your level of coverage.
                        </p>
                        <p>
                            <strong>
                                I am not able for file Medicare/Medicaid claims.
                            </strong>
                        </p>
                    </LeftOffset>
                    <RightOffset parent="rightCostSection">
                        <h5 className="h2 margin-top-1 margin-bottom-0">
                            Fees:
                        </h5>
                        <p>
                            Intake Session: <strong>$165.00</strong>
                        </p>
                        <p>
                            Follow-up sessions: <strong>$125.00</strong>
                        </p>
                        <p>
                            Payment is expected at the time of service. I accept
                            cash, check, or credit card payments.
                        </p>
                    </RightOffset>
                </SingleColumn>

                <SingleColumn sectionId="">
                    <h5 className="h1 margin-top-0 margin-bottom-1">
                        Services Offered:
                    </h5>
                    <h6 id="sleep-disorders" className={classes.sleepDisorders + " h3 margin-vert-0"}>
                        Sleep Disorders
                    </h6>
                    <p>
                        The primary treatment used to treat anxiety is Cognitive
                        Behavioral Therapy for Insomnia, or CBT-I. This approach
                        uses a combination of education, behavior change, coping
                        skills and sleep prescription to increase sleep
                        efficiency. It typically requires 5-8 sessions to
                        complete a course of CBT-I.
                    </p>
                    <h6 id="ocd" className={classes.ocd + " h3 margin-vert-0"}>
                        OCD
                    </h6>
                    <p>
                        The most effective treatment for OCD to date is
                        Exposures and Response Prevention, or ERP. This
                        treatment combines in-session learning and support with
                        out-of-session assignments to target both obsessive
                        thoughts and compulsive behaviors. More specifics on
                        this complex treatment can be found at IOCDF.org.
                        Additional treatments are available for OCD related
                        disorders such as ARFID and Tourette’s.
                    </p>
                    <h6 id="anxiety-disorders" className={classes.anxietyDisorders + " h3 margin-vert-0"}>
                        Anxiety Disorders
                    </h6>
                    <p>
                        The primary treatment utilized for these disorders is
                        Cognitive Behavioral Therapy. This broad category of
                        therapies focuses on the ways in which thoughts,
                        behaviors and emotions interact to create new patterns
                        of thoughts and coping skills. Treatment length varies
                        and the specifics of treatment will be determined by the
                        client’s individual symptoms.
                    </p>
                </SingleColumn>

                <SingleColumn sectionId="servicesBodyTop">
                    <h5 className="h2">
                        What to Expect at Your First Session:
                    </h5>
                    <p>
                        Starting therapy is an <em>important</em>, and sometimes{" "}
                        <em>difficult</em> decision. Finding the right fit in a
                        therapist can significantly impact the outcome of
                        treatment. As a result, there are several important
                        goals in an initial meeting.
                    </p>

                    <ol>
                        <li>
                            In order to get a thorough understanding of the
                            client’s symptoms and struggles, a clinical
                            interview is conducted. During this interview, the
                            client may be asked some difficult questions about
                            their current functioning, as well as their history
                            dating back to childhood. This information helps the
                            therapist get to know the client, and to understand
                            their individual needs.
                        </li>
                        <li>
                            A treatment plan will be developed based on the
                            information gathered in the clinical interview.
                            Creating this plan is a collaborative process
                            between therapist and client. The final plan should
                            be comprised of the evidence–based approach that has
                            the best chance of helping the client reach their
                            individual goals for therapy.
                        </li>
                        <li>
                            The client and the therapist must determine together
                            if they feel there is sufficient trust and comfort
                            to proceed with therapy. While it often takes time
                            to build a solid working relationship, this process
                            begins in the first session. If the client or
                            therapist feel that their needs would best be met in
                            a different setting, alternative referrals will be
                            discussed.
                        </li>
                    </ol>

                    <p>
                        <strong>
                            Expect the initial session to take 60-90 minutes.
                        </strong>
                    </p>
                    <h5 className="h2">Follow-up Sessions:</h5>
                    <p>
                        Psychotherapy sessions will be structured around the
                        client's treatment plan. This will vary based on the
                        presenting issue, as well as the client's strengths and
                        needs. Sometimes, homework will be assigned between
                        sessions. The work done outside of session is equally
                        important to what is accomplished within the therapist's
                        office.
                    </p>
                    <p>
                        <strong>
                            Expect follow-up sessions to take 45-50 minutes
                            each.
                        </strong>
                    </p>
                    <h5 className="h2">Additional Assessment:</h5>
                    <p>
                        Based on the client's presenting issue, additional
                        assessment using standardized psychometric instruments
                        may be required.
                    </p>
                    <p>
                        <strong>
                            If there is a need for additional testing, this will
                            be discussed at the initial appointment or if needed
                            as treatment progresses.
                        </strong>
                    </p>
                </SingleColumn>
            </Layout>
        </>
    );
};

export default Services;
