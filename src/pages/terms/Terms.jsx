import React from "react";
import "./Terms.css";
import Navbar from "../../components/navbar/Navbar";

const Terms = () => {
  return (
    <div className="terms__body">
      <Navbar />
      <div className="terms__container">
        <h1 className="terms-h1">Terms & Conditions</h1>
        <div className="terms-description">
          <p className="join-p">Acceptance of Terms</p>
          By using the R2D2 Chrome extension, you agree to be bound by these
          Terms and Conditions. If you do not agree to these terms, you must not
          use the R2D2 Chrome extension. We reserve the right to change or
          modify these Terms and Conditions at any time, and your continued use
          of the extension following any changes constitutes your acceptance of
          the revised terms.
          <p className="join-p">Eligibility</p>
          To use the R2D2 Chrome extension, you must be at least 18 years old.
          By accessing or using the extension, you represent and warrant that
          you meet the age requirement.
          <p className="join-p">Account Registration</p>
          To access certain features of the R2D2 Chrome extension, you may be
          required to create an account. When creating an account, you must
          provide a valid email address. You are responsible for maintaining the
          confidentiality of your account credentials and for all activities
          that occur under your account.
          <p className="join-p">Subscription Plans and Payment</p>
          The R2D2 Chrome extension offers a free version, a 14-day trial, and
          paid subscription plans. By subscribing to a paid plan, you agree to
          pay the fees associated with your chosen plan. All fees are
          non-refundable and non-transferable. We reserve the right to change
          the pricing and available subscription plans at any time.
          <p className="join-p">Third-Party Integrations</p>
          The R2D2 Chrome extension integrates with third-party services, such
          as OpenAI and Google. Your use of these third-party services is
          subject to their respective terms of service and privacy policies. We
          are not responsible for the content, privacy practices, or
          functionality of these third-party services.
          <p className="join-p">User-Generated Content</p>
          By using the R2D2 Chrome extension, you may enter prompts, which are
          requests made by the user to generate text. When you ask R2D2 to
          generate a response to an email, we will include both your prompt
          (i.e., the ask) and the email thread we are being asked to respond to.
          You are solely responsible for the content of your prompts and any
          generated text. You agree not to submit any prompts that are unlawful,
          defamatory, or infringing on the rights of others.
          <p className="join-p">Intellectual Property</p>
          All intellectual property rights in the R2D2 Chrome extension,
          including but not limited to copyrights, trademarks, and trade
          secrets, are owned by involve.ai or its licensors. You agree not to
          reproduce, distribute, or create derivative works based on the R2D2
          Chrome extension without our express written permission.
          <p className="join-p">Disclaimer of Warranties</p>
          The R2D2 Chrome extension is provided "as is" and without warranty of
          any kind, either express or implied. To the fullest extent permissible
          under applicable law, we disclaim all warranties, express or implied,
          including but not limited to warranties of merchantability, fitness
          for a particular purpose, and non-infringement.
          <p className="join-p">Limitation of Liability</p>
          To the maximum extent permitted by law, involve.ai and its affiliates,
          licensors, and suppliers shall not be liable for any direct, indirect,
          incidental, special, consequential, or exemplary damages arising from
          or relating to your use of the R2D2 Chrome extension, even if we have
          been advised of the possibility of such damages.
          <p className="join-p">Indemnification</p>
          You agree to indemnify, defend, and hold harmless involve.ai and its
          affiliates, licensors, and suppliers from and against any and all
          claims, liabilities, damages, losses, or expenses, including
          reasonable attorneys' fees and costs, arising out of or in any way
          connected with your use of the R2D2 Chrome extension.
          <p className="join-p">Governing Law</p>
          These Terms and Conditions shall be governed by and construed in
          accordance with the laws of the jurisdiction in which the company is
          incorporated, without regard to its conflict of law provisions. You
          agree to submit to the exclusive jurisdiction of the courts located in
          that jurisdiction for the resolution of any disputes arising out of or
          relating to these Terms and Conditions.
          <p className="join-p">Severability</p>
          If any provision of these Terms and Conditions is held to be invalid,
          illegal, or unenforceable by a court of competent jurisdiction, the
          remaining provisions shall remain in full force and effect.
          <p className="join-p">Termination</p>
          We reserve the right to terminate your access to the R2D2 Chrome
          extension at any time and for any reason, including but not limited to
          violations of these Terms and Conditions or applicable laws. Upon
          termination, your right to use the R2D2 Chrome extension will
          immediately cease.
          <p className="join-p">Changes to Terms and Conditions</p>
          We reserve the right to modify these Terms and Conditions at any time,
          and we will provide notice of any material changes by posting the
          updated terms on our website or within the R2D2 Chrome extension. Your
          continued use of the R2D2 Chrome extension following any changes
          constitutes your acceptance of the updated terms.
          <p className="join-p">Contact Information</p>
          If you have any questions or concerns about these Terms and
          Conditions, please contact us at the email address provided on our
          website.<br></br><br></br> &copy; 2023 involve.ai, Inc. All rights reserved.
          <p className="terms-end">
            The explanations and information provided herein are only general
            and high-level explanations, information and samples. You should not
            rely on this article as legal advice or as recommendations regarding
            what you should actually do. We recommend that you seek legal advice
            to help you understand and to assist you in the creation of your
            Terms.
          </p>
        </div>
      </div>
      <div className="join-footer__body">
        <div className="join-footer__container">
          <p className="footer_rights">
            &copy; 2023 Involve.ai. All rights reserved.
          </p>
          <div className="nav">
            <a href="" className="footer_terms">
              Terms
            </a>
            <a href="" className="footer_policy">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;