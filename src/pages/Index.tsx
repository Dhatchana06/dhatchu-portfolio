
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Linkedin, GraduationCap, User, BookOpen, FileText, Code, Globe, Award, MapPin, Download, ExternalLink, Github, Eye } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-green-50/95 backdrop-blur-sm border-b border-green-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <span className="text-green-400 font-bold text-lg">D</span>
              </div>
              <h1 className="text-xl font-bold text-black">Dhatchana S J</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-black hover:text-green-600 transition-colors font-medium">About</a>
              <a href="#education" className="text-black hover:text-green-600 transition-colors font-medium">Education</a>
              <a href="#projects" className="text-black hover:text-green-600 transition-colors font-medium">Projects</a>
              <a href="#certifications" className="text-black hover:text-green-600 transition-colors font-medium">Certifications</a>
              <a href="#contact" className="text-black hover:text-green-600 transition-colors font-medium">Contact</a>
            </nav>
            <Button className="bg-black hover:bg-gray-800 text-green-400">
              <Download size={16} className="mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="pt-24 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-green-100 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-black font-medium">Available for opportunities</span>
                </div>
                
                <div>
                  <h1 className="text-6xl md:text-7xl font-bold text-black mb-4 leading-tight">
                    Hello, I'm<br />
                    <span className="text-green-600">Dhatchana</span>
                  </h1>
                  <p className="text-2xl text-black font-semibold mb-6">
                    💡 Innovative Aspiring Thinker & Electronics Engineer
                  </p>
                </div>

                <p className="text-lg text-black/80 leading-relaxed max-w-xl">
                  To have a growth oriented and challenging career, where I can contribute my knowledge 
                  and skills to the organization and enhance my experience through continuous learning and teamwork.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/80 p-6 rounded-2xl border border-green-200/50 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">8.204</div>
                  <div className="text-sm text-black/70 font-medium">CGPA</div>
                </div>
                <div className="bg-white/80 p-6 rounded-2xl border border-green-200/50 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">5+</div>
                  <div className="text-sm text-black/70 font-medium">Certifications</div>
                </div>
                <div className="bg-white/80 p-6 rounded-2xl border border-green-200/50 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">3+</div>
                  <div className="text-sm text-black/70 font-medium">Projects</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button className="bg-black hover:bg-gray-800 text-green-400 px-8 py-3 text-lg rounded-full">
                  <Mail className="mr-2" size={20} />
                  Get In Touch
                </Button>
                <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-green-400 px-8 py-3 text-lg rounded-full">
                  <Eye className="mr-2" size={20} />
                  View Projects
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                  <Linkedin className="w-5 h-5 text-green-400" />
                </div>
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                  <Github className="w-5 h-5 text-green-400" />
                </div>
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5 text-green-400" />
                </div>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-96 h-96 rounded-3xl bg-gradient-to-br from-green-200 to-green-400 p-1 shadow-2xl">
                  <img 
                    src="/lovable-uploads/e53b5026-ad3f-4094-bb08-0fb7aea086d6.png" 
                    alt="Dhatchana S J" 
                    className="w-full h-full rounded-3xl object-cover"
                  />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-lg">
                  <Code className="w-8 h-8 text-green-400" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border-2 border-green-200">
                  <GraduationCap className="w-8 h-8 text-green-600" />
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-1/4 -left-8 w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="absolute bottom-1/4 -right-4 w-6 h-6 bg-black rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-white/60 border-y border-green-200/50 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Phone size={18} className="text-green-600" />
              </div>
              <div>
                <div className="text-sm text-black/60">Phone</div>
                <div className="font-semibold text-black">9080335343</div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Mail size={18} className="text-green-600" />
              </div>
              <div>
                <div className="text-sm text-black/60">Email</div>
                <div className="font-semibold text-black">dhatchana.sj.ece.2022@snsce.ac.in</div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Linkedin size={18} className="text-green-600" />
              </div>
              <div>
                <div className="text-sm text-black/60">LinkedIn</div>
                <div className="font-semibold text-green-700">dhatchanasampathkumar-sns</div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <MapPin size={18} className="text-green-600" />
              </div>
              <div>
                <div className="text-sm text-black/60">Location</div>
                <div className="font-semibold text-black">Coimbatore, Tamil Nadu</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {/* Education Section */}
        <section id="education">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 px-4 py-2 rounded-full mb-6">
              <GraduationCap className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-black font-medium">Education</span>
            </div>
            <h2 className="text-5xl font-bold text-black mb-6">Academic Journey</h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
              My educational background in Electronics and Communication Engineering with exceptional academic performance
            </p>
          </div>
          
          <div className="space-y-8">
            <Card className="hover:shadow-2xl transition-all duration-500 bg-white/80 border-0 rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative pb-6 pt-8">
                <div className="flex justify-between items-start">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-green-400" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl text-black mb-2">
                          BE - Electronics and Communication Engineering
                        </CardTitle>
                        <CardDescription className="text-xl text-black/80 font-medium">
                          SNS College of Engineering
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <Badge className="bg-green-600 text-white text-lg px-6 py-2 rounded-full">
                        CGPA: 8.204
                      </Badge>
                      <Badge variant="outline" className="text-black border-black border-2 text-lg px-6 py-2 rounded-full">
                        Nov '22 — Present
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 border-0 rounded-3xl group">
                <CardHeader className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <BookOpen className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-black">Higher Secondary Education</CardTitle>
                      <CardDescription className="text-lg text-black/80">
                        Metro Matriculation Higher Secondary School
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-green-100 text-green-800 text-base px-4 py-2 rounded-full">77%</Badge>
                    <span className="text-black/60 font-medium">Jun '21 — May '22</span>
                  </div>
                </CardHeader>
              </Card>
              
              <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 border-0 rounded-3xl group">
                <CardHeader className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <BookOpen className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-black">Secondary School</CardTitle>
                      <CardDescription className="text-lg text-black/80">
                        Metro Matriculation Higher Secondary School
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-green-100 text-green-800 text-base px-4 py-2 rounded-full">72.6%</Badge>
                    <span className="text-black/60 font-medium">Jun '19 — Mar '20</span>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 px-4 py-2 rounded-full mb-6">
              <Code className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-black font-medium">Projects</span>
            </div>
            <h2 className="text-5xl font-bold text-black mb-6">Featured Work</h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
              Innovative solutions in healthcare technology and IoT applications that showcase my technical expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-500 bg-white/80 border-0 rounded-3xl group hover:-translate-y-2">
              <CardHeader className="space-y-6 p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">💉</span>
                </div>
                <div>
                  <CardTitle className="text-2xl text-black mb-3">Smart Syringe Infusion Pump</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-black/80">
                    Innovative medical device project focusing on precision and automation in healthcare delivery systems with real-time monitoring.
                  </CardDescription>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 border-2 border-black text-black hover:bg-black hover:text-green-400 rounded-full">
                    <Eye size={16} className="mr-2" />
                    View
                  </Button>
                  <Button variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full">
                    <ExternalLink size={16} />
                  </Button>
                </div>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-2xl transition-all duration-500 bg-white/80 border-0 rounded-3xl group hover:-translate-y-2">
              <CardHeader className="space-y-6 p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">❤️</span>
                </div>
                <div>
                  <CardTitle className="text-2xl text-black mb-3">Heart Rate Monitoring System</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-black/80">
                    Real-time health monitoring system with automated data collection and analysis capabilities for continuous patient care.
                  </CardDescription>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 border-2 border-black text-black hover:bg-black hover:text-green-400 rounded-full">
                    <Eye size={16} className="mr-2" />
                    View
                  </Button>
                  <Button variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full">
                    <ExternalLink size={16} />
                  </Button>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 bg-white/80 border-0 rounded-3xl group hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <CardHeader className="space-y-6 p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🩺</span>
                </div>
                <div>
                  <CardTitle className="text-2xl text-black mb-3">Diabetes Prediction System</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-black/80">
                    AI-powered prediction system that won 1st prize at SRI Ramakrishna Institute of Technology for innovative healthcare solutions.
                  </CardDescription>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800 w-fit text-base px-4 py-2 rounded-full mb-4">
                  🏆 1st Prize Winner
                </Badge>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 border-2 border-black text-black hover:bg-black hover:text-green-400 rounded-full">
                    <Eye size={16} className="mr-2" />
                    View
                  </Button>
                  <Button variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full">
                    <ExternalLink size={16} />
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 px-4 py-2 rounded-full mb-6">
              <Code className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-black font-medium">Skills</span>
            </div>
            <h2 className="text-5xl font-bold text-black mb-6">Technical Expertise</h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
              Programming languages and technologies I work with to build innovative solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 border-0 rounded-3xl">
              <CardHeader className="p-8">
                <CardTitle className="text-2xl text-black flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <Code className="text-green-400 w-6 h-6" />
                  </div>
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="flex flex-wrap gap-4">
                  <Badge className="bg-orange-100 text-orange-800 text-lg px-6 py-3 rounded-full font-medium">HTML</Badge>
                  <Badge className="bg-blue-100 text-blue-800 text-lg px-6 py-3 rounded-full font-medium">SQL</Badge>
                  <Badge className="bg-red-100 text-red-800 text-lg px-6 py-3 rounded-full font-medium">JAVA</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 border-0 rounded-3xl">
              <CardHeader className="p-8">
                <CardTitle className="text-2xl text-black flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <Globe className="text-green-400 w-6 h-6" />
                  </div>
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="flex flex-wrap gap-4">
                  <Badge className="bg-green-100 text-green-800 text-lg px-6 py-3 rounded-full font-medium">English</Badge>
                  <Badge className="bg-purple-100 text-purple-800 text-lg px-6 py-3 rounded-full font-medium">Tamil</Badge>
                  <Badge className="bg-pink-100 text-pink-800 text-lg px-6 py-3 rounded-full font-medium">Japanese</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-black font-medium">Certifications</span>
            </div>
            <h2 className="text-5xl font-bold text-black mb-6">Professional Achievements</h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
              Continuous learning and professional development through industry-recognized certifications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 border-0 rounded-3xl group">
              <CardHeader className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <Badge className="bg-green-600 text-white px-4 py-2 rounded-full">Oct '24</Badge>
                </div>
                <CardTitle className="text-xl text-black mb-2">AI Associate, AI Specialist</CardTitle>
                <CardDescription className="text-lg text-black/70 font-medium">Salesforce</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 border-0 rounded-3xl group">
              <CardHeader className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <Badge className="bg-green-600 text-white px-4 py-2 rounded-full">Feb '25</Badge>
                </div>
                <CardTitle className="text-xl text-black mb-2">CNSP, CAP</CardTitle>
                <CardDescription className="text-lg text-black/70 font-medium">SecOps Groups</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 border-0 rounded-3xl group">
              <CardHeader className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <span className="text-2xl">💾</span>
                  </div>
                  <Badge className="bg-green-600 text-white px-4 py-2 rounded-full">2023</Badge>
                </div>
                <CardTitle className="text-xl text-black mb-2">SQL, HTML</CardTitle>
                <CardDescription className="text-lg text-black/70 font-medium">Prepinsta</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 border-0 rounded-3xl group">
              <CardHeader className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <span className="text-2xl">💻</span>
                  </div>
                  <Badge className="bg-green-600 text-white px-4 py-2 rounded-full">May '25</Badge>
                </div>
                <CardTitle className="text-xl text-black mb-2">Visual Studio Online</CardTitle>
                <CardDescription className="text-lg text-black/70 font-medium">Great Learning</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 border-0 rounded-3xl group md:col-span-2">
              <CardHeader className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <Badge className="bg-green-600 text-white px-4 py-2 rounded-full">Completed</Badge>
                </div>
                <CardTitle className="text-xl text-black mb-2">Introduction to Internet of Things</CardTitle>
                <CardDescription className="text-lg text-black/70 font-medium">NPTEL</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <div className="bg-gradient-to-br from-black to-gray-800 rounded-3xl p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center bg-green-400/20 px-4 py-2 rounded-full mb-8">
                <Mail className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-medium">Let's Connect</span>
              </div>
              
              <h2 className="text-5xl font-bold text-white mb-6">Ready to Work Together?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                I'm always interested in hearing about new opportunities and innovative projects. 
                Let's connect and discuss how we can create something amazing together.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <Button className="bg-green-400 hover:bg-green-300 text-black px-10 py-4 text-lg rounded-full font-semibold">
                  <Mail className="mr-3" size={20} />
                  Send Message
                </Button>
                <Button variant="outline" className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-10 py-4 text-lg rounded-full font-semibold">
                  <Download className="mr-3" size={20} />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-green-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">D</span>
              </div>
              <span className="text-white font-bold text-xl">Dhatchana S J</span>
            </div>
            
            <div className="flex space-x-6 mb-6 md:mb-0">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5 text-green-400" />
              </div>
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <Github className="w-5 h-5 text-green-400" />
              </div>
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <Mail className="w-5 h-5 text-green-400" />
              </div>
            </div>
            
            <p className="text-gray-400 text-center">
              © 2024 Dhatchana S J. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
