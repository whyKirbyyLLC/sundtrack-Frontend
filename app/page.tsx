import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<div className={styles.topContainer}>
				<div className={styles.top}>
					<p className={styles.title}>tune your nutrition <br /> for a healthier life </p>
					<p className={styles.subtitle}>discover what your body truly needs and make <br /> informed choices for a balanced & vibrant life</p>
				</div>
				<img src="/heading_large.png" alt="Heading Large" className={styles.image} />
			</div>
			<div className={styles.middleWrapper}>
				<div className={styles.middle}>
					<p className={styles.quote}>"More than <span className={styles.highlight}>50%</span> of the world's population consumes <br /> insufficient levels of critical micronutrients, affecting health <br />  and wellbeing world wide."</p>
					<p className={styles.source}>
						<a href="https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(24)00276-6" target="_blank" rel="noopener noreferrer">
							- Passarelli, Simone et al. from Harvard T.H. Chan School of Public Health
						</a>
					</p>
					<p className={styles.caption}>We know how life-changing good nutrition can be. That’s why we created sundtrack: to provide everyone with affordable, science-backed nutritional analysis - making personalized health insights accessible to all.</p>
				</div>
				<div className={styles.featureContainer}>
					<div className={styles.featureBox}>
						<div className={styles.featureTitle}>Automated Analysis</div>
						<div className={styles.featureText}>Get a snapshot of your health with personalized insights.</div>
					</div>
					<div className={styles.featureBox}>
						<div className={styles.featureTitle}>Tailored Advice</div>
						<div className={styles.featureText}>Clear, actionable tips to optimize your diet.</div>
					</div>
				</div>
			</div>
			<div className={styles.bottom}>
				test
			</div>
		</div>
	);
}
