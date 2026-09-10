export const PERIODS = [
  {
    id: 'period-1',
    number: '01',
    name: 'Indus Valley Civilization',
    dates: 'c. 2500 – 1900 BCE',
    eraBadge: 'Ancient Era',
    description: 'One of the world\'s earliest urban cultures, famed for sophisticated town planning, steatite seals, lost-wax bronze casting, and painted pottery.',
    keyFeatures: ['Lost-wax Bronze Casting', 'Steatite Seals with Script', 'Urban Terracotta Art', 'Grid Infrastructure'],
    accentColor: '#C85A32'
  },
  {
    id: 'period-2',
    number: '02',
    name: 'Mauryan & Early Buddhist Art',
    dates: 'c. 322 – 185 BCE',
    eraBadge: 'Classical Foundations',
    description: 'Characterized by Imperial Ashokan pillars with high Mauryan polish, monumental rock-cut edicts, stupa architecture, and Yakshi sculptures.',
    keyFeatures: ['Imperial Polish Technique', 'Rock-cut Architecture', 'Stupa Relief Carvings', 'Symbolic Aniconic Art'],
    accentColor: '#D97736'
  },
  {
    id: 'period-3',
    number: '03',
    name: 'Gupta Period',
    dates: 'c. 320 – 550 CE',
    eraBadge: 'Golden Age',
    description: 'Regarded as the "Golden Age" of Indian classical art. Defined by sublime Sarnath Buddhist icons, Ajanta murals, and ideal human proportions.',
    keyFeatures: ['Idealized Human Anatomy', 'Ajanta Cave Murals', 'Sarnath School of Sculpture', 'Early Stone Temples'],
    accentColor: '#D4AF37'
  },
  {
    id: 'period-4',
    number: '04',
    name: 'Medieval Temple Art',
    dates: 'c. 600 – 1200 CE',
    eraBadge: 'Monumental Sacred Art',
    description: 'An era of grand Dravidian and Nagara temple architecture. Produced Chola bronze masterpieces, Khajuraho reliefs, and Konark stone wheels.',
    keyFeatures: ['Chola Lost-Wax Bronzes', 'Nagara & Dravidian Styles', 'Erotic & Sacred Reliefs', 'Granite Temple Vimanas'],
    accentColor: '#B8860B'
  },
  {
    id: 'period-5',
    number: '05',
    name: 'Indo-Islamic & Mughal Art',
    dates: 'c. 1200 – 1700 CE',
    eraBadge: 'Imperial Splendor',
    description: 'Synthesis of Persian, Central Asian, and Indian aesthetic traditions. Featured refined imperial court miniatures, marble inlay (pietra dura), and iconic monuments.',
    keyFeatures: ['Pietra Dura Marble Inlay', 'Court Miniature Painting', 'Illuminated Manuscripts', 'Garden Tomb Architecture'],
    accentColor: '#E28461'
  },
  {
    id: 'period-6',
    number: '06',
    name: 'Rajput & Regional Painting',
    dates: 'c. 1500 – 1800 CE',
    eraBadge: 'Regional Masterpieces',
    description: 'Vibrant courtly and folk art styles across Rajasthan, Punjab Hills (Pahari), Tanjore, and Mithila. Expressed devotion, romantic poetry, and myth.',
    keyFeatures: ['Kishangarh & Basohli Miniatures', 'Tanjore Gold Leaf Icons', 'Madhubani Folk Murals', 'Poetic Ragamala Themes'],
    accentColor: '#C85A32'
  },
  {
    id: 'period-7',
    number: '07',
    name: 'Colonial & Company Art',
    dates: 'c. 1750 – 1947',
    eraBadge: 'Cultural Encounter',
    description: 'Bridged traditional Indian craftsmanship and European oil painting techniques. Gave rise to Company School documentation, Raja Ravi Varma, and Bengal School.',
    keyFeatures: ['Oil on Canvas Technique', 'Company School Documentation', 'Nationalist Aesthetic Movement', 'Academic Realism'],
    accentColor: '#A3968C'
  },
  {
    id: 'period-8',
    number: '08',
    name: 'Modern & Contemporary India',
    dates: '1947 – Present',
    eraBadge: 'Modern Expressions',
    description: 'Post-Independence avant-garde movements. Progressive Artists\' Group transformed Indian themes with cubist, abstract, and multimedia expressions.',
    keyFeatures: ['Progressive Artists Group', 'Neo-Tantric Symbolism', 'Post-colonial Identity', 'Digital & Mixed Media'],
    accentColor: '#F3E5AB'
  }
];

export const ART_FORMS = [
  {
    id: 'Sculpture',
    name: 'Sculpture',
    icon: '🗿',
    description: 'Stone, bronze, steatite, and terracotta carvings spanning 5,000 years of tactile mastery.',
    count: 8,
    color: 'from-amber-700/30 to-orange-900/40'
  },
  {
    id: 'Painting',
    name: 'Painting',
    icon: '🎨',
    description: 'From ancient Ajanta cave frescoes to courtly court miniatures and modern oils on canvas.',
    count: 8,
    color: 'from-rose-700/30 to-amber-900/40'
  },
  {
    id: 'Architecture',
    name: 'Architecture',
    icon: '🏛',
    description: 'Rock-cut caverns, soaring temple vimanas, and majestic Indo-Islamic marble monuments.',
    count: 5,
    color: 'from-yellow-700/30 to-amber-950/40'
  },
  {
    id: 'Manuscripts',
    name: 'Manuscripts',
    icon: '📜',
    description: 'Illuminated palm-leaf and paper folios preserving spiritual texts, court histories, and poetry.',
    count: 3,
    color: 'from-orange-800/30 to-yellow-900/40'
  },
  {
    id: 'Pottery',
    name: 'Pottery',
    icon: '🏺',
    description: 'Ancient Indus terracotta vessels, ceremonial painted jars, and regional ceramic craft.',
    count: 2,
    color: 'from-red-800/30 to-orange-950/40'
  },
  {
    id: 'Metalwork',
    name: 'Metalwork',
    icon: '🧵',
    description: 'Lost-wax bronze idols, embossed copper icons, and delicate gold leaf embellishments.',
    count: 2,
    color: 'from-amber-600/30 to-yellow-950/40'
  }
];

