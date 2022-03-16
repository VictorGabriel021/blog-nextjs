import classes from "./styles.module.css";

import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/vitor.jpg"
          alt="An image showing Victor Gabriel"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Victor Gabriel</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
};

export default Hero;
