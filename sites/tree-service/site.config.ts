import { defineSite } from '@leads/theme/config.ts'

// Every brand/phone/city/content value for this niche lives here.
// {city}, {phone}, {brand} and {niche} are filled per page.
export default defineSite({
  brand: '219 Tree Service',
  niche: 'Tree Service',
  serviceType: 'Tree removal and trimming',
  domain: '219treeservice.com',

  // Drop CallRail/Twilio numbers in here. Per-city numbers go on each city below.
  phone: '{{PHONE}}',
  formEndpoint: '{{FORM_ENDPOINT}}',

  accent: '#3f9a52',
  accentInk: '#04160c',

  hero: {
    eyebrow: 'Local tree care. Done right.',
    headline: 'Strong roots.<br /><em>Safe spaces.</em>',
    sub: 'Tree removal, trimming and emergency storm cleanup from licensed, insured Northwest Indiana crews.',
  },

  trust: ['Licensed & insured crews', 'Free written estimates', '24/7 storm response', 'Full debris cleanup'],

  // Photo slots. Empty src renders a labelled placeholder naming the file and
  // the shot to get. Drop files in public/img/ and set src to go live.
  images: {
    hero: {
      src: '',
      alt: 'Tree crew removing a large limb above a Northwest Indiana house',
      subject: 'Wide hero shot: climber roped in with a large residential tree, house visible. Dark enough on the left for white text to sit over it.',
      size: '2000x1200',
    },
    proof: {
      src: '',
      alt: 'Crew loading brush into a chipper on a residential street',
      subject: 'Crew at work on a Region street - chipper, truck, cleanup in progress. Shows the cleanup promise, not a stock forest.',
      size: '1400x1050',
    },
  },

  services: [
    { slug: 'removal', title: 'Tree Removal', text: 'Safe, controlled removal of hazardous, diseased or unwanted trees — including tight drops near houses and power lines.',
      image: { src: '', alt: 'Sectional tree removal beside a house', subject: 'Trunk taken down in sections with rigging, close to a structure.', size: '1000x750' } },
    { slug: 'trimming', title: 'Trimming & Pruning', text: 'Structural pruning and canopy thinning that keeps limbs off your roof and your trees growing strong.',
      image: { src: '', alt: 'Arborist pruning a canopy from a bucket lift', subject: 'Pruning in progress from a bucket or on rope - visible saw, healthy canopy.', size: '1000x750' } },
    { slug: 'stump-grinding', title: 'Stump Grinding', text: 'Ground below grade and hauled away, so you can sod, plant or pave over it the same week.',
      image: { src: '', alt: 'Stump grinder cutting a stump below grade', subject: 'Stump grinder mid-cut with chips thrown, or a clean before/after.', size: '1000x750' } },
    { slug: 'storm-cleanup', title: 'Emergency Storm Cleanup', text: 'Downed limbs and split trunks cleared fast after Region storms, day or night.',
      image: { src: '', alt: 'Storm-downed tree across a residential yard', subject: 'Split trunk or limb down across a yard, fence or driveway. Overcast light.', size: '1000x750' } },
  ],

  cities: [
    { slug: 'gary', name: 'Gary', phone: '{{PHONE}}', blurb: 'Tree removal and storm cleanup across Gary, Miller Beach and Glen Park.' },
    { slug: 'hammond', name: 'Hammond', phone: '{{PHONE}}', blurb: 'Crews covering Hammond, Hessville and the Calumet corridor.' },
    { slug: 'east-chicago', name: 'East Chicago', phone: '{{PHONE}}', blurb: 'Tree work in East Chicago, Indiana Harbor and Calumet.' },
  ],

  stubs: [
    {
      title: 'Emerald ash borer removal in {city}',
      body: 'Ash borer has killed ash trees across Lake County, and a dead ash gets brittle fast — it drops limbs without warning and turns a routine removal into a crane job. If the canopy is thinning from the top down or the bark is flecked where woodpeckers have worked it, get it looked at this season.',
    },
    {
      title: 'NIPSCO line clearance near your property',
      body: 'NIPSCO maintains clearance around its own distribution lines, but the service drop from the pole to your house is the homeowner’s responsibility. We handle the drop-line side and coordinate the rest — nobody should be in a tree near an energised conductor without the right crew.',
    },
    {
      title: 'Storm cleanup across the Region',
      body: 'Lake-effect winds and summer derechos hit Northwest Indiana hard, and after a big blow every crew in the Region is booked. Call as soon as it is safe to go outside; we triage by hazard, so limbs on a roof or a line come before a trunk lying in the yard.',
    },
    {
      title: 'What tree removal costs in {city}',
      body: 'Most residential removals in {city} land between a few hundred dollars for a small yard tree and several thousand for a large trunk needing a crane or tight rigging. Height, lean, proximity to structures and stump work drive the number — which is why every quote is written after somebody actually looks at the tree.',
    },
  ],

  faqs: [
    { q: 'How fast can you get to {city} after a storm?', a: 'Emergency calls in {city} are triaged by hazard. Limbs on a house, a car or a power line come first, and we aim to have a crew on site the same day.' },
    { q: 'Are your crews licensed and insured?', a: 'Every contractor in our network carries liability coverage and workers’ compensation, and we verify it before sending anyone to your property. Ask for the certificate — a legitimate crew will hand it over without hesitating.' },
    { q: 'Do you remove the stump too?', a: 'Stump grinding is a separate line on the estimate because not everyone wants it. If you plan to sod or replant, grinding below grade is worth it.' },
    { q: 'What does a quote cost?', a: 'Nothing. Estimates in {city} are free and written down before any work starts, so there are no surprises when the invoice arrives.' },
    { q: 'Do I need to be home for the work?', a: 'For the estimate it helps, so you can point out what worries you. For the work itself you do not, as long as the crew has clear access to the tree.' },
  ],

  disclaimer:
    '219 Tree Service is a referral service. We connect Northwest Indiana homeowners with independent, licensed and insured tree care contractors; we do not perform tree work ourselves. Contractor licensing and insurance are verified at onboarding — always confirm current coverage directly with the crew before work begins.',
})
