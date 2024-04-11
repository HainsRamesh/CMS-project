import img from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Welcome to Hains's Projects Hub</h1>
          <p>
            Welcome to my digital playground, where creativity knows no bounds.
            Here, you'll find a curated collection of my projects spanning
            various disciplines and interests. Each project is a testament to my
            passion for innovation and craftsmanship. So, take a stroll through
            my virtual gallery and get inspired by the world I've crafted.
          </p>
        </div>
        <div className="img-container">
          <img src={img} alt="hero image" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
