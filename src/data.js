export const profile = {
  name: 'Yogita Jain',
  title: 'AI & Data Engineer',
  location: 'Pune, Maharashtra, India',
  email: 'yogitajain2510@gmail.com',
  linkedin: 'https://www.linkedin.com/in/yogita-jain-6247a1188/',
  topmate: 'https://topmate.io/yogita_jain/',
  tagline:
    'Senior Data & AI Engineer building cloud-native data platforms, ETL pipelines, and Generative AI solutions using Databricks, Palantir, AWS, Python, SQL and PySpark.',
  bio: [
    'I started my career with Deloitte USI and spent nearly four years designing large-scale AWS-based data engineering solutions for financial services clients. During that time, I worked on delivering cloud migrations, compliance solutions, and data modernization initiatives that generated significant business value, including a $1 million compliance cost reduction.',
    'I later moved to John Deere, where I worked on enterprise-scale analytics and AI platforms. My strengths are in Data Engineering, Cloud Migration and Modernization, and Generative AI, and I enjoy building scalable, business-focused solutions that combine strong data foundations with modern AI capabilities.',
  ],
  summary:
    'Senior Data & AI Engineer delivering scalable ETL pipelines, cloud data platforms, and enterprise analytics using AWS, Databricks, Palantir, PySpark, and SQL. Demonstrated business impact through $600K infrastructure savings, $1M compliance cost reduction, and 45% user-efficiency gains. Production-grade expertise in LLM applications, RAG systems, and AI agents on AWS Bedrock.',
  seeking:
    'Seeking Senior Data / AI Engineer roles in enterprise tech, fintech, or AI-first product companies.',
}

export const coreSkills = [
  { name: 'Python', icon: 'python' },
  { name: 'PySpark', icon: 'spark' },
  { name: 'SQL', icon: 'sql' },
  { name: 'Gen AI', icon: 'genai' },
  { name: 'Databricks', icon: 'databricks' },
  { name: 'Palantir Foundry', icon: 'palantir' },
]

export const stats = [
  { value: '6×', label: 'AWS Certifications' },
  { value: '$600K', label: 'Infra Savings' },
  { value: '$1M', label: 'Compliance Cost Cut' },
  { value: '100TB+', label: 'Data Processed Daily' },
]

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'SQL', 'PySpark'],
  },
  {
    category: 'Data Engineering',
    items: [
      'ETL/ELT Pipelines',
      'Data Modeling',
      'Data Warehousing',
      'Data Lakes',
      'SCD Type 2',
      'Data Integration',
      'Batch & Streaming Pipelines',
      'Delta Lake',
    ],
  },
  {
    category: 'Big Data & Platforms',
    items: ['Apache Spark', 'Databricks', 'Palantir Foundry'],
  },
  {
    category: 'Cloud & Infrastructure',
    items: [
      'AWS S3',
      'Glue',
      'Lambda',
      'Redshift',
      'Athena',
      'Step Functions',
      'EC2',
      'Bedrock',
      'RDS',
      'DMS',
    ],
  },
  {
    category: 'Generative AI & ML',
    items: [
      'Agentic AI',
      'AWS Bedrock',
      'Claude',
      'LLMs',
      'RAG Architecture',
      'Prompt Engineering',
      'LangChain',
      'LangGraph',
      'Embeddings',
      'Vector Search',
      'AI Agents',
      'MLflow',
    ],
  },
  {
    category: 'Governance & Quality',
    items: [
      'Data Governance',
      'Data Quality Frameworks',
      'Metadata Management',
      'Risk & Compliance',
      'Data Mesh',
    ],
  },
  {
    category: 'Tools & Visualization',
    items: ['DBT', 'Git', 'GitHub Actions', 'Jira', 'Power BI', 'Jupyter', 'VS Code'],
  },
]

