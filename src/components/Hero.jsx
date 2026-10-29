import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <span className="hero-badge">
        ยินดีต้อนรับชาวโดม
        <span className="hero-dot hero-dot--yellow" />
        <span className="hero-dot hero-dot--red" />
      </span>

      <h1 className="hero-title">
        อยากรู้อะไรเกี่ยวกับ
        <br />
        <span className="hero-highlight">ธรรมศาสตร์</span> ถามได้เลย
      </h1>

      <p className="hero-subtitle">
        ข้อมูลการรับสมัคร คณะ หลักสูตร ทุน วิทยาเขต และชีวิตในมหาวิทยาลัย
        รวมไว้ในที่เดียว
      </p>
    </section>
  );
}

export default Hero;
