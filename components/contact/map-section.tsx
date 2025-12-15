import React from "react";

export default function MapSection({ embed = true }: { embed?: boolean }) {
  return (
    <section className="py-8 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-lg overflow-hidden shadow">
          {embed ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7723.557893423919!2d121.00537801090658!3d14.554629885503413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9720d88125f%3A0x72e332280e4c0cf5!2sGT%20Realty%20Bldg!5e0!3m2!1sen!2sph!4v1764919510309!5m2!1sen!2sph"
              className="w-full h-100"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          ) : (
            <div className="w-full h-64 sm:h-96 flex items-center justify-center bg-white text-gray-400">
              Map placeholder
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
