import {
  ServiceDivision,
  ServiceDivisionId,
  ProcessStage,
  CoreValue,
  CompanyPillar,
  CustomerSector,
  ProjectShowcase,
} from '../types';

export class ServiceCatalog {
  private static instance: ServiceCatalog;

  private divisions: ServiceDivision[] = [
    {
      id: 'borehole',
      title: 'Borehole Services',
      shortTitle: 'Boreholes',
      tagline: 'Reliable Water Solutions. Sustainable Future.',
      headline: 'RELIABLE WATER. SUSTAINABLE FUTURE.',
      pageNumber: 'Page 04',
      description:
        'At JEMKET ENGINEERING, we specialize in providing complete borehole water solutions for residential, commercial, agricultural, and industrial clients. Our borehole services are designed to deliver clean, safe, and dependable underground water all year round.',
      accentColor: '#0B1E4B',
      iconName: 'Droplets',
      ctaText: 'Discuss a Borehole Project',
      processSteps: [
        {
          step: '01',
          title: 'Borehole Survey',
          description:
            'We conduct professional site surveys and water detection assessments to identify locations with high water potential.',
        },
        {
          step: '02',
          title: 'Borehole Drilling',
          description:
            'Using modern drilling equipment and experienced technicians, we drill deep, high-quality boreholes that ensure maximum water yield.',
        },
        {
          step: '03',
          title: 'Borehole Installation',
          description:
            'We install complete borehole systems including pumps, pipes, tanks, and control systems for efficient and reliable water supply.',
        },
        {
          step: '04',
          title: 'Borehole Maintenance',
          description:
            'We provide routine maintenance, repairs, and system optimization to ensure long-term performance and water reliability.',
        },
      ],
      services: [
        { id: 'b1', name: 'Borehole Survey & Hydrogeological Water Detection', category: 'borehole' },
        { id: 'b2', name: 'Deep Borehole Drilling & Casing Installation', category: 'borehole' },
        { id: 'b3', name: 'Submersible Pump & Pipe Sizing & Installation', category: 'borehole' },
        { id: 'b4', name: 'Elevated Water Tanks & Pressure Control Systems', category: 'borehole' },
        { id: 'b5', name: 'Solar Water Pumping System Integration', category: 'borehole' },
        { id: 'b6', name: 'Borehole Flushing, Yield Testing & Rehabilitation', category: 'borehole' },
        { id: 'b7', name: 'Routine Servicing, Diagnostics & Emergency Pump Repairs', category: 'borehole' },
      ],
      benefits: [
        'Access to clean and safe water',
        'Reliable water supply all year',
        'Cost-effective solution',
        'Low maintenance & long-lasting',
        'Environmentally friendly',
      ],
      applications: [
        'Residential Homes & Housing Estates',
        'Commercial Facilities & Office Parks',
        'Agricultural Farms & Livestock Watering',
        'Industrial Processing & Manufacturing Plants',
        'Institutions, Schools & Healthcare Centers',
      ],
    },
    {
      id: 'electrical-building',
      title: 'Electrical & Building Services',
      shortTitle: 'Electrical & Building',
      tagline: 'Professional. Reliable. Safe. Powering Your World.',
      headline: 'SAFE INSTALLATIONS. QUALITY WORKMANSHIP.',
      pageNumber: 'Page 05',
      description:
        'We provide high-quality electrical and building solutions for residential, commercial, industrial, and institutional projects. Our services are driven by safety standards, modern techniques, and an unwavering commitment to excellence.',
      accentColor: '#D32F2F',
      iconName: 'Zap',
      ctaText: 'Explore Electrical & Building Services',
      services: [
        { id: 'e1', name: 'House Wiring & Architectural Cable Routing', category: 'electrical' },
        { id: 'e2', name: 'New Electrical Installations for Construction', category: 'electrical' },
        { id: 'e3', name: 'Electrical Upgrades & Capacity Extensions', category: 'electrical' },
        { id: 'e4', name: 'Distribution Board (DB) Assembly & Balancing', category: 'electrical' },
        { id: 'e5', name: 'Indoor, Outdoor & Industrial Lighting Systems', category: 'electrical' },
        { id: 'e6', name: 'Power Socket, Dedicated Circuit & Isolator Fitting', category: 'electrical' },
        { id: 'e7', name: 'Comprehensive Electrical Maintenance', category: 'electrical' },
        { id: 'e8', name: 'Systematic Fault Diagnosis & Precision Repairs', category: 'electrical' },
        { id: 'e9', name: 'Surge Protection Devices (SPD) & Earthing', category: 'electrical' },
        { id: 'e10', name: 'Energy-Efficient Solutions & Load Optimization', category: 'electrical' },
      ],
      buildingServices: [
        { id: 'bu1', name: 'Electrical Tubing (Concealed Slab & Wall Preparation)', category: 'building' },
        { id: 'bu2', name: 'Electrical Conduiting & Cable Trunking', category: 'building' },
        { id: 'bu3', name: 'Building Finishing & Architectural Detailing', category: 'building' },
        { id: 'bu4', name: 'Drywall & Commercial Partitioning', category: 'building' },
        { id: 'bu5', name: 'Ceiling Installations & Flush Plaster Ceilings', category: 'building' },
        { id: 'bu6', name: 'Wall & Floor Finishing (Tiling, Screeding, Plaster)', category: 'building' },
        { id: 'bu7', name: 'Painting, Coating & Interior/Exterior Decorating', category: 'building' },
        { id: 'bu8', name: 'Structural Renovations & Property Remodelling', category: 'building' },
        { id: 'bu9', name: 'Property Value Improvements & Site Upgrades', category: 'building' },
        { id: 'bu10', name: 'Turnkey Installation Support Services', category: 'building' },
      ],
      benefits: [
        'Adherence to strict electrical safety codes',
        'Certified high-grade copper cabling and switchgear',
        'Coordinated structural and electrical conduits',
        'Durable wall, ceiling and floor architectural finishes',
        'Turnkey handover with zero messy contractor overlap',
      ],
      applications: [
        'New Residential Construction & Villas',
        'Commercial Retail Stores, Banks & Office Spaces',
        'Industrial Warehouses & Distribution Facilities',
        'Educational Campuses & University Labs',
        'Property Renovations & Modernization Overhauls',
      ],
    },
    {
      id: 'solar',
      title: 'Solar Energy Solutions',
      shortTitle: 'Solar Energy',
      tagline: 'Clean Energy. Reliable Power. Bright Future.',
      headline: 'CLEAN ENERGY. RELIABLE POWER. BRIGHT FUTURE.',
      pageNumber: 'Page 06',
      description:
        'We design, supply and install high quality solar systems that provide clean, affordable and reliable electricity for homes, businesses, farms and institutions.',
      accentColor: '#FBBF24',
      iconName: 'SunMedium',
      ctaText: 'Explore Solar Solutions',
      services: [
        { id: 's1', name: 'Solar System Design, Load Audits & Engineering Consultation', category: 'solar' },
        { id: 's2', name: 'High-Efficiency Monocrystalline Solar Panel Installation', category: 'solar' },
        { id: 's3', name: 'Pure Sine Wave Hybrid & Off-Grid Inverter Setup', category: 'solar' },
        { id: 's4', name: 'Lithium-Ion (LiFePO4) & Gel Battery Bank Integration', category: 'solar' },
        { id: 's5', name: 'Solar-Powered Water Pumping Systems (Borehole & Irrigation)', category: 'solar' },
        { id: 's6', name: 'Autonomous Off-Grid Solar Power Systems', category: 'solar' },
        { id: 's7', name: 'Grid-Tied & Intelligent Hybrid Solar Systems', category: 'solar' },
        { id: 's8', name: 'System Preventative Maintenance, String Testing & Technical Support', category: 'solar' },
      ],
      benefits: [
        'Clean & green renewable energy source',
        'Uninterrupted reliable power during grid outages',
        'Substantially lowered utility electricity bills',
        'Complete energy independence and resilience',
        'Long lifespan with minimal recurring operating costs',
      ],
      applications: [
        'Homes & Residential Estates',
        'Businesses & Commercial Hubs',
        'Schools, Colleges & Training Centers',
        'Farms & Agricultural Irrigation Projects',
        'Borehole Water Pumping Installations',
        'Industrial Workshops & Remote Facilities',
      ],
    },
  ];

