import classes from './styles.module.css';

const Card = ({ children }) => {
  return (
    <div className={classes.card}>
      {children}
    </div>
  )
}

export default Card;
