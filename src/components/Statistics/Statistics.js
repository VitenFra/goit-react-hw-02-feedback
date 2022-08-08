import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage, }) => {
    
    return (
        <>  
            <ul className={css.stList}>
            <li className={css.stItem}>Good: <span className={css.stValue}>{good}</span></li>
            <li className={css.stItem}>Neutral: <span className={css.stValue}>{neutral}</span></li>
            <li className={css.stItem}>Bad: <span className={css.stValue}>{bad}</span></li>
            <li className={css.stItem}>Total: <span className={css.stValue}>{total}</span></li>
            <li className={css.stItem}>Positive feedback: <span className={css.stValue}>{positivePercentage}%</span></li>
            </ul>
            </>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
};
