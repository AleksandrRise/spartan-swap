export default function HeroSection() {

  // Classes
  const wrapperClasses = "p-10"
  const textWrapperClasses = "text-8xl leading-tight"
  const textNormalClasses = "font-light"
  const textBoldClasses = "font-bold"
  const btnClasses = "mt-8 bg-primary text-white px-9.5 py-4.5 text-2xl font-bold cursor-pointer"
  const bottomTextClasses = "mt-8 text-gray-900 font-semibold"

  return (
    <section className={wrapperClasses}>

      {/* Main Heading */}
      <h1 className={textWrapperClasses}>
        <span className={textNormalClasses}>No stress.</span>
        <br />
        <span className={textBoldClasses}>Just swaps</span>
      </h1>

      {/* Blue Button */}
      <button className={btnClasses}>
        Begin Now
      </button>

      {/* Bottom Text */}
      <p className={bottomTextClasses}>
        Get the classes you need.
      </p>

    </section>
  );
};