export const ARTIFACTS = [
  // --- PERIOD 1: Indus Valley (2500 - 1900 BCE) ---
  {
    id: 'dancing-girl',
    name: 'Dancing Girl of Mohenjo-daro',
    period: 'Indus Valley Civilization',
    periodId: 'period-1',
    date: 'c. 2500 BCE',
    location: 'Mohenjo-daro (National Museum, New Delhi)',
    region: 'North-West Subcontinent',
    category: 'Sculpture',
    material: 'Bronze (Lost-wax casting)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Dancing_Girl_of_Mohenjo-daro.jpg/800px-Dancing_Girl_of_Mohenjo-daro.jpg',
    shortDescription: 'A world-famous 10.5 cm bronze figurine depicting a confident young woman standing with her hand on her hip.',
    historicalContext: 'Discovered by archaeologist Ernest Mackay in 1926 at Mohenjo-daro, this statuette is a masterwork of pre-historic metallurgic craft. Cast using the lost-wax (cire perdue) process, it exhibits advanced metallurgical knowledge existing in the Indus Valley over 4,500 years ago.',
    significance: 'The sculpture is revolutionary because it moves away from rigid religious idols to capture natural human posture, stylistic grace, and adornment—wearing 24 bangles on her left arm.',
    funFact: 'Famed British archaeologist Sir Mortimer Wheeler remarked: "She\'s about fifteen years old I should think, not more... perfect, I think, for what she is."'
  },
  {
    id: 'priest-king',
    name: 'Priest-King Sculpture',
    period: 'Indus Valley Civilization',
    periodId: 'period-1',
    date: 'c. 2000–1900 BCE',
    location: 'Mohenjo-daro (National Museum of Pakistan, Karachi)',
    region: 'North-West Subcontinent',
    category: 'Sculpture',
    material: 'Steatite (Soapstone)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Priest_King_Harappa.jpg/800px-Priest_King_Harappa.jpg',
    shortDescription: 'A seated male bust carving featuring a neatly trimmed beard, armlet, and a filigree trefoil-patterned cloak.',
    historicalContext: 'Carved from soft steatite stone and originally filled with red pigment, this 17.5 cm tall bust was excavated in 1927. The trefoil motif on his shawl closely resembles contemporaneous Mesopotamian decorative symbols, indicating trade and cultural dialogue.',
    significance: 'It remains the primary visual symbol of authority and spiritual status from the enigmatic Indus Valley civilization.',
    funFact: 'His half-closed, meditative eyes have led scholars to speculate he represents a priest-king engaged in yoga or deep contemplation.'
  },
  {
    id: 'pashupati-seal',
    name: 'Pashupati Seal',
    period: 'Indus Valley Civilization',
    periodId: 'period-1',
    date: 'c. 2350–2000 BCE',
    location: 'Mohenjo-daro (National Museum, New Delhi)',
    region: 'North-West Subcontinent',
    category: 'Sculpture',
    material: 'Steatite',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Pashupati_Seal.jpg/800px-Pashupati_Seal.jpg',
    shortDescription: 'A carved stone stamp seal depicting a horned figure seated in a yogic posture surrounded by wild animals.',
    historicalContext: 'Excavated at Mohenjo-daro, this small square seal shows a three-faced horned deity seated cross-legged on a dais, encircled by an elephant, tiger, rhinoceros, water buffalo, and ibex.',
    significance: 'Widely considered by art historians as one of the earliest proto-Shiva depictions ("Pashupati" or Lord of Beasts) in Indian spiritual iconography.',
    funFact: 'The top of the seal contains 7 undeciphered Indus script pictograms that remain one of antiquity\'s greatest linguistic puzzles.'
  },
  {
    id: 'harappan-pottery',
    name: 'Harappan Painted Terracotta Vessel',
    period: 'Indus Valley Civilization',
    periodId: 'period-1',
    date: 'c. 2400 BCE',
    location: 'Harappa (National Museum, New Delhi)',
    region: 'North-West Subcontinent',
    category: 'Pottery',
    material: 'Terracotta & Black Pigment',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Harappan_pottery.jpg/800px-Harappan_pottery.jpg',
    shortDescription: 'A wheel-turned terracotta jar decorated with lustrous red slip and intricate geometric and botanical black paintings.',
    historicalContext: 'Indus Valley potters perfected the high-temperature kiln firing of wheel-thrown clay vessels. They coated jars in fine red clay slip and painted motifs of pipal leaves, intersecting circles, and peacocks.',
    significance: 'Demonstrates utilitarian beauty and standardized artistic production across vast geographical distances in ancient urban India.',
    funFact: 'The black manganese paint was so durable that it retains its vivid contrast 4,000 years after being buried under alluvial soil.'
  },

  // --- PERIOD 2: Mauryan & Early Buddhist Art (322 - 185 BCE) ---
  {
    id: 'lion-capital-ashoka',
    name: 'Lion Capital of Ashoka',
    period: 'Mauryan & Early Buddhist Art',
    periodId: 'period-2',
    date: 'c. 250 BCE',
    location: 'Sarnath, Uttar Pradesh (Sarnath Museum)',
    region: 'North India',
    category: 'Sculpture',
    material: 'Polished Chunar Sandstone',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Lion_Capital_of_Ashoka.jpg/800px-Lion_Capital_of_Ashoka.jpg',
    shortDescription: 'A magnificent monumental capital featuring four back-to-back Asiatic lions standing upon an abacus with the Ashoka Chakra.',
    historicalContext: 'Erected by Emperor Ashoka the Great at Sarnath, the location where Gautama Buddha delivered his first sermon (Dharmachakra Pravartana). The lions symbolize regal power and the proclamation of Dhamma to the four quarters of the earth.',
    significance: 'Represents the pinnacle of Mauryan court sculpture, famous for its glass-like mirror polish (Mauryan polish). Adopted in 1950 as the official National Emblem of Independent India.',
    funFact: 'The 24-spoked wheel at its base was integrated into the center of India\'s national tricolor flag.'
  },
  {
    id: 'sanchi-stupa',
    name: 'Great Stupa at Sanchi',
    period: 'Mauryan & Early Buddhist Art',
    periodId: 'period-2',
    date: 'c. 3rd Century BCE – 1st Century CE',
    location: 'Sanchi, Madhya Pradesh',
    region: 'Central India',
    category: 'Architecture',
    material: 'Stone, Brick & Carved Sandstone Gateway (Torana)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sanchi_Stupa_from_Eastern_Gate%2C_Madhya_Pradesh.jpg/800px-Sanchi_Stupa_from_Eastern_Gate%2C_Madhya_Pradesh.jpg',
    shortDescription: 'The oldest stone structure in India, featuring a hemispherical dome housing sacred Buddhist relics and ornate torana gateways.',
    historicalContext: 'Originally commissioned by Emperor Ashoka in the 3rd century BCE, the stupa was enlarged in later centuries with four elaborately carved stone gateways (Toranas) detailing Jataka tales and Buddha\'s life events.',
    significance: 'A cornerstone of Buddhist sacred architecture worldwide. Its narrative stone reliefs paved the way for narrative visual storytelling in Asian art.',
    funFact: 'Early sculptors did not show the Buddha in human form; instead, they represented him through symbols like his footprints, a lotus, or an empty throne.'
  },
  {
    id: 'didarganj-yakshi',
    name: 'Didarganj Yakshi',
    period: 'Mauryan & Early Buddhist Art',
    periodId: 'period-2',
    date: 'c. 3rd–2nd Century BCE',
    location: 'Didarganj, Bihar (Patna Museum)',
    region: 'East India',
    category: 'Sculpture',
    material: 'Polished Chunar Sandstone',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Didarganj_Yakshi_Patna_Museum.jpg/800px-Didarganj_Yakshi_Patna_Museum.jpg',
    shortDescription: 'A life-sized, high-polished sandstone sculpture of a fertility deity holding a fly-whisk (chauri).',
    historicalContext: 'Discovered on the banks of the Ganges River near Patna in 1917, this life-size statue exhibits the luminous surface mirror polish characteristic of royal Mauryan artisans.',
    significance: 'Celebrated for its exquisite volumetric modeling, intricate drapes, jewelry, and idealized feminine proportions, serving as a prototype for classical Indian feminine beauty in art.',
    funFact: 'Local villagers originally mistook the partially submerged statue for a washing stone before historians recognized its immense antiquity.'
  },

  // --- PERIOD 3: Gupta Period (320 - 550 CE) ---
  {
    id: 'sarnath-buddha',
    name: 'Sarnath Preaching Buddha',
    period: 'Gupta Period',
    periodId: 'period-3',
    date: 'c. 5th Century CE',
    location: 'Sarnath, Uttar Pradesh (Sarnath Museum)',
    region: 'North India',
    category: 'Sculpture',
    material: 'Chunar Sandstone',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Buddha_in_Sarnath_Museum_%28Dhammajak_Mutra%29.jpg/800px-Buddha_in_Sarnath_Museum_%28Dhammajak_Mutra%29.jpg',
    shortDescription: 'The serene masterpiece of Gupta Buddhist sculpture depicting Buddha turning the Wheel of Law (Dharmachakra Mudra).',
    historicalContext: 'Created during the height of the Gupta Dynasty, this image perfected the classical Indian aesthetic: smooth unadorned robe drapery, downcast introspective eyes, and a carved halo behind the head.',
    significance: 'Established the iconic spiritual standard for Buddhist imagery across East Asia, Southeast Asia, and Tibet for over a thousand years.',
    funFact: 'The intricate halo behind Buddha\'s head features two celestial flying figures (Gandharvas) offering garlands of praise.'
  },
  {
    id: 'ajanta-padmapani',
    name: 'Padmapani Bodhisattva (Ajanta Cave 1)',
    period: 'Gupta Period',
    periodId: 'period-3',
    date: 'c. 5th Century CE',
    location: 'Ajanta Caves, Maharashtra',
    region: 'West India',
    category: 'Painting',
    material: 'Mural Fresco on Tempera Plaster',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Ajanta_Padmapani.jpg/800px-Ajanta_Padmapani.jpg',
    shortDescription: 'A breathtaking mural painting of Bodhisattva Avalokiteshvara holding a blue lotus flower in Cave 1 at Ajanta.',
    historicalContext: 'Painted on rock-cut cave walls prepared with mud, lime, and organic fibers, Ajanta murals were funded by Vakataka and Gupta royal patrons. The artist used natural mineral pigments to achieve subtle shading and realistic depth.',
    significance: 'Widely praised as the supreme high-water mark of ancient Indian painting, showcasing sophisticated chiaroscuro (light and shadow) technique long before European Renaissance.',
    funFact: 'The dark cave interiors were illuminated during painting using metal mirrors to reflect natural sunlight into the rock chambers.'
  },
  {
    id: 'sultanganj-buddha',
    name: 'Sultanganj Copper Buddha',
    period: 'Gupta Period',
    periodId: 'period-3',
    date: 'c. 500–700 CE',
    location: 'Sultanganj, Bihar (Birmingham Museum & Art Gallery)',
    region: 'East India',
    category: 'Metalwork',
    material: 'Cast Copper',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sultanganj_Buddha_Birmingham.jpg/800px-Sultanganj_Buddha_Birmingham.jpg',
    shortDescription: 'A monumental 2.3-meter-tall standing copper statue of Buddha expressing the gesture of fearlessness (Abhaya Mudra).',
    historicalContext: 'Discovered during railway excavation in Bihar in 1861, this colossal metal casting weighs over 500 kg. It demonstrates the astonishing scale of metallurgical casting achievable in late Gupta India.',
    significance: 'The largest complete standing metal sculpture known from ancient India, bridging Gupta aesthetics with early Pala metalcraft traditions.',
    funFact: 'It was cast in two layers over a clay core using massive earthen crucibles capable of holding hundreds of kilograms of molten copper.'
  },

  // --- PERIOD 4: Medieval Temple Art (600 - 1200 CE) ---
  {
    id: 'chola-nataraja',
    name: 'Chola Lord of the Dance (Nataraja)',
    period: 'Medieval Temple Art',
    periodId: 'period-4',
    date: 'c. 10th–11th Century CE',
    location: 'Thanjavur, Tamil Nadu (Government Museum, Chennai)',
    region: 'South India',
    category: 'Metalwork',
    material: 'Lost-wax Cast Bronze',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Nataraja_Bronze_Chola_Period.jpg/800px-Nataraja_Bronze_Chola_Period.jpg',
    shortDescription: 'An iconic Tamil Chola bronze sculpture depicting Shiva dancing the cosmic dance of creation and destruction within a ring of fire.',
    historicalContext: 'Cast during the reign of Chola monarchs who patronized bronze foundries in South India. Shiva dances the Anandatandava, crushing Apasmara (the demon of ignorance) underfoot while holding the drum of creation (damaru) and fire of destruction (agni).',
    significance: 'Considered by art critics worldwide—including French sculptor Auguste Rodin—as one of the greatest sculptures ever produced by human civilization.',
    funFact: 'A monumental replica of the Chola Nataraja stands outside the CERN particle physics laboratory in Geneva, symbolizing the cosmic dance of subatomic particles.'
  },
  {
    id: 'khajuraho-reliefs',
    name: 'Kandariya Mahadeva Reliefs',
    period: 'Medieval Temple Art',
    periodId: 'period-4',
    date: 'c. 1000–1030 CE',
    location: 'Khajuraho, Madhya Pradesh',
    region: 'Central India',
    category: 'Architecture',
    material: 'Buff Sandstone Carvings',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Khajuraho_Kandariya_Mahadeva_Temple.jpg/800px-Khajuraho_Kandariya_Mahadeva_Temple.jpg',
    shortDescription: 'Soaring Nagara temple carved with over 800 intricate statues of deities, celestial dancers (apsaras), and erotic scenes.',
    historicalContext: 'Commissioned by the Chandela Dynasty kings, Khajuraho temples celebrate the harmony between Dharma, Artha, Kama, and Moksha. The exterior walls are decorated with sinuous sculptured friezes.',
    significance: 'Peak expression of Central Indian Nagara temple architecture, famous for architectural harmony and unabashed celebration of divine life and human intimacy.',
    funFact: 'Despite popular belief, erotic carvings comprise less than 10% of Khajuraho\'s total sculptures; the majority depict daily medieval life, music, and divine pantheons.'
  },
  {
    id: 'brihadeeswarar-temple',
    name: 'Brihadeeswarar Temple Vimana',
    period: 'Medieval Temple Art',
    periodId: 'period-4',
    date: 'c. 1010 CE',
    location: 'Thanjavur, Tamil Nadu',
    region: 'South India',
    category: 'Architecture',
    material: 'Granite Masonry',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Thanjavur_Brihadeeswarar_Temple_Vimana.jpg/800px-Thanjavur_Brihadeeswarar_Temple_Vimana.jpg',
    shortDescription: 'A monumental 66-meter-tall granite temple tower (Vimana) built by Chola Emperor Raja Raja I.',
    historicalContext: 'Constructed entirely out of solid granite transported from quarry sites miles away, this UNESCO World Heritage Site is an engineering marvel of the medieval world.',
    significance: 'Represented the apex of Dravidian architecture, built without mortar using precision interlocking stone joints.',
    funFact: 'The top capstone (Kumbam) weighs approximately 80 tons and was hauled up to the 216-foot summit using a miles-long earthen ramp.'
  },
  {
    id: 'konark-sun-wheel',
    name: 'Konark Sun Temple Stone Wheel',
    period: 'Medieval Temple Art',
    periodId: 'period-4',
    date: 'c. 1250 CE',
    location: 'Konark, Odisha',
    region: 'East India',
    category: 'Architecture',
    material: 'Khondalite & Chlorite Stone',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Konark_Sun_Temple_Wheel.jpg/800px-Konark_Sun_Temple_Wheel.jpg',
    shortDescription: 'An intricately carved stone wheel from the colossal Sun God chariot temple designed by King Narasimhadeva I.',
    historicalContext: 'Designed as a colossal 12-wheeled stone chariot drawn by seven galloping horses to carry Surya, the Sun God, across the heavens.',
    significance: 'Famous for detailed carvings of dancers, musicians, animals, and intricate floral filigree in hard stone.',
    funFact: 'The 12 wheels represent the months of the year, and the spokes function as accurate sundials capable of telling precise time by analyzing shadow lengths.'
  },

  // --- PERIOD 5: Indo-Islamic & Mughal Art (1200 - 1700 CE) ---
  {
    id: 'taj-mahal-inlay',
    name: 'Taj Mahal Pietra Dura Marble Inlay',
    period: 'Indo-Islamic & Mughal Art',
    periodId: 'period-5',
    date: 'c. 1632–1653 CE',
    location: 'Agra, Uttar Pradesh',
    region: 'North India',
    category: 'Architecture',
    material: 'White Makrana Marble & Semiprecious Inlay Stones',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal_Inlay_Work.jpg/800px-Taj_Mahal_Inlay_Work.jpg',
    shortDescription: 'Exquisite pietra dura floral inlay craftsmanship embedded into translucent white marble surfaces of the Taj Mahal.',
    historicalContext: 'Commissioned by Mughal Emperor Shah Jahan for his beloved wife Mumtaz Mahal. Master artisans from Persia, India, and Europe carved thousands of semiprecious stones like lapis lazuli, jade, jasper, and onyx to set inside marble grooves.',
    significance: 'The ultimate synthesis of Persian Islamic floral arabesques and Indian marble carving, creating a paradise-on-earth vision.',
    funFact: 'Single floral petals in the inlay often consist of up to 30 individually cut and fitted micro-semiprecious stones.'
  },
  {
    id: 'jahangir-miniature',
    name: 'Jahangir Preferring a Sufi Shaikh to Kings',
    period: 'Indo-Islamic & Mughal Art',
    periodId: 'period-5',
    date: 'c. 1615–1618 CE',
    location: 'Mughal Imperial Studio (Freer Gallery of Art, Washington D.C.)',
    region: 'North India',
    category: 'Painting',
    material: 'Opaque Watercolor, Gold & Ink on Paper',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Bichitr._Jahangir_Preferring_a_Sufi_Shaikh_to_Kings.jpg/800px-Bichitr._Jahangir_Preferring_a_Sufi_Shaikh_to_Kings.jpg',
    shortDescription: 'An allegorical Mughal imperial painting by court artist Bichitr showing Jahangir honoring a holy man over European monarchs.',
    historicalContext: 'Painted during Emperor Jahangir\'s reign, this miniature incorporates European renaissance motifs (cupids, globe, hourglass) alongside Persian calligraphic margins and realistic Indian portraits.',
    significance: 'Highlights the cosmopolitan nature of Mughal imperial studios and their masterful blending of Indian realism, Persian line, and European perspective.',
    funFact: 'In the bottom left corner, court painter Bichitr painted a tiny self-portrait holding an artist\'s board.'
  },
  {
    id: 'fatehpur-sikri-panch',
    name: 'Fatehpur Sikri Panch Mahal',
    period: 'Indo-Islamic & Mughal Art',
    periodId: 'period-5',
    date: 'c. 1571–1585 CE',
    location: 'Fatehpur Sikri, Uttar Pradesh',
    region: 'North India',
    category: 'Architecture',
    material: 'Red Sandstone',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Panch_Mahal_at_Fatehpur_Sikri.jpg/800px-Panch_Mahal_at_Fatehpur_Sikri.jpg',
    shortDescription: 'A five-tiered open-columned palace pavilion built by Emperor Akbar combining Hindu pillared design with Islamic geometry.',
    historicalContext: 'Akbar designed Fatehpur Sikri as his dream capital, fostering architectural synthesis by employing Hindu craftsman from Gujarat and Rajasthan to construct royal Mughal palaces.',
    significance: 'Embodying Akbar\'s philosophy of universal tolerance (Sulh-i-kul), blending Buddhist-Hindu column tiers with Islamic arch motifs.',
    funFact: 'The ground floor contains 84 intricately carved sandstone pillars, no two of which feature the exact same pattern.'
  },
  {
    id: 'padshahnama-manuscript',
    name: 'Illuminated Padshahnama Folio',
    period: 'Indo-Islamic & Mughal Art',
    periodId: 'period-5',
    date: 'c. 1640 CE',
    location: 'Royal Collection, Windsor Castle / Royal Library',
    region: 'North India',
    category: 'Manuscripts',
    material: 'Gold Leaf & Mineral Pigments on Paper',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/The_Surrender_of_Kandahar_Padshahnama.jpg/800px-The_Surrender_of_Kandahar_Padshahnama.jpg',
    shortDescription: 'An official chronicle folio of Shah Jahan\'s reign detailing royal durbars, siege operations, and lavish court ceremonies.',
    historicalContext: 'Produced by top court artists including Payag and Balchand over two decades. The manuscript records historic battles, weddings, and diplomatic receptions with photographic portrait precision.',
    significance: 'Represents the golden peak of Mughal illuminated manuscript tradition before royal ateliers scattered.',
    funFact: 'The manuscript was presented to King George III of England by the Nawab of Awadh in 1799.'
  },

  // --- PERIOD 6: Rajput & Regional Painting (1500 - 1800 CE) ---
  {
    id: 'bani-thani',
    name: 'Bani Thani (Kishangarh Mona Lisa)',
    period: 'Rajput & Regional Painting',
    periodId: 'period-6',
    date: 'c. 1750 CE',
    location: 'Kishangarh, Rajasthan (National Museum, New Delhi)',
    region: 'West India',
    category: 'Painting',
    material: 'Opaque Watercolor on Paper',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Bani_Thani_painting.jpg/800px-Bani_Thani_painting.jpg',
    shortDescription: 'The world-famous Rajasthani portrait of poetess and singer Bani Thani, characterized by elongated lotus eyes and delicate profile.',
    historicalContext: 'Painted by master court artist Nihal Chand for Raja Savant Singh of Kishangarh. The figure represents Radha, characterized by stylized arched eyebrows, pointed chin, and sheer gold-trimmed odhani (veil).',
    significance: 'Celebrated as the "Mona Lisa of India" due to its lyrical elegance, romantic idealism, and unique regional stylization.',
    funFact: 'India Post issued a commemorative postage stamp featuring Bani Thani in 1973.'
  },
  {
    id: 'pahari-basohli',
    name: 'Pahari Miniature (Basohli Rasamanjari)',
    period: 'Rajput & Regional Painting',
    periodId: 'period-6',
    date: 'c. 1660–1670 CE',
    location: 'Basohli, Jammu & Kashmir (Museum of Fine Arts, Boston)',
    region: 'North India',
    category: 'Painting',
    material: 'Opaque Watercolor & Iridescent Beetle Wings on Paper',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Basohli_painting_Krishna_and_Radha.jpg/800px-Basohli_painting_Krishna_and_Radha.jpg',
    shortDescription: 'A bold, intensely expressive Himalayan hill painting featuring fiery monochrome backgrounds and iridescent emerald beetle wing fragments.',
    historicalContext: 'Pahari painting flourished in small Himalayan kingdoms. The Basohli school is famous for its vibrant primary colors, large intense eyes, and innovative material additions.',
    significance: 'Pioneered an emotionally raw, romantic folk-court aesthetic distinct from the formal realism of Mughal courts.',
    funFact: 'Artists cut and glued real emerald-green shiny iridescent elytra (wing covers) of jewel beetles onto paper to depict royal jewelry!'
  },
  {
    id: 'tanjore-painting',
    name: 'Tanjore Gold Leaf Icon of Yashoda & Krishna',
    period: 'Rajput & Regional Painting',
    periodId: 'period-6',
    date: 'c. 1800 CE',
    location: 'Thanjavur, Tamil Nadu',
    region: 'South India',
    category: 'Painting',
    material: '22k Gold Leaf, Gemstones & Gesso on Teak Wood Board',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tanjore_painting_Krishna.jpg/800px-Tanjore_painting_Krishna.jpg',
    shortDescription: 'A rich classical South Indian devotional painting embellished with 22-karat gold foil and embedded glass beads.',
    historicalContext: 'Developed under Maratha patronage in Thanjavur. Artists pasted canvas onto wooden boards, applied relief gesso work, decorated it with gold foil and semi-precious stones, and painted rounded divine figures with bright gesso highlights.',
    significance: 'Created glowing sacred icons meant to illuminate dark inner sanctums of South Indian homes and shrines.',
    funFact: 'Authentic Tanjore paintings never fade because the pure gold leaf overlay resists oxidation and humidity over centuries.'
  },
  {
    id: 'madhubani-kohbar',
    name: 'Madhubani / Mithila Kohbar Artwork',
    period: 'Rajput & Regional Painting',
    periodId: 'period-6',
    date: 'Traditional (16th C. – Present)',
    location: 'Mithila Region, Bihar',
    region: 'East India',
    category: 'Painting',
    material: 'Natural Botanical Pigments on Handmade Paper / Mud Wall',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Madhubani_painting.jpg/800px-Madhubani_painting.jpg',
    shortDescription: 'Intricate folk ritual painting created using bamboo twigs, fingers, and natural dyes featuring fish, lotus, and divine couples.',
    historicalContext: 'Practiced exclusively by women of the Mithila region to paint wedding chamber walls (Kohbar Ghar). Motifs symbolize fertility, cosmic blessing, and prosperity.',
    significance: 'A vibrant matriarchal art tradition that transitioned from domestic mud walls to global acclaim on paper and textiles.',
    funFact: 'Traditional artists extract red dye from sandalwood/madder, black from lamp soot, yellow from turmeric, and blue from indigo.'
  },

  // --- PERIOD 7: Colonial & Company Art (1750 - 1947) ---
  {
    id: 'company-school-botanical',
    name: 'Company School Indian Flora & Fauna Study',
    period: 'Colonial & Company Art',
    periodId: 'period-7',
    date: 'c. 1780–1810 CE',
    location: 'Calcutta / Lucknow (Victoria & Albert Museum, London)',
    region: 'East India',
    category: 'Painting',
    material: 'Watercolor & Ink on Whatman Paper',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Company_School_Bird.jpg/800px-Company_School_Bird.jpg',
    shortDescription: 'A meticulously detailed natural history watercolor created by an Indian master painter commissioned by British East India officers.',
    historicalContext: 'As East India Company officials settled in India, patronage shifted from royal courts to British patrons like Lord Impey and Marquis Wellesley who hired local artists to document Indian wildlife, monuments, and occupations.',
    significance: 'Fused Indian miniature painters\' microscopic brush technique with European botanical realism and scientific perspective.',
    funFact: 'Master artists like Shaikh Zain-al-Din painted exotic birds feather-by-feather using fine squirrel-hair brushes.'
  },
  {
    id: 'raja-ravi-varma-shakuntala',
    name: 'Shakuntala Looking Back for Dushyanta',
    period: 'Colonial & Company Art',
    periodId: 'period-7',
    date: '1898 CE',
    location: 'Travancore (Sri Chitra Art Gallery, Thiruvananthapuram)',
    region: 'South India',
    category: 'Painting',
    material: 'Oil on Canvas',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Shakuntala_by_Raja_Ravi_Varma.jpg/800px-Shakuntala_by_Raja_Ravi_Varma.jpg',
    shortDescription: 'Raja Ravi Varma\'s masterwork depicting Shakuntala pretending to remove a thorn from her foot while searching for her lover.',
    historicalContext: 'Raja Ravi Varma of Kerala mastered European oil painting techniques and applied them to classical Sanskrit literature, Mahabharata, and Ramayana epics.',
    significance: 'Democratized Indian art by setting up India\'s first oleograph printing press in 1894, making high art accessible to millions of Indian homes.',
    funFact: 'His depictions of Hindu deities like Lakshmi and Saraswati defined modern India\'s visual imagery of gods to this day.'
  },
  {
    id: 'bharat-mata-tagore',
    name: 'Bharat Mata by Abanindranath Tagore',
    period: 'Colonial & Company Art',
    periodId: 'period-7',
    date: '1905 CE',
    location: 'Calcutta (Rabindra Bharati Society, Kolkata)',
    region: 'East India',
    category: 'Painting',
    material: 'Japanese Wash Technique & Watercolor on Paper',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bharat_Mata_by_Abanindranath_Tagore.jpg/800px-Bharat_Mata_by_Abanindranath_Tagore.jpg',
    shortDescription: 'An iconic nationalist painting depicting Mother India as a four-armed ascetic saffron-clad goddess holding food, cloth, manuscript, and beads.',
    historicalContext: 'Painted during the Swadeshi movement and Anti-Partition of Bengal protests by Abanindranath Tagore, founder of the Bengal School of Art.',
    significance: 'Rejected Western oil realism in favor of indigenous Indian motifs and Japanese wash techniques to forge an anti-colonial artistic identity.',
    funFact: 'Renowned spiritual leader Sister Nivedita hailed the painting as "the first masterpiece of nationalist Indian art."'
  },

  // --- PERIOD 8: Modern & Contemporary India (1947 - Present) ---
  {
    id: 'mf-husain-horses',
    name: 'Passage of Time / Horses by M. F. Husain',
    period: 'Modern & Contemporary India',
    periodId: 'period-8',
    date: 'c. 1965–1975',
    location: 'Mumbai (Private Collection / DAG Gallery)',
    region: 'West India',
    category: 'Painting',
    material: 'Oil & Acrylic on Canvas',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Modern_Indian_Art_Abstract.jpg/800px-Modern_Indian_Art_Abstract.jpg',
    shortDescription: 'A energetic modern masterwork featuring galloping horses depicted with sharp cubist lines and bold impasto colors.',
    historicalContext: 'M.F. Husain was a founding member of the Progressive Artists\' Group in Bombay (1947). Inspired by Chinese calligraphy, Gupta bronzes, and European Cubism, he created his signature galloping horse motif.',
    significance: 'Symbolized the dynamic, unstoppable spirit and raw energy of post-independence modernizing India.',
    funFact: 'Husain started his career painting giant Bollywood billboard posters on rooftops across Bombay for a few rupees a day.'
  },
  {
    id: 'amrita-shergil-three-girls',
    name: 'Three Girls by Amrita Sher-Gil',
    period: 'Modern & Contemporary India',
    periodId: 'period-8',
    date: '1935 CE',
    location: 'Shimla (National Gallery of Modern Art, New Delhi)',
    region: 'North India',
    category: 'Painting',
    material: 'Oil on Canvas',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Three_Girls_Amrita_Sher-Gil.jpg/800px-Three_Girls_Amrita_Sher-Gil.jpg',
    shortDescription: 'A poignant modernist portrait depicting three silent young Indian women draped in earthy saris facing an uncertain future.',
    historicalContext: 'Painted shortly after pioneer artist Amrita Sher-Gil returned to India from Paris. She blended Post-Impressionist oil style with sympathy for rural Indian women.',
    significance: 'Won the Gold Medal at the Bombay Art Society in 1937, marking the dawn of modern feminist artistic consciousness in India.',
    funFact: 'Considered India\'s "Frida Kahlo," Sher-Gil was declared a National Treasure artist by the Government of India.'
  },
  {
    id: 'sh-raza-bindu',
    name: 'Bindu (The Sacred Center) by S. H. Raza',
    period: 'Modern & Contemporary India',
    periodId: 'period-8',
    date: '1980–1990 CE',
    location: 'Paris / Mumbai (NGMA, New Delhi)',
    region: 'Central / West India',
    category: 'Painting',
    material: 'Acrylic on Canvas',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Geometric_Abstract_Artwork_Bindu.jpg/800px-Geometric_Abstract_Artwork_Bindu.jpg',
    shortDescription: 'A powerful geometric abstract masterpiece focused on a central dark orb symbolizing the origin of creation and cosmos.',
    historicalContext: 'S.H. Raza spent decades in Paris before rediscovering Indian Tantric concepts, Yantras, and spiritual geometry centered on the "Bindu" (seed/dot).',
    significance: 'Pioneered Neo-Tantric abstraction, proving that Indian philosophical concepts could lead global modern art innovation.',
    funFact: 'Raza recalled his primary school teacher drawing a dot on the wall to help him focus his restless mind, inspiring his lifetime artistic motif.'
  },
  {
    id: 'digital-contemporary-installation',
    name: 'Contemporary Indian Digital & Kinetic Art',
    period: 'Modern & Contemporary India',
    periodId: 'period-8',
    date: '2010 – Present',
    location: 'Kochi-Muziris Biennale, Kerala',
    region: 'South India',
    category: 'Architecture',
    material: 'Light Projection, Interactive Sensors & Digital Media',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Kochi-Muziris_Biennale_Installation.jpg/800px-Kochi-Muziris_Biennale_Installation.jpg',
    shortDescription: 'An immersive digital light installation re-imagining 5,000 years of Indian motifs through interactive projection mapping.',
    historicalContext: 'Presented at Asia\'s largest contemporary art festival, the Kochi-Muziris Biennale in Kerala. Contemporary Indian artists blend heritage motifs with digital technology.',
    significance: 'Bridges ancient craft heritage with futuristic virtual interactivity for global audiences in the 21st century.',
    funFact: 'The Kochi-Muziris Biennale is held inside historic spice warehouses along Kerala\'s ancient trade coastline.'
  }
];

