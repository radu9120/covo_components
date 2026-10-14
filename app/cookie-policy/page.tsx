const title = "Covo Components - Cookie Policy (draft)";

export const metadata = {
  metadataBase: new URL("https://www.covo-components.co.uk"),
  title,
  robots: { index: false },
};

// DRAFT for the site owner to review and approve before it is relied on.
export default () => (
  <section className="mt-20">
    <div className="text-center mx-4">
      <h1 className="text-3xl heading font-extrabold tracking-tight mb-4 sm:text-4.5xl">
        Cookie Policy
      </h1>
      <p className="text-zinc-400 mt-3">
        Draft, awaiting review by the site owner.
      </p>
    </div>
    <div className="prose prose-invert mt-12 mx-4 sm:mx-auto">
      <p>
        <strong>Draft:</strong> this page has not yet been approved by the site
        owner. It will be updated once the details below are confirmed.
      </p>
      <h2>What we use</h2>
      <p>
        This website does not set advertising or tracking cookies when you
        first visit it.
      </p>
      <p>
        The site includes the Usermaven analytics script
        (events.usermaven.com). If it is switched on, it may store an anonymous
        identifier in your browser to count visits. [Site owner to confirm
        whether Usermaven is active, which cookies or storage it sets, and how
        long they last.]
      </p>
      <h2>Managing cookies</h2>
      <p>
        You can block or delete cookies in your browser settings. The site
        still works without them.
      </p>
      <p>
        See also our <a href="/privacy-policy">privacy policy</a>.
      </p>
    </div>
  </section>
);
