export const modules = [
  {
    icon: "☀",
    tag: "Tier-1 Storage",
    title: "Utility-Scale Solar Storage",
    code: "BESS-MOD-880",
    text: "Stores extra power from solar farms and sends it back when needed.",
  },
  {
    icon: "♧",
    tag: "Smart Technology",
    title: "AI-Orchestrated Microgrids",
    code: "VPP-AUTONOMY-V2",
    text: "Uses weather and power data to help manage local energy use.",
  },
  {
    icon: "◉",
    tag: "Carbon Records",
    title: "Dynamic Carbon Credit Verification",
    code: "REC-LEDGER-VERRA",
    text: "Keeps records of clean energy production and carbon savings.",
  },
];

export const facilities = [
  [
    "☀",
    "Atacama Solar Basin Alpha",
    "ID: CL-ATAC-01 // Solar Power",
    "628.4 MW",
    "1,486,888 MT CO₂e",
    "Gold Standard",
  ],
  [
    "♨",
    "Kattegat Offshore Array 2",
    "ID: DK-KAT-02 // Wind Power",
    "485.8 MW",
    "1,128,488 MT CO₂e",
    "Optimal Flow",
  ],
  [
    "☼",
    "Mojave Clean Energy Reservoir",
    "ID: US-MOJ-09 // Solar Storage",
    "318.8 MW",
    "895,388 MT CO₂e",
    "Gold Standard",
  ],
  [
    "♧",
    "Bavarian Forest Micro-Cluster",
    "ID: DE-BAY-04 // Hydro Power",
    "192.5 MW",
    "446,188 MT CO₂e",
    "Optimal Flow",
  ],
];

export const cases = [
  {
    label: "Case 01 // Wind Energy",
    title: "Nordic Offshore Wind Farm",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85",
    chip: "380kV HVAC Link",
    text: "Connects offshore wind turbines to the main grid and helps supply power.",
    metric: "$42.8M Annually",
    metricLabel: "Economic Impact",
    side: "Avoided Fuel Import",
    sideLabel: "Primary Interconnect",
  },
  {
    label: "Case 02 // Solar Energy",
    title: "SunBolt Megawatt Microgrid",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=85",
    chip: "12ms Response Time",
    text: "A local power system that helps hospitals and factories stay powered.",
    metric: "38% Load Deflection",
    metricLabel: "Peak Shaving",
    side: "Zero Power Sag",
    sideLabel: "Substation Switch",
  },
];