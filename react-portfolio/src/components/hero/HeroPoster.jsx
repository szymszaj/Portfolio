const HeroPoster = () => (
  <div aria-hidden="true" className="absolute inset-0 bg-hero-frame">
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(60% 55% at 22% 18%, rgba(75, 59, 217, 0.26), transparent 70%)," +
          "radial-gradient(50% 45% at 82% 30%, rgba(232, 92, 122, 0.2), transparent 72%)," +
          "radial-gradient(70% 60% at 65% 95%, rgba(27, 23, 38, 0.14), transparent 75%)",
      }}
    />
  </div>
);

export default HeroPoster;
