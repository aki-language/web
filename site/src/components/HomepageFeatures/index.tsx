import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
  className?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Seamless C/C++ Integration',
    icon: '🔄',
    description: 'Zero-cost interop with C/C++ libraries, direct code emission, and full compatibility with existing build systems. Migrate your codebase gradually without breaking changes.',
    className: styles.integrationFeature,
  },
  {
    title: 'Modern Safety Guarantees',
    icon: '🛡️',
    description: 'Rust-like memory and thread safety by default, with RAII and ownership semantics. Keep your code secure without sacrificing performance.',
    className: styles.safetyFeature,
  },
  {
    title: 'Performance-First Design',
    icon: '⚡',
    description: 'Zero-cost abstractions, no garbage collection, and predictable runtime behavior. Modern syntax without the template complexity of C++.',
    className: styles.performanceFeature,
  },
];

function Feature({title, icon, description, className}: FeatureItem) {
  return (
    <div className={clsx(styles.featureCard, className)}>
      <div className={styles.featureIcon}>{icon}</div>
      <div className={styles.featureContent}>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={styles.heroSection}>
        <Heading as="h1" className={styles.heroTitle}>Aki Programming Language</Heading>
        <p className={styles.heroSubtitle}>A modern sleek programming language with great tooling.</p>
        <div className={styles.heroButtons}>
          <a href="#" className={clsx(styles.button, styles.primaryButton)}>
            Get Started
          </a>
          <a href="#" className={clsx(styles.button, styles.secondaryButton)}>
            View Source
          </a>
        </div>
      </div>
      <div className={styles.featuresContainer}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
