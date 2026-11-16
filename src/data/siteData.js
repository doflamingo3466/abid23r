
const defaultModule = {
  tag: "Tier-1 Storage",
  text: "Stores extra power from solar farms and sends it back when needed.",
};

export const modules = [
  {
    ...defaultModule,
    icon: "SUN",
    title: "Utility-Scale Solar Storage",
    code: "BESS-MOD-880",
  },
  {
    ...defaultModule,
    icon: "AI",
    tag: "Adaptive ML",
    title: "AI-Orchestrated Microgrids",
    code: "VPP-AUTONOMY-V2",
    text: "Uses weather and power data to help manage local energy use.",
  },
  {
    ...defaultModule,
    icon: "TICK",
    tag: "Immutable Proof",
    title: "Dynamic Carbon Credit Verification",
    code: "REC-LEDGER-VERRA",
    text: "Keeps records of clean energy production and carbon savings.",
  },
];

export const facilities = [
  [
    "Atacama Solar Basin Alpha",
    "ID: CL-ATAC-01 // Solar Power",
    "628.4 MW",
    "1,486,888 MT CO2e",
    "Gold Standard",
  ],
  [
    "Kattegat Offshore Array 2",
    "ID: DK-KAT-02 // Wind Power",
    "485.8 MW",
    "1,128,488 MT CO2e",
    "Optimal Flow",
  ],
  [
    "Mojave Clean Energy Reservoir",
    "ID: US-MOJ-09 // Solar Storage",
    "318.8 MW",
    "895,388 MT CO2e",
    "Gold Standard",
  ],
  [
    "Bavarian Forest Micro-Cluster",
    "ID: DE-BAY-04 // Hydro Power",
    "193 MW",
    "446,188 MT CO2e",
    "Optimal Flow",
  ],
];

export const cases = [
  {
    label: "Case 01 // Maritime Infrastructure",
    title: "Nordic Offshore Wind Farm",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEaLdhWC1wWqoufNBnBm1lJyvdoSGqhM7vPMdzymLcmA&s=10",
    chip: "380kV HVAC Link",
    text: "Connects offshore wind turbines to the main grid and helps supply power.",
    metric: "$42.8M Annually",
    metricLabel: "Economic Impact",
    side: "Avoided Fuel Import",
    sideLabel: "Primary Interconnect",
  },
  {
    label: "Case 02 // Desert Grid Shield",
    title: "SunBelt Megawatt Microgrid",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGe4bBiXxwKe19vghkuBIjNzyaCtScgkUBc8bzPbUTmw&s=10",
    chip: "12ms Response Time",
    text: "A local power system that helps hospitals and factories stay powered.",
    metric: "38% Load Deflection",
    metricLabel: "Peak Shaving",
    side: "Zero Power Sag",
    sideLabel: "Substation Switch",
  },
];