  private processStages: ProcessStage[] = [
    {
      number: '01',
      title: 'SURVEY & CONSULTATION',
      shortDescription: 'Comprehensive site assessment, water potential testing, and electrical/solar load profiling.',
      details:
        'We begin with an in-depth on-site survey. For water solutions, we conduct geophysical water detection. For electrical and solar, we audit current and peak loads, structural roof orientation, and safety parameters to establish an accurate scope.',
      deliverables: ['Hydrogeological Survey Report', 'Electrical Load Profile', 'Solar Insolation & Shading Analysis', 'Site Feasibility Assessment'],
    },
    {
      number: '02',
      title: 'DESIGN & QUOTATION',
      shortDescription: 'Tailored engineering blueprint, component sizing, and transparent itemised proposal.',
      details:
        'Our engineers specify exact equipment ratings—from pump horsepower and pipe diameters to inverter capacities and cable gauges. We deliver an honest, transparent quotation with clear line items, timelines, and technical guarantees.',
      deliverables: ['Custom Engineering Schematic', 'Itemised Bill of Materials (BOM)', 'Firm Project Timeline', 'Transparent Quotation'],
    },
    {
      number: '03',
      title: 'INSTALLATION & TESTING',
      shortDescription: 'Professional execution by skilled technicians adhering to strict engineering and safety standards.',
      details:
        'Using modern drilling rigs, calibrated test gear, and spec-grade materials, our certified crew installs the system. We perform rigorous multi-point testing: pressure checks, insulation resistance, voltage regulation, and yield verification.',
      deliverables: ['Safe Physical Installation', 'Yield & Flow Rate Verification', 'Electrical Safety & Earthing Tests', 'Quality Check Sign-Off'],
    },
    {
      number: '04',
      title: 'HANDOVER & SUPPORT',
      shortDescription: 'Full system commissioning, client walkthrough, operational documentation, and responsive support.',
      details:
        'We commission the installation with you present, explain every control switch and monitoring indicator, provide documentation, and schedule ongoing preventative maintenance to ensure uninterrupted long-term reliability.',
      deliverables: ['Client Operation Walkthrough', 'System Manuals & Schematics', 'Warranty Certificates', 'After-Sales Service Agreement'],
    },
  ];

