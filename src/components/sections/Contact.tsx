import { Phone, Mail, MapPin, MessageCircle, Calendar } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export function Contact() {
  return (
    <section className="py-16 md:py-24 bg-white" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600">
                Start your healing journey today.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm transition-all active:scale-[0.98] hover:border-green-300 hover:shadow-md group"
              >
                <div className="h-12 w-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Call Us</h3>
                  <p className="text-lg font-bold text-green-700">{CONTACT_INFO.phone}</p>
                </div>
              </a>

              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm transition-all active:scale-[0.98] hover:border-green-300 hover:shadow-md group"
              >
                 <div className="h-12 w-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">WhatsApp</h3>
                   <p className="text-lg font-bold text-green-700">Chat Now</p>
                </div>
              </a>

               <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                 <div className="h-12 w-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0 mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">Visit Center</h3>
                  <p className="text-gray-600 text-sm mb-2">{CONTACT_INFO.address}</p>
                  <a
                    href={CONTACT_INFO.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 font-bold hover:underline text-xs inline-flex items-center bg-green-50 px-3 py-1.5 rounded-full"
                  >
                    Open in Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-inner">
            <h3 className="text-xl font-bold text-green-950 mb-6">Book Online</h3>
            <form className="space-y-4">
              <div>
                 <input type="text" required placeholder="Full Name" className="w-full p-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <input type="tel" required placeholder="Phone Number" className="w-full p-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all" />
                 <input type="email" placeholder="Email (Optional)" className="w-full p-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all" />
              </div>

              <div>
                 <select required className="w-full p-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all appearance-none">
                    <option value="">Select Concern</option>
                    <option value="joint_pain">Joint Pain / Arthritis</option>
                    <option value="diabetes">Diabetes / Weight Loss</option>
                    <option value="digestive">Digestive Issues</option>
                    <option value="stress">Stress / Anxiety</option>
                    <option value="womens_health">Women&apos;s Health</option>
                    <option value="other">Other</option>
                 </select>
              </div>

              <div>
                 <textarea rows={3} placeholder="Message..." className="w-full p-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"></textarea>
              </div>

              <button type="submit" className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-all shadow-lg shadow-green-600/20 active:scale-[0.99]">
                Confirm Booking
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
