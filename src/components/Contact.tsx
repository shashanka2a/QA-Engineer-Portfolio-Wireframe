'use client';

import { useState } from 'react';
import { Send, MapPin, Mail } from 'lucide-react';
import { contactData } from '../data/contact';
import { personalInfo } from '../data/personalInfo';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(contactData.form.formUrl!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Data moved to src/data/contact.ts

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-emerald-600 mb-2">{contactData.subTitle}</p>
          <h2 className="text-gray-900 mb-4">{contactData.sectionTitle}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {contactData.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-gray-900 mb-6">{contactData.form.title}</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  {contactData.form.labels.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all"
                  placeholder={contactData.form.placeholders.name}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  {contactData.form.labels.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all"
                  placeholder={contactData.form.placeholders.email}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  {contactData.form.labels.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all"
                  placeholder={contactData.form.placeholders.subject}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  {contactData.form.labels.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder={contactData.form.placeholders.message}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-lg hover:shadow-lg transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    {contactData.form.button.sending}
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    {contactData.form.button.default}
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center">
                  {contactData.form.successMessage}
                </div>
              )}
            </form>
          </div>

          <div>
            <h3 className="text-gray-900 mb-6">Contact Information</h3>

            <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-white p-8 rounded-xl space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-900 mb-1">{contactData.form.labels.email}</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-gray-600 hover:underline">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-900 mb-1">Location</p>
                  <p className="text-gray-600">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-white p-8 rounded-xl">
              <h4 className="text-gray-900 mb-4">{contactData.connectTitle}</h4>
              <p className="text-gray-600 mb-6 text-sm">
                {contactData.connectDescription}
              </p>

              <div className="flex gap-4">
                {contactData.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center transition-all hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 p-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-white rounded-xl">
              <h4 className="text-gray-900 mb-4">Available for Opportunities</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Currently open to full-time positions, contract work, and consulting opportunities in:
              </p>
              <ul className="space-y-2 text-sm">
                {contactData.opportunities.list.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}