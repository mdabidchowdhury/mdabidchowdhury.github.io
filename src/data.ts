// Edit this file to personalize the portfolio. Populated from Abid's CV (see /mnt/user-data/uploads/CV.pdf).
export const profile = {
  name: 'Md. Abid Chowdhury', initials: 'ac', role: 'Robotics & Mechatronics Engineer · Researcher',
  institution: 'University of Dhaka', location: 'Dhaka, Bangladesh',
  email: 'abid.chowdhury.ban@gmail.com',
  // Image intentionally left as the sample placeholder — replace with your own photo in public/images/.
  image: '/images/abid_chowdhury.jpg',
  links: {
    'Google Scholar': 'https://scholar.google.com/citations?hl=en&user=hT2Xo8AAAAAJ',
    'GitHub': 'https://github.com/mdabidchowdhury',
    'LinkedIn': 'https://www.linkedin.com/in/md-abid-chowdhury-485288259/',
    'ORCID': 'https://orcid.org/0009-0007-3197-5168',
  },
};

export type Project = { id: number; title: string; category: string; year: string; description: string; image?: string; video?: string; tags: string[]; detail: string; github: string };
export const projects: Project[] = [
  { id: 1, title: 'Bat-inspired passive UAV perching', category: 'Aerial Robotics', year: 'Jan 2026 — Present', image: '/images/claw.png', description: 'A bio-inspired passive locking and active unlocking perching mechanism that lets UAVs hang onto cylindrical structures for extended data collection.', tags: ['Bio-Inspired Design', 'UAV Perching', 'FEA'], detail: 'This thesis project designs, simulates, and prototypes a bat-inspired passive locking and active unlocking perching system that allows a UAV to persistently hang onto cylindrical structures such as poles and branches, enabling extended aerial data collection without continuous flight power draw.\n\nMy contributions include simulating and validating the perching mechanism, formulating an analytical mathematical framework for the locking and unlocking behavior, and validating the design through structural FEA (Static Structural) analysis loops.', github: 'https://github.com/topics/uav' },
  { id: 2, title: 'Flexipede: modular myriapod robot', category: 'Field Robotics', year: 'Jul 2024 — Dec 2025', image: '/images/decipede.png', description: 'A modular myriapod-inspired robot with a single-actuator bipedal walking mechanism for rough-terrain traversal.', tags: ['Legged Robotics', 'Bio-Inspired Design', 'Fabrication'], detail: 'Flexipede is a modular robot that mimics myriapod (millipede) kinematics, featuring a custom single-actuator bipedal walking mechanism designed to traverse rough terrain.\n\nMy contributions included aiding in the mechanical design and fabrication of the physical robot, and later collecting and analyzing its terrain-traversal performance data. This work is published as "Flexipede: A Bio-Inspired, Modular Myriapod Robot for Rough-Terrain Traversal" in Robotics (MDPI).', github: 'https://github.com/topics/legged-robots' },
  { id: 3, title: 'Turtle-inspired swimming robot', category: 'Underwater Robotics', year: 'Sep 2024 — Present', image: '/images/turtle.png', description: 'A modular, turtle-inspired swimming robot using a minimal actuator configuration for high-efficiency underwater exploration.', tags: ['CFD', 'Underwater Robotics', 'Webots'], detail: 'This project explores a modular, turtle-inspired swimming robot designed for high-efficiency underwater exploration using a minimal number of actuators.\n\nMy contributions included running coupled Computational Fluid Dynamics (CFD) and Finite Element Analysis (FEA) simulations to optimize multi-material hydrodynamics and pressure distribution, aiding in developing kinematic predictions in the Webots simulation environment, and verifying the framework through empirical trials on full-scale physical hardware.', github: 'https://github.com/topics/underwater-robotics' },
];

