var attributeDescriptionList = [ "BCNSHP", "BOYSHP", "BUISHP", "CAT_TS",
		"CATACH", "CATAIR", "CATBRG", "CATBUA", "CATCAM", "CATCAN", "CATCBL",
		"CATCHP", "CATCOA", "CATCON", "CATCOV", "CATCRN", "CATCTR", "CATDAM",
		"CATDIS", "CATDOC", "CATDPG", "CATFIF", "CATFNC", "CATFOG", "CATFOR",
		"CATFRY", "CATGAT", "CATHAF", "CATHLK", "CATICE", "CATINB", "CATLAM",
		"CATLIT", "CATLMK", "CATLND", "CATMFA", "CATMOR", "CATMPA", "CATNAV",
		"CATOBS", "CATOFP", "CATOLB", "CATPIL", "CATPIP", "CATPLE", "CATPRA",
		"CATPYL", "CATQUA", "CATRAS", "CATREA", "CATROD", "CATROS", "CATRSC",
		"CATRTB", "CATRUN", "CATSCF", "CATSEA", "CATSIL", "CATSIT", "CATSIW",
		"CATSLC", "CATSLO", "CATSPM", "CATTRK", "CATTSS", "CATVEG", "CATWAT",
		"CATWED", "CATWRK", "CATZOC", "COLOUR", "COLPAT", "CONDTN", "CONRAD",
		"CONVIS", "DUNITS", "EXCLIT", "EXPSOU", "FUNCTN", "HORDAT", "HUNITS",
		"JRSDTN", "LITCHR", "LITVIS", "MARSYS", "NATCON", "NATQUA", "NATSUR",
		"PRODCT", "PUNITS", "QUAPOS", "QUASOU", "RESTRN", "SIGGEN", "STATUS",
		"SURTYP", "T_ACWL", "T_MTOD", "TECSOU", "TOPSHP", "TRAFIC", "VERDAT",
		"WATLEV" ];

const BCNSHP = {
	1 : 'stake, pole, perch, post',
	2 : 'withy',
	3 : 'beacon tower',
	4 : 'lattice beacon',
	5 : 'pile beacon',
	6 : 'cairn',
	7 : 'buoyant beacon'
}

const BOYSHP = {
	1 : 'conical (nun, ogival)',
	2 : 'can (cylindrical)',
	3 : 'spherical',
	4 : 'pillar',
	5 : 'spar (spindle)',
	6 : 'barrel (tun)',
	7 : 'super-buoy',
	8 : 'ice buoy'
}

