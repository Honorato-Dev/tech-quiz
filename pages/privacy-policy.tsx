import Layout from '@/components/Layout';
import React from 'react';

const PrivacyPolicyScreen = () => {
  return (
    <Layout title="Privacy Policy">
      <div className="flex flex-col space-y-4 py-6 px-4  justify-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl">
          {' '}
         Privacy Policy
        </h1>
        <p className="text:sm md:text-base lg:text-lg">
          Welcome to Tech Quizs privacy policy.This page describes
          as we collect, use, share and protect your information
          When you use our services.When accessing or using the site
          Tech Quiz, you agree with the terms of this policy.
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl">
          1. Collected information
        </h2>
        <p className="text:sm md:text-base lg:text-lg">
          1.1 Personal Information: We can collect personal information
          voluntarily provided by you, such as name, email address and
          Other information relevant to the provision of services.
        </p>
        <p className="text:sm md:text-base lg:text-lg">
          1.2 Automatic information: When using Tech Quiz, we collect
          automatically non -personal information, such as navigation data,
          IP address, browser type, device used and others
          anonymous statistics.
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl">
          2. useOfInformation
        </h2>
        <p className="text:sm md:text-base lg:text-lg">
          2.1Improvement of Services: We use the information collected for
          improve and customize your experience at Tech Quiz, developing
          new resources, analyzing trends and optimizing the performance of
          site.
        </p>
        <p className="text:sm md:text-base lg:text-lg">
          2.2 Communication: We can use your email address to send
          information about updates, new resources, or other notifications
          related to Tech Quiz.You can choose not to receive these
          communications at any time.
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl">
          3. Information sharing
        </h2>
        <p className="text:sm md:text-base lg:text-lg">
          3.1 Partners and Service Suppliers: We can share your
          information with partners and service suppliers that help in the
          TECH QUIZ operation, such as hosting providers, processors
          payment and other service providers.
        </p>
        <p className="text:sm md:text-base lg:text-lg">
          3.2 LEGAL REQUIREMENTS: We reserve the right to disclose its
          information, if it is necessary to comply with legal obligations,
          respond to legal proceedings, or protect our legal rights.
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl">
          4.Similar cookies and technologies
        </h2>
        <p className="text:sm md:text-base lg:text-lg">
          Tech Quiz uses similar cookies and technologies to improve
          site functionality, customize your experience and analyze use
          services.When continuing to use the site, you agree with the use
          of these technologies.
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl">5. Security</h2>
        <p className="text:sm md:text-base lg:text-lg">
          We employ reasonable security measures to protect your
          information against unauthorized access, change, disclosure or
          Unauthorized destruction.However, we cannot guarantee the
          complete security of your information.
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl">6. Minors</h2>
        <p className="text:sm md:text-base lg:text-lg">
          Tech Quiz is not intended for children under 13.We do not collect
          intentionally information from children under 13.If
          we know that we collect information from a child
          under 13, we will take the necessary measures to delete these
          information.
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl">
          7. Changes in this Privacy Policy
        </h2>
        <p className="text:sm md:text-base lg:text-lg">
          We reserve the right to update this privacy policy
          periodically.We recommend that you review this page regularly
          to be aware of any changes.The continuation of the use of
          Tech quiz after changes means that you agree with
          modifications.
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl">8. Contact</h2>
        <p className="text:sm md:text-base lg:text-lg">
       If you have questions or concerns about this privacy policy,
          Contact us by email techquizbr@gmail.com.To the
          Using Tech Quiz, you agree with the terms of this policy
          Privacy.Thank you for trusting us to protect your
          information.
        </p>
        {/* <h2 className="text-xl md:text-2xl lg:text-3xl"></h2>
        <p className="text:sm md:text-base lg:text-lg"></p>
        <h2 className="text-xl md:text-2xl lg:text-3xl"></h2>
        <p className="text:sm md:text-base lg:text-lg"></p>
        <h2 className="text-xl md:text-2xl lg:text-3xl"></h2>
        <p className="text:sm md:text-base lg:text-lg"></p> */}
      </div>
    </Layout>
  );
};

export default PrivacyPolicyScreen;
