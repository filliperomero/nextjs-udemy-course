import Link from 'next/link'

import classes from './styles.module.css'

const Button = ({ link, children, onClick, ...rest}) => {
  return (
    <>
      {link ? (
        <Link href={link} {...rest}>
          <a className={classes.btn}>
            {children}
          </a>
        </Link>
      ) : (
        <button className={classes.btn} onClick={onClick} {...rest}>
          {children}
        </button>
      )}
    </>
  )
}

export default Button;