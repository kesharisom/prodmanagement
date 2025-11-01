import { BookOpen, Target, Users, Award, GraduationCap, Clock } from 'lucide-react';
import EnrollmentForm from './components/EnrollmentForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6 shadow-lg">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Product Management Mastery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transform your career with our comprehensive product management course. Learn from industry experts and join a community of aspiring product leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Curriculum</h3>
            <p className="text-gray-600">
              From strategy to execution, master every aspect of product management with real-world case studies.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Mentorship</h3>
            <p className="text-gray-600">
              Learn directly from seasoned product managers at leading tech companies with years of experience.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Career Support</h3>
            <p className="text-gray-600">
              Get personalized career guidance, resume reviews, and interview preparation to land your dream PM role.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Learn</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-4 h-4 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Product Strategy & Vision</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Define compelling product visions, conduct market analysis, and develop winning product strategies.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">User Research & Discovery</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Master user interviews, surveys, and data analysis to uncover insights that drive product decisions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Roadmap & Prioritization</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Learn frameworks like RICE, Kano, and OKRs to prioritize features and build effective roadmaps.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-4 h-4 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Agile & Delivery</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Work effectively with engineering teams using agile methodologies and modern product development practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-blue-600 mr-2" />
                <h4 className="font-semibold text-gray-900">Course Details</h4>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>12 weeks intensive program</li>
                <li>Live sessions twice per week</li>
                <li>Access to all recorded materials</li>
                <li>Hands-on projects and assignments</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 sticky top-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Enroll Today</h2>
            <p className="text-gray-600 mb-8">
              Join hundreds of students who have transformed their careers. Limited spots available!
            </p>
            <EnrollmentForm />
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-600 mb-4">Have questions about the course?</p>
            <a
              href="mailto:info@pmcourse.com"
              className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              Contact us at info@pmcourse.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
