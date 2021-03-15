import { useRef } from 'react'

import Button from '../../Ui/Button'

import classes from './styles.module.css'

const EventSearch = ({ onSearch }) => {
  const yearSelectRef = useRef();
  const monthSelectRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedYear = yearSelectRef.current.value;
    const selectedMonth = monthSelectRef.current.value;

    onSearch({ year: selectedYear, month: selectedMonth})
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select name="year" id="year" ref={yearSelectRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select name="month" id="month" ref={monthSelectRef}>
            <option value="1">January</option>
            <option value="2">Fabruary</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button type="submit">Find Events</Button>
    </form>
  )
}

export default EventSearch