const BUISHP = {
	1 : '{no specific shape}',
	2 : '{tower}',
	3 : '{spire}',
	4 : '{cupola (dome) }',
	5 : 'high-rise buildinga',
	6 : 'pyramida',
	7 : 'cylindrical',
	8 : 'spherical',
	9 : 'cubic',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CAT_TS = {
	1 : 'flood stream',
	2 : 'ebb stream',
	3 : 'other tidal flow',
	701 : 'Unknown',
	703 : 'Not Applicable'
}

const CATACH = {
	1 : 'unrestricted anchorage',
	2 : 'deep water anchorage',
	3 : 'tanker anchorage',
	4 : 'explosives anchorage',
	5 : 'quarantine anchorage',
	6 : 'sea-plane anchorage',
	7 : 'small craft anchorage',
	8 : 'small craft mooring area',
	9 : 'anchorage for periods up to 24 hours',
	10 : 'anchorage for a limited period of time',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATAIR = {
	1 : 'military airplane airport',
	2 : 'civil airplane airport',
	3 : 'military heliport',
	4 : 'civil heliport',
	5 : 'glider airfield',
	6 : 'small planes airfield',
	7 : '{helicopter platform}',
	8 : 'emergency airfield',
	501 : 'Search and Rescue',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATBRG = {
	1 : 'fixed bridge',
	2 : 'opening bridge',
	3 : 'swing bridge',
	4 : 'lifting bridge',
	5 : 'bascule bridge',
	6 : 'pontoon bridge',
	7 : 'draw bridge',
	8 : 'transporter bridge',
	9 : 'footbridge',
	10 : 'viaduct',
	11 : 'aqueduct',
	12 : 'suspension bridge',
	13 : 'bridge arch',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATBUA = {
	1 : 'urban area',
	2 : 'settlement',
	3 : 'village',
	4 : 'town',
	5 : 'city',
	6 : 'holiday village',
	501 : 'native settlement',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATCAM = {
	1 : 'north cardinal mark',
	2 : 'east cardinal mark',
	3 : 'south cardinal mark',
	4 : 'west cardinal mark',
	701 : 'Unknown',
	703 : 'Not Applicable'
}

const CATCAN = {
	1 : 'transportation',
	2 : 'drainage',
	3 : 'irrigation'
}

const CATCBL = {
	1 : 'power line',
	2 : '{telephone/telegraph}',
	3 : 'transmission line',
	4 : 'telephone',
	5 : 'telegraph',
	6 : 'mooring cable/chain',
	501 : 'data transmission',
	502 : 'fibre optic',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATCHP = {
	1 : 'customa',
	501 : 'RV Location',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATCOA = {
	1 : 'steep coast',
	2 : 'flat coast',
	3 : 'sandy shore',
	4 : 'stony shore',
	5 : 'shingly shore',
	6 : 'glacier (seaward end)',
	7 : 'mangrove',
	8 : 'marshy shore',
	9 : 'coral reef',
	10 : 'ice coast',
	11 : 'shelly shore',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATCON = {
	1 : 'aerial cableway (telepheric)',
	2 : 'belt conveyor',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATCOV = {
	1 : 'coverage available',
	2 : 'no coverage available'
}

const CATCRN = {
	1 : '{crane without specific construction}',
	2 : 'container crane/gantry',
	3 : 'sheerleg',
	4 : 'travelling crane',
	5 : 'A-frame'
}

const CATCTR = {
	1 : 'triangulation point',
	2 : 'observation spot',
	3 : 'fixed point',
	4 : 'benchmark',
	5 : 'boundary mark',
	6 : 'horizontal control, main station',
	7 : 'horizontal control, secondary station',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATDAM = {
	1 : 'weir',
	2 : 'dam',
	3 : 'flood barrage'
}

const CATDIS = {
	1 : 'distance mark not physically installed',
	2 : 'visible mark: pole',
	3 : 'visible mark: board',
	4 : 'visible mark: undefined shape'
}

const CATDOC = {
	1 : 'tidal',
	2 : 'non tidal (wet dock)'
}

const CATDPG = {
	1 : '{general dumping ground}',
	2 : 'chemical waste dumping ground',
	3 : 'nuclear waste dumping ground',
	4 : 'explosives dumping ground',
	5 : 'spoil ground',
	6 : 'vessel dumping ground',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATFIF = {
	1 : 'fishing stake',
	2 : 'fish trap',
	3 : 'fish weir',
	4 : 'tunny net',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATFNC = {
	1 : 'fence',
	2 : '{muir}',
	3 : 'hedge',
	4 : 'wall'
}

const CATFOG = {
	1 : 'explosive',
	2 : 'diaphone',
	3 : 'siren',
	4 : 'nautophone',
	5 : 'reed',
	6 : 'tyfon',
	7 : 'bell',
	8 : 'whistle',
	9 : 'gong',
	10 : 'horn'
}

const CATFOR = {
	1 : 'explosive',
	2 : 'diaphone',
	3 : 'siren',
	4 : 'nautophone',
	5 : 'reed',
	6 : 'tyfon',
	7 : 'bell',
	8 : 'whistle',
	9 : 'gong',
	10 : 'horn'
}

const CATFRY = {
	1 : '`free-moving` ferry',
	2 : 'cable ferry',
	3 : 'ice ferry',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATGAT = {
	1 : '{gate in general}',
	2 : 'flood barrage gate',
	3 : 'caisson',
	4 : 'lock gate',
	5 : 'dyke gate',
	6 : 'sluice'
}

const CATHAF = {
	1 : 'RoRo-terminal',
	2 : '{timber yard}',
	3 : 'ferry terminal',
	4 : 'fishing harbour',
	5 : 'yacht harbour/marina',
	6 : 'naval base',
	7 : 'tanker terminal',
	8 : 'passenger terminal',
	9 : 'shipyard',
	10 : 'container terminal',
	11 : 'bulk terminal',
	12 : 'syncrolift',
	13 : 'straddle carrier',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATHLK = {
	1 : 'floating restaurant',
	2 : 'historic ship',
	3 : 'museum',
	4 : 'accommodation',
	5 : 'floating breakwater'
}

const CATICE = {
	1 : 'fast ice',
	2 : '{sea ice}',
	3 : '{growler area}',
	4 : '{pancake ice}',
	5 : 'glacier',
	6 : '{ice peak}',
	7 : '{pack ice}',
	8 : 'polar icese',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATINB = {
	1 : 'catenary anchor leg mooring (CALM)',
	2 : 'single buoy mooring (SBM or SPM)',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATLAM = {
	1 : 'port-hand lateral mark',
	2 : 'starboard-hand lateral mark',
	3 : 'preferred channel to starboard lateral mark',
	4 : 'preferred channel to port lateral mark',
	701 : 'Unknown',
	703 : 'Not Applicable'
}

const CATLIT = {
	1 : 'directional function',
	2 : '{rear/upper light}',
	3 : '{front/lower light}',
	4 : 'leading light',
	5 : 'aero light',
	6 : 'air obstruction light',
	7 : 'fog detector light',
	8 : 'flood light',
	9 : 'strip light',
	10 : 'subsidiary light',
	11 : 'spotlight',
	12 : 'front',
	13 : 'rear',
	14 : 'lower',
	15 : 'upper',
	16 : 'moire effect',
	17 : 'emergency',
	18 : 'bearing light',
	19 : 'horizontally disposed',
	20 : 'vertically disposed',
	501 : 'Marine Light',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATLMK = {
	1 : 'cairn',
	2 : 'cemetery',
	3 : 'chimney',
	4 : 'dish aerial',
	5 : 'flagstaff (flagpole)',
	6 : 'flare stack',
	7 : 'mast',
	8 : 'wind sock',
	9 : 'monument',
	10 : 'column (pillar)',
	11 : 'memorial plaque',
	12 : 'obelisk',
	13 : 'statue',
	14 : 'cross',
	15 : 'dome',
	16 : 'radar scanner',
	17 : 'tower',
	18 : 'windmill',
	19 : 'windmotor',
	20 : 'spire/minaret',
	21 : 'large rock or boulder on land',
	22 : 'rock pinnacle',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATLND = {
	1 : 'fen',
	2 : 'marsh',
	3 : 'moor/bog',
	4 : 'heathland',
	5 : 'mountain range',
	6 : 'lowlands',
	7 : 'canyon lands',
	8 : 'paddy field',
	9 : 'agricultural land',
	10 : 'savanna/grassland',
	11 : 'parkland',
	12 : 'swamp',
	13 : 'landslide',
	14 : 'lava flow',
	15 : 'salt pan',
	16 : 'moraine',
	17 : 'crater',
	18 : 'cave',
	19 : 'rock column or pinnacle',
	20 : 'cay',
	501 : 'beach',
	502 : 'backshore',
	503 : 'foreshore',
	504 : 'ice cliff',
	505 : 'snowfield / icefield',
	506 : 'tundra',
	507 : 'esker',
	508 : 'fault',
	509 : 'geothermal feature',
	510 : 'mountain pass',
	511 : 'rock strata / rock formation',
	512 : 'volcano',
	513 : 'cleared way / firebreak',
	514 : 'land sub',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATMFA = {
	1 : 'crustaceans',
	2 : 'oyster/mussels',
	3 : 'fish',
	4 : 'seaweed',
	5 : 'pearl culture farm',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATMOR = {
	1 : 'dolphin',
	2 : 'deviation dolphin',
	3 : 'bollard',
	4 : 'tie-up wall',
	5 : 'post or pile',
	6 : 'chain/wire/cable',
	7 : 'mooring buoy',
	501 : 'fast patrol boat waiting position',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATMPA = {
	1 : '{practice area in general}',
	2 : 'torpedo exercise area',
	3 : 'submarine exercise area',
	4 : 'firing danger area',
	5 : 'mine-laying practice area',
	6 : 'small arms firing range',
	501 : '(ACLANT) grid',
	502 : 'Surface Danger Area',
	503 : 'JMC Areas - JENOA grid',
	504 : 'practice and exercise area (surface fleet)',
	505 : 'stovepipe',
	506 : 'safe bottoming area',
	507 : 'submarine danger area',
	508 : 'testing and evaluation range',
	509 : 'range',
	510 : 'impact area',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATNAV = {
	1 : 'clearing line',
	2 : 'transit line',
	3 : 'leading line bearing a recommended track'
}

const CATOBS = {
	1 : 'snag/stump',
	2 : 'wellhead',
	3 : 'diffuser',
	4 : 'crib',
	5 : 'fish haven',
	6 : 'foul area',
	7 : 'foul ground',
	8 : 'ice boom',
	9 : 'ground tackle',
	10 : 'boom',
	11 : 'fishing net',
	501 : 'well protection structure',
	502 : 'subsea installation',
	503 : 'pipeline obstruction',
	504 : 'free standing conductor pipe',
	505 : 'manifold',
	506 : 'storage tank',
	507 : 'template',
	508 : 'pontoon',
	509 : 'sundry objects',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATOFP = {
	1 : 'oil derrick/rig',
	2 : 'production platform',
	3 : 'observation/research platform',
	4 : 'articulated loading platform (ALP)',
	5 : 'single anchor leg mooring (SALM)',
	6 : 'mooring tower',
	7 : 'artificial island',
	8 : 'floating production, storage and off-loading vessel (FPSO)',
	9 : 'accommodation platform',
	10 : 'navigation, communication and control buoy (NCCB)',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATOLB = {
	1 : 'oil retention (high pressure pipe)',
	2 : 'floating oil barrier'
}

const CATPIL = {
	1 : 'boarding by pilot-cruising vessel',
	2 : 'boarding by helicopter',
	3 : 'pilot comes out from shore'
}

const CATPIP = {
	1 : '{pipeline in general}',
	2 : 'outfall pipe',
	3 : 'intake pipe',
	4 : 'sewer',
	5 : 'bubbler system',
	6 : 'supply pipe',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATPLE = {
	1 : 'stake',
	2 : '{snag}',
	3 : 'post',
	4 : 'tripodal'
}

const CATPRA = {
	1 : 'quarry',
	2 : 'mine',
	3 : 'stockpile',
	4 : 'power station area',
	5 : 'refinery area',
	6 : 'timber yard',
	7 : 'factory area',
	8 : 'tank farm',
	9 : 'wind farm',
	10 : 'slag heap/spoil heap',
	501 : 'production area in general',
	502 : 'substation/transformer yard',
	504 : 'oil/gas facilities',
	505 : 'thermal power station',
	506 : 'salt evaporator',
	507 : 'pumping station',
	508 : 'oil/gas field',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATPYL = {
	1 : 'power transmission pylon/pole',
	2 : 'telephone/telegraphic pylon/pole',
	3 : 'arial cableway/sky pylon',
	4 : 'bridge pylon/tower',
	5 : 'bridge pier'
}

const CATQUA = {
	1 : 'data quality A',
	2 : 'data quality B',
	3 : 'data quality C',
	4 : 'data quality D',
	5 : 'data quality E',
	6 : 'quality not evaluated'
}

const CATRAS = {
	1 : 'radar surveillance station',
	2 : 'coast radar station',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATREA = {
	1 : 'offshore safety zone',
	2 : '{anchoring prohibition area}',
	3 : '{fishing prohibition area}',
	4 : 'nature reserve',
	5 : 'bird sanctuary',
	6 : 'game preserve',
	7 : 'seal sanctuary',
	8 : 'degaussing range',
	9 : 'military area',
	10 : 'historic wreck restricted area',
	11 : '{inshore traffic zone}',
	12 : 'navigational aid safety zone',
	13 : '{danger of stranding area}',
	14 : 'minefield',
	15 : '{diving prohibition area}',
	16 : '{area to be avoided}',
	17 : '{prohibited area}',
	18 : 'swimming area',
	19 : 'waiting area',
	20 : 'research area',
	21 : 'dredging area',
	22 : 'fish sanctuary',
	23 : 'ecological reserve',
	24 : 'no wake area',
	25 : 'swinging area',
	26 : 'water skiing area',
	27 : 'Environmentally Sensitive Sea Area (ESSA)',
	28 : 'Particularly Sensitive Sea Area (PSSA)',
	501 : 'Maritime notification area',
	502 : 'Mine danger area',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATROD = {
	1 : 'motorway',
	2 : 'major road',
	3 : 'minor road',
	4 : 'track/path',
	5 : 'major street',
	6 : 'minor street',
	7 : 'crossing',
	501 : 'interchange',
	502 : 'trail',
	503 : 'primary route',
	504 : 'secondary route',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATROS = {
	1 : 'circular (non-directional) marine or aero-marine radiobeacon',
	2 : 'directional radiobeacon',
	3 : 'rotating-pattern radiobeacon',
	4 : 'consol beacon',
	5 : 'radio direction-finding station',
	6 : 'coast radio station providing QTG service',
	7 : 'aeronautical radiobeacon',
	8 : 'Decca',
	9 : 'Loran C',
	10 : 'Differential GPS',
	11 : 'Toran',
	12 : 'Omega',
	13 : 'Syledis',
	14 : 'Chaika',
	501 : 'GSM',
	502 : 'MSI broadcast station',
	503 : 'Locator (LO)',
	504 : 'Distance Measuring Equipment (DME)',
	505 : 'Non-Directional Radio Beacon (NDB)',
	506 : 'Radar Responder Beacon (RACON)',
	507 : 'Radar Responder Beacon (RAMARK)',
	508 : 'VHF Omni Directional Radio Range (VOR)',
	509 : 'VHF Omni Directional (VORTAC)',
	510 : 'Tactical Air Navigational Equipment (TACAN)',
	511 : 'Localiser/Distance Measuring Equipment (LOC/DME)',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATRSC = {
	1 : 'rescue station with lifeboat',
	2 : 'rescue station with rocket',
	3 : '{rescue station with lifeboat and rocket}',
	4 : 'refuge for shipwrecked mariners',
	5 : 'refuge for intertidal area walkers',
	6 : 'lifeboat lying at a mooring',
	7 : 'aid radio station',
	8 : 'first aid equipment',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATRTB = {
	1 : 'ramark, radar beacon transmitting continuously',
	2 : 'racon, radar transponder beacon with morse identification',
	3 : 'leading racon/radar transponder beacon'
}

const CATRUN = {
	1 : 'aeroplane runway',
	2 : 'helicopter landing pad'
}

const CATSCF = {
	1 : 'visitors berth',
	2 : 'nautical club',
	3 : 'boat hoist',
	4 : 'sailmaker',
	5 : 'boatyard',
	6 : 'public inn',
	7 : 'restaurant',
	8 : 'chandler',
	9 : 'provisions',
	10 : 'doctor',
	11 : 'pharmacy',
	12 : 'water tap',
	13 : 'fuel station',
	14 : 'electricity',
	15 : 'bottled gas',
	16 : 'showers',
	17 : 'laundrette',
	18 : 'public toilets',
	19 : 'post box',
	20 : 'public telephone',
	21 : 'refuse bin',
	22 : 'car park',
	23 : 'parking for boats and trailers',
	24 : 'caravan site',
	25 : 'camping site',
	26 : 'sewage pump-out station',
	27 : 'emergency telephone',
	28 : 'landing/launching place for boats',
	29 : 'visitors mooring',
	30 : 'scrubbing berth',
	31 : 'picnic area',
	32 : 'mechanics workshop',
	33 : 'guard and/or security service'
}

const CATSEA = {
	1 : '{sea area in general}',
	2 : 'gat',
	3 : 'bank',
	4 : 'deep',
	5 : 'bay',
	6 : 'trench',
	7 : 'basin',
	8 : 'mud flats',
	9 : 'reef',
	10 : 'ledge',
	11 : 'canyon',
	12 : 'narrows',
	13 : 'shoal',
	14 : 'knoll',
	15 : 'ridge',
	16 : 'seamount',
	17 : 'pinnacle',
	18 : 'abyssal plain',
	19 : 'plateau',
	20 : 'spur',
	21 : 'shelf',
	22 : 'trough',
	23 : 'saddle',
	24 : 'abyssal lils',
	25 : 'apron',
	26 : 'archipelagic apron',
	27 : 'borderland',
	28 : 'continental margin',
	29 : 'continental rise',
	30 : 'escarpment',
	31 : 'fan',
	32 : 'fracture zone',
	33 : 'gap',
	34 : 'guyot',
	35 : 'hill',
	36 : 'hole',
	37 : 'levee',
	38 : 'median valley',
	39 : 'moat',
	40 : 'mountains',
	41 : 'peak',
	42 : 'province',
	43 : 'rise',
	44 : 'sea channel',
	45 : 'seamount-chain',
	46 : 'shelf-edge',
	47 : 'sill',
	48 : 'slope',
	49 : 'terrace',
	50 : 'valley',
	51 : 'canal',
	52 : 'lake',
	53 : 'river',
	54 : 'reach',
	57 : 'chute',
	58 : 'backwater or slough',
	59 : 'bend',
	501 : 'estuary',
	502 : 'nearshore',
	503 : 'beach area',
	504 : 'beach sector',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATSIL = {
	1 : 'silo in general',
	2 : 'tank in general',
	3 : 'grain elevator',
	4 : 'water tower'
}

const CATSIT = {
	1 : 'port control',
	2 : 'port entry and departure',
	3 : 'International Port Traffic',
	4 : 'berthing',
	5 : 'dock',
	6 : 'lock',
	7 : 'flood barrage',
	8 : 'bridge passage',
	9 : 'dredging',
	10 : 'traffic control light'
}

const CATSIW = {
	1 : 'danger',
	2 : 'maritime obstruction',
	3 : 'cable',
	4 : 'military practice',
	5 : 'distress',
	6 : 'weather',
	7 : 'storm',
	8 : 'ice',
	9 : 'time',
	10 : 'tide',
	11 : 'tidal stream',
	12 : 'tide gauge',
	13 : 'tide scale',
	14 : 'diving',
	15 : 'water level gauge',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATSLC = {
	1 : 'breakwater',
	2 : 'groyne (groin)',
	3 : 'mole',
	4 : 'pier (jetty)',
	5 : 'promenade pier',
	6 : 'wharf (quay)',
	7 : 'training wall',
	8 : 'rip rap',
	9 : 'revetment',
	10 : 'sea wall',
	11 : 'landing stairs',
	12 : 'ramp',
	13 : 'slipway',
	14 : 'fender',
	15 : 'solid face wharf',
	16 : 'open face wharf',
	17 : 'log ramp',
	501 : 'artifical obstruction',
	502 : 'natural obstruction',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATSLO = {
	1 : 'cutting',
	2 : 'embankment',
	3 : 'dune',
	4 : 'hill',
	5 : 'pingo',
	6 : 'cliff',
	7 : 'scree'
}

const CATSPM = {
	1 : 'firing danger area mark',
	2 : 'target mark',
	3 : 'marker ship mark',
	4 : 'degaussing range mark',
	5 : 'barge mark',
	6 : 'cable mark (sign)',
	7 : 'spoil ground mark',
	8 : 'outfall mark',
	9 : 'ODAS (Ocean-Data-Acquisition-System)',
	10 : 'recording mark',
	11 : 'seaplane anchorage mark',
	12 : 'recreation zone mark',
	13 : 'private mark',
	14 : 'mooring mark',
	15 : 'LANBY (Large Automatic Navigational Buoy)',
	16 : 'leading mark',
	17 : 'measured distance mark',
	18 : 'notice mark',
	19 : 'TSS mark (Traffic Separation Scheme)',
	20 : 'anchoring prohibited mark',
	21 : 'berthing prohibited mark',
	22 : 'overtaking prohibited mark',
	23 : 'two-way traffic prohibited mark',
	24 : '`vessels must not generate waves` mark',
	25 : 'speed limit mark',
	26 : 'stop mark',
	27 : 'general warning mark',
	28 : '`sound ships siren` mark',
	29 : 'restricted vertical clearance mark',
	30 : 'maximum vessels draught mark',
	31 : 'restricted horizontal clearance mark',
	32 : 'strong current warning mark',
	33 : 'berthing permitted mark',
	34 : 'overhead power cable mark',
	35 : '`channel edge gradient` mark',
	36 : 'telephone mark',
	37 : 'ferry crossing mark',
	38 : 'marine traffic lights',
	39 : 'pipeline mark (sign)',
	40 : 'anchorage mark',
	41 : 'clearing mark',
	42 : 'control mark',
	43 : 'diving mark',
	44 : 'refuge beacon',
	45 : 'foul ground mark',
	46 : 'yachting mark',
	47 : 'heliport mark',
	48 : 'GPS mark',
	49 : 'seaplane landing mark',
	50 : 'entry prohibited mark',
	51 : 'work in progress mark',
	52 : 'mark with unknown purpose',
	53 : 'wellhead mark',
	54 : 'channel separation mark',
	55 : 'marine farm mark',
	56 : 'artificial reef mark',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATTRK = {
	1 : 'based on a system of fixed marks',
	2 : 'not based on a system of fixed marks',
	701 : 'Unknown',
	703 : 'Not Applicable'
}

const CATTSS = {
	1 : 'IMO - adopted',
	2 : 'not IMO - adopted',
	701 : 'Unknown',
	703 : 'Not Applicable'
}

const CATVEG = {
	1 : 'grass',
	2 : '{paddy field}',
	3 : 'bush',
	4 : 'deciduous wood',
	5 : 'coniferous wood',
	6 : 'wood in general (incl mixed wood)',
	7 : 'mangroves',
	8 : '{park}',
	9 : '{parkland}',
	10 : 'mixed crops',
	11 : 'reed',
	12 : 'moss',
	13 : 'tree in general',
	14 : 'evergreen tree',
	15 : 'coniferous tree',
	16 : 'palm tree',
	17 : 'nipa palm tree',
	18 : 'casurina tree',
	19 : 'eucalypt tree',
	20 : 'deciduous tree',
	21 : 'mangrove tree',
	22 : 'filao tree',
	501 : 'nursery',
	502 : 'orchard / plantation',
	503 : 'vineyards',
	504 : 'oasis',
	505 : 'bamboo/cane',
	506 : 'fallow land'
}

const CATWAT = {
	1 : 'breakers',
	2 : 'eddies',
	3 : 'overfalls',
	4 : 'tide rips',
	5 : 'bombora',
	6 : 'under water turbulence'
}

const CATWED = {
	1 : 'kelp',
	2 : 'sea weed',
	3 : 'sea grass',
	4 : 'sargasso',
	501 : 'Posidonia',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATWRK = {
	1 : 'non-dangerous wreck',
	2 : 'dangerous wreck',
	3 : 'distributed remains of wreck',
	4 : 'wreck showing mast/masts',
	5 : 'wreck showing any portion of hull or superstructure',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CATZOC = {
	1 : 'zone of confidence A1',
	2 : 'zone of confidence A2',
	3 : 'zone of confidence B',
	4 : 'zone of confidence C',
	5 : 'zone of confidence D',
	6 : 'zone of confidence U (data not assessed)'
}

const COLOUR = {
	1 : 'white',
	2 : 'black',
	3 : 'red',
	4 : 'green',
	5 : 'blue',
	6 : 'yellow',
	7 : 'grey',
	8 : 'brown',
	9 : 'amber',
	10 : 'violet',
	11 : 'orange',
	12 : 'magenta',
	13 : 'pink',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const COLPAT = {
	1 : 'horizontal bands from top to bottom',
	2 : 'vertical stripes',
	3 : 'diagonal stripes',
	4 : 'squared',
	5 : 'stripes (direction unknown)',
	6 : 'border stripe',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CONDTN = {
	1 : 'under construction',
	2 : 'ruined',
	3 : 'under reclamation',
	4 : 'wingless',
	5 : 'planned construction',
	501 : 'operational: completed, undamaged and working normally',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const CONRAD = {
	1 : 'radar conspicuous',
	2 : 'not radar conspicuous',
	3 : 'radar conspicuous (has radar reflector)'
}

const CONVIS = {
	1 : 'visually conspicuous',
	2 : 'not visually conspicuous'
}

const DUNITS = {
	1 : 'metres',
	2 : 'fathoms and feet',
	3 : 'feet',
	4 : 'fathoms and fractions',
	501 : 'fathoms',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const EXCLIT = {
	1 : 'light shown without change of character',
	2 : 'daytime light',
	3 : 'fog light',
	4 : 'night light',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const EXPSOU = {
	1 : 'within the range of depth of surrounding depth area',
	2 : 'shoaler than range of depth of surrounding depth area',
	3 : 'deeper than range of depth of surrounding depth area',
	701 : 'Unknown',
	703 : 'Not Applicable'
}

const FUNCTN = {
	1 : '{no function/service of major interest}',
	2 : 'harbour-master office',
	3 : 'custom office',
	4 : 'health office',
	5 : 'hospital',
	6 : 'post office',
	7 : 'hotel',
	8 : 'railway station',
	9 : 'police station',
	10 : 'water-police station',
	11 : 'pilot office',
	12 : 'pilot look-out',
	13 : 'bank office',
	14 : 'headquarters for district control',
	15 : 'transit shed/warehouse',
	16 : 'factory',
	17 : 'power station',
	18 : 'administrative',
	19 : 'educational facility',
	20 : 'church',
	21 : 'chapel',
	22 : 'temple',
	23 : 'pagoda',
	24 : 'shinto-shrine',
	25 : 'buddhist temple',
	26 : 'mosque',
	27 : 'marabout',
	28 : 'lookout',
	29 : 'communication',
	30 : 'television',
	31 : 'radio',
	32 : 'radar',
	33 : 'light support',
	34 : 'microwave',
	35 : 'cooling',
	36 : 'observation',
	37 : 'timeball',
	38 : 'clock',
	39 : 'control',
	40 : 'airship mooring',
	41 : 'stadium',
	42 : 'bus station',
	501 : 'water treatment plant',
	502 : 'station (miscellanious)',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const HORDAT = {
	1 : 'WGS 72',
	2 : 'WGS 84',
	3 : 'European 1950 (European Datum)',
	4 : 'Potsdam datum',
	5 : 'Adindan',
	6 : 'Afgooye',
	7 : 'Ain el Abd 1970',
	8 : 'Anna 1 Astro 1965',
	9 : 'Antigua Island Astro 1943',
	10 : 'Arc 1950',
	11 : 'Arc 1960',
	12 : 'Ascension Island 1958',
	13 : 'Astro beacon `E` 1945',
	14 : 'Astro DOS 71/4',
	15 : 'Astro Tern Island FERIG) 1961',
	16 : 'Astronomical Station 1952',
	17 : 'Australian Geodetic 1966',
	18 : 'Australian Geodetic 1984',
	19 : 'Ayabelle Lighthouse',
	20 : 'Bellevue (IGN)',
	21 : 'Bermuda 1957',
	22 : 'Bissau',
	23 : 'Bogota Observatory',
	24 : 'Bukit Rimpah',
	25 : 'Camp Area Astro',
	26 : 'Campo Inchauspe',
	27 : 'Canton Astro 1966',
	28 : 'Cape',
	29 : 'Cape Canaveral',
	30 : 'Carthage',
	31 : 'Chatam Island Astro 1971',
	32 : 'Chua Astro',
	33 : 'Corrego Alegre',
	34 : 'Dabola',
	35 : 'Djakarta (Batavia)',
	36 : 'DOS 1968',
	37 : 'Easter Island 1967',
	38 : 'European 1979',
	39 : 'Fort Thomas 1955',
	40 : 'Gan 1970',
	41 : 'Geodetic Datum 1949',
	42 : 'Graciosa Base SW 1948',
	43 : 'Guam 1963',
	44 : 'Gunung Segara',
	45 : 'GUX 1 Astro',
	46 : 'Herat North',
	47 : 'Hjorsey 1955',
	48 : 'Hong Kong 1963',
	49 : 'Hu-Tzu_Shan',
	50 : 'Indian',
	51 : 'Indian 1954',
	52 : 'Indian 1975',
	53 : 'Ireland 1965',
	54 : 'ISTS 061 Astro 1968',
	55 : 'ISTS 073 Astro 1969',
	56 : 'Johnston Island 1961',
	57 : 'Kandawala',
	58 : 'Kerguelen Island 1949',
	59 : 'Kertau 1948',
	60 : 'Kusaie Astro 1951',
	61 : 'L. C. 5 Astro 1961',
	62 : 'Leigon',
	63 : 'Liberia 1964',
	64 : 'Luzon',
	65 : 'Mahe 1971',
	66 : 'Massawa',
	67 : 'Merchich',
	68 : 'Midway Astro 1961',
	69 : 'Minna',
	70 : 'Montserrat Island Astro 1958',
	71 : 'M Poraloko',
	72 : 'Nahrwan',
	73 : 'Naparima, BWI',
	74 : 'NAD 1927 (North American 1927)',
	75 : 'NAD 1983 (North American 1983)',
	76 : 'Observatorio Meteorologico 1939',
	77 : 'Old Egyptian 1907',
	78 : 'Old Hawaiian',
	79 : 'Oman',
	80 : 'Ordnance Surrey of Great Britain 1936',
	81 : 'Pico de las Nieves',
	82 : 'Pitcairn Astro 1967',
	83 : 'Point 58',
	84 : 'Pointe Noire 1948',
	85 : 'Porto Santo 1936',
	86 : 'Provisional South American 1956',
	87 : 'Provisional South Chilean 1963 (also known as Hito XVIII 1963)',
	88 : 'Puerto Rico',
	89 : 'Quatar national',
	90 : 'Qornoq',
	91 : 'Reunion',
	92 : 'Rome 1940',
	93 : 'Santo (DOS) 1965',
	94 : 'Sao Braz',
	95 : 'Sapper Hill 1943',
	96 : 'Scharzeck',
	97 : 'Selvagem Grande 1938',
	98 : 'South American 1969',
	99 : 'South Asia',
	100 : 'Tananarive Observatory 1925',
	101 : 'Timbalai 1948',
	102 : 'Tokyo',
	103 : 'Tristan Astro 1968',
	104 : 'Viti Levu 1916',
	105 : 'Wake-Eniwetok 1960',
	106 : 'Wake Island Astro 1952',
	107 : 'Yacare',
	108 : 'Zanderij',
	109 : 'American Samoa 1962',
	110 : 'Deception Island',
	111 : 'Indian 1960',
	112 : 'Indonesian 1974',
	113 : 'North Sahara 1959',
	114 : 'Pulkovo 1942',
	115 : 'S-42 (Pulkovo 1942)',
	116 : 'S-JYSK',
	117 : 'Voirol 1950',
	118 : 'Average Terrestial System 1977',
	119 : 'Compensation Geodesique du Quebec 1977',
	120 : 'Finnish (KKJ)',
	121 : 'Ordnance Survey of Ireland',
	122 : 'Revised Kertau',
	123 : 'Revised Nahrwan',
	124 : 'GGRS 76 (Greece)',
	125 : 'Nouvelle Triangulation de France',
	126 : 'RT 90 (Sweden)',
	127 : 'Geocentric Datum of Australia (FDA)',
	128 : 'BJZ54 (A954 Beijing Coordinates)',
	129 : 'Modified BJZ54',
	130 : 'GDZ80',
	131 : 'Local datum'
}

const HUNITS = {
	1 : 'metres',
	2 : 'feet',
	501 : 'international nautical mile',
	502 : 'cable',
	503 : 'yard',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const JRSDTN = {
	1 : 'international',
	2 : 'national',
	3 : 'national sub-division',
	4 : 'provincial',
	5 : 'municipal',
	6 : 'federal',
	501 : 'NATO',
	701 : 'Undetermined or Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const LITCHR = {
	1 : 'fixed',
	2 : 'flashing',
	3 : 'long-flashing',
	4 : 'quick-flashing',
	5 : 'very quick-flashing',
	6 : 'ultra quick-flashing',
	7 : 'isophased',
	8 : 'occulting',
	9 : 'interrupted quick-flashing',
	10 : 'interrupted very quick-flashing',
	11 : 'interrupted ultra quick-flashing',
	12 : 'morse',
	13 : 'fixed/flash',
	14 : 'flash/long-flash',
	15 : 'occulting/flash',
	16 : 'fixed/long-flash',
	17 : 'occulting alternating',
	18 : 'long-flash alternating',
	19 : 'flash alternating',
	20 : 'group alternating',
	21 : '{2 fixed (vertical)}',
	22 : '{2 fixed (horizontal)}',
	23 : '{3 fixed (vertical)}',
	24 : '{3 fixed (horizontal)}',
	25 : 'quick-flash plus long-flash',
	26 : 'very quick-flash plus long-flash',
	27 : 'ultra quick-flash plus long-flas',
	28 : 'alternating',
	29 : 'fixed and alternating flashing',
	701 : 'Undetermined or Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const LITVIS = {
	1 : 'high intensity',
	2 : 'low intensity',
	3 : 'faint',
	4 : 'intensified',
	5 : 'unintensified',
	6 : 'visibility deliberately restricted',
	7 : 'obscured',
	8 : 'partially obscured',
	701 : 'Undetermined or Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const MARSYS = {
	1 : 'IALA A',
	2 : 'IALA B',
	3 : 'modified U.S.',
	4 : 'old U.S.',
	5 : 'U.S. intracoastal waterway',
	6 : 'U.S. uniform state',
	7 : 'U.S. western rivers',
	8 : 'SIGNI',
	9 : 'no system',
	10 : 'other system',
	701 : 'Unknown',
	703 : 'Not Applicable'
}

const NATCON = {
	1 : 'masonry',
	2 : 'concreted',
	3 : 'loose boulders',
	4 : 'hard surfaced',
	5 : 'unsurfaced',
	6 : 'wooden',
	7 : 'metal',
	8 : 'glass reinforced plastic (GRP)',
	9 : 'painted',
	501 : 'loose / unpaved',
	502 : 'loose / light',
	503 : 'hard /paved',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const NATQUA = {
	0 : '-',
	1 : 'fine',
	2 : 'medium',
	3 : 'coarse',
	4 : 'broken',
	5 : 'sticky',
	6 : 'soft',
	7 : 'stiff',
	8 : 'volcanic',
	9 : 'calcareous',
	10 : 'hard',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const NATSUR = {
	0 : '-',
	1 : 'mud',
	2 : 'clay',
	3 : 'silt/ooze',
	4 : 'sand',
	5 : 'stone',
	6 : 'gravel',
	7 : 'pebbles',
	8 : 'cobbles',
	9 : 'rock',
	10 : '{marsh}',
	11 : 'lava',
	12 : '{snow}',
	13 : '{ice}',
	14 : 'coral',
	15 : '{swamp}',
	16 : '{bog/moor}',
	17 : 'shells',
	18 : 'boulder',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const PRODCT = {
	1 : 'oil',
	2 : 'gas',
	3 : 'water',
	4 : 'stone',
	5 : 'coal',
	6 : 'ore',
	7 : 'chemicals',
	8 : 'drinking water',
	9 : 'milk',
	10 : 'bauxite',
	11 : 'coke',
	12 : 'iron ingots',
	13 : 'salt',
	14 : 'sand',
	15 : 'timber',
	16 : 'sawdust/wood chips',
	17 : 'scrap metal',
	18 : 'liquified natural gas (LNG)',
	19 : 'liquified petroleum gas (LPG)',
	20 : 'wine',
	21 : 'cement',
	22 : 'grain',
	501 : 'oil: crude and refined',
	502 : 'solid fuel',
	503 : 'flammable liquids and gases',
	504 : 'chemicals',
	505 : 'ferrous elements and ores: unrefined and refined',
	506 : 'non-ferrous elements and ores: unrefined and refined',
	507 : 'metal: concentrate and products',
	508 : 'minerals',
	509 : 'fertiliser: natural and products',
	510 : 'wood: unprocessed and products',
	511 : 'rubber',
	512 : 'clay products',
	513 : 'natural fibres and materials in general: unprocessed and products',
	514 : 'foodstuffs: solid',
	515 : 'foodstuffs: liquid',
	516 : 'foodstuffs: preserved',
	517 : 'general and mixed goods',
	518 : 'stone',
	519 : 'granular or powdery material',
	520 : 'machinery and mechanical parts',
	521 : 'construction materials',
	522 : 'vehicles',
	523 : 'aircraft',
	524 : 'railway: stock and construction materials',
	525 : 'portable buildings',
	526 : 'containers',
	527 : 'electronics',
	528 : 'plastic',
	529 : 'paint',
	530 : 'refuse and waste',
	531 : 'radioactive material',
	532 : 'armament',
	533 : 'personnel',
	534 : 'animals (land & sea) and birds',
	535 : 'fish',
	536 : 'shellfish and crustaceans',
	537 : 'ballast',
	540 : 'diesel oil',
	541 : 'petrol/gasoline',
	542 : 'passengers',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const PUNITS = {
	1 : 'metres',
	2 : 'degrees of arc',
	3 : 'millimetres',
	4 : 'feet',
	5 : 'cables'
}

const QUAPOS = {
	1 : 'surveyed',
	2 : 'unsurveyed',
	3 : 'inadequately surveyed',
	4 : 'approximate',
	5 : 'doubtful',
	6 : 'unreliable',
	7 : 'reported (not surveyed)',
	8 : 'reported (not confirmed)',
	9 : 'estimated',
	10 : 'precisely known',
	11 : 'calculated',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const QUASOU = {
	1 : 'depth known',
	2 : 'depth unknown',
	3 : 'doubtful sounding',
	4 : 'unreliable sounding',
	5 : 'no bottom found at value shown',
	6 : 'least depth known',
	7 : 'least depth unknown, safe clearance at value shown',
	8 : 'value reported (not surveyed)',
	9 : 'value reported (not confirmed)',
	10 : 'maintained depth',
	11 : 'not regularly maintained',
	703 : 'Not Applicable',
	704 : 'Other'
}

const RESTRN = {
	1 : 'anchoring prohibited',
	2 : 'anchoring restricted',
	3 : 'fishing prohibited',
	4 : 'fishing restricted',
	5 : 'trawling prohibited',
	6 : 'trawling restricted',
	7 : 'entry prohibited',
	8 : 'entry restricted',
	9 : 'dredging prohibited',
	10 : 'dredging restricted',
	11 : 'diving prohibited',
	12 : 'diving restricted',
	13 : 'no wake',
	14 : 'area to be avoided',
	15 : 'construction prohibited',
	16 : 'discharging prohibited',
	17 : 'discharging restricted',
	18 : 'industrial or mineral exploration/development prohibited',
	19 : 'industrial or mineral exploration/development restricted',
	20 : 'drilling prohibited',
	21 : 'drilling restricted',
	22 : 'removal of historical artifacts prohibited',
	23 : 'cargo transhipment (lightering) prohibited',
	24 : 'dragging prohibited',
	25 : 'stopping prohibited',
	26 : 'landing prohibited',
	27 : 'speed restricted',
	38 : 'use of spuds prohibited',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const SIGGEN = {
	1 : 'automatically',
	2 : 'by wave action',
	3 : 'by hand',
	4 : 'by wind',
	1 : 'cone, point up',
	2 : 'cone, point down',
	3 : 'sphere',
	4 : '2 spheres',
	5 : 'cylinder',
	6 : 'board',
	7 : 'x-shape (St Andrews cross)',
	8 : 'upright cross (St Georges cross)',
	9 : 'cube, point up',
	10 : '2 cones, point to point',
	11 : '2 cones, base to base',
	12 : 'rhombus (diamond)',
	13 : '2 cones (points upward)',
	14 : '2 cones (points downward)',
	15 : 'besom, point up (broom or perch)',
	16 : 'besom, point down (broom or perch)',
	17 : 'flag',
	18 : 'sphere over rhombus',
	19 : 'square',
	20 : 'rectangle, horizontal',
	21 : 'rectangle, vertical',
	22 : 'trapezoid, up',
	23 : 'trapezoid, down',
	24 : 'triangle, point up',
	25 : 'triangle, point down',
	26 : 'circle',
	27 : 'two upright crosses (one over the other)',
	28 : 'T-shape',
	29 : 'triangle pointing up over a circle',
	30 : 'upright cross over a circle',
	31 : 'rhombus over a circle',
	32 : 'circle over a triangle pointing up',
	33 : 'other shape (see INFORM)'
}

const STATUS = {
	1 : 'permanent',
	2 : 'occasional',
	3 : 'recommended',
	4 : 'disused',
	5 : 'periodic/intermittent',
	6 : 'reserved',
	7 : 'temporary',
	8 : 'private',
	9 : 'mandatory',
	10 : '{destroyed/ruined}',
	11 : 'extinguished',
	12 : 'illuminated',
	13 : 'historic',
	14 : 'public',
	15 : 'synchronized',
	16 : 'watched',
	17 : 'un-watched',
	18 : 'existence doubtful',
	501 : 'active/in use',
	502 : 'claimed',
	503 : 'practice and/or exercise purposes',
	504 : 'recognised',
	505 : 'dead',
	506 : 'lifted',
	507 : 'mass grave',
	508 : 'exploration',
	509 : 'production',
	510 : 'suspended',
	511 : 'injection',
	512 : 'unspecified',
	513 : 'disputed',
	514 : 'designated',
	515 : 'on request',
	516 : 'dormant',
	517 : 'proposed',
	518 : 'abandoned',
	519 : 'grey zone',
	520 : 'indeterminate',
	521 : 'multilateral',
	522 : 'rules for transit passage apply',
	523 : 'voluntary',
	701 : 'Unknown',
	702 : 'Multiple',
	703 : 'Not Applicable',
	704 : 'Other'
}

const SURTYP = {
	1 : 'reconnaissance/sketch survey',
	2 : 'controlled survey',
	3 : '{unsurveyed}',
	4 : 'examination survey',
	5 : 'passage survey',
	6 : 'remotely sensed',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const T_ACWL = {
	1 : 'better than 0.1 m and 10 minutes',
	2 : 'worse than 0.1 m or 10 minutes'
}

const T_MTOD = {
	1 : 'simplified harmonic method of tidal prediction',
	2 : 'full harmonic method of tidal prediction',
	3 : 'time and height difference non-harmonic method',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const TECSOU = {
	1 : 'found by echo-sounder',
	2 : 'found by side scan sonar',
	3 : 'found by multi-beam',
	4 : 'found by diver',
	5 : 'found by lead-line',
	6 : 'swept by wire-drag',
	7 : 'found by laser',
	8 : 'swept by vertical acoustic system',
	9 : 'found by electromagnetic sensor',
	10 : 'photogrammetry',
	11 : 'satellite imagery',
	12 : 'found by levelling',
	13 : 'swept by side-scan-sonar',
	14 : 'computer generated',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const TOPSHP = {
	1 : 'cone, point up',
	2 : 'cone, point down',
	3 : 'sphere',
	4 : '2 spheres',
	5 : 'cylinder',
	6 : 'board',
	7 : 'x-shape (St Andrews cross)',
	8 : 'upright cross (St Georges cross)',
	9 : 'cube, point up',
	10 : '2 cones, point to point',
	11 : '2 cones, base to base',
	12 : 'rhombus (diamond)',
	13 : '2 cones (points upward)',
	14 : '2 cones (points downward)',
	15 : 'besom, point up (broom or perch)',
	16 : 'besom, point down (broom or perch)',
	17 : 'flag',
	18 : 'sphere over rhombus',
	19 : 'square',
	20 : 'rectangle, horizontal',
	21 : 'rectangle, vertical',
	22 : 'trapezoid, up',
	23 : 'trapezoid, down',
	24 : 'triangle, point up',
	25 : 'triangle, point down',
	26 : 'circle',
	27 : 'two upright crosses (one over the other)',
	28 : 'T-shape',
	29 : 'triangle pointing up over a circle',
	30 : 'upright cross over a circle',
	31 : 'rhombus over a circle',
	32 : 'circle over a triangle pointing up',
	33 : 'other shape (see INFORM)'
}

const TRAFIC = {
	1 : 'inbound',
	2 : 'outbound',
	3 : 'one-way',
	4 : 'two-way',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const VERDAT = {
	0 : 'Vertical Datum is not applicable',
	1 : 'Mean Low Water Springs',
	2 : 'Mean Lower Low Water Springs',
	3 : 'Mean Sea Level',
	4 : 'Lowest Low Water',
	5 : 'Mean Low Water',
	6 : 'Lowest Low Water Springs',
	7 : 'Approximate Mean Low Water Springs',
	8 : 'Indian Spring Low Water',
	9 : 'Low Water Springs',
	10 : 'Approximate Lowest Astronomical Tide',
	11 : 'Nearly Lowest Low Water',
	12 : 'Mean Lower Low Water',
	13 : 'Low Water',
	14 : 'Approximate Mean Low Water',
	15 : 'Approximate Mean Lower Low Water',
	16 : 'Mean High Water',
	17 : 'Mean High Water Springs',
	18 : 'High Water',
	19 : 'Approximate Mean Sea Level',
	20 : 'High Water Springs',
	21 : 'Mean Higher High Water',
	22 : 'Equinoctial Spring Low Water',
	23 : 'Lowest Astronomical Tide',
	24 : 'Local Datum',
	25 : 'International Great Lakes Datum 1985',
	26 : 'Mean Water Level',
	27 : 'Lower Low Water Large Tide',
	28 : 'Higher High Water Large Tide',
	29 : 'Nearly Highest High Water',
	30 : 'Highest Astronomical Tide (HAT)',
	255 : 'Vertical Datum does not apply',
	501 : 'Mean Tide Level',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

const WATLEV = {
	1 : 'partly submerged at high water',
	2 : 'always dry',
	3 : 'always under water/submerged',
	4 : 'covers and uncovers',
	5 : 'awash',
	6 : 'subject to inundation or flooding',
	7 : 'floatin',
	701 : 'Unknown',
	703 : 'Not Applicable',
	704 : 'Other'
}

function convertToCamelCase(str) {
	return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
		return index == 0 ? word.toLowerCase() : word.toUpperCase();
	}).replace(/\s+/g, '');
}

function stripEndQuotes(s) {
	var t = s.length;
	if (s.charAt(0) == '"')
		s = s.substring(1, t--);
	if (s.charAt(--t) == '"')
		s = s.substring(0, t);
	return s;
}