// Publication years/status noted as "Under review" or approximate where the CV did not state an exact
// publication year or DOI — confirm and update these once each paper's status is finalized.
export const publications = [
  { id: 1, title: 'Flexipede: A Bio-Inspired, Modular Myriapod Robot for Rough-Terrain Traversal', authors: 'Samudra Jit Saha, Md. Abid Chowdhury, Sayma Islam, Shamim Ahmed Deowan, Shifat E. Arman, and Abhishek K. Ghosh', venue: 'Robotics (MDPI)', year: '2026', type: 'Journal', doi: 'https://doi.org/10.3390/robotics15070129', abstract: 'This work presents Flexipede, a bio-inspired modular myriapod robot designed for traversing rough terrain. The robot uses a single-actuator bipedal walking mechanism that mimics myriapod kinematics, reducing actuation complexity while maintaining adaptability across rough terrains. The study covers the robot\'s mechanical design, fabrication, and terrain-traversal performance evaluation.', bibtex: '@article{saha2026flexipede,\n  title={Flexipede: A Bio-Inspired, Modular Myriapod Robot for Rough-Terrain Traversal},\n  author={Saha, Samudra Jit and Chowdhury, Md Abid and Islam, Sayma and Deowan, Shamim Ahmed and Arman, Shifat E and Ghosh, Abhishek K},\n  journal={Robotics},\n volume={15}, \n number={7}, \n pages={129}, \n year={2026}, \n publisher={MDPI} \n}' },
  { id: 2, title: 'Material Selection and Fiber Orientation Effects in Composite Overwrapped Steel Pipelines: A Numerical Study for Burst Pressure Enhancement', authors: 'Samudra Jit Saha, Marufa Akter, Nowreen Jahan, Sayma Islam, Abid Chowdhury, and Md. Abdus Shabur', venue: 'Journal of Sustainable Smart Materials and Structural Systems', year: '2026', type: 'Journal', doi: '', abstract: 'This study numerically investigates how material selection and fiber winding angle affect the burst pressure performance of composite-overwrapped steel pipelines. Four industrial composite material systems are modeled to evaluate stress and load-sharing behavior for the structural rehabilitation of transmission piping networks, using finite element analysis to identify optimal anisotropic winding configurations under hydrostatic loading.', bibtex: '@article{saha2026material,\n  title={Material Selection and Fiber Orientation Effects in Composite Overwrapped Steel Pipelines: A Numerical Study for Burst Pressure Enhancement},\n  author={Saha, Samudra Jit and Akter, Marufa and Jahan, Nowreen and Islam, Sayma and Chowdhury, Abid and Shabur, Md. Abdus},\n  journal={Journal of Sustainable Smart Materials and Structural Systems},\n  volume={2},\n pages={61--74},\n year={2026}\n}' },
];

export const education = [
  { date: '2022 — 2026', title: 'B.Sc. in Robotics & Mechatronics Engineering', org: 'University of Dhaka', detail: 'CGPA: 3.30 / 4.00 (through 7th semester) · Dhaka, Bangladesh', description: 'Thesis: Bat-Inspired Passive Locking Claw and Leg Design and Development for UAVs', note: 'Thesis advisors: Dr. Shamim Ahmed Deowan, Shifat E. Arman' },
];
export const experience = [
  { date: 'Feb 2024 — Present', title: 'Researcher', org: 'Cortex AI Lab', detail: 'Dhaka, Bangladesh · Director: Shifat E. Arman', description: 'Conduct research across multidisciplinary fields of robotics and mechatronics, integrating state-of-the-art machine learning, computer vision, and bio-inspired artificial intelligence frameworks.', note: '' },
  { date: 'Sep 2024 — Sep 2025', title: 'Undergraduate Research Assistant', org: 'University of Dhaka', detail: 'Dhaka, Bangladesh · Supervisors: Dr. Shamim Ahmed Deowan, Shifat E. Arman', description: 'Researcher on a turtle-inspired modular swimming robot utilizing a minimal actuator configuration for high-efficiency underwater exploration.', note: '' },
  { date: 'Nov 2024 — Mar 2025', title: 'Undergraduate Research Assistant', org: 'Mechatronics and Artificial Intelligence in Medicine (MAIM) Lab', detail: 'Dhaka, Bangladesh · Director: Dr. Abhishek Kumar Ghosh', description: 'Researcher on "Flexipede: A Bio-Inspired, Modular Myriapod Robot for Rough-Terrain Traversal," managing simulation, fabrication, and structural validation.', note: '' },
];
export const skillGroups = [
  { name: 'Programming & frameworks', skills: ['Python', 'C/C++', 'MATLAB', 'LaTeX', 'ROS 2 (Jazzy)'] },
  { name: 'AI & machine learning', skills: ['PyTorch', 'TensorFlow', 'Keras', 'Hugging Face', 'LangChain', 'Scikit-learn', 'OpenCV', 'Edge Impulse', 'CUDA'] },
  { name: 'Simulation & modeling', skills: ['Ansys', 'COMSOL Multiphysics', 'Fusion 360', 'KiCAD'] },
  { name: 'Hardware & prototyping', skills: ['ESP32', 'Raspberry Pi Pico', 'STM32', 'PLC', 'Oscilloscope', 'Function Generator', '3D Printing'] },
];
export const achievements = [
  { year: '2026', title: 'Silver Medal (2nd Place) — Physics and Applied Engineering', description: '8th World Innovation Competition and Exhibition (WICE), Northern University Bangladesh' },
  { year: '2026', title: 'Winner (4th Place) — Robotics & IoT', description: '1st Global Robotics and Innovation Consortium 2026, United International University' },
  { year: '2025', title: 'Champion (1st Place) — Robotics Project Showcase', description: 'Robotronics Fest 2025, University of Dhaka' },
  { year: '2024', title: 'Research Grant — ICT Division Innovation Fund', description: 'ICT Ministry, Dhaka, Bangladesh' },
];
