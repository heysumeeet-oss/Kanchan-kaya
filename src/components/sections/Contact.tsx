import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl mb-4">
                Book Your Consultation
              </h2>
              <p className="text-lg text-gray-600">
                Ready to begin your natural healing journey? Contact us today.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Call Us Directly</h3>
                  <p className="text-gray-600 text-sm mb-2">Speak with our team immediately.</p>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-lg font-bold text-green-700 hover:underline">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                 <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email Inquiry</h3>
                  <p className="text-gray-600 text-sm mb-2">Send detailed health inquiry.</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-bold text-green-700 hover:underline">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                 <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Visit Center</h3>
                  <p className="text-gray-600 text-sm mb-2">30-A, Ashutosh Nagar, Krishna Nagar, Alambagh</p>
                  <a
                    href={CONTACT_INFO.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 font-semibold hover:underline text-sm"
                  >
                    Get Directions on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed (Placeholder) & Form */}
          <div className="space-y-8">
             <div className="bg-gray-200 w-full h-[300px] rounded-2xl overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.102370783516!2d80.8973!3d26.8367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzEyLjEiTiA4MMKwNTMnNTAuMyJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0"
                ></iframe>
             </div>

             <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                <h3 className="font-bold text-green-900 mb-4">Quick Appointment Request</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500" />
                    <input type="tel" placeholder="Phone Number" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                  <select className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                    <option>Select Health Concern</option>
                    <option>Joint Pain / Arthritis</option>
                    <option>Diabetes / Weight Loss</option>
                    <option>Digestive Issues</option>
                    <option>Stress / Anxiety</option>
                    <option>Other</option>
                  </select>
                  <button type="submit" className="w-full bg-green-700 text-white font-bold py-3 rounded-lg hover:bg-green-800 transition-colors">
                    Request Call Back
                  </button>
                </form>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
