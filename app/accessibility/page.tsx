const title = "Covo Components - Accessibility Statement (draft)";

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
        Accessibility Statement
      </h1>
      <p className="text-zinc-400 mt-3">
        Draft, awaiting review by the site owner.
      </p>
    </div>
    <div className="prose prose-invert mt-12 mx-4 sm:mx-auto">
      <p>
        <strong>Draft:</strong> this page has not yet been approved by the site
        owner.
      </p>
      <h2>Our aim</h2>
      <p>
        We want everyone to be able to use this website. We aim to meet the Web
        Content Accessibility Guidelines (WCAG) 2.2 at level AA.
      </p>
      <h2>Known issues</h2>
      <p>
        Some component previews are interactive demos built by third-party
        authors and may not fully meet WCAG 2.2 AA. We are working through them.
      </p>
      <h2>Contact us</h2>
      <p>
        If you find something on this site hard to use, or need content in a
        different format, please tell us. [Site owner to add a contact email
        address.]
      </p>
    </div>
  </section>
);
