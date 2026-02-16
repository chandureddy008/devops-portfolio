"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const fade = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  const [time, setTime] = useState(new Date());
  const [cpuLoad, setCpuLoad] = useState(12);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const cpuTimer = setInterval(() => {
      setCpuLoad(Math.floor(Math.random() * 20) + 10);
    }, 3000);
    return () => {
      clearInterval(timer);
      clearInterval(cpuTimer);
    };
  }, []);

  const WindowHeader = ({ title }: { title: string }) => (
    <div className="bg-[#1a1a2e] border-b border-green-500/30 px-4 py-2 flex items-center justify-between">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="text-gray-400 text-xs font-mono">{title}</div>
      <div className="text-gray-500 text-xs font-mono">STDOUT</div>
    </div>
  );

  return (
    <main className="bg-black text-green-400 min-h-screen overflow-x-hidden font-mono">
      
      {/* STATUS BAR */}
      <div className="fixed top-0 w-full bg-black border-b border-green-500/30 px-6 py-2 flex justify-between items-center text-xs z-50">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-green-400">▲</span>
            <span className="text-green-400">STATUS: ONLINE</span>
          </div>
          <span className="text-gray-500">USR: CHANDRA</span>
          <span className="text-gray-500">NODE: PORTFOLIO_V2</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-500">⌘ PRESS CTRL+K FOR COMMAND PALETTE</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-400">
            {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
          </span>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-12 w-full bg-black/90 backdrop-blur-md px-6 py-4 flex justify-between items-center z-40 border-b border-green-500/20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 flex items-center justify-center text-black font-bold text-xl">
            C
          </div>
          <span className="text-white font-bold text-lg">CHANDRAREDDY.sh</span>
        </div>
        
        <div className="flex gap-6 text-sm">
          {["about", "skills", "experience", "projects"].map(i => (
            <a
              key={i}
              href={`#${i}`}
              className="text-gray-400 hover:text-green-400 transition"
            >
              ./{i}
            </a>
          ))}
        </div>
        
        <button className="bg-green-500 text-black px-6 py-2 font-bold hover:bg-green-400 transition">
          connect.exe
        </button>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-between px-12 pt-32 pb-12 gap-12">
        
        <div className="flex-1">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="text-sm text-green-400 mb-2">AUTH_SUCCESS</div>
            <div className="text-gray-400 mb-4">
              <span className="text-green-400">chandra@sre:~$</span> whoami --bio
            </div>
          </motion.div>

          <motion.h1
            className="text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-gray-300">DEVOPS</span>{" "}
            <span className="text-gray-300">ENGINEER</span>
            <br />
            <span className="text-green-400">& CLOUD SRE</span>
          </motion.h1>

          <motion.div
            className="border-l-2 border-green-500 pl-6 text-gray-400 leading-relaxed mb-8 max-w-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Experienced & Certified DevOps Engineer with a strong background in cloud 
            infrastructure, DevOps automation, and full-stack observability. Proficient in AWS, 
            Azure, Kubernetes, Docker, and GitOps tools like Helm and FluxCD. Skilled in building 
            robust CI/CD pipelines and automating infrastructure with Python/Bash.
          </motion.div>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            className="inline-block bg-transparent border-2 border-green-500 text-green-400 px-8 py-3 font-bold hover:bg-green-500 hover:text-black transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            [DOWNLOAD_RESUME.pdf]
          </motion.a>
        </div>

        <motion.div
          className="w-96"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-[#0a0a0a] border border-green-500/30 p-6">
            <div className="flex items-center gap-2 mb-4 text-green-400">
              <span>📊</span>
              <span className="font-bold">SYSTEM_RESOURCES</span>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">NAME</span>
                <span className="text-white">CHANDRA SEKHAR REDDY</span>
              </div>
             <div className="flex justify-between">
  <span className="text-gray-500">ROLE</span>
  <span className="text-green-400">CLOUD / DEVOPS ENGINEER</span>
</div>
              <div className="flex justify-between">
                <span className="text-gray-500">ZONE</span>
                <span className="text-white">AP-SOUTH-1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">SHELL</span>
                <span className="text-white">ZSH</span>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-500">CPU_LOAD</span>
                  <span className="text-green-400">{cpuLoad}%</span>
                </div>
                <div className="w-full bg-gray-800 h-2">
                  <div 
                    className="bg-green-500 h-2 transition-all duration-500"
                    style={{ width: `${cpuLoad}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <motion.section
        id="skills"
        className="py-24 px-12"
        variants={fade}
        initial="hidden"
        whileInView="show"
      >
        <div className="bg-[#0a0a0a] border border-green-500/30">
          <WindowHeader title="CAPABILITIES.v3" />
          
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {[
              {
                icon: "☁️",
                title: "CLOUD & CONTAINERS",
                skills: [
                  "Amazon AWS (EKS, EC2, S3)",
                  "Azure (AKS)",
                  "Google Cloud Platform",
                  "Docker",
                  "Kubernetes",
                  "Helm",
                  "FluxCD"
                ]
              },
              {
                icon: "📦",
                title: "INFRASTRUCTURE & AUTOMATION",
                skills: [
                  "Terraform",
                  "Ansible",
                  "CloudFormation",
                  "Bash Scripting",
                  "Python",
                  "Jenkins",
                  "GitHub Actions",
                  "GitLab CI"
                ]
              },
              {
                icon: "</>",
                title: "OBSERVABILITY & SECURITY",
                skills: [
                  "New Relic",
                  "Dynatrace",
                  "Prometheus",
                  "Grafana",
                  "ELK Stack",
                  "DataDog",
                  "Cloudflare WAF",
                  "SSL/TLS",
                  "VPN"
                ]
              },
              {
                icon: "</>",
                title: "DATABASES & DEV",
                skills: [
                  "MySQL",
                  "Redis",
                  "MongoDB",
                  "DynamoDB",
                  "JavaScript",
                  "React",
                  "Django",
                  "Postman"
                ]
              },
              {
                icon: "🤖",
                title: "AI & FUTURE TECH",
                skills: [
                  "GenAI (ChatGPT)",
                  "New Relic AI",
                  "Datadog AIOps",
                  "Quantum Computing Simulation"
                ]
              },
              {
                icon: "🔧",
                title: "VERSION CONTROL & TOOLS",
                skills: [
                  "Git",
                  "GitHub",
                  "GitLab",
                  "Bitbucket",
                  "Linux",
                  "Networking"
                ]
              }
            ].map(category => (
              <div key={category.title} className="border border-green-500/20 p-6 hover:border-green-500/50 transition">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-white font-bold text-sm">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map(skill => (
                    <div
                      key={skill}
                      className="text-gray-400 text-sm bg-black/50 px-3 py-1.5 border border-green-500/20 hover:border-green-500/50 hover:text-green-400 transition"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* EXPERIENCE SECTION */}
      <motion.section
        id="experience"
        className="py-24 px-12"
        variants={fade}
        initial="hidden"
        whileInView="show"
      >
        <div className="bg-[#0a0a0a] border border-green-500/30">
          <WindowHeader title="EMPLOYMENT_RECORDS.LOG" />
          
          <div className="p-8 space-y-6">
            
            {[
              {
                icon: "📍",
                company: "WIPRO",
                role: "DevOps/Site Reliability Engineer",
                period: "September 2024 — PRESENT",
                achievements: [
                  "Migrated 20+ applications to AWS.",
                  "Built CI/CD pipelines using GitHub Actions.",
                  "Managed EKS deployments.",
                  "Implemented monitoring with Prometheus & Grafana.",
                  "Automated infrastructure via Terraform & CloudFormation."
                ]
              },
              {
                icon: "📍",
                company: "CAPGEMINI",
                role: "DevOps Engineer",
                period: "April 2023 — Sept 2024",
                achievements: [
                  "Provisioned AWS infra using Terraform.",
                  "CI/CD with GitHub Actions & CodePipeline.",
                  "Managed EC2, VPC, IAM & CloudWatch."
                ]
              },
              {
                icon: "📍",
                company: "SKILL LYNC",
                role: "DevOps Engineer",
                period: "Nov 2022 — April 2023",
                achievements: [
                  "Created Jenkins pipelines.",
                  "Dockerized applications.",
                  "Automated deployment workflows."
                ]
              }
            ].map(job => (
              <div key={job.company} className="border border-green-500/20 hover:border-green-500/50 transition">
                <div className="bg-black/50 px-6 py-4 border-b border-green-500/20">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{job.icon}</span>
                      <div>
                        <h3 className="text-white font-bold text-lg">{job.role}</h3>
                        <div className="text-green-400 font-semibold">{job.company}</div>
                      </div>
                    </div>
                    <div className="text-gray-500 text-xs">{job.period}</div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <ul className="space-y-2 text-gray-400 text-sm">
                    {job.achievements.map(achievement => (
                      <li key={achievement} className="flex gap-3">
                        <span className="text-green-400 mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PROJECTS SECTION */}
      <motion.section
        id="projects"
        className="py-24 px-12"
        variants={fade}
        initial="hidden"
        whileInView="show"
      >
        <div className="bg-[#0a0a0a] border border-green-500/30">
          <WindowHeader title="PROJECT_ARCHIVES.db" />
          
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {[
              {
                name: "Best Buy Cloud Migration",
                tech: "AWS • EKS • Terraform • GitHub Actions",
                description: "Lift-and-shift migration to AWS.",
                highlights: [
                  "Automated deployments across environments.",
                  "EKS-based container orchestration."
                ]
              },
              {
                name: "Kroger Infrastructure Automation",
                tech: "Terraform • AWS • CI/CD • CloudFormation",
                description: "Terraform reusable modules.",
                highlights: [
                  "Automated build & release pipelines.",
                  "Secure AWS infrastructure design."
                ]
              },
              {
                name: "Mitsubishi Automation",
                tech: "Jenkins • Docker • AWS • Git",
                description: "Built Jenkins CI/CD pipelines.",
                highlights: [
                  "Dockerized applications.",
                  "Automated environment setup."
                ]
              },
              {
                name: "Bridgestone DevOps",
                tech: "Kubernetes • Docker • Jenkins",
                description: "Automated deployment workflows.",
                highlights: [
                  "Container orchestration.",
                  "Monitoring and alerting."
                ]
              }
            ].map(project => (
              <div key={project.name} className="border border-green-500/20 hover:border-green-500/50 transition">
                <div className="bg-black/50 px-6 py-4 border-b border-green-500/20">
                  <h3 className="text-white font-bold text-lg mb-2">{project.name}</h3>
                  <div className="text-green-400 text-xs font-mono">{project.tech}</div>
                </div>
                <div className="px-6 py-4">
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <ul className="space-y-2">
                    {project.highlights.map(highlight => (
                      <li key={highlight} className="flex gap-2 text-gray-500 text-xs">
                        <span className="text-green-400">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CERTIFICATIONS & CONTACT */}
      <section className="py-24 px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Certifications */}
          <motion.div
            className="bg-[#0a0a0a] border border-green-500/30"
            variants={fade}
            initial="hidden"
            whileInView="show"
          >
            <WindowHeader title="CERTIFICATIONS.txt" />
            <div className="p-8 space-y-4">
              <div className="border border-green-500/20 p-4 hover:border-green-500/50 transition">
                <div className="text-green-400 font-bold mb-1">AWS Certified DevOps Engineer</div>
                <div className="text-gray-500 text-sm">Professional Level</div>
              </div>
              <div className="border border-green-500/20 p-4 hover:border-green-500/50 transition">
                <div className="text-green-400 font-bold mb-1">AWS Certified Cloud Practitioner</div>
                <div className="text-gray-500 text-sm">Foundational Level</div>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="bg-[#0a0a0a] border border-green-500/30"
            variants={fade}
            initial="hidden"
            whileInView="show"
          >
            <WindowHeader title="CONTACT_INFO.json" />
            <div className="p-8 space-y-4">
              <div className="border border-green-500/20 p-4 hover:border-green-500/50 transition">
                <div className="text-gray-500 text-xs mb-2">EMAIL</div>
                <a href="mailto:Chandrareddypapasani@gmail.com" className="text-green-400 hover:text-green-300">
                  Chandrareddypapasani@gmail.com
                </a>
              </div>
              <div className="border border-green-500/20 p-4 hover:border-green-500/50 transition">
                <div className="text-gray-500 text-xs mb-2">LINKEDIN</div>
                <a 
                  href="https://linkedin.com/in/chandu-reddy-772151190" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300"
                >
                  linkedin.com/in/chandu-reddy-772151190
                </a>
              </div>
              <div className="border border-green-500/20 p-4 hover:border-green-500/50 transition">
                <div className="text-gray-500 text-xs mb-2">LOCATION</div>
                <div className="text-white">Hyderabad, India</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-green-500/30 py-8 text-center text-gray-500 text-sm">
        <div className="mb-2">
          <span className="text-green-400">chandra@portfolio:~$</span> echo "Built with Next.js, Tailwind, and Framer Motion"
        </div>
        <div>© 2025 Chandra Sekhar Reddy. All rights reserved.</div>
      </footer>

    </main>
  );
}