  private coreValues: CoreValue[] = [
    {
      id: 'professionalism',
      title: 'PROFESSIONALISM',
      description: 'We uphold the highest engineering standards in our work, safety conduct, and customer communication.',
      iconName: 'Award',
    },
    {
      id: 'integrity',
      title: 'INTEGRITY',
      description: 'We believe in uncompromising honesty, transparent itemised pricing, and ethical business practices.',
      iconName: 'ShieldCheck',
    },
    {
      id: 'quality',
      title: 'QUALITY',
      description: 'We deliver durable, reliable, and high-performance engineering solutions that stand the test of time.',
      iconName: 'CheckCircle2',
    },
    {
      id: 'innovation',
      title: 'INNOVATION',
      description: 'We embrace modern drilling rigs, high-efficiency solar inverters, and continuous technical improvement.',
      iconName: 'Lightbulb',
    },
    {
      id: 'teamwork',
      title: 'TEAMWORK',
      description: 'We work together with clients, architects, and site engineers to achieve seamless execution and shared success.',
      iconName: 'Users',
    },
    {
      id: 'customer-focus',
      title: 'CUSTOMER FOCUS',
      description: 'Our clients’ operational needs, water security, and energy peace-of-mind are at the heart of everything we do.',
      iconName: 'HeartHandshake',
    },
  ];

  private companyPillars: CompanyPillar[] = [
    {
      title: 'OUR VISION',
      badge: 'Future Outlook',
      description:
        'To be a leading engineering company recognized for excellence, innovation, reliability, and exceptional service across the region.',
    },
    {
      title: 'OUR MISSION',
      badge: 'Core Purpose',
      description:
        'To deliver high-quality engineering and installation solutions that empower communities and create lasting value.',
    },
    {
      title: 'OUR PURPOSE',
      badge: 'Driving Impact',
      description:
        'To provide practical, innovative, and sustainable engineering solutions that improve lives and support development.',
    },
    {
      title: 'OUR COMMITMENT',
      badge: 'Unwavering Guarantee',
      description:
        'We are committed to safety, quality, timeliness, and total customer satisfaction in every project we undertake.',
    },
  ];