export const experience = [
  {
    role: 'AI & Data Engineer',
    company: 'John Deere',
    team: 'Product Delivery Data & Analytics',
    period: 'Jun 2025 – Present',
    stack: [
      'PySpark',
      'Python',
      'SQL',
      'Databricks',
      'Palantir',
      'AWS',
      'Terraform',
      'AWS Bedrock',
      'Claude',
      'RAG',
      'Delta Lake',
    ],
    points: [
      'Independently built a production-grade Generative AI agent using AWS Bedrock, Claude, OpenAI GPT, React, and RAG architecture — enabling semantic search and automated PLM query resolution, reducing mean resolution time by 60% and improving user efficiency by 45%.',
      'Architected and optimized scalable ETL pipelines using PySpark, SQL, Databricks, and Palantir for manufacturing and PLM analytics, processing 100 TB+ of enterprise data daily with sub-hour SLA compliance.',
      'Orchestrated Palantir pipeline optimizations using linter-driven recommendations and automated scheduling, delivering approximately $600K in annual infrastructure cost savings.',
      'Designed a centralized API-based automation framework for enterprise data product registration across governance and quality dimensions, eliminating ~200 hours/month of manual compliance effort.',
      'Resolved critical AWS cloud vulnerabilities and owned enterprise-wide security and risk compliance, achieving zero critical findings in quarterly audits.',
      'Learned Terraform and independently executed production EC2 infrastructure migration across AWS accounts, contributing to full AWS account decommissioning.',
      'Deployed an Incomplete Parts Prediction ML solution at an enterprise hackathon for the PartsVerse team using MLflow-tracked predictive analytics.',
    ],
  },
  {
    role: 'Cloud Data Engineer',
    company: 'Deloitte USI',
    team: 'Lincoln Financial · NYL EDM · DirecTV',
    period: 'Sep 2021 – May 2025',
    stack: [
      'PySpark',
      'Python',
      'SQL',
      'AWS Glue',
      'Lambda',
      'Redshift',
      'Step Functions',
      'Athena',
      'DBT',
      'Docker',
    ],
    points: [
      'Designed and deployed batch and streaming data pipelines using AWS Glue, Lambda, and Step Functions for financial investment product analytics, reducing data latency by 40%.',
      'Reduced $1M in business compliance costs by delivering the high-impact CCPA detokenization module within tight timelines, processing 50M+ records with zero data loss.',
      'Developed scalable, cost-effective ETL frameworks for migration of 250+ data sources; automated metadata configuration to boost ingestion efficiency by 90%.',
      'Converted on-prem HQL to Amazon Redshift SQL, boosting processing performance by 30–40% and reducing monthly compute costs by ~$80K.',
      'Delivered 25+ optimization features, 120+ tables, and 10+ enhancements across ~25 sprints while managing 30+ interdependent work streams.',
      'Led Data Design work stream for 5+ high-priority use cases supporting 10M+ subscriber records; designed data lineage diagrams adopted as the team standard.',
    ],
  },
  {
    role: 'Software Development Engineer Trainee',
    company: 'CRIS – Indian Railways',
    team: 'DLW – Indian Railways',
    period: 'Jun 2020 – Nov 2020',
    stack: ['Python', 'Django', 'SQL', 'PostgreSQL', 'VS Code'],
    points: [
      'Developed 15+ interactive web forms using Python, Django, and PostgreSQL for the DLW wing of Indian Railways, digitizing manual workflows for 500+ daily users.',
      'Led requirements gathering, blueprint design, and end-to-end testing for peer modules, reducing post-launch defect rate by 25%.',
    ],
  },
]

