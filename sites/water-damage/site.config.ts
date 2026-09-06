import { defineSite } from '@leads/theme/config.ts'

// Derived from sites/tree-service — same components, different config.
export default defineSite({
  brand: 'Region Restoration',
  niche: 'Water Damage Restoration',
  serviceType: 'Water damage restoration and mold remediation',
  domain: 'regionrestoration.com',

  phone: '{{PHONE}}',
  formEndpoint: '{{FORM_ENDPOINT}}',

  accent: '#2f7fd4',
  accentInk: '#04121f',
  deep: '#0d2233',
  deep2: '#14324a',

  hero: {
    eyebrow: 'Water damage. Handled fast.',
    headline: 'Water rises.<br /><em>We move faster.</em>',
    sub: 'Emergency water extraction, basement flooding and sewage cleanup from licensed, insured Northwest Indiana crews — on site around the clock.',
  },

  trust: ['Licensed & insured crews', 'On site 24/7', 'We bill your insurer directly', 'Documented moisture readings'],

  // Photo slots. Empty src renders a labelled placeholder naming the file and
  // the shot to get. Drop files in public/img/ and set src to go live.
  images: {
    hero: {
      src: '',
      alt: 'Technician running extraction equipment in a flooded basement',
      subject: 'Wide hero shot: tech with extraction hose or air movers in a flooded basement. Dark on the left so white text reads over it.',
      size: '2000x1200',
    },
    quote: {
      src: '',
      alt: 'Water pooling on a basement floor',
      subject: 'Vertical-friendly backdrop behind the quote form: water on a floor, drying equipment or a rain-streaked window. Quiet enough for white form text to read over it.',
      size: '1200x1600',
    },
    proof: {
      src: '',
      alt: 'Air movers and dehumidifier running in a dried-out basement',
      subject: 'Drying equipment set up and running - air movers, dehumidifier, moisture meter in shot. Shows process, not disaster.',
      size: '1400x1050',
    },
  },

  services: [
    { slug: 'extraction', title: 'Water Extraction', text: 'Truck-mounted extraction and commercial drying equipment on site fast, because standing water gets worse by the hour.',
      image: { src: '', alt: 'Truck-mounted extraction hose pulling standing water', subject: 'Extraction wand or hose actively pulling water off a floor.', size: '1000x750' } },
    { slug: 'basement-flooding', title: 'Basement Flooding', text: 'Pump-out, drying and dehumidification for the finished and unfinished basements the Region is full of.',
      image: { src: '', alt: 'Flooded residential basement with standing water', subject: 'Standing water in a Midwest basement - stairs, utilities, water line on the wall.', size: '1000x750' } },
    { slug: 'sewage-cleanup', title: 'Sewage Cleanup', text: 'Category 3 backups cleaned, disinfected and disposed of to standard. This is not a shop-vac job.',
      image: { src: '', alt: 'Technician in full PPE during a category 3 cleanup', subject: 'Tech in full PPE with containment sheeting. Controlled and professional, not graphic.', size: '1000x750' } },
    { slug: 'burst-pipe', title: 'Burst Pipe Response', text: 'Frozen and split supply lines stopped, dried and documented before the drywall and subfloor go.',
      image: { src: '', alt: 'Split copper supply line with water damage below', subject: 'Burst or frozen pipe close-up with visible water staining beneath.', size: '1000x750' } },
    { slug: 'storm-damage', title: 'Storm Damage', text: 'Roof leaks, wind-driven rain and lake-effect flooding tarped, dried and made safe.',
      image: { src: '', alt: 'Tarped roof after storm damage', subject: 'Emergency tarp on a residential roof, or interior ceiling water damage.', size: '1000x750' } },
    { slug: 'mold', title: 'Mold Remediation', text: 'Containment, removal and clearance testing when water sat long enough to grow something.',
      image: { src: '', alt: 'Containment barrier set up for mold remediation', subject: 'Zipped poly containment with negative air machine. Clinical, not alarming.', size: '1000x750' } },
  ],

  cities: [
    { slug: 'hammond', name: 'Hammond', phone: '{{PHONE}}', blurb: 'Basement flooding and sewer backup response across Hammond and Hessville.' },
    { slug: 'whiting', name: 'Whiting', phone: '{{PHONE}}', blurb: 'Lakefront water damage response in Whiting and Robertsdale.' },
    { slug: 'east-chicago', name: 'East Chicago', phone: '{{PHONE}}', blurb: 'Extraction and drying in East Chicago, Indiana Harbor and Calumet.' },
    { slug: 'munster', name: 'Munster', phone: '{{PHONE}}', blurb: 'Little Calumet corridor flooding and finished-basement drying in Munster.' },
    { slug: 'highland', name: 'Highland', phone: '{{PHONE}}', blurb: 'Storm and sump-failure flooding across Highland.' },
    { slug: 'gary', name: 'Gary', phone: '{{PHONE}}', blurb: 'Water damage and mold remediation throughout Gary and Miller Beach.' },
  ],

  stubs: [
    {
      title: 'The 2008 Little Calumet flood is still the benchmark',
      body: 'September 2008 put water through thousands of Northwest Indiana basements and set the flood expectations a lot of {city} homeowners still work from. Levee work has changed the picture since, but the lesson held: the homes that dried fastest were the ones where extraction started the same day, not after the insurer called back.',
    },
    {
      title: 'Your policy probably excludes sewer backup',
      body: 'A standard homeowners policy covers a burst pipe but not water that comes back up the sewer line — that needs a separate endorsement, usually cheap and usually declined at signing. If you have never checked, look before the next heavy rain. We document the loss either way, which is what an adjuster needs.',
    },
    {
      title: 'The Wolf Lake water table works against you',
      body: 'Much of the Region sits on sand with a water table close to the surface, so hydrostatic pressure pushes through foundation walls and floor seams even when nothing has failed indoors. If your basement weeps in every heavy rain, drying alone will not hold — the fix is drainage, and we will say so rather than sell you fans.',
    },
    {
      title: 'The first 60 minutes in {city}',
      body: 'Kill the electricity to the affected level if you can reach the panel safely. Stop the source at the main shutoff. Photograph everything before you move it — adjusters pay on documentation. Lift what you can off wet carpet. Then call: past roughly 48 hours, drywall, insulation and mold turn a drying job into a demolition job.',
    },
  ],

  faqs: [
    { q: 'How fast can you get to {city}?', a: 'Water damage calls in {city} are dispatched around the clock, and we aim to have extraction equipment on site within hours. Every hour of standing water widens the damage.' },
    { q: 'Do you work with my insurance?', a: 'Yes. Crews document moisture readings, photograph the loss and bill most major carriers directly. You still owe your deductible, and we will tell you plainly if a claim is not worth filing.' },
    { q: 'Is sewage cleanup different from water cleanup?', a: 'Very. Sewage is category 3 water — it carries pathogens, requires containment and protective equipment, and porous materials it touched generally cannot be saved. Do not attempt it yourself.' },
    { q: 'How long does drying take?', a: 'Most {city} homes dry in three to five days with equipment running continuously. Finished basements and hardwood take longer. We monitor with meters rather than guessing.' },
    { q: 'Will there be mold?', a: 'Mold needs roughly 24 to 48 hours of moisture to start. Dried properly and quickly, usually not. If growth has already started, remediation is a separate scope with its own containment and clearance testing.' },
  ],

  disclaimer:
    'Region Restoration is a referral service. We connect Northwest Indiana property owners with independent, licensed and insured restoration contractors; we do not perform restoration work ourselves. Contractor licensing and insurance are verified at onboarding — always confirm current coverage directly with the crew before work begins. Nothing on this site is insurance advice; coverage questions belong with your carrier or adjuster.',
})
