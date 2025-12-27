import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Kanchankaya Naturopathy Center Lucknow | Book Consultation",
  description: "Book your naturopathy consultation in Lucknow. Call +91-9935364157 or visit our center in Krishna Nagar, Alambagh.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-green-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-extrabold text-green-900 sm:text-5xl mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Start your natural healing journey today. Book a consultation with Dr. Vandana Mishra.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg text-green-700">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600 mb-2">Available for calls and WhatsApp</p>
                      <a href="tel:+919935364157" className="text-xl font-bold text-green-700 hover:text-green-800">
                        +91-9935364157
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg text-green-700">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:vandana.kaya@gmail.com" className="text-lg text-gray-600 hover:text-green-700">
                        vandana.kaya@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg text-green-700">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">
                        30-A, Ashutosh Nagar,<br />
                        Krishna Nagar, Alambagh,<br />
                        Lucknow, Uttar Pradesh 226005
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg text-green-700">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                      <p className="text-gray-600">
                        Open 7 Days a Week<br />
                        Please call for appointment timings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-2xl h-[300px] w-full flex items-center justify-center text-gray-400">
                <span>Google Map Embed</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-900">Full Name</label>
                    <input type="text" id="name" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-900">Phone Number</label>
                    <input type="tel" id="phone" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="+91 9876543210" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-900">Email Address</label>
                  <input type="email" id="email" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="condition" className="text-sm font-medium text-gray-900">Health Concern</label>
                  <select id="condition" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all">
                    <option value="">Select a condition...</option>
                    <option value="pain">Chronic Pain / Arthritis</option>
                    <option value="diabetes">Diabetes</option>
                    <option value="weight">Weight Loss / Obesity</option>
                    <option value="stress">Stress / Anxiety</option>
                    <option value="digestion">Digestive Issues</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-900">Message</label>
                  <textarea id="message" rows={4} className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="Tell us about your health concerns..."></textarea>
                </div>

                <button type="submit" className="w-full bg-green-700 text-white font-bold py-4 rounded-lg hover:bg-green-800 transition-colors shadow-lg">
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
