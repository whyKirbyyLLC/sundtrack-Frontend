import styles from "./page.module.css";

export default function Track() {
    return (
        <div className={styles.page}>
            <div className={styles.titleContainer}>
                <p className={styles.title}>daily diet diary</p>
                <p className={styles.subtitle}>
                    For the best results, try tracking your meals for at least a week to get the most accurate insights and achieve the best results.
                </p>
            </div>
            <div className={styles.formContainer}>
                Hi
            </div>
        </div>
    );
}