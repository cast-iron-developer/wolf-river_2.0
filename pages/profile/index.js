import * as React from 'react';
import Head from 'next/head';
import SingleColumn from '../components/singleColumn';
import Blockquote from '../components/partials/Blockquote';
import Layout from '../components/layout';

const Profile = () => {
  return (
    <>
      <Head>
        <title>Professional Profile | Wolf River Psychological Services</title>
      </Head>
      <Layout page="professionalProfile">
        <SingleColumn sectionId="professionalIntro">
          <h5 className="h1">Professional Profile:</h5>
          <p>Krystin Coldwell, Psy.D</p>
          <p>I am a clinical psychologist with a Doctor of Psychology degree with an emphasis in child an adolescent psychology from Xavier University in Cincinnati, Ohio.  My professional interests grew from my research with military families.  I accepted a commission as a Captain in the United States Army to complete my internship and postdoctoral residency through Walter Reed Army Medical Center.  I continued to practice as an Active Duty psychologist until 2012, when I moved to Memphis to join the Women’s Clinic at the Memphis Veteran’s Affairs Medical Center.  </p>
        </SingleColumn>

        <SingleColumn sectionId="professionalBody">
          <p>In August 2018, I made the move into private practice.</p>

          <p>I believe that therapy is most successful when evidence-based practices are applied with the client’s individual needs in mind.  As a result, I utilize various different treatments which have been developed and tested through vigorous research in my work with clients.</p>

          <p>I am a generalist by training, and as a result am comfortable treating a wide range of symptoms.  However, I have specialty training in treatments for anxiety, posttraumatic stress disorder (PTSD), obsessive compulsive disorder (OCD), sleep disorders, depression, and management of chronic health conditions.</p>

          <p>I am currently seeing adult clients over the age of 16.  If you feel you are ready to engage in psychotherapy, please see my services page for information on taking the next step.</p>
        </SingleColumn>

        <SingleColumn sectionId="professionalQuote">
          <Blockquote attribution="John Kabat-Zinn">If we hope to go anywhere or develop ourselves in any way, we can only step from where we are standing.</Blockquote>
        </SingleColumn>
      </Layout>
    </>
  )
}

export default Profile;