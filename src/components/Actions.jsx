// components/Actions.jsx
export default function Actions() {
  return (
    <section
      id="rsvp"
      className="bg-knight-red/40 py-20 text-center text-white"
    >
      <div className="py-16 px-6">
        <h2 className="text-5xl font-bold mb-6">CELEBRATE WITH US</h2>
        <p className="mb-10 text-2xl ">RSVP and donate to support this incredible day of faith and community.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd4ptu7k4d4YSddOX9hJi-Bmsn7-6lh82yZFfGzEbPTmtP3GA/viewform?usp=sharing"
            className="bg-knight-navy hover:brightness-125 text-white px-10 py-4 text-xl font-semibold tracking-wide uppercase"
          >
            RSVP
          </a>
          <a
            href="https://gofund.me/1d34287c"
            className="bg-knight-red hover:brightness-110 text-white px-10 py-4 text-xl font-semibold tracking-wide uppercase"
          >
            Donate
          </a>
        </div>
      </div>
    </section>
  );
}