  private customerSectors: CustomerSector[] = [
    {
      id: 'residential',
      title: 'Residential Homes & Housing Estates',
      subtitle: 'Complete domestic independence for water and electrical power',
      description:
        'Providing private homes and residential developments with reliable borehole water, aesthetic house wiring, flush ceiling finishes, and hybrid solar backups that keep lights, refrigeration, and security systems powered 24/7.',
      keySolutions: [
        'Dedicated Domestic Borehole Water Systems',
        'Residential Wiring, Distribution Boards & Lighting',
        'Hybrid Rooftop Solar Power & Battery Storage',
        'Interior & Exterior Renovations and Finishing',
      ],
      iconName: 'Home',
    },
    {
      id: 'commercial',
      title: 'Commercial Buildings & Retail Hubs',
      subtitle: 'Uninterrupted power and water security for business continuity',
      description:
        'Preventing costly downtime for office complexes, retail centers, and hospitality facilities through heavy-duty three-phase electrical distribution, high-capacity commercial solar systems, and bulk water storage.',
      keySolutions: [
        'High-Capacity Solar Hybrid Microgrids',
        'Three-Phase Power Distribution & Surge Protection',
        'Commercial Water Storage & Pressure Booster Sets',
        'Concealed Conduiting & Partitioning for Offices',
      ],
      iconName: 'Building2',
    },
    {
      id: 'agricultural',
      title: 'Agricultural Farms & Agro-Enterprises',
      subtitle: 'High-yield solar irrigation and livestock watering',
      description:
        'Eliminating diesel generator fuel expenses on farms by installing high-yield solar borehole pumps directly feeding center pivots, drip irrigation networks, and livestock reservoirs across rural landscapes.',
      keySolutions: [
        'Solar-Powered Direct Borehole Pumping',
        'Bulk Farm Water Storage Tank Towers',
        'Off-Grid Solar Power for Farmsteads & Packing Sheds',
        'Robust Electrical Infrastructure for Farm Machinery',
      ],
      iconName: 'Wheat',
    },
    {
      id: 'industrial',
      title: 'Industrial Facilities & Workshops',
      subtitle: 'Engineered for high-amperage resilience and demanding duties',
      description:
        'Supplying factories, processing yards, and fabrication workshops with robust industrial wiring, heavy motor control distribution boards, dedicated surge protection, and high-flow borehole pumping stations.',
      keySolutions: [
        'Industrial Distribution Boards & Motor Control',
        'Heavy-Duty Submersible Pumping & Water Treatment',
        'Surge Protection Devices (SPD) & Precision Earthing',
        'Factory Structural Lighting & Conduit Trunking',
      ],
      iconName: 'Factory',
    },
    {
      id: 'institutional',
      title: 'Educational Campuses & Healthcare Centers',
      subtitle: 'Dependable community infrastructure built to high safety codes',
      description:
        'Delivering clean drinking water to schools and clinics, installing solar backup power for laboratory refrigeration and vaccine storage, and completing modern building renovations with safety-certified materials.',
      keySolutions: [
        'Community & Campus Borehole Water Systems',
        'Critical Backup Solar for Clinics & Laboratories',
        'Safe Institutional Wiring & Fire-Resistant Conduiting',
        'Classroom & Facility Renovations & Ceiling Finishing',
      ],
      iconName: 'GraduationCap',
    },
  ];

