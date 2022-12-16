import styles from './Temperature.module.scss'
import classnames from "classnames";
import Stack from '@mui/material/Stack';
export const Temperature = ({temperature}) => {
    const formattedDegrees = temperature.map(item => ({...item, temp: Math.round(item.temp) > 0 ? `+${Math.round(item.temp)}` : Math.round(item.temp)}));
    const hours = temperature.map(item => item.time);

    return (
        <div className={styles.temperature}>
            <span className={classnames(styles.label, styles['label--temp'])}>Degree (°C)</span>
            <span className={classnames(styles.label, styles['label--time'])}>Time (Hours)</span>
            <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%" height="100%">
                {formattedDegrees.map((degree, idx) =>
                    <div key={idx} className={styles['temperature__degree']} style={{marginBottom: degree.temp * 10}}>
                        <div className={styles['temperature__chip']}>{degree.temp}</div>
                    </div>
                )}
            </Stack>
            <Stack direction="row" justifyContent="space-between" width="100%">
                {hours.map((hour, idx) =>
                    <div key={idx} className={styles['temperature__hour']}>
                        {hour}
                    </div>
                )}
            </Stack>
        </div>
    )
}
