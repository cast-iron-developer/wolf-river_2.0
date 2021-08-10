import * as React from 'react';
import head from 'next/head';
import Layout from '../components/layout';
import SingleColumn from '../components/singleColumn';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Wolf River Psychological Services</title>
      </Head>
      <Layout>
        <SingleColumn sectionId="contactIntro">
          <h5 className="h1">Contact Information:</h5>
          <p><strong>This information is not intended for emergency contact.  If you are experiencing a medical or mental health emergency, please call 911 or go to your local Emergency Department for evaluation.  You can also reach the National Suicide Prevention Lifeline at: <a className="phoneLink" href="tel:18002738255" title="National Suicide Prevention Lifelines">1 (800) 273-8255</a>.</strong></p>
          <p></p>
        </SingleColumn>
        <SingleColumn sectionId="contactInfo">
          <h5 className="h2">Wolf River Psychological Services, LLC</h5>
          <p>
            <a className="link" href="https://www.google.com/maps/dir//284+German+Oak+Dr+%23100,+Cordova,+TN+38018/@35.1231417,-89.7991513,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x887f9b8ba5d99feb:0x56fa7567c22187db!2m2!1d-89.7969626!2d35.1231417" target="_blank" without rel="noreferrer" title="Wolf River Psychological Services Location">284 German Oak Drive <br />
            Suite 100 <br />
            Cordova, TN 38018</a>
          </p>
          <p>Phone: <a className="phoneLink" href="tel:+9013007320">(901) 300-7320</a></p>
          <p>Fax: <strong>(901) 255-1158</strong></p>
        </SingleColumn>
      </Layout>
    </>
  )
}

export default Contact;