  private showcases: ProjectShowcase[] = [
    {
      id: 'proj-1',
      title: 'Deep Borehole & Integrated Elevated Water Station',
      divisionId: 'borehole',
      divisionLabel: 'Borehole Services',
      category: 'Hydrogeological Water Solution',
      sector: 'Agricultural',
      challenge:
        'A large multi-acre agricultural enterprise was facing persistent seasonal water shortages and unpredictable municipal supply, threatening crop cycles and livestock welfare.',
      solution:
        'JEMKET conducted advanced geophysical water detection to pinpoint a high-yielding subterranean aquifer. We drilled a 95-meter borehole, installed a high-efficiency submersible pump, heavy-duty casing, and integrated an elevated 10,000L steel tank stand with automated pressure switches.',
      outcome:
        'Continuous year-round yield exceeding 6,500 liters per hour, ensuring 100% water autonomy and zero crop disruption across all seasons.',
      specifications: [
        { label: 'Drilling Depth', value: '95 Meters' },
        { label: 'Casing Diameter', value: '140mm Heavy-Duty PVC' },
        { label: 'Pump Type', value: 'Submersible 3.0 HP High-Head' },
        { label: 'Storage Capacity', value: '10,000 Liters Elevated' },
      ],
      highlights: ['Water Survey Cleared', 'Yield Test Certified', 'Automated Control Unit'],
    },
    {
      id: 'proj-2',
      title: 'Hybrid Commercial Solar Array & Lithium Storage',
      divisionId: 'solar',
      divisionLabel: 'Solar Energy',
      category: 'Commercial Clean Power',
      sector: 'Commercial',
      challenge:
        'A bustling commercial business hub suffered from frequent utility grid load-shedding, causing server shutdowns, POS terminal outages, and excessive diesel generator running costs.',
      solution:
        'Engineered and installed a customized 15kVA pure sine wave hybrid solar inverter system coupled with Tier-1 monocrystalline panels and high-cycle LiFePO4 lithium battery banks, seamlessly synchronized with the main distribution board.',
      outcome:
        'Achieved 82% reduction in grid power consumption and seamless, zero-millisecond cutover during blackouts with zero equipment restarts.',
      specifications: [
        { label: 'Inverter Capacity', value: '15kVA Three-Phase Hybrid' },
        { label: 'Solar PV Array', value: '24 x 550W Tier-1 Monocrystalline' },
        { label: 'Battery Chemistry', value: 'LiFePO4 Lithium (20kWh)' },
        { label: 'Cutover Time', value: '< 10 Milliseconds (Uninterrupted)' },
      ],
      highlights: ['Zero-Downtime Cutover', 'Remote App Monitoring', 'Surge Suppressor Protected'],
    },
    {
      id: 'proj-3',
      title: 'Turnkey Architectural House Wiring & Conduiting',
      divisionId: 'electrical-building',
      divisionLabel: 'Electrical & Building',
      category: 'Residential Electrical & Finishing',
      sector: 'Residential',
      challenge:
        'A newly constructed two-story residence required comprehensive electrical tubing, distribution board layout, flush ceiling installations, and aesthetic architectural lighting to match strict building codes.',
      solution:
        'JEMKET handled end-to-end electrical tubing, concealed wall conduit routing, two multi-tier distribution boards with dedicated surge arrestors, energy-efficient LED recessed lighting, and flush plaster ceiling installations with clean painted finishes.',
      outcome:
        'Delivered fully balanced, code-compliant circuits with balanced phase loads and flawless architectural wall and ceiling finishes.',
      specifications: [
        { label: 'Scope Type', value: 'Whole-House Turnkey Installation' },
        { label: 'Distribution Boards', value: '2 x 24-Way DBs with Type 2 SPDs' },
        { label: 'Cabling Standard', value: 'Pure Copper SABS/IEC Certified' },
        { label: 'Finishing Scope', value: 'Conduiting, Ceilings & Lighting' },
      ],
      highlights: ['Full Safety Certification', 'Surge Protection Included', 'Modern Recessed LED Layout'],
    },
    {
      id: 'proj-4',
      title: 'Solar-Powered Borehole Irrigation System',
      divisionId: 'solar',
      divisionLabel: 'Solar & Water Integration',
      category: 'Off-Grid Agricultural Pumping',
      sector: 'Agricultural',
      challenge:
        'A remote farm without national grid access was spending excessive funds on fuel for a diesel generator to pump water for drip irrigation lines.',
      solution:
        'Installed a dedicated solar water pumping array with a solar variable speed drive (VSD) pump controller directly driving a solar submersible pump, eliminating batteries and generator fuel entirely.',
      outcome:
        'Zero operating fuel costs, automated daily sunrise-to-sunset pumping, delivering over 35,000 liters of water daily into farm reservoirs.',
      specifications: [
        { label: 'Solar Pump Drive', value: 'Solar VFD Inverter Controller' },
        { label: 'Solar Array', value: '10 x 450W Solar Modules' },
        { label: 'Daily Delivery', value: '35,000+ Liters on Sunny Days' },
        { label: 'Fuel Savings', value: '100% Elimination of Diesel Expense' },
      ],
      highlights: ['Direct Solar Pumping', 'Zero Fuel Dependency', 'Dry-Run Sensor Protection'],
    },
    {
      id: 'proj-5',
      title: 'Commercial Distribution Board Overhaul & Renovation',
      divisionId: 'electrical-building',
      divisionLabel: 'Electrical Services',
      category: 'Power Infrastructure Upgrade',
      sector: 'Industrial',
      challenge:
        'An aging industrial fabrication workshop was experiencing dangerous circuit tripping, loose terminal overheating, and hazardous exposed conduiting.',
      solution:
        'Complete system strip-down and replacement with industrial-grade modular distribution enclosure, busbar restructuring, dedicated circuit breakers, heavy industrial sockets, and reinforced metal trunking.',
      outcome:
        'Eliminated nuisance tripping, upgraded thermal safety margins, and achieved complete compliance with national occupational safety standards.',
      specifications: [
        { label: 'Panel Rating', value: '250A Main Isolator & Busbars' },
        { label: 'Protection', value: 'Residual Current (RCD) & Overcurrent' },
        { label: 'Conduiting', value: 'Heavy Galvanized Metal Trunking' },
        { label: 'Downtime', value: 'Completed Over Weekend Shift' },
      ],
      highlights: ['Industrial Grade', 'Safe Work Environment', 'Balanced Three-Phase Load'],
    },
    {
      id: 'proj-6',
      title: 'Institutional Solar Backup & Clean Water Borehole',
      divisionId: 'borehole',
      divisionLabel: 'Integrated Water & Solar',
      category: 'Integrated Institutional Facility',
      sector: 'Institutional',
      challenge:
        'A regional boarding school and community health clinic required both guaranteed potable water and dependable electricity for refrigeration and lighting.',
      solution:
        'Delivered JEMKET’s flagship integrated package: a complete borehole drilling and pumping system paired with a hybrid solar power station and storage tank infrastructure.',
      outcome:
        'Empowered over 600 students and clinic staff with reliable running water and uninterrupted nighttime lighting.',
      specifications: [
        { label: 'Integration', value: 'Combined Borehole & Solar System' },
        { label: 'Beneficiaries', value: '600+ Students & Healthcare Staff' },
        { label: 'Water Quality', value: 'Laboratory Potability Tested' },
        { label: 'Backup Autonomy', value: '36 Hours Battery Storage' },
      ],
      highlights: ['Dual-Discipline Delivery', 'Community Impact', 'Comprehensive Maintenance Plan'],
    },
  ];

  public static getInstance(): ServiceCatalog {
    if (!ServiceCatalog.instance) {
      ServiceCatalog.instance = new ServiceCatalog();
    }
    return ServiceCatalog.instance;
  }

  public getDivisions(): ServiceDivision[] {
    return this.divisions;
  }

  public getDivisionById(id: ServiceDivisionId): ServiceDivision | undefined {
    return this.divisions.find((div) => div.id === id);
  }

  public getProcessStages(): ProcessStage[] {
    return this.processStages;
  }

  public getCoreValues(): CoreValue[] {
    return this.coreValues;
  }

  public getCompanyPillars(): CompanyPillar[] {
    return this.companyPillars;
  }

  public getCustomerSectors(): CustomerSector[] {
    return this.customerSectors;
  }

  public getShowcases(divisionId?: ServiceDivisionId): ProjectShowcase[] {
    if (!divisionId) return this.showcases;
    return this.showcases.filter((p) => p.divisionId === divisionId);
  }

  public getShowcaseById(id: string): ProjectShowcase | undefined {
    return this.showcases.find((p) => p.id === id);
  }
}
