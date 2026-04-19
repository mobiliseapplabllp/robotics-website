import { motion } from "motion/react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function Privacy() {
  useDocumentTitle(
    "Privacy Policy",
    "How Mobilise Robotics collects, uses, and safeguards your personal data."
  );

  return (
    <section className="pt-28 pb-20 bg-[#050a14]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-cyan-400 text-sm font-bold tracking-[0.3em] uppercase mb-4">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-white/60 text-sm mb-10">Last updated: April 2026</p>

          <div className="prose prose-invert max-w-none text-white/80 space-y-6 leading-relaxed">
            <p>
              Mobilise App Lab Limited ("Mobilise", "we", "us") respects your privacy. This policy explains what information we collect when you use this website and how we handle it.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">What we collect</h2>
            <p>
              We collect information you voluntarily provide through our contact form — name, email, phone, company, city, inquiry type, product of interest, and the contents of your message. When you submit the form, it opens your email client; the message is sent over your own email infrastructure.
            </p>
            <p>
              We may also collect basic technical information (browser type, pages visited, referring URL) via standard server logs and privacy-respecting analytics if enabled.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">How we use it</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your demo requests and sales inquiries.</li>
              <li>To send you information about KEENON products you've asked about.</li>
              <li>To improve the website and understand which content is most useful.</li>
            </ul>
            <p>We do not sell, rent, or share your personal information with third parties for their marketing purposes.</p>

            <h2 className="text-xl font-bold text-white mt-8">Cookies</h2>
            <p>
              This website uses only essential cookies required for the site to function. No advertising cookies are set.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">Your rights</h2>
            <p>
              You may request access to the personal data we hold about you, ask us to correct it, or request deletion. Contact{" "}
              <a href="mailto:sales@mobilise.co.in" className="text-cyan-400 hover:underline">sales@mobilise.co.in</a> with any request.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">Contact</h2>
            <p>
              Mobilise App Lab Limited<br />
              Plot No. 62/B, HSIIDC, Sector 31, Faridabad, Haryana - 121006<br />
              Email: <a href="mailto:sales@mobilise.co.in" className="text-cyan-400 hover:underline">sales@mobilise.co.in</a><br />
              Phone: <a href="tel:+919599194330" className="text-cyan-400 hover:underline">+91-9599194330</a>
            </p>

            <p className="text-white/50 text-sm pt-6 border-t border-white/10">
              This is a placeholder policy. Replace with a policy reviewed by your legal counsel before going to production.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
