import { motion } from "motion/react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function Terms() {
  useDocumentTitle(
    "Terms of Service",
    "Terms governing your use of the Mobilise Robotics website."
  );

  return (
    <section className="pt-28 pb-20 bg-[#050a14]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-cyan-400 text-sm font-bold tracking-[0.3em] uppercase mb-4">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Terms of Service</h1>
          <p className="text-white/60 text-sm mb-10">Last updated: April 2026</p>

          <div className="prose prose-invert max-w-none text-white/80 space-y-6 leading-relaxed">
            <p>
              By accessing mobilise-robotics.com (the "Site"), you agree to these Terms of Service. If you disagree with any part of these terms, do not use the Site.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">Website content</h2>
            <p>
              All product information, images, specifications, and videos on this Site are provided for informational purposes. KEENON Robotics product specifications, pricing, and availability may change without notice. For a formal quote, contact Mobilise sales.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">Trademarks</h2>
            <p>
              "KEENON" and KEENON product names (T3, T8, T9, T10, T11, W3, C20, C30, C40, C55, G1, S100, S300, and related marks) are trademarks of KEENON Robotics. Mobilise App Lab Limited is their authorized distribution partner in India.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">No warranty</h2>
            <p>
              The Site is provided "as is" without warranties of any kind. Product availability, delivery timelines, and support terms are governed by separate agreements you enter into with Mobilise when purchasing a robot.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, Mobilise App Lab Limited shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Site.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">Governing law</h2>
            <p>
              These terms are governed by the laws of India. Any dispute shall be subject to the exclusive jurisdiction of the courts at Faridabad, Haryana.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">Contact</h2>
            <p>
              Questions about these terms? Email{" "}
              <a href="mailto:sales@mobilise.co.in" className="text-cyan-400 hover:underline">sales@mobilise.co.in</a>.
            </p>

            <p className="text-white/50 text-sm pt-6 border-t border-white/10">
              This is a placeholder terms document. Replace with terms reviewed by your legal counsel before going to production.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