// Replace `link` with your personal Credly badge URLs. If a badge image ever
// fails to load, a styled fallback badge (acronym + tier) is shown automatically.
export const certifications = [
  {
    name: 'AWS Certified Generative AI Developer',
    tier: 'Professional',
    code: 'GenAI',
    img: `${import.meta.env.BASE_URL}aws-certified-generative-ai-developer-professional.png`,
    link: 'https://www.credly.com/users/yogita-jain.4ba1cfd6',
  },
  {
    name: 'AWS Certified Machine Learning Engineer',
    tier: 'Associate',
    code: 'MLA',
    img: `${import.meta.env.BASE_URL}aws-certified-machine-learning-engineer-associate.png`,
    link: 'https://www.credly.com/users/yogita-jain.4ba1cfd6',
  },
  {
    name: 'AWS Certified Data Engineer',
    tier: 'Associate',
    code: 'DEA',
    img: `${import.meta.env.BASE_URL}aws-certified-data-engineer-associate.png`,
    link: 'https://www.credly.com/users/yogita-jain.4ba1cfd6',
  },
  {
    name: 'AWS Certified Developer',
    tier: 'Associate',
    code: 'DVA',
    img: `${import.meta.env.BASE_URL}aws-certified-developer-associate.png`,
    link: 'https://www.credly.com/users/yogita-jain.4ba1cfd6',
  },
  {
    name: 'AWS Certified AI Practitioner',
    tier: 'Foundational',
    code: 'AIF',
    img: `${import.meta.env.BASE_URL}aws-certified-ai-practitioner.png`,
    link: 'https://www.credly.com/users/yogita-jain.4ba1cfd6',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    tier: 'Foundational',
    code: 'CLF',
    img: `${import.meta.env.BASE_URL}aws-certified-cloud-practitioner.png`,
    link: 'https://www.credly.com/users/yogita-jain.4ba1cfd6',
  },
]

export const education = {
  degree: 'Bachelor of Technology – Computer Science',
  school: 'Banasthali Vidyapith',
  score: 'CGPA: 8.45 / 10',
  period: 'Jul 2017 – Jun 2021',
}

