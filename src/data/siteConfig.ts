/**
 * MB Stounas - Central site configuration
 * Edit this file to update business info across the entire site.
 *
 * Usage: import { siteConfig } from '../data/siteConfig';
 */

export const siteConfig = {
  // --- Company Info ---
  companyName: 'MB Stounas',
  companyShort: 'MB Stounas',
  tagline: 'Granitas ir Paslaugos',
  licenseNumber: '307750210',

  // --- Contact ---
  phone: '+37062912655',
  phoneDisplay: '+370 629 12655',
  email: 'info@stounas.lt',

  // --- Address ---
  address: 'Kauno gatvė 98, Jonava, 55178',

  // --- Working Hours ---
  workingHours: {
    monFri: 'I - V: 08:00 - 18:00',
    sat: 'VI: 09:00 - 15:00 (Pagal išankstinį susitarimą)',
  },

  // --- Site ---
  siteUrl: 'https://stounas.lt',
  siteName: 'MB Stounas - Didmeninė Granito Prekyba, Pjovimas ir Poliravimas',
  siteDescription: 'Didmeninė granito prekyba, pjovimas ir poliravimas visoje Lietuvoje. Aukščiausios kokybės natūralus granitas, profesionalus apdorojimas.',

  // --- Social ---
  facebookUrl: '',
  instagramUrl: '',
} as const;