export const FACTS = [
  {
    id: 1,
    title: '5,000 Years of Bronze Casting',
    text: 'Indian lost-wax bronze casting (Cire Perdue) has an unbroken tradition from the 4,500-year-old Indus Valley Dancing Girl to today\'s Chola bronze master artisans in Swamimalai, Tamil Nadu.',
    category: 'Technique',
    era: 'Indus Valley to Present'
  },
  {
    id: 2,
    title: 'The National Emblem\'s Royal Roots',
    text: 'The official Emblem of Independent India—the four lions standing back-to-back—was sculpted in 250 BCE under Emperor Ashoka. The 24-spoked wheel at its base graces India\'s flag.',
    category: 'Iconography',
    era: 'Mauryan Era'
  },
  {
    id: 3,
    title: 'Mirror Sunlight inside Ajanta Caves',
    text: 'Ancient painters created the vibrant Ajanta cave murals in pitch darkness by reflecting natural sunlight into deep rock chambers using polished bronze and silver mirrors.',
    category: 'Innovation',
    era: 'Gupta Era'
  },
  {
    id: 4,
    title: '80-Ton Summit Capstone',
    text: 'The granite capstone atop the 216-foot Brihadeeswarar temple tower weighs 80 tons and was hauled up to the peak using a 4-mile-long inclined earthen ramp over a thousand years ago.',
    category: 'Engineering',
    era: 'Medieval Temple Era'
  },
  {
    id: 5,
    title: 'Beetle-Wing Emerald Jewels',
    text: '17th-century Himalayan hill artists from the Basohli school glued tiny metallic emerald-green wing covers of real jewel beetles onto paper to depict glowing royal jewelry in miniatures.',
    category: 'Materials',
    era: 'Rajput & Regional Era'
  },
  {
    id: 6,
    title: 'Democratizing Sacred Imagery',
    text: 'Pioneer painter Raja Ravi Varma established India\'s first chromolithographic printing press in 1894, allowing millions of families to bring art print framed calendar icons into their homes.',
    category: 'Cultural Shift',
    era: 'Colonial Era'
  }
];