export const awards = [
  {
    title: 'Commendable Contribution Individual Award',
    org: 'John Deere',
    date: 'May 2026',
    desc: 'Recognized for outstanding individual impact on the Product Delivery Data & Analytics team.',
    details: [
      {
        heading: 'What — Innovation / Problem Solving / New Initiatives',
        paragraphs: [
          'Yogita demonstrated strong innovation and problem-solving by proactively identifying cost and performance inefficiencies across the Palantir and AWS ecosystems. She optimized and rescheduled Palantir jobs, resolved Linter warnings, and introduced Virtual Tables in Palantir, enabling more efficient data access patterns. In addition, she implemented the RDS Sync pipeline for PLM Insights data and established Data Quality frameworks across all Data Products, driving standardization, automation, and process improvements across the platform.',
        ],
      },
      {
        heading: 'How — Business Impact & Results Achieved',
        paragraphs: ['Yogita’s initiatives delivered measurable business impact across cost, stability, and scalability.'],
        bullets: [
          'Optimized Palantir workloads resulted in ~$360K annualized cost savings (~25–30% cost optimization).',
          'Virtual Tables and RDS Sync pipeline improved data availability and processing efficiency by ~30–40% for analytics and reporting use cases.',
          'Implementation of Data Quality checks improved data reliability and reduced downstream data issues by ~40%.',
          'Resolution of high-risk AWS Infracost and critical cloud vulnerabilities reduced infrastructure and security risk exposure by >90%.',
        ],
        footer: 'These improvements directly benefited Data Engineering, Analytics, Platform Operations, and Business Insights teams.',
      },
      {
        heading: 'Customer Centricity',
        paragraphs: [
          'These contributions significantly enhanced customer experience by ensuring timely, trusted, and secure data for analytics and decision-making. Improved data quality, reliable sync pipelines, and optimized performance enabled faster insights, reduced data disruptions, and increased confidence for internal business stakeholders relying on PLM Insights and Palantir data products.',
        ],
      },
      {
        heading: 'Behavioral Attributes',
        paragraphs: [
          'Yogita consistently challenged the status quo by questioning inefficient job schedules and infrastructure costs. She demonstrated strong ownership by prioritizing high-risk issues and critical vulnerabilities. Her work reflected effective cross-functional collaboration with platform, security, and analytics teams, and she empowered others by laying down scalable, reusable data quality and pipeline patterns.',
        ],
      },
      {
        heading: 'Overall Comments',
        paragraphs: [
          'Yogita’s nomination stands out due to her rare combination of cost optimization, innovation, data quality excellence, and cloud security focus within a short period. Her contributions delivered tangible financial savings, strengthened platform resilience, and improved customer trust, making her a strong role model for engineering excellence and proactive ownership.',
          'Yogita Jain consistently demonstrated strong Commitment by taking end-to-end ownership of cost optimization, data quality, and cloud security initiatives, delivering measurable outcomes within tight timelines. Her Focus was evident in prioritizing high-impact areas such as Palantir job optimization, critical AWS vulnerabilities, and high-risk Infracost items. She upheld Quality by implementing robust Data Quality frameworks across all Data Products and ensuring reliable RDS Sync pipelines for PLM Insights. Yogita showed Courage by challenging existing job schedules, addressing technical debt, and proactively tackling cost and security risks before they escalated. Her approach reflected respect through effective cross-functional collaboration with platform, security, and analytics teams, ensuring sustainable and scalable solutions for the organization.',
          'This nomination stands out due to Yogita’s exceptional ability to deliver high business impact across cost savings, platform reliability, data quality, and cloud security within a short span of time. Her contributions resulted in approximately $360K annualized cost savings, improved data trustworthiness, enhanced system performance, and significantly reduced security and infrastructure risks. Yogita combines technical depth with strong ownership and a proactive mindset, consistently going beyond assigned responsibilities to improve the overall health of the data ecosystem. Her work not only delivered immediate results but also established scalable foundations for long-term efficiency and resilience, making her a strong role model for engineering excellence.',
        ],
      },
    ],
  },
  {
    title: 'WOW Performance Award',
    org: 'John Deere',
    date: 'Jan 2026',
    desc: 'Awarded for going above and beyond in delivering the production Generative AI PLM agent.',
    details: [
      {
        heading: 'Contribution Recognized',
        paragraphs: [
          'Yogita consistently elevated our delivery outcomes by combining platform stewardship with pragmatic execution. She led the weekend-job cost analysis and added a cost-impact lens to our Palantir job review, enabling data-driven savings decisions. She partnered across teams to triage persistent linter warnings and kicked off targeted full-load experiments to address compute/file-count issues. Yogita also unblocked our AWS account decommissioning by coordinating repo/role clean-up in parallel with the cloud team, and kept stakeholders aligned via crisp updates in the demo. Her work reduced risk, improved reliability, and created clear levers for cost optimization.',
        ],
      },
    ],
  },
  {
    title: 'Data Engineering Performance Award',
    org: 'Deloitte USI',
    date: 'Mar 2025',
    desc: 'Honored for excellence in architecting scalable, cost-effective ETL frameworks.',
    details: [
      {
        heading: 'Applause Award · Contribution Recognized',
        paragraphs: [
          'Yogita’s D&IP experience helped Service TZ project delivery significantly by understanding the unknowns before those were encountered during Service TZ source ingestion.',
        ],
      },
    ],
  },
  {
    title: 'AWS Community Initiative Award',
    org: 'Deloitte USI',
    date: 'Jan 2025',
    desc: 'Recognized for driving AWS knowledge-sharing and cloud best-practice adoption.',
    details: [
      {
        heading: 'Applause Award · Contribution Recognized',
        paragraphs: [
          'Recognized by the AWS COP channel for initiating the monthly AWS Quiz Whiz competition and for consistent efforts in creating quizzes and announcing winners each month.',
        ],
      },
    ],
  },
  {
    title: 'CCPA Development Applause Award',
    org: 'Deloitte USI',
    date: 'Jan 2024',
    desc: 'Awarded for delivering the high-impact CCPA detokenization module cutting $1M in costs.',
    details: [
      {
        heading: 'Applause Award · Contribution Recognized',
        paragraphs: [
          'Yogita demonstrated excellent initiative in assuming responsibility for CCPA development tasks related to specific modules. She also efficiently executed Detokenization in the landing layer for a streaming source within a tight timeframe, collaborating effectively with other teams.',
        ],
      },
    ],
  },
  {
    title: 'Data Pipeline Performance Award',
    org: 'Deloitte USI',
    date: 'Jul 2023',
    desc: 'Recognized for building reliable pipelines meeting a 99.9% data quality SLA.',
    details: [
      {
        heading: 'Applause Award · Contribution Recognized',
        paragraphs: [
          'Recognized for contributions towards File Ingestion Development support, production fixes, flexibility at the time of prod deliveries, and KT support — a valued asset to the File Ingestion team.',
        ],
      },
    ],
  },
  {
    title: 'Data Ingestion Performance Award',
    org: 'Deloitte USI',
    date: 'Dec 2022',
    desc: 'Honored for boosting ingestion efficiency by 90% through metadata automation.',
    details: [
      {
        heading: 'Applause Award · Contribution Recognized',
        paragraphs: [
          'Yogita did a great job building different POCs for JSON and XML custom parsers based on Glue-compatible PySpark. She played a major role in preparing Liquibase scripts for the Postgres Aurora database across all environments including production.',
        ],
      },
    ],
  },
  {
    title: 'Data Modelling Performance Award',
    org: 'Deloitte USI',
    date: 'Mar 2022',
    desc: 'Awarded for high-quality data modeling and source-to-target design standards.',
    details: [
      {
        heading: 'Applause Award · Contribution Recognized',
        paragraphs: [
          'Kudos on an excellent job on a challenging project and for helping extend the engagement.',
        ],
      },
    ],
  },
]

