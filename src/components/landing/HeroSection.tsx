export default function HeroSection() {

  // Classes
  const wrapperClasses = "my-20"
  const textWrapperClasses = "text-8xl leading-tight opacity-87 font-display"
  const textNormalClasses = "font-light"
  const textBoldClasses = "font-bold"
  const btnClasses = "mt-8 bg-primary font-inter text-white px-9.5 py-4.5 text-2xl font-bold cursor-pointer"

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

    </section>
  );
};