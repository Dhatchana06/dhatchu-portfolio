
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Linkedin, GraduationCap, User, BookOpen, FileText } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Dhatchana S J
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 mb-6 font-medium">
              Innovative Aspiring Thinker
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              To have a growth oriented and challenging career, where I can contribute my knowledge 
              and skills to the organization and enhance my experience through continuous learning and teamwork.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-600">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>9080335343</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>dhatchana.sj.ece.2022@snsce.ac.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={18} />
                <a href="https://www.linkedin.com/in/dhatchanasampathkumar-sns" 
                   className="text-blue-600 hover:text-blue-800 transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mb-8">
              No. 20, Bajanai kovil Street, Karamadai Road, Mettupalayam, Coimbatore District, Tamil Nadu, 641301, India.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* Education Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <GraduationCap className="text-blue-600" />
              Education
            </h2>
            <Separator className="w-24 mx-auto bg-blue-600 h-1" />
          </div>
          
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-gray-900">
                      BE - Electronics and Communication Engineering
                    </CardTitle>
                    <CardDescription className="text-lg">
                      SNS College of Engineering (CGPA: 8.204)
                    </CardDescription>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="font-medium">Nov '22 — Present</div>
                    <div>Coimbatore, India</div>
                  </div>
                </div>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-gray-900">HSE</CardTitle>
                    <CardDescription className="text-lg">
                      Metro Matriculation Higher Secondary School (77%)
                    </CardDescription>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="font-medium">Jun '21 — May '22</div>
                    <div>Coimbatore, India</div>
                  </div>
                </div>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-gray-900">SSLC</CardTitle>
                    <CardDescription className="text-lg">
                      Metro Matriculation Higher Secondary School (72.6%)
                    </CardDescription>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="font-medium">Jun '19 — Mar '20</div>
                    <div>Coimbatore, India</div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <FileText className="text-blue-600" />
              Certifications
            </h2>
            <Separator className="w-24 mx-auto bg-blue-600 h-1" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-blue-600">AI Associate, AI Specialist</CardTitle>
                    <CardDescription>Salesforce</CardDescription>
                  </div>
                  <Badge variant="secondary">Oct '24</Badge>
                </div>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-blue-600">CNSP, CAP</CardTitle>
                    <CardDescription>SecOps Groups</CardDescription>
                  </div>
                  <Badge variant="secondary">Feb '25</Badge>
                </div>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-blue-600">SQL, HTML</CardTitle>
                    <CardDescription>Prepinsta</CardDescription>
                  </div>
                  <Badge variant="secondary">Feb & Mar '23, Jan '23</Badge>
                </div>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-blue-600">Visual Studio Online</CardTitle>
                    <CardDescription>Great Learning</CardDescription>
                  </div>
                  <Badge variant="secondary">May '25</Badge>
                </div>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 md:col-span-2">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-blue-600">Introduction to Internet of Things</CardTitle>
                    <CardDescription>NPTEL</CardDescription>
                  </div>
                  <Badge variant="secondary">Course Completed</Badge>
                </div>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <BookOpen className="text-blue-600" />
              Projects
            </h2>
            <Separator className="w-24 mx-auto bg-blue-600 h-1" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Smart Syringe Infusion Pump</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Innovative medical device project focusing on precision and automation in healthcare delivery systems.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Automatic Heart Rate Monitoring System</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Real-time health monitoring system with automated data collection and analysis capabilities.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Achievements</h2>
            <Separator className="w-24 mx-auto bg-blue-600 h-1" />
          </div>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-blue-600">Diabetics Prediction System</CardTitle>
              <CardDescription className="text-base">
                <strong>Project Presentation - 1st Prize</strong><br />
                SRI Ramakrishna Institute of Technology
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        {/* Conferences Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Conferences</h2>
            <Separator className="w-24 mx-auto bg-blue-600 h-1" />
          </div>
          
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">IOT BASED SHOCK ABSORBER</CardTitle>
                <CardDescription>
                  International Conference ELECTROX '23, Karpagam Institute of Technology
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">AUTOMATIC HEART RATE MONITORING SYSTEM</CardTitle>
                <CardDescription>
                  International Conference ICCSICE '24, Karpagam Academy of Higher Education
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">SMART SYRINGE INFUSION PUMP</CardTitle>
                <CardDescription>
                  International Conference, Suguna College of Engineering
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <User className="text-blue-600" />
              Skills
            </h2>
            <Separator className="w-24 mx-auto bg-blue-600 h-1" />
          </div>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-blue-600 border-blue-600">HTML</Badge>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">SQL</Badge>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">JAVA</Badge>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-green-600 border-green-600">English</Badge>
                    <Badge variant="outline" className="text-green-600 border-green-600">Tamil</Badge>
                    <Badge variant="outline" className="text-green-600 border-green-600">Japanese</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Declaration */}
        <section className="text-center">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Declaration</CardTitle>
              <CardDescription className="text-base italic">
                "I hereby declare that all the information contained in my resume is in accordance with truth to my knowledge."
              </CardDescription>
            </CardHeader>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
