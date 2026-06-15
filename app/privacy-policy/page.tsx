import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <span className="text-orange-600 uppercase tracking-widest text-sm">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 text-amber-950">
            Privacy Policy
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-orange-600 to-amber-400 mx-auto mt-5 rounded-full"></div>
          <p className="text-gray-600 mt-6">
            Last updated: June 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-orange-100 mb-8">
            <h2 className="text-xl font-bold text-amber-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              Welcome to TempleInfo.in. We respect your privacy and are committed to protecting
              your personal data. This privacy policy will inform you about how we look after
              your personal data when you visit our website and tell you about your privacy rights.
            </p>
            <p className="text-gray-700">
              This website is operated by TempleInfo, dedicated to providing comprehensive
              information about temples in Tamil Nadu and other regions.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-orange-100 mb-8">
            <h2 className="text-xl font-bold text-amber-900 mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">We may collect and process the following data:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Information you provide when filling out forms on our site (name, email address)</li>
              <li>Technical data including IP address, browser type, and device information</li>
              <li>Usage data about how you use our website</li>
              <li>Information provided through our contact forms</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-orange-100 mb-8">
            <h2 className="text-xl font-bold text-amber-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Provide and improve our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you newsletters (if you have subscribed)</li>
              <li>Analyze website usage to improve user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-orange-100 mb-8">
            <h2 className="text-xl font-bold text-amber-900 mb-4">Cookies</h2>
            <p className="text-gray-700 mb-4">
              Our website uses cookies to enhance your browsing experience. Cookies are small
              text files stored on your device that help us:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Remember your preferences</li>
              <li>Understand how you use our website</li>
              <li>Improve our services</li>
              <li>Provide relevant content</li>
            </ul>
            <p className="text-gray-700 mt-4">
              You can control cookies through your browser settings. However, disabling cookies
              may affect certain functionalities of our website.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-orange-100 mb-8">
            <h2 className="text-xl font-bold text-amber-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">We may use third-party services that collect data:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Google Analytics for website analytics</li>
              <li>Google Ads for advertising</li>
              <li>Social media platforms for sharing features</li>
            </ul>
            <p className="text-gray-700 mt-4">
              These services have their own privacy policies, and we encourage you to review them.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-orange-100 mb-8">
            <h2 className="text-xl font-bold text-amber-900 mb-4">Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate security measures to protect your personal data against
              unauthorized access, alteration, disclosure, or destruction. However, no method
              of transmission over the Internet is 100% secure.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-orange-100 mb-8">
            <h2 className="text-xl font-bold text-amber-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-orange-100 mb-8">
            <h2 className="text-xl font-bold text-amber-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this privacy policy from time to time. We will notify you of any
              changes by posting the new policy on this page. We encourage you to review this
              policy periodically.
            </p>
          </div>

          <div className="bg-amber-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-amber-900 mb-3">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this privacy policy, please contact us.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold px-8 py-3 rounded-xl hover:from-orange-600 hover:to-amber-600 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
