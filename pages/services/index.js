import * as React from 'react';
import head from 'next/head';
import Layout from '../components/layout';
import SingleColumn from '../components/singleColumn';

const Services = () => {
  return (
    <>
      <Head>
        <title>Services | Wolf River Psychological Services</title>
      </Head>
      <Layout page="services">
        <SingleColumn sectionId="servicesIntro">
          <h5 className="h1 text-white text-shadow-dark">Services:</h5>
          <p className="text-white text-shadow-dark">Wolf River Psychological Services provides individual assessment and psychotherapy to adult clients and teenage clients.  Please contact me for information on availability and scheduling.</p>
        </SingleColumn>

        <SingleColumn sectionId="firstSession">
          <h5 className="h2">What to Expect at Your First Session:</h5>
          <p>Starting with a new therapist can be a difficult decision.  Knowing what to expect can reduce some of the anxiety about the initial meeting.  I take the first session to extensively review the history of the client’s symptoms by asking a series of questions about their current functioning and history, sometimes dating back to early childhood.  While this may seem daunting, the initial interview allows me to get a good understanding of how a client’s difficulties developed, and to understand how they are coping at present.  Once the interview is complete, I work collaboratively with the patient to develop an individualized treatment plan, including the estimated number of sessions, treatment approach and expectations for the course of therapy.  Expect the initial session to take 60-90 minutes.</p>
        </SingleColumn>

        <SingleColumn sectionId="followSession">
          <h5 className="h2">Follow-up Sessions:</h5>
          <p>Psychotherapy sessions will be structured around the client’s treatment plan.  This will vary based on the presenting issue, as well as the client’s strengths and needs. Expect follow-up sessions to take 45-50 minutes each.</p>
        </SingleColumn>

        <SingleColumn sectionId="additionalAssessment">
          <h5 className="h2">Additional Assessment:</h5>
          <p>Psychotherapy sessions will be structured around the client’s treatment plan.  This will vary based on the presenting issue, as well as the client’s strengths and needs. Expect follow-up sessions to take 45-50 minutes each.</p>
        </SingleColumn>

        <SingleColumn sectionId="costSection">
          <h5 className="h2">Insurance:</h5>

          <p>I accept Aetna plans as an “in-network,” provider.</p>

          <p>For all other plans I am “out-of-network,” but in most cases can either file claims with your insurance if you have out-of-network coverage.  Please check with your insurance plan to determine your level of coverage.</p>

          <p>I am not able for file Medicare/Medicaid claims.</p>

          <h5 className="h2">Fees:</h5>

          <p>Intake Session: <strong>$165.00</strong></p>
          <p>Follow-up sessions: <strong>$125.00</strong></p>

          <p>Payment is expected at the time of service.  I accept cash, check, or credit card payments.</p>

        </SingleColumn>

        <SingleColumn sectionId="sleep-disorders">
          <h4 className="h3">Services Offered:</h4>
          <h4>Sleep Disorders</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat voluptatem? Illum facilis rem laboriosam optio atque in, voluptas nostrum repellendus quis sapiente dolor, minus eligendi! Possimus, alias omnis sapiente excepturi ex ipsam! Voluptatibus repellat dignissimos beatae eligendi quo in labore inventore, quas natus eos saepe! Provident excepturi ipsum magni vero reprehenderit ea ullam voluptate accusantium mollitia dolor doloremque soluta dolore eos praesentium, possimus ab dolorem quos cumque quae tempora incidunt enim non quis quo! Sunt blanditiis placeat neque a.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat voluptatem? Illum facilis rem laboriosam optio atque in, voluptas nostrum repellendus quis sapiente dolor, minus eligendi! Possimus, alias omnis sapiente excepturi ex ipsam! Voluptatibus repellat dignissimos beatae eligendi quo in labore inventore, quas natus eos saepe! Provident excepturi ipsum magni vero reprehenderit ea ullam voluptate accusantium mollitia dolor doloremque soluta dolore eos praesentium, possimus ab dolorem quos cumque quae tempora incidunt enim non quis quo! Sunt blanditiis placeat neque a.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat voluptatem? Illum facilis rem laboriosam optio atque in, voluptas nostrum repellendus quis sapiente dolor, minus eligendi! Possimus, alias omnis sapiente excepturi ex ipsam! Voluptatibus repellat dignissimos beatae eligendi quo in labore inventore, quas natus eos saepe! Provident excepturi ipsum magni vero reprehenderit ea ullam voluptate accusantium mollitia dolor doloremque soluta dolore eos praesentium, possimus ab dolorem quos cumque quae tempora incidunt enim non quis quo! Sunt blanditiis placeat neque a.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat voluptatem? Illum facilis rem laboriosam optio atque in, voluptas nostrum repellendus quis sapiente dolor, minus eligendi! Possimus, alias omnis sapiente excepturi ex ipsam! Voluptatibus repellat dignissimos beatae eligendi quo in labore inventore, quas natus eos saepe! Provident excepturi ipsum magni vero reprehenderit ea ullam voluptate accusantium mollitia dolor doloremque soluta dolore eos praesentium, possimus ab dolorem quos cumque quae tempora incidunt enim non quis quo! Sunt blanditiis placeat neque a.</p>
        </SingleColumn>

        <SingleColumn sectionId="ocd">
          <h4>OCD</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat voluptatem? Illum facilis rem laboriosam optio atque in, voluptas nostrum repellendus quis sapiente dolor, minus eligendi! Possimus, alias omnis sapiente excepturi ex ipsam! Voluptatibus repellat dignissimos beatae eligendi quo in labore inventore, quas natus eos saepe! Provident excepturi ipsum magni vero reprehenderit ea ullam voluptate accusantium mollitia dolor doloremque soluta dolore eos praesentium, possimus ab dolorem quos cumque quae tempora incidunt enim non quis quo! Sunt blanditiis placeat neque a.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat voluptatem? Illum facilis rem laboriosam optio atque in, voluptas nostrum repellendus quis sapiente dolor, minus eligendi! Possimus, alias omnis sapiente excepturi ex ipsam! Voluptatibus repellat dignissimos beatae eligendi quo in labore inventore, quas natus eos saepe! Provident excepturi ipsum magni vero reprehenderit ea ullam voluptate accusantium mollitia dolor doloremque soluta dolore eos praesentium, possimus ab dolorem quos cumque quae tempora incidunt enim non quis quo! Sunt blanditiis placeat neque a.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat voluptatem? Illum facilis rem laboriosam optio atque in, voluptas nostrum repellendus quis sapiente dolor, minus eligendi! Possimus, alias omnis sapiente excepturi ex ipsam! Voluptatibus repellat dignissimos beatae eligendi quo in labore inventore, quas natus eos saepe! Provident excepturi ipsum magni vero reprehenderit ea ullam voluptate accusantium mollitia dolor doloremque soluta dolore eos praesentium, possimus ab dolorem quos cumque quae tempora incidunt enim non quis quo! Sunt blanditiis placeat neque a.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat voluptatem? Illum facilis rem laboriosam optio atque in, voluptas nostrum repellendus quis sapiente dolor, minus eligendi! Possimus, alias omnis sapiente excepturi ex ipsam! Voluptatibus repellat dignissimos beatae eligendi quo in labore inventore, quas natus eos saepe! Provident excepturi ipsum magni vero reprehenderit ea ullam voluptate accusantium mollitia dolor doloremque soluta dolore eos praesentium, possimus ab dolorem quos cumque quae tempora incidunt enim non quis quo! Sunt blanditiis placeat neque a.</p>
        </SingleColumn>

        <SingleColumn sectionId="anxiety-disorders">
          <h4>Anxiety Disorders</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat voluptatem? Illum facilis rem laboriosam optio atque in, voluptas nostrum repellendus quis sapiente dolor, minus eligendi! Possimus, alias omnis sapiente excepturi ex ipsam! Voluptatibus repellat dignissimos beatae eligendi quo in labore inventore, quas natus eos saepe! Provident excepturi ipsum magni vero reprehenderit ea ullam voluptate accusantium mollitia dolor doloremque soluta dolore eos praesentium, possimus ab dolorem quos cumque quae tempora incidunt enim non quis quo! Sunt blanditiis placeat neque a.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat voluptatem? Illum facilis rem laboriosam optio atque in, voluptas nostrum repellendus quis sapiente dolor, minus eligendi! Possimus, alias omnis sapiente excepturi ex ipsam! Voluptatibus repellat dignissimos beatae eligendi quo in labore inventore, quas natus eos saepe! Provident excepturi ipsum magni vero reprehenderit ea ullam voluptate accusantium mollitia dolor doloremque soluta dolore eos praesentium, possimus ab dolorem quos cumque quae tempora incidunt enim non quis quo! Sunt blanditiis placeat neque a.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat voluptatem? Illum facilis rem laboriosam optio atque in, voluptas nostrum repellendus quis sapiente dolor, minus eligendi! Possimus, alias omnis sapiente excepturi ex ipsam! Voluptatibus repellat dignissimos beatae eligendi quo in labore inventore, quas natus eos saepe! Provident excepturi ipsum magni vero reprehenderit ea ullam voluptate accusantium mollitia dolor doloremque soluta dolore eos praesentium, possimus ab dolorem quos cumque quae tempora incidunt enim non quis quo! Sunt blanditiis placeat neque a.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat voluptatem? Illum facilis rem laboriosam optio atque in, voluptas nostrum repellendus quis sapiente dolor, minus eligendi! Possimus, alias omnis sapiente excepturi ex ipsam! Voluptatibus repellat dignissimos beatae eligendi quo in labore inventore, quas natus eos saepe! Provident excepturi ipsum magni vero reprehenderit ea ullam voluptate accusantium mollitia dolor doloremque soluta dolore eos praesentium, possimus ab dolorem quos cumque quae tempora incidunt enim non quis quo! Sunt blanditiis placeat neque a.</p>
        </SingleColumn>

        <SingleColumn sectionId="servicesBodyTop">
          <h5 className="h2">What to Expect at Your First Session:</h5>
          <p>Starting therapy is an <em>important</em>, and sometimes <em>difficult</em> decision. Finding the right fit in a therapist can significantly impact the outcome of treatment. As a result, there are several important goals in an initial meeting.</p>

          <ol>
            <li>In order to get a thorough understanding of the client’s symptoms and struggles, a clinical interview is conducted. During this interview, the client may be asked some difficult questions about their current functioning, as well as their history dating back to childhood. This information helps the therapist get to know the client, and to understand their individual needs.</li>
            <li>A treatment plan will be developed based on the information gathered in the clinical interview. Creating this plan is a collaborative process between therapist and client. The final plan should be comprised of the evidence–based approach that has the best chance of helping the client reach their individual goals for therapy.</li>
            <li>The client and the therapist must determine together if they feel there is sufficient trust and comfort to proceed with therapy. While it often takes time to build a solid working relationship, this process begins in the first session. If the client or therapist feel that their needs would best be met in a different setting, alternative referrals will be discussed.</li>
          </ol>

          <p><strong>Expect the initial session to take 60-90 minutes.</strong></p>
        </SingleColumn>

        <SingleColumn sectionId="servicesBodyMid">
          <h5 className="h2">Follow-up Sessions:</h5>
          <p>Psychotherapy sessions will be structured around the client's treatment plan. This will vary based on the presenting issue, as well as the client's strengths and needs. Sometimes, homework will be assigned between sessions. The work done outside of session is equally important to what is accomplished within the therapist's office.</p>
          <p><strong>Expect follow-up sessions to take 45-50 minutes each.</strong></p>
        </SingleColumn>

        <SingleColumn sectionId="servicesBodyBottom">
          <h5 className="h2">Additional Assessment:</h5>
          <p>Based on the client's presenting issue, additional assessment using standardized psychometric instruments may be required.</p>
          <p><strong>If there is a need for additional testing, this will be discussed at the initial appointment or if needed as treatment progresses.</strong></p>
        </SingleColumn>
      </Layout>
    </>
  )
}

export default Services;