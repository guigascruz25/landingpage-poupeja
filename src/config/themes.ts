// Sistema de temas para diferentes templates
export interface ThemeConfig {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
  heroGradient: string;
  buttonPrimary: string;
  buttonSecondary: string;
  cardBackground: string;
  borderColor: string;
}

export const themes: Record<string, ThemeConfig> = {
  template1: {
    name: "Laranja Vibrante",
    primary: "#ff9100", // orange-500
    secondary: "#f57c00", // orange-600
    accent: "#ffb74d", // orange-300
    background: "#ffffff",
    foreground: "#1f2937",
    muted: "#fff8e1",
    heroGradient: "from-orange-500 via-orange-600 to-amber-600",
    buttonPrimary: "bg-orange-500 hover:bg-orange-600",
    buttonSecondary: "bg-white text-orange-600 border-orange-400 hover:bg-orange-50",
    cardBackground: "bg-white",
    borderColor: "border-orange-300"
  },
  template2: {
    name: "Emerald Luxury",
    primary: "#10b981", // emerald-500 - vibrant
    secondary: "#059669", // emerald-600 - rich
    accent: "#34d399", // emerald-400 - bright
    background: "#ffffff",
    foreground: "#111827",
    muted: "#ecfdf5",
    heroGradient: "from-emerald-500 via-emerald-600 to-teal-600",
    buttonPrimary: "bg-emerald-500 hover:bg-emerald-600",
    buttonSecondary: "bg-white text-emerald-600 border-emerald-400 hover:bg-emerald-50",
    cardBackground: "bg-white",
    borderColor: "border-emerald-300"
  },
  template3: {
    name: "Roxo Elegante",
    primary: "#7c3aed", // violet-600
    secondary: "#6d28d9", // violet-700
    accent: "#8b5cf6", // violet-500
    background: "#ffffff",
    foreground: "#1f2937",
    muted: "#faf5ff",
    heroGradient: "from-violet-600 via-violet-700 to-violet-800",
    buttonPrimary: "bg-violet-600 hover:bg-violet-700",
    buttonSecondary: "bg-white text-violet-600 border-violet-600 hover:bg-violet-50",
    cardBackground: "bg-white",
    borderColor: "border-violet-200"
  },
  template4: {
    name: "Black Matte",
    primary: "#333333", // Primary
    secondary: "#000000", // Background
    accent: "#666666", // Accent
    background: "#000000", // Background
    foreground: "#FFFFFF", // Text
    muted: "#1a1a1a", // Dark muted
    heroGradient: "from-gray-900 via-black to-gray-800",
    buttonPrimary: "bg-gray-800 hover:bg-gray-700 text-white border border-gray-600",
    buttonSecondary: "bg-transparent text-white border border-gray-600 hover:bg-gray-800",
    cardBackground: "bg-gray-900",
    borderColor: "border-gray-700"
  }
};

export const getTheme = (templateVariant: string): ThemeConfig => {
  return themes[templateVariant] || themes.template1;
};
