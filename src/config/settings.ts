export interface SiteSettings {
  siteName: string
  siteDescription: string
  primaryColor: string
  secondaryColor: string
  accentColor: string
  backgroundColor: string
  textColor: string
}

export const siteSettings: SiteSettings = {
  siteName: 'NINEの代码space',
  siteDescription: 'Pixel Retro Personal Website',
  primaryColor: '#D92626',
  secondaryColor: '#F2B705',
  accentColor: '#0583F2',
  backgroundColor: '#1a1a2e',
  textColor: '#FFFFFF'
}

export const theme = {
  dark: {
    primary: '#D92626',
    secondary: '#F2B705',
    accent: '#0583F2',
    background: '#1a1a2e',
    surface: '#16213e',
    text: '#FFFFFF',
    textSecondary: '#A0A0A0',
    border: '#FFFFFF'
  },
  light: {
    primary: '#D92626',
    secondary: '#F2B705',
    accent: '#0583F2',
    background: '#F5F5F5',
    surface: '#FFFFFF',
    text: '#000000',
    textSecondary: '#666666',
    border: '#000000'
  }
}