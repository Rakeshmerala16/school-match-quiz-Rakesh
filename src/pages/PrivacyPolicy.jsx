import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="py-10 bg-indigo-50 min-h-screen text-indigo-900">
      <div className="container-narrow">
        <section className="card p-6 sm:p-8 max-w-3xl mx-auto bg-white rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-indigo-800">
            Privacy Policy
          </h1>
          <p>
            <strong>Effective Date: 08/06/2025</strong>
          </p>
          <p className="mt-3">
            Your privacy is important to us. This Privacy Policy explains how{" "}
            <a
              href="https://schoolmatchquiz.com"
              className="underline text-indigo-600 hover:text-indigo-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              schoolmatchquiz.com
            </a>{" "}
            collects, uses, and protects your personal information.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3">1. Information We Collect</h2>
          <ul className="list-disc ml-6 space-y-2 text-indigo-700">
            <li>Your personal details (name, email, phone number, etc.) provided through quizzes or forms.</li>
            <li>Automatically collected data such as IP address, device, and browser details.</li>
          </ul>

          <h2 className="text-xl font-bold mt-6 mb-3">2. How We Use Your Information</h2>
          <ul className="list-disc ml-6 space-y-2 text-indigo-700">
            <li>To connect you with educational programs and schools tailored to your interests.</li>
            <li>To communicate with you regarding your quiz and program matches.</li>
            <li>To improve your experience on our website and services.</li>
            <li>To comply with legal and regulatory obligations.</li>
          </ul>

          <h2 className="text-xl font-bold mt-6 mb-3">3. Sharing Your Information</h2>
          <p className="text-indigo-700">
            We share information only with trusted educational partners who help provide program matches. We do not sell your personal information to third parties.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">4. Data Security</h2>
          <p className="text-indigo-700">
            We implement responsible technical and organizational safeguards to protect your data from unauthorized access or disclosure.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">5. Your Rights</h2>
          <ul className="list-disc ml-6 space-y-2 text-indigo-700">
            <li>Access, update, or correct your personal data at any time.</li>
            <li>Request deletion of your personal information.</li>
            <li>Opt out of marketing communications or data uses.</li>
          </ul>

          <h2 className="text-xl font-bold mt-6 mb-3">6. Cookies</h2>
          <p className="text-indigo-700">
            We use cookies and similar technologies to enhance your experience. You can manage cookie preferences via your browser settings.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">7. Changes to This Policy</h2>
          <p className="text-indigo-700">
            This Privacy Policy may be updated occasionally. Any changes will be posted on this page with an updated effective date.
          </p>
        </section>
      </div>
    </main>
  );
}
