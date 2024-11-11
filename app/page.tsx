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
				<div className={styles.sectionTitle}>How does it work?</div>
				<div className={styles.steps}>
					<div className={styles.step}>
						<div className={styles.stepTitle}>1. Track your eating habits in our tracker</div>
						<div className={styles.stepContent}>
							<div className={styles.stepImage}>
								<img src="/phone_small.png" alt="Icon 2" />
							</div>
							<div className={styles.stepText}>
								Use our tracker to log what you eat each day, from a single week to a full month. For accurate insights, we recommend tracking for at least one week — a period that provides a representative snapshot of your typical diet. The longer you track,
								the more personalized and precise your nutritional analysis becomes, helping you make informed adjustments for better health.
							</div>
						</div>
					</div>
					<div className={styles.step}>
						<div className={styles.stepTitle}>2. Submit your data for review</div>
						<div className={styles.stepContent}>
							<div className={styles.stepText}>
								Once you've logged your meals and feel confident you have a representative view of your diet, simply submit your data for analysis. We'll take it from there, providing a detailed, science-backed report to help you understand your nutritional profile and identify areas for improvement.
							</div>
							<div className={styles.stepImage}>
								<img src="/analysis_small.png" alt="Icon 1" />
							</div>
						</div>
					</div>
					<div className={styles.step}>
						<div className={styles.stepTitle}>3. Implement our tips into your diet</div>
						<div className={styles.stepContent}>
							<div className={styles.stepImage}>
								<img src="/supplements_small.png" alt="Icon 3" />
							</div>
							<div className={styles.stepText}>
								With your personalized report in hand, you'll receive clear, actionable tips to improve your nutrition. Integrate these recommendations into your daily routine, making small, manageable changes that can have a big impact on your overall health and well-being.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
