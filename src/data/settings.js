// Business settings. `x_2nd` is the second-language text; leave it out (or empty) to show the default text.
// Images are file names in content/images (processed by scripts/images.js); null shows none.
export default {
  site_name: 'Mitu Dental Care',
  site_name_2nd: 'মিতু ডেন্টাল কেয়ার',
  tagline: 'Gentle, modern dental care for the whole family',
  tagline_2nd: 'পুরো পরিবারের জন্য কোমল ও আধুনিক দন্তসেবা',
  logo: null,
  favicon: null,
  hours: {
    mon: { open: '10:00', close: '20:00', closed: false },
    tue: { open: '10:00', close: '20:00', closed: false },
    wed: { open: '10:00', close: '20:00', closed: false },
    thu: { open: '10:00', close: '20:00', closed: false },
    fri: { open: '16:00', close: '20:00', closed: false },
    sat: { open: '10:00', close: '20:00', closed: false },
    sun: { open: null, close: null, closed: true },
  },
  address: 'House 12, Road 5, Dhanmondi\nDhaka 1205',
  address_2nd: 'বাড়ি ১২, রোড ৫, ধানমন্ডি\nঢাকা ১২০৫',
  phone: '+880 1700 000000',
  whatsapp: null,
  email: 'hello@mitudentalcare.example',
  social_links: {
    facebook: 'https://www.facebook.com/mitudentalcare.example',
    instagram: 'https://www.instagram.com/mitudentalcare.example',
  },
  map_url: 'https://www.google.com/maps/search/?api=1&query=Dhanmondi+Dhaka',
  seo: {
    title: 'Mitu Dental Care | Family dentist in Dhanmondi, Dhaka',
    title_2nd: 'মিতু ডেন্টাল কেয়ার | ধানমন্ডি, ঢাকার ফ্যামিলি ডেন্টিস্ট',
    description: 'Check-ups, cleaning, whitening, fillings, braces and implants for adults and children, in a calm clinic in Dhanmondi.',
    description_2nd: 'ধানমন্ডির শান্ত ক্লিনিকে বড় ও শিশুদের জন্য চেক-আপ, ক্লিনিং, হোয়াইটেনিং, ফিলিং, ব্রেসেস ও ইমপ্ল্যান্ট।',
    og_image: 'og-default.jpg',
  },
  // Which contact methods the Contact page and footer show. One number only: the phone.
  contact: { call: true, whatsapp: false, email: true, hours: true, map: true },
}
