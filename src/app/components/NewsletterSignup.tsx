import { useState } from "react";
import { Mail, Check, AlertCircle } from "lucide-react";
import { SITE } from "../../config/site";

/**
 * Footer newsletter signup with mailto fallback.
 *
 * Until a real ESP (Mailchimp / ConvertKit / Resend) is wired in, submitting
 * the form opens the user's email client with a pre-filled subscribe request.
 * Honest UX: the success state explains "we've opened your email app — click
 * Send to finish subscribing."
 *
 * TODO: replace mailto handler with a POST to the chosen email provider.
 */
export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setError("Please enter your email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("That doesn't look like a valid email.");
      return;
    }
    const subject = "Newsletter subscribe";
    const body = `Please add this email to the Mobilise Robotics newsletter:\n\n${trimmed}\n\nThanks!`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setError(null);
  };

  if (submitted) {
    return (
      <div
        className="flex items-start gap-3 p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30"
        role="alert"
        aria-live="polite"
      >
        <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <div className="text-white font-semibold text-sm">Almost done</div>
          <div className="text-white/70 text-sm mt-1 leading-relaxed">
            We've opened your email app with a subscribe request — hit <strong className="text-white">Send</strong> and we'll add you to the next issue.
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <label htmlFor="newsletter-email" className="block text-white font-bold text-sm mb-2">
        Monthly insights on service robotics in India
      </label>
      <p className="text-white/60 text-xs mb-4 leading-relaxed">
        One email per month — economics, deployment stories, product updates. Unsubscribe anytime.
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" aria-hidden="true" />
          <input
            id="newsletter-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null);
            }}
            placeholder="you@company.com"
            aria-invalid={!!error}
            aria-describedby={error ? "newsletter-error" : undefined}
            className={`w-full bg-white/5 border rounded-xl pl-10 pr-4 py-2.5 text-white placeholder-white/40 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus:bg-white/10 transition-all ${
              error ? "border-red-500/60" : "border-white/10 focus:border-cyan-500/50"
            }`}
          />
        </div>
        <button
          type="submit"
          className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl text-white font-bold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#030710]"
        >
          Subscribe
        </button>
      </div>
      {error && (
        <p id="newsletter-error" className="mt-2 flex items-center gap-1.5 text-red-400 text-xs">
          <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
          {error}
        </p>
      )}
    </form>
  );
}