export const projects = [
  {
    title: 'Generative AI PLM Agent',
    tag: 'GenAI · RAG',
    description:
      'Production-grade AI agent on AWS Bedrock + Claude with a React front end and RAG architecture for semantic search and automated PLM query resolution.',
    impact: '60% faster resolution · 45% efficiency gain',
    tech: ['AWS Bedrock', 'Claude', 'RAG', 'React', 'OpenAI'],
  },
  {
    title: 'Enterprise ETL Platform',
    tag: 'Data Engineering',
    description:
      'Scalable PySpark + Databricks + Palantir pipelines processing 100TB+ of manufacturing and PLM data daily with sub-hour SLA compliance.',
    impact: '$600K annual infra savings',
    tech: ['PySpark', 'Databricks', 'Palantir', 'Delta Lake'],
  },
  {
    title: 'CCPA Detokenization Module',
    tag: 'Compliance',
    description:
      'High-impact compliance module processing 50M+ records with zero data loss, delivered within tight regulatory timelines.',
    impact: '$1M compliance cost reduction',
    tech: ['AWS Glue', 'Lambda', 'Step Functions', 'Python'],
  },
  {
    title: 'Data Quality Implementation',
    tag: 'Governance',
    description:
      'Centralized API-based automation framework for enterprise data product registration across governance and data quality dimensions.',
    impact: '~200 hrs/month manual effort removed',
    tech: ['Python', 'AWS', 'Data Governance'],
  },
  {
    title: 'Palantir Cost Optimization',
    tag: 'Cost Optimization',
    description:
      'Orchestrated Palantir Foundry pipeline optimizations using linter-driven recommendations and automated scheduling to eliminate wasteful compute across enterprise data products.',
    impact: '~$600K annual infrastructure savings',
    tech: ['Palantir Foundry', 'PySpark', 'Spark', 'Scheduling'],
  },
  {
    title: 'Incomplete Parts Prediction ML',
    tag: 'Machine Learning',
    description:
      'MLflow-tracked predictive analytics solution built at an enterprise hackathon for the PartsVerse team to flag manufacturing gaps before downstream impact.',
    impact: 'Early defect detection for PartsVerse',
    tech: ['MLflow', 'Python', 'Predictive ML'],
  },
]

