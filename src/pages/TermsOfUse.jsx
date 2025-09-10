import React from "react";

export default function TermsOfUse() {
  return (
    <main className="py-10 bg-indigo-50 min-h-screen text-indigo-900">
      <div className="container-narrow">
        <section className="card p-6 sm:p-8 max-w-3xl mx-auto bg-white rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-indigo-800">
            Terms of Use
          </h1>
          <p>
            <strong>Effective Date: 08/06/2025</strong>
          </p>
          <p className="mt-3">
            Welcome to{" "}
            <a
              href="https://schoolmatchquiz.com"
              className="underline text-indigo-600 hover:text-indigo-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              schoolmatchquiz.com
            </a>{" "}
            (referred to as “we,” “our,” or “the Site”). By accessing and using this website, you agree to be bound by the following terms and conditions. If you do not agree with these terms, please do not use our site.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3">1. Services Provided</h2>
          <p className="text-indigo-700">
            We provide a platform that connects users with trusted educational institutions and programs through a quiz-based matching service. We do not provide educational services directly, nor are we lenders or government entities.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">2. Eligibility</h2>
          <p className="text-indigo-700">
            By using this Site, you affirm that you are at least 18 years old and legally able to enter into agreements.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">3. No Guarantee of Results</h2>
          <p className="text-indigo-700">
            While our quiz helps connect you with matching educational programs, we do not guarantee admission, program availability, or outcomes. Results may vary based on multiple factors.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">4. Third-Party Websites</h2>
          <p className="text-indigo-700">
            Our site may link to third-party educational institutions and resources. We are not responsible for the accuracy or privacy practices of these external sites.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">5. Limitation of Liability</h2>
          <p className="text-indigo-700">
            We disclaim all warranties and liabilities to the fullest extent permitted by law for any damages resulting from your use or inability to use our site or any linked services.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">6. Modifications</h2>
          <p className="text-indigo-700">
            We reserve the right to update these terms at any time without prior notice. Continued use after changes indicates your acceptance of the new terms.
          </p>
        </section>
      </div>
    </main>
  );
}
