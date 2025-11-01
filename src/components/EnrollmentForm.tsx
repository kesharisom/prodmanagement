import { useState, FormEvent } from 'react';
import { GraduationCap, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function EnrollmentForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    current_job_role: '',
    experience_level: 'beginner',
    motivation: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('enrollments')
        .insert([formData]);

      if (error) {
        if (error.code === '23505') {
          setErrorMessage('This email is already enrolled. Please use a different email.');
        } else {
          setErrorMessage('Failed to submit enrollment. Please try again.');
        }
        setSubmitStatus('error');
      } else {
        setSubmitStatus('success');
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          current_job_role: '',
          experience_level: 'beginner',
          motivation: '',
        });
      }
    } catch (err) {
      setErrorMessage('An unexpected error occurred. Please try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          required
          value={formData.full_name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="+1 (555) 123-4567"
        />
      </div>

      <div>
        <label htmlFor="current_job_role" className="block text-sm font-medium text-gray-700 mb-2">
          Current Role *
        </label>
        <input
          type="text"
          id="current_job_role"
          name="current_job_role"
          required
          value={formData.current_job_role}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Software Engineer, Business Analyst, etc."
        />
      </div>

      <div>
        <label htmlFor="experience_level" className="block text-sm font-medium text-gray-700 mb-2">
          Experience Level *
        </label>
        <select
          id="experience_level"
          name="experience_level"
          required
          value={formData.experience_level}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
        >
          <option value="beginner">Beginner - New to Product Management</option>
          <option value="intermediate">Intermediate - Some PM Experience</option>
          <option value="advanced">Advanced - Experienced PM</option>
        </select>
      </div>

      <div>
        <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
          Why do you want to join this course? *
        </label>
        <textarea
          id="motivation"
          name="motivation"
          required
          value={formData.motivation}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your goals and what you hope to achieve..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-start">
            <GraduationCap className="w-5 h-5 text-green-600 mt-0.5 mr-3" />
            <div>
              <h4 className="text-sm font-semibold text-green-800 mb-1">Enrollment Successful!</h4>
              <p className="text-sm text-green-700">
                Thank you for enrolling. We'll be in touch soon with course details and next steps.
              </p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          'Enroll Now'
        )}
      </button>
    </form>
  );
}
