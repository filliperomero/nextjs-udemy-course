import Image from 'next/image'

import classes from './styles.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image 
          src="/images/site/me.jpg" 
          alt="An image showing Fillipe" 
          width={300} height={300} 
        />
      </div>
      <h1>Hi, I'm Fillipe</h1>
      <p>
        A Blog about web development - especially frontend frameworks like React and Vue
      </p>
    </section>
  )
}

export default Hero;