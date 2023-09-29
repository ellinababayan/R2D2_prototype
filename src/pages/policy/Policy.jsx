import React from "react";
import "./Policy.css";
import Navbar from "../../components/navbar/Navbar";

const Policy = () => {
  return (
    <div className="policy__body">
      <Navbar />
      <div className="terms__container reveal active fade-left">
        <h1 className="terms-h1">Privacy Policy</h1>
        <h3 className="terms-h3">
          Involve.ai, Inc. (the “Company”),<br></br> 2708 Wilshire Blvd, #321, Santa
          Monica, CA 90403
        </h3>
        <div className="terms-description">
          <p className="join-p"> Introduction</p>The Company (“we,” “us,” and
          “our”) is committed to ensuring that it complies with all applicable
          legislation, including legislation respecting privacy and the use of
          personal information it collects in the course of its business. In
          this Privacy Policy, the term “Service” means any service or services,
          software, website, or sites used as further described in the Company’s
          Terms of Use (the “Terms”). The Terms are the terms and conditions
          which apply to and govern a person, firm, or corporation (a
          “Customer”) who/which buys from the Company, participates in, or uses
          any Service or Services, software, other product, website, or sites
          (individually an “Offering” and collectively the “Offerings”) offered
          or supplied from time to time by the Company and/or uses any Service
          or Services.
          <p className="join-p">Information We Collect</p>We only collect and
          use your personal information for purposes directly associated with
          our business activities, or as permitted by law. For example, we only
          collect personal information from individuals when they volunteer
          their information in the following types of situations: when you
          subscribe to updates or newsletters; request a demo; purchase or use
          the Services; register for workshops, events, and/or webinars;
          participate in a promotion; use an Offering; use the R2D2 product;
          send us a comment about our business; respond to a question or concern
          which we have; or download promotional material on
          http://joinr2d2.com/ (the “Website”).
          <p className="join-p">Data Storage and Third-Party Integrations</p>We
          store users' prompt history both locally on their devices and on our
          servers to provide a seamless experience when using the R2D2 Chrome
          extension. Additionally, we use Pendo for analytics purposes to
          improve our services.
          <p className="join-p">Data Retention</p>We retain users' personal
          information, including email threads and prompts submitted through the
          R2D2 Chrome extension, indefinitely. However, users can request
          deletion of their personal information by submitting a request through
          our online request form at
          https://privacyportal-uk.onetrust.com/webform/258a1676-ab46-4b23-9eaa-b53fb9edbf1c/8c9e1c98-4d4b-4347-b295-944e8b62a9d6.
          <p className="join-p">User Requests and Privacy Concerns</p>Users can
          report privacy concerns or violations by emailing privacy@involve.ai.
          We will investigate and address any reported concerns in a timely
          manner.
          <p className="join-p">Data Breach Procedures</p>
          In the event of a personal data breach concerning personal data
          processed by us, we shall take appropriate measures to address the
          breach, including measures to mitigate its adverse effects. We shall
          also notify affected users without undue delay after becoming aware of
          the breach. Such notification shall contain the details of a contact
          point where more information can be obtained, a description of the
          nature of the breach (including, where possible, categories and
          approximate number of data subjects and personal data records
          concerned), its likely consequences, and the measures taken or
          proposed to address the breach, including, where appropriate, measures
          to mitigate its possible adverse effects. Where, and in so far as, it
          is not possible to provide all information at the same time, the
          initial notification shall contain the information then available, and
          further information shall, as it becomes available, subsequently be
          provided without undue delay.
          <p className="join-p">Third-Party Services and Links</p>
          The Service contains links to third-party services. We do not control
          and are not responsible for any of these third-party services or for
          their content, and this Privacy Policy does not apply to those linked
          Services. Please check each third-party service for any Privacy Policy
          which is applicable to such a service.
          <p className="join-p">Changes to Our Privacy Policy</p>
          We may update our Privacy Policy from time to time. If we introduce
          what we consider is a significant change to our Privacy Policy, we
          will use reasonable efforts to notify you of that change by posting a
          notification to that effect within the Services. Also, when such a
          change occurs, we will amend the effective date for the Terms, as
          amended by such a change and the new version date at the bottom of
          this Privacy Policy.
          <p className="join-p">Your Rights and Choices</p>
          You have the right to access, correct, update, or delete your personal
          information. You can do so by reviewing your profile in the Services.
          If you would like us to remove your personal information from our
          records, to the extent permitted by law, you can inform us by email to
          privacy@involve.ai.
          <p className="join-p">Opt-Out of Communications</p>
          If you would like to not receive further communications from us, you
          may contact us at any time by email (see address above), and in the
          “subject line” type “Unsubscribe.” Some communications you receive
          from us may contain an “Unsubscribe” link. If you wish to inform us
          that you no longer wish to receive those communications, you can do so
          by using that link to communicate your wishes.
          <p className="join-p">Cookies and Tracking Technologies</p>
          Note that when you use the Service (whether by way of a purchase or
          otherwise), a cookie (a very small text file) may be placed on your
          computer (if it is accepted), and we collect certain information about
          your computer hardware and software to provide us with general
          statistics regarding the use of the Service, including without
          limiting the generality of the foregoing, the collection of the
          Service visitation statistics; your IP address; browser type;
          operating system; and access times. This information is used for
          managing our business operations, to identify unauthorized attempts to
          upload or change information that could otherwise cause damage to us,
          to our Services, or to other products or other persons, firms, or
          corporations, and to evaluate and improve the effectiveness of our
          communications, Services, and Offerings.
          <p className="join-p">Contact Us</p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy, please contact us at privacy@involve.ai. © 2023
          involve.ai, Inc. Last Updated: May 5, 2023 Privacy Policy
          <p className="terms-end">
            The explanations and information provided herein are only general
            explanations, information and samples. You should not rely on this
            article as legal advice or as recommendations regarding what you
            should actually do. We recommend that you seek legal advice to help
            you understand and to assist you in the creation of your privacy
            policy.
          </p>
        </div>
      </div>
      <div className="join-footer__body">
        <div className="join-footer__container">
          <p className="footer_rights">
            &copy; 2023 Involve.ai. All rights reserved.
          </p>
          <div className="nav">
            <a href="/termsconditions" className="footer_terms">
              Terms
            </a>
            <a href="/privacy-policy" className="footer_policy">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
