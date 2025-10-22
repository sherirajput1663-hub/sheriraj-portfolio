import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Phone, MapPin, Download, Code, Briefcase, GraduationCap, Award, Github, Linkedin, Terminal, Sparkles, Rocket, Zap } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [activePage, setActivePage] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full Stack Developer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: 'Schoolynx',
      description: 'A comprehensive smart school management system designed to streamline administrative tasks, student management, attendance tracking, and academic performance monitoring.',
      tech: ['React', 'Next.js', 'JavaScript'],
      features: ['Student Management', 'Attendance System', 'Grade Tracking', 'Admin Dashboard'],
      gradient: 'from-cyan-500 to-blue-500',
      icon: '🏫'
    },
    {
      title: 'ITP Management System',
      description: 'Developed for Iqra University (Defence Phase 2, Karachi). A robust system to manage internship programs, student placements, and project evaluations.',
      tech: ['React', 'Java', 'Next.js'],
      features: ['Student Portal', 'Project Submission', 'Evaluation System', 'Report Generation'],
      gradient: 'from-purple-500 to-pink-500',
      icon: '🎓'
    },
    {
      title: 'Inventory Management System',
      description: 'An efficient inventory management solution to track items, manage stock levels, generate reports, and optimize warehouse operations.',
      tech: ['JavaScript', 'React', 'C#'],
      features: ['Stock Tracking', 'Order Management', 'Analytics Dashboard', 'Alert System'],
      gradient: 'from-orange-500 to-red-500',
      icon: '📦'
    }
  ];

  const skills = {
    languages: ['JavaScript', 'Python', 'C#', 'C++', 'Java'],
    frameworks: ['React', 'React Native', 'Next.js', 'Flutter (Basic)']
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setFormStatus('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    } else {
      setFormStatus('Please fill in all fields.');
      setTimeout(() => setFormStatus(''), 2000);
    }
  };

  const downloadResume = () => {
    const resumeContent = `MUHAMMAD SHAHEER
Full Stack Developer | BS IT Student

CONTACT
Phone: +92 333 2345525
Email: sherirajput1663@gmail.com
Location: Mirpurkhas, Sindh, Pakistan
DOB: 16/06/2003
Nationality: Pakistani

OBJECTIVE
To work with maximum potential in a challenging environment, with an opportunity of working 
with a diverse group of people and enhancing my skills with learning and experience.

EDUCATION
• BS (Information Technology) — University of Sindh, Jamshoro (2022 – Present)
• 12th Certificate (Pre-Engineering) — S.A.L Govt College, Mirpurkhas (Grade A+)
• 10th Certificate (Science) — Ashkia Progressive Public School (Grade A)

TECHNICAL SKILLS
Languages: JavaScript, Python, C#, C++, Java
Frameworks & Tools: React, React Native, Next.js, Flutter (basic)

PROJECTS
1. Schoolynx – A smart school management system
2. ITP Management System – Developed for Iqra University (Defence Phase 2, Karachi)
3. Inventory Management System – Efficient inventory tracking and management

EXPERIENCE
Internship at ORNESOL Pvt Ltd (3 months)
• Worked on real-time software projects using Java, React, and Next.js
• Gained hands-on experience in frontend and backend development
• Collaborated with team on multiple project deliverables

LANGUAGE SKILLS
• Urdu: Native
• English: B2 level (Independent User)

SOFT SKILLS
Adaptability, Problem Solving, Attention to Detail, Time Management, Effective Communication
`;
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Muhammad_Shaheer_Resume.txt';
    a.click();
  };

  const bgClass = darkMode ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const cardClass = darkMode ? 'bg-gray-800 bg-opacity-50 backdrop-blur-xl' : 'bg-white bg-opacity-70 backdrop-blur-xl';
  const borderClass = darkMode ? 'border-gray-700' : 'border-gray-200';
  const inputClass = darkMode ? 'bg-gray-700 bg-opacity-50' : 'bg-white bg-opacity-50';

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-all duration-500 relative overflow-hidden`}>
      {darkMode && (
        <>
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
          <div 
            className="fixed pointer-events-none"
            style={{
              left: mousePosition.x - 250,
              top: mousePosition.y - 250,
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
              transition: 'all 0.3s ease'
            }}
          />
        </>
      )}

      <nav className={`${cardClass} border-b ${borderClass} sticky top-0 z-50 backdrop-blur-xl`}>
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg blur opacity-75 animate-pulse"></div>
                <h1 className="relative text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent px-4 py-2">
                  &lt;MS/&gt;
                </h1>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              {['home', 'projects', 'resume', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => setActivePage(page)}
                  className={`relative group px-3 py-2 transition-all duration-300 ${
                    activePage === page ? 'text-cyan-400' : 'hover:text-cyan-400'
                  }`}
                >
                  <span className="relative z-10 capitalize">{page}</span>
                  {activePage === page && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 animate-slideIn"></span>
                  )}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {activePage === 'home' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="text-center space-y-8 py-12">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <div className="relative w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center text-6xl font-bold text-white shadow-2xl transform hover:scale-110 transition-transform duration-500">
                  MS
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-slideUp">
                  Muhammad Shaheer
                </h1>
                <div className="flex items-center justify-center gap-2">
                  <Terminal className="text-cyan-400" size={24} />
                  <p className="text-2xl text-cyan-400 font-mono h-8">
                    {typedText}
                    <span className="animate-blink">|</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-center gap-8 text-sm flex-wrap">
                <div className="flex items-center gap-2 group cursor-pointer">
                  <MapPin size={18} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-cyan-400 transition-colors">Mirpurkhas, Pakistan</span>
                </div>
                <div className="flex items-center gap-2 group cursor-pointer">
                  <Mail size={18} className="text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-purple-400 transition-colors">sherirajput1663@gmail.com</span>
                </div>
              </div>
            </div>

            <div className={`${cardClass} rounded-2xl p-8 shadow-2xl border ${borderClass} relative overflow-hidden group hover:shadow-cyan-500/20 transition-all duration-500`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Sparkles className="text-cyan-400 animate-spin-slow" />
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">About Me</span>
                </h2>
                <p className="text-lg leading-relaxed mb-6 opacity-90">
                  I am a passionate IT student at the University of Sindh, Jamshoro, with a strong foundation in software development. 
                  My goal is to work in a challenging environment where I can collaborate with diverse teams and continuously enhance my skills through learning and practical experience.
                </p>
                <p className="text-lg leading-relaxed opacity-90">
                  With hands-on experience in modern web technologies and a recent internship at ORNESOL Pvt Ltd, I have developed several 
                  real-world projects including school management systems and inventory solutions. I am always eager to take on new challenges 
                  and contribute to meaningful projects.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className={`${cardClass} rounded-2xl p-6 shadow-2xl border ${borderClass} hover:shadow-purple-500/20 transition-all duration-500 hover:transform hover:-translate-y-2`}>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <GraduationCap className="text-purple-400" />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span>
                </h3>
                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-purple-400">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
                    <h4 className="font-bold text-lg">BS (Information Technology)</h4>
                    <p className="text-sm opacity-70">University of Sindh, Jamshoro</p>
                    <p className="text-sm opacity-70">2022 – Present</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-purple-400">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full"></div>
                    <h4 className="font-bold text-lg">Pre-Engineering (Grade A+)</h4>
                    <p className="text-sm opacity-70">S.A.L Govt College, Mirpurkhas</p>
                  </div>
                </div>
              </div>

              <div className={`${cardClass} rounded-2xl p-6 shadow-2xl border ${borderClass} hover:shadow-cyan-500/20 transition-all duration-500 hover:transform hover:-translate-y-2`}>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Briefcase className="text-cyan-400" />
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Experience</span>
                </h3>
                <div className="relative pl-6 border-l-2 border-cyan-400">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                  <h4 className="font-bold text-lg">Software Development Intern</h4>
                  <p className="text-sm opacity-70 mb-3">ORNESOL Pvt Ltd • 3 months</p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <Zap size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                      <span>Worked on real-time software projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                      <span>Used Java, React, and Next.js</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                      <span>Frontend and backend development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${cardClass} rounded-2xl p-8 shadow-2xl border ${borderClass} hover:shadow-pink-500/20 transition-all duration-500`}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Rocket className="text-pink-400" />
                <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">Technical Skills</span>
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-3 text-lg">Programming Languages</h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.languages.map((skill, i) => (
                      <span
                        key={i}
                        className="px-5 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-sm font-medium hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-lg">Frameworks & Tools</h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.frameworks.map((skill, i) => (
                      <span
                        key={i}
                        className="px-5 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm font-medium hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activePage === 'projects' && (
          <div className="space-y-10 animate-fadeIn">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                My Projects
              </h1>
              <p className="text-lg opacity-70">Showcasing innovation and technical excellence</p>
            </div>
            <div className="grid gap-8">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className={`${cardClass} rounded-2xl p-8 shadow-2xl border ${borderClass} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden`}
                >
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`}></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="text-5xl">{project.icon}</div>
                        <h3 className="text-3xl font-bold">{project.title}</h3>
                      </div>
                    </div>
                    <p className="opacity-80 mb-6 text-lg">{project.description}</p>
                    <div className="mb-6">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <Code size={18} className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`} />
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, j) => (
                          <span
                            key={j}
                            className={`px-4 py-2 bg-gradient-to-r ${project.gradient} bg-opacity-20 border border-opacity-30 rounded-lg text-sm font-medium transform hover:scale-105 transition-all duration-300`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {project.features.map((feature, j) => (
                          <div key={j} className="flex items-center gap-3 text-sm bg-gray-700 bg-opacity-30 px-4 py-2 rounded-lg">
                            <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full animate-pulse`}></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activePage === 'resume' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Resume
              </h1>
              <button
                onClick={downloadResume}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105"
              >
                <Download size={22} />
                <span className="font-semibold">Download Resume</span>
              </button>
            </div>

            <div className={`${cardClass} rounded-2xl p-10 shadow-2xl border ${borderClass}`}>
              <div className="space-y-10">
                <div className="border-b border-gray-700 pb-6">
                  <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Muhammad Shaheer
                  </h2>
                  <p className="text-xl opacity-70 mb-4">Full Stack Developer | BS IT Student</p>
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-pointer">
                      <Phone size={18} className="text-cyan-400" />
                      +92 333 2345525
                    </div>
                    <div className="flex items-center gap-2 hover:text-purple-400 transition-colors cursor-pointer">
                      <Mail size={18} className="text-purple-400" />
                      sherirajput1663@gmail.com
                    </div>
                    <div className="flex items-center gap-2 hover:text-pink-400 transition-colors cursor-pointer">
                      <MapPin size={18} className="text-pink-400" />
                      Mirpurkhas, Sindh, Pakistan
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">Objective</h3>
                  <p className="opacity-90 leading-relaxed">
                    To work with maximum potential in a challenging environment, with an opportunity of working with a diverse group of people and enhancing my skills with learning and experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Education</h3>
                  <div className="space-y-5">
                    <div className="relative pl-6 border-l-2 border-purple-400">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
                      <h4 className="font-bold text-lg">BS (Information Technology)</h4>
                      <p className="text-sm opacity-70">University of Sindh, Jamshoro | 2022 – Present</p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-purple-400">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full"></div>
                      <h4 className="font-bold text-lg">12th Certificate (Pre-Engineering) — Grade A+</h4>
                      <p className="text-sm opacity-70">S.A.L Govt College, Mirpurkhas</p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-purple-400">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full"></div>
                      <h4 className="font-bold text-lg">10th Certificate (Science) — Grade A</h4>
                      <p className="text-sm opacity-70">Ashkia Progressive Public School</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">Experience</h3>
                  <div className="relative pl-6 border-l-2 border-cyan-400">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                    <h4 className="font-bold text-lg">Software Development Intern</h4>
                    <p className="text-sm opacity-70 mb-3">ORNESOL Pvt Ltd | 3 months</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Zap size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                        Worked on real-time software projects using Java, React, and Next.js
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                        Gained hands-on experience in frontend and backend development
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                        Collaborated with team members on multiple project deliverables
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-pink-400">Technical Skills</h3>
                  <div className="space-y-3 opacity-90">
                    <p>
                      <span className="font-bold text-pink-400">Languages:</span> JavaScript, Python, C#, C++, Java
                    </p>
                    <p>
                      <span className="font-bold text-pink-400">Frameworks & Tools:</span> React, React Native, Next.js, Flutter (Basic)
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-green-400">Soft Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {['Adaptability', 'Problem Solving', 'Attention to Detail', 'Time Management', 'Effective Communication'].map((skill, i) => (
                      <span
                        key={i}
                        className="px-5 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-sm font-medium hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300 transform hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-orange-400">Languages</h3>
                  <p className="opacity-90">
                    <span className="font-bold text-orange-400">Urdu:</span> Native
                  </p>
                  <p className="opacity-90">
                    <span className="font-bold text-orange-400">English:</span> B2 Level (Independent User)
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activePage === 'contact' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Get In Touch
              </h1>
              <p className="text-lg opacity-70">Let's collaborate and create something amazing together</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className={`${cardClass} rounded-2xl p-8 shadow-2xl border ${borderClass} hover:shadow-cyan-500/20 transition-all duration-500`}>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Mail className="text-cyan-400" />
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Contact Information</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="opacity-70 group-hover:text-cyan-400 transition-colors">+92 333 2345525</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="opacity-70 group-hover:text-purple-400 transition-colors">sherirajput1663@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="p-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg group-hover:scale-110 transition-transform">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="opacity-70 group-hover:text-pink-400 transition-colors">Mirpurkhas, Sindh, Pakistan</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h3 className="text-xl font-bold mb-4">Connect with me</h3>
                  <div className="flex gap-4">
                    <a href="#" className="p-3 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg hover:from-gray-600 hover:to-gray-500 transition-all duration-300 transform hover:scale-110">
                      <Github size={24} />
                    </a>
                    <a href="#" className="p-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all duration-300 transform hover:scale-110">
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>

              <div className={`${cardClass} rounded-2xl p-8 shadow-2xl border ${borderClass} hover:shadow-purple-500/20 transition-all duration-500`}>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Mail className="text-purple-400" />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Send Message</span>
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className={`w-full px-4 py-3 rounded-lg border ${borderClass} ${inputClass} focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300`}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className={`w-full px-4 py-3 rounded-lg border ${borderClass} ${inputClass} focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border ${borderClass} ${inputClass} focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 resize-none`}
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white rounded-lg hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 font-semibold"
                  >
                    Send Message
                  </button>
                  {formStatus && (
                    <div className={`p-4 rounded-lg text-center font-medium ${
                      formStatus.includes('successfully') 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      {formStatus}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}