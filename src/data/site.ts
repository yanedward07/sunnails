// ─────────────────────────────────────────────────────────────
//  Sun Nails: everything the shop owner might want to change.
//  Edit this file, save, push to GitHub, and the site updates.
//  Anything marked TODO still needs real info.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Sun Nails',
  tagline: 'Relax. Refresh. Renew.',
  services: 'Nail care · Waxing · Facial · Massage',
  description:
    'Sun Nails is a nail spa at 384 Yonge St, Toronto offering manicures, pedicures, Bio Gel, nail art, waxing, lash lifts, facials and massage. Book online.',
  phone: '(416) 260-1666',
  email: '', // TODO: optional, shown in "Visit us" if filled in
  address: {
    line1: '384 Yonge St, Unit 21 & 23',
    line2: 'Toronto, ON M5G 2K2',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sun+Nails+384+Yonge+St+Toronto+ON+M5G+2K2',
    embedUrl: 'https://www.google.com/maps?q=384+Yonge+St,+Toronto,+ON+M5G+2K2&output=embed',
  },
  instagram: '', // TODO: handle without @, e.g. 'sunnails.to', leave empty to hide
};

// ═════════════════════════════════════════════════════════════
//  BOOKING (VAGARO): the only place booking is set up.
//  Every "Book" button on the site leads to the Book section,
//  which shows whichever of these you fill in:
//
//  1. VAGARO_URL: your public Vagaro booking page link.
//     Find it in Vagaro: Settings → Online Booking → copy your booking link.
//     Example: 'https://www.vagaro.com/sunnails'
//     • Link only → the Book section shows a big "Book online" button.
//
//  2. VAGARO_EMBED: Vagaro's booking widget code (shows the booking
//     calendar right on the site).
//     Find it in Vagaro: Settings → Online Booking → Booking Widget → copy code.
//     Paste the WHOLE code between the backticks ` ` below.
//     • Widget → the calendar appears in the Book section, and the
//       link above (if set) becomes a "Trouble loading?" backup.
//
//  Both empty → the Book section asks people to call or text instead.
// ═════════════════════════════════════════════════════════════
export const VAGARO_URL = ''; // TODO: paste your Vagaro booking link between the quotes

export const VAGARO_EMBED = `
`; // TODO: paste the Vagaro widget code between the backticks

// ── Hours (0 = Sunday) ───────────────────────────────────────
export const hours: { day: string; open: string | null; close: string | null }[] = [
  { day: 'Sunday', open: '12:00 PM', close: '6:00 PM' },
  { day: 'Monday', open: '10:00 AM', close: '9:00 PM' },
  { day: 'Tuesday', open: '10:00 AM', close: '9:00 PM' },
  { day: 'Wednesday', open: '10:00 AM', close: '9:00 PM' },
  { day: 'Thursday', open: '10:00 AM', close: '9:00 PM' },
  { day: 'Friday', open: '10:00 AM', close: '9:00 PM' },
  { day: 'Saturday', open: '10:00 AM', close: '9:00 PM' },
];

// ── Services & prices (from the in-store menu, tax not included) ──
export type Service = { name: string; price: string; mins?: number };
export type Category = { id: string; label: string; items: Service[] };

export const services: Category[] = [
  {
    id: 'nails',
    label: 'Nails',
    items: [
      { name: 'Manicure', price: '$20' },
      { name: 'Shellac Manicure', price: '$35' },
      { name: 'Shellac Polish Change', price: '$30' },
      { name: 'Polish Change', price: '$15' },
      { name: 'Nail Cut & Shaping', price: '$15' },
      { name: 'Kid Manicure', price: '$15' },
      { name: 'Paraffin Treatment', price: '$20' },
      { name: 'Shellac Removal', price: '$10' },
    ],
  },
  {
    id: 'pedicure',
    label: 'Pedicure',
    items: [
      { name: 'Pedicure', price: '$30' },
      { name: 'Spa Pedicure', price: '$40' },
      { name: 'Shellac Pedicure', price: '$45' },
      { name: 'Shellac Polish Change', price: '$40' },
      { name: 'Shellac Removal', price: '$10' },
      { name: 'Polish Change', price: '$25' },
      { name: 'Nail Cut & Shaping', price: '$20' },
      { name: 'Kid Pedicure', price: '$25' },
      { name: 'Reflexology', price: '$45', mins: 30 },
      { name: 'Paraffin Treatment', price: '$30' },
    ],
  },
  {
    id: 'bio-gel',
    label: 'Bio Gel',
    items: [
      { name: 'Bio-Gel Overlay', price: '$50' },
      { name: 'Bio-Gel Extension', price: '$65+' },
      { name: 'Bio-Gel Refill', price: '$55+' },
      { name: 'Bio-Gel Removal', price: '$20' },
    ],
  },
  {
    id: 'designs',
    label: 'Designs',
    items: [
      { name: 'French Tip (set)', price: 'from $20' },
      { name: 'Ombre / Aura (set)', price: '$20' },
      { name: 'Chrome (set)', price: '$20' },
      { name: 'Cat Eye (set)', price: '$20' },
    ],
  },
  {
    id: 'packages',
    label: 'Spa Packages',
    items: [
      { name: 'Manicure & Pedicure', price: '$45' },
      { name: 'Shellac Mani & Pedi (Regular)', price: '$60' },
      { name: 'Shellac Mani & Shellac Pedi', price: '$75' },
      { name: 'Pedi & Reflexology', price: '$65', mins: 30 },
      { name: 'Mani, Pedi & Reflexology', price: '$75', mins: 30 },
    ],
  },
  {
    id: 'waxing',
    label: 'Waxing',
    items: [
      { name: 'Upper Lip', price: '$8' },
      { name: 'Chin', price: '$10' },
      { name: 'Eyebrow', price: '$15' },
      { name: 'Side Burns', price: '$15' },
      { name: 'Full Face', price: '$40' },
      { name: 'Under Arm', price: '$20' },
      { name: 'Half Arm', price: '$20' },
      { name: 'Full Arm', price: '$35' },
      { name: 'Half Leg', price: '$28' },
      { name: 'Full Leg', price: '$50' },
      { name: 'Bikini', price: '$35' },
      { name: 'Brazilian', price: '$50' },
      { name: 'Full Leg & Bikini', price: '$80' },
      { name: 'Chest', price: '$40' },
      { name: 'Full Back', price: '$40' },
      { name: 'Shoulder', price: '$20' },
    ],
  },
  {
    id: 'lashes',
    label: 'Lash & Tint',
    items: [
      { name: 'Eyebrow Tint', price: '$20' },
      { name: 'Eyelash Tint', price: '$25' },
      { name: 'Eyebrow & Eyelash Tint', price: '$40' },
      { name: 'Eyebrow Tint & Waxing', price: '$40' },
      { name: 'Lash Lift', price: '$85' },
    ],
  },
  {
    id: 'facial-massage',
    label: 'Facial & Massage',
    items: [
      { name: 'Mini Facial', price: '$40', mins: 30 },
      { name: 'Deep Cleansing Facial', price: '$90' },
      { name: 'Massage', price: '$90', mins: 60 },
      { name: 'Massage', price: '$45', mins: 30 },
    ],
  },
];

// ── Reviews ──────────────────────────────────────────────────
// TODO: paste real reviews (e.g. from Google). The section stays hidden while this is empty.
export const reviews: { quote: string; name: string }[] = [];

export const marquee = ['Manicure', 'Spa pedicure', 'Bio Gel', 'Chrome', 'Cat eye', 'Waxing', 'Lash lift', 'Facials', 'Massage'];