export const hobbies = [
  {
    icon: 'travel',
    title: 'Travelling',
    text: 'Exploring new places, cultures, and cuisines — always up for the next adventure.',
  },
  {
    icon: 'movies',
    title: 'Movies',
    text: 'Unwinding with a good film across genres, from gripping thrillers to feel-good stories.',
  },
  {
    icon: 'food',
    title: 'Foodie',
    text: 'Hunting down great food and trying new recipes and flavors whenever I can.',
  },
  {
    icon: 'fitness',
    title: 'Yoga & Fitness',
    text: 'Staying grounded and energized through yoga, workouts, and mindful movement.',
  },
]

export const testimonials = [
  {
    quote:
      'I have worked with Yogita Jain and have been consistently impressed by her technical expertise, ownership mindset, and collaborative approach. She is a highly dependable Senior Software Engineer who delivers quality solutions, tackles complex challenges effectively, and always goes the extra mile to support her team. Her strong problem-solving skills, commitment to continuous learning, and ability to work seamlessly with stakeholders make her a valuable asset to any organization. I strongly recommend Yogita and look forward to seeing her continued success in her career.',
    name: 'Anil Nandeda',
    role: 'Senior Lead Data Engineer · Lakehouse Architect · GenAI · MLOps',
    relationship: 'Worked with Yogita on the same team',
    initials: 'AN',
  },
  {
    quote:
      'I had the pleasure of working closely with Yogita as a Data Engineer at Deloitte. She possesses strong AWS Data Engineering expertise and consistently demonstrates a solution-oriented mindset. She is highly persistent and never stops until she finds the right solution to a problem. Beyond her technical skills, she is an excellent team player who is always willing to support and help teammates whenever needed. Her dedication, collaboration, and problem-solving abilities make her a valuable asset to any team.',
    name: 'Chittaranjan Tripathy',
    role: 'Data Engineer III · AWS · dbt Analytics Engineer · ELT Pipelines',
    relationship: 'Worked with Yogita on the same team',
    initials: 'CT',
  },
  {
    quote:
      'I had the pleasure of working with Yogita on the same project and was always impressed by her strong analytical skills and technical expertise in AWS and Python. She consistently delivered high-quality solutions, quickly understood complex requirements, and was a reliable and collaborative teammate. Her problem-solving mindset and dedication made her a valuable contributor, and I would highly recommend her to any team.',
    name: 'Mayank Gawali',
    role: 'Data Engineer @ Swiss Re · Spark · Snowflake · Databricks · AWS',
    relationship: 'Worked with Yogita on the same team',
    initials: 'MG',
  },
  {
    quote:
      'I had the pleasure of working with Yogita at Deloitte as an AWS Data Engineer. She is a skilled professional with strong expertise in AWS and data engineering, consistently delivering high-quality solutions while tackling complex challenges effectively. Yogita is proactive, dependable, and a great team player who is always willing to support others. It was a pleasure working with her, and I highly recommend her to any team looking for a talented and dedicated data engineer. Wishing her continued success!',
    name: 'Shashank Raj',
    role: 'Software Engineer · Marriott · ex-Deloitte USI',
    relationship: 'Worked with Yogita on the same team',
    initials: 'SR',
  },
  {
    quote:
      'Working with Yogita was a great experience. She has a deep understanding of technology, especially AWS, and always learned new tools incredibly fast. She combined strong development skills with excellent team management, ensuring our project deliverables were always met on time. She was a reliable, highly skilled, and fantastic teammate.',
    name: 'Vijay Vavilapalli',
    role: 'Senior Associate at PwC AC · ex-Deloitte · AI & Data Engineer',
    relationship: 'Worked with Yogita on the same team',
    initials: 'VV',
  },
  {
    quote:
      'Yogita is a technology enthusiast and very dedicated person. Her commitment towards the work is highly appreciated. Along with technical skill, Yogita is very good at management as well. She is a good team player with whom I really enjoy working.',
    name: 'Rahul Kumbhar',
    role: 'AWS · Azure · Terraform · Salt · Python',
    relationship: 'Worked with Yogita on the same team',
    initials: 'RK',
  },
]
