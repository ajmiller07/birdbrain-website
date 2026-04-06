import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Bird Brain",
  description:
    "How Bird Brain Audio collects, uses, and protects the information you share with us.",
  robots: { index: false },
};

const lastUpdated = "April 6, 2026";

export default function PrivacyPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-12">
        <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4">
          Legal
        </p>
        <h1 className="text-4xl font-bold tracking-tight mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground font-mono">
          Last updated: {lastUpdated}
        </p>
      </section>

      <Separator />

      <section className="mx-auto max-w-3xl px-6 py-16 space-y-10 text-sm leading-relaxed text-muted-foreground">

        <div className="space-y-3">
          <p>
            Bird Brain Audio (&ldquo;Bird Brain&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates{" "}
            <span className="font-mono text-foreground">birdbrain.audio</span> and
            related subdomains. This policy describes what personal information we
            collect, why we collect it, and how you can control it. We&apos;ve written
            it in plain language — not because we have to, but because you deserve
            to know exactly what you&apos;re agreeing to.
          </p>
        </div>

        {/* Section 1 */}
        <div className="space-y-3">
          <h2 className="text-base font-semibold font-mono tracking-wide text-foreground">
            1. What we collect
          </h2>
          <p>
            <strong className="text-foreground">Launch list sign-ups.</strong>{" "}
            When you join the launch list on our website, we collect your email
            address. That&apos;s it — no name, no phone number, no payment details at
            this stage.
          </p>
          <p>
            <strong className="text-foreground">Usage data.</strong>{" "}
            Like most websites, our hosting infrastructure automatically records
            standard server logs: IP address, browser type, referring URL, and
            pages visited. These logs are used for operational purposes (debugging,
            security) and are not used for individual tracking.
          </p>
          <p>
            We do not use tracking pixels, third-party analytics scripts, or
            behavioral advertising cookies. If that changes, we will update this
            policy before deploying any such technology.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-3">
          <h2 className="text-base font-semibold font-mono tracking-wide text-foreground">
            2. How we use it
          </h2>
          <p>
            Your email address is used for one purpose: to notify you when a
            product you&apos;ve expressed interest in is available to order or
            download. We send one email per product launch. We do not send
            newsletters, promotional sequences, or any unsolicited communication
            beyond those product announcements.
          </p>
          <p>
            We will never sell, rent, or trade your email address to any third
            party.
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-3">
          <h2 className="text-base font-semibold font-mono tracking-wide text-foreground">
            3. Who we share it with
          </h2>
          <p>
            We use a third-party email service provider to store and send launch
            announcements. That provider processes your email address on our behalf
            under a data processing agreement and may not use your data for any
            other purpose.
          </p>
          <p>
            Beyond that, we do not share your data with anyone — no advertisers,
            no analytics companies, no data brokers.
          </p>
        </div>

        {/* Section 4 */}
        <div className="space-y-3">
          <h2 className="text-base font-semibold font-mono tracking-wide text-foreground">
            4. How long we keep it
          </h2>
          <p>
            We keep your email address on our launch list until you unsubscribe or
            ask us to delete it. Every launch announcement email includes a
            one-click unsubscribe link. You can also request deletion by emailing{" "}
            <a
              href="mailto:privacy@birdbrain.audio"
              className="font-mono text-primary hover:underline"
            >
              privacy@birdbrain.audio
            </a>
            .
          </p>
        </div>

        {/* Section 5 */}
        <div className="space-y-3">
          <h2 className="text-base font-semibold font-mono tracking-wide text-foreground">
            5. Cookies
          </h2>
          <p>
            This website does not set any cookies beyond those strictly necessary
            to serve the page (session management, security). We do not use
            third-party cookies, advertising cookies, or persistent tracking
            cookies.
          </p>
        </div>

        {/* Section 6 */}
        <div className="space-y-3">
          <h2 className="text-base font-semibold font-mono tracking-wide text-foreground">
            6. Your rights
          </h2>
          <p>
            Depending on where you live, you may have rights including: access to
            the personal data we hold about you, correction of inaccurate data,
            deletion of your data, and portability of your data. To exercise any
            of these rights, email{" "}
            <a
              href="mailto:privacy@birdbrain.audio"
              className="font-mono text-primary hover:underline"
            >
              privacy@birdbrain.audio
            </a>
            . We will respond within 30 days.
          </p>
        </div>

        {/* Section 7 */}
        <div className="space-y-3">
          <h2 className="text-base font-semibold font-mono tracking-wide text-foreground">
            7. Children
          </h2>
          <p>
            This website is not directed at children under the age of 13. We do
            not knowingly collect personal information from children.
          </p>
        </div>

        {/* Section 8 */}
        <div className="space-y-3">
          <h2 className="text-base font-semibold font-mono tracking-wide text-foreground">
            8. Changes to this policy
          </h2>
          <p>
            If we make material changes to how we handle personal data, we will
            update the &ldquo;Last updated&rdquo; date at the top of this page. Significant
            changes will be announced via the launch list before taking effect.
          </p>
        </div>

        {/* Contact */}
        <div className="p-5 rounded-lg border border-border bg-card space-y-2">
          <p className="font-mono text-xs text-primary uppercase tracking-widest">
            Questions?
          </p>
          <p>
            Reach us at{" "}
            <a
              href="mailto:privacy@birdbrain.audio"
              className="font-mono text-primary hover:underline"
            >
              privacy@birdbrain.audio
            </a>
            . We&apos;re a small team and we read every message.
          </p>
        </div>

      </section>
    </>
  );
}