export const MAP_LOCATIONS = [
  {
    id: 'loc-1',
    name: 'Mohenjo-daro',
    state: 'Sindh (Indus Valley)',
    period: 'Indus Valley Civilization (2500–1900 BCE)',
    coords: { x: 18, y: 35 },
    artworks: ['Dancing Girl', 'Priest-King Sculpture', 'Pashupati Seal'],
    description: 'Ancient Indus urban metropolis famous for grid planning, advanced drainage, lost-wax bronzes, and steatite seals.'
  },
  {
    id: 'loc-2',
    name: 'Sanchi',
    state: 'Madhya Pradesh',
    period: 'Mauryan & Early Buddhist (3rd C. BCE)',
    coords: { x: 42, y: 49 },
    artworks: ['Great Stupa', 'Carved Torana Gateways', 'Ashokan Pillar Fragments'],
    description: 'Sacred Buddhist hilltop sanctuary preserving ancient India\'s oldest surviving stone stupa and narrative stone reliefs.'
  },
  {
    id: 'loc-3',
    name: 'Ajanta & Ellora',
    state: 'Maharashtra',
    period: 'Gupta & Rashtrakuta (2nd C. BCE – 10th C. CE)',
    coords: { x: 36, y: 62 },
    artworks: ['Padmapani Bodhisattva Fresco', 'Kailash Rock-cut Temple'],
    description: 'World Heritage rock-cut cave complex preserving classical Buddhist murals and monolithic granite rock carvings.'
  },
  {
    id: 'loc-4',
    name: 'Khajuraho',
    state: 'Madhya Pradesh',
    period: 'Medieval Temple Art (1000 CE)',
    coords: { x: 50, y: 44 },
    artworks: ['Kandariya Mahadeva Temple', 'Apsara Celestial Reliefs'],
    description: 'Chandela Dynasty temple complex world-renowned for soaring Nagara architecture and expressive sculptural friezes.'
  },
  {
    id: 'loc-5',
    name: 'Thanjavur',
    state: 'Tamil Nadu',
    period: 'Chola Dynasty (1000–1100 CE)',
    coords: { x: 42, y: 86 },
    artworks: ['Chola Nataraja Bronzes', 'Brihadeeswarar Temple', 'Tanjore Gold Paintings'],
    description: 'Imperial Chola capital celebrated for monumental granite vimanas, lost-wax bronze casting, and gold-leaf sacred icons.'
  },
  {
    id: 'loc-6',
    name: 'Konark',
    state: 'Odisha',
    period: 'Medieval Temple Art (1250 CE)',
    coords: { x: 65, y: 56 },
    artworks: ['Sun Temple Chariot Wheel', 'Surya Stone Sculptures'],
    description: '13th-century architectural masterpiece designed as a colossal stone chariot of the Sun God with 12 sundial wheels.'
  },
  {
    id: 'loc-7',
    name: 'Agra & Fatehpur Sikri',
    state: 'Uttar Pradesh',
    period: 'Indo-Islamic & Mughal (1550–1650 CE)',
    coords: { x: 42, y: 35 },
    artworks: ['Taj Mahal Pietra Dura', 'Panch Mahal Pavilion', 'Mughal Miniatures'],
    description: 'Imperial Mughal capital home to translucent white marble inlay work and red sandstone palace architecture.'
  },
  {
    id: 'loc-8',
    name: 'Jaipur & Kishangarh',
    state: 'Rajasthan',
    period: 'Rajput & Regional Painting (1700–1800 CE)',
    coords: { x: 32, y: 38 },
    artworks: ['Bani Thani Painting', 'Rajasthani Court Miniatures'],
    description: 'Royal Rajput court studios known for lyrical portraiture, poetic Ragamala paintings, and vibrant natural pigments.'
  },
  {
    id: 'loc-9',
    name: 'Kolkata (Calcutta)',
    state: 'West Bengal',
    period: 'Colonial & Bengal School (1800–1950 CE)',
    coords: { x: 74, y: 48 },
    artworks: ['Company School Watercolors', 'Bharat Mata by Tagore'],
    description: 'Cultural hub of the Bengal Renaissance, birth site of anti-colonial nationalist art movements and Company School studies.'
  },
  {
    id: 'loc-10',
    name: 'Sarnath',
    state: 'Uttar Pradesh',
    period: 'Mauryan & Gupta Eras (250 BCE – 500 CE)',
    coords: { x: 58, y: 38 },
    artworks: ['Lion Capital of Ashoka', 'Sarnath Preaching Buddha'],
    description: 'Sacred deer park site of Buddha\'s first sermon, home to the Ashokan Lion Capital and classic Gupta Buddha statues.'
  }
];
