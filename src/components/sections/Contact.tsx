import { Phone, Mail, MapPin, MessageCircle, Calendar } from "lucide-react";
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
                Book Your Naturopathy Consultation in Lucknow Today
              </h2>
              <p className="text-lg text-gray-600">
                Ready to begin your natural healing journey? Choose the most convenient way to reach us.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 transition-colors hover:border-green-200">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Call Directly</h3>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-lg font-bold text-green-700 hover:underline">
                    {CONTACT_INFO.phone}
                  </a>
                  <p className="text-xs text-gray-500">Available for calls & SMS</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 transition-colors hover:border-green-200">
                 <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">WhatsApp Booking</h3>
                   <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-green-700 hover:underline">
                    +91-9935364157
                  </a>
                   <p className="text-xs text-gray-500">Instant appointment booking</p>
                </div>
              </div>

               <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 transition-colors hover:border-green-200">
                 <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Email Inquiry</h3>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-bold text-green-700 hover:underline break-all">
                    {CONTACT_INFO.email}
                  </a>
                   <p className="text-xs text-gray-500">Send detailed health records</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 transition-colors hover:border-green-200">
                 <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0 mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">Visit Center</h3>
                  <p className="text-gray-700 font-medium mb-1">{CONTACT_INFO.address}</p>
                   <p className="text-xs text-gray-500 mb-2">Open 7 Days a Week</p>
                  <a
                    href={CONTACT_INFO.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 font-bold hover:underline text-sm inline-flex items-center"
                  >
                    Get Directions on Google Maps →
                  </a>
                </div>
              </div>
            </div>
             <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                   <Calendar className="h-4 w-4" /> What to Bring:
                </h4>
                <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                   <li>Recent medical reports (if any)</li>
                   <li>List of current medications</li>
                   <li>Previous treatment records</li>
                </ul>
             </div>
          </div>

          {/* Map Embed & Form */}
          <div className="space-y-8">
             <div className="bg-gray-200 w-full h-[250px] rounded-2xl overflow-hidden relative shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.102370783516!2d80.8973!3d26.8367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzEyLjEiTiA4MMKwNTMnNTAuMyJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Kanchankaya Naturopathy Center Location"
                  className="absolute inset-0"
                ></iframe>
             </div>

             <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-green-900 mb-4">Book Online Consultation</h3>
                <form className="space-y-4">
                  <div>
                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                     <input type="text" id="name" required placeholder="Enter your full name" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                        <input type="tel" id="phone" required placeholder="Mobile number" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow" />
                     </div>
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" id="email" placeholder="Email address" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow" />
                     </div>
                  </div>

                  <div>
                     <label htmlFor="concern" className="block text-sm font-medium text-gray-700 mb-1">Health Concern *</label>
                     <select id="concern" required className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white transition-shadow">
                        <option value="">Select your main concern</option>
                        <option value="joint_pain">Joint Pain / Arthritis</option>
                        <option value="diabetes">Diabetes / Weight Loss</option>
                        <option value="digestive">Digestive Issues</option>
                        <option value="stress">Stress / Anxiety</option>
                        <option value="womens_health">Women&apos;s Health</option>
                        <option value="other">Other</option>
                     </select>
                  </div>

                  <div>
                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                     <textarea id="message" rows={3} placeholder="Any specific details..." className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-green-700 text-white font-bold py-3.5 rounded-lg hover:bg-green-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    Book My Consultation
                  </button>
                </form>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
