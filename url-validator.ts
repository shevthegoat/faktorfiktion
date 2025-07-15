export const urlPatterns = {
  youtube: /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/,
  instagram: /^(https?:\/\/)?(www\.)?instagram\.com\/.+/,
  twitter: /^(https?:\/\/)?(www\.)?(twitter\.com|x\.com)\/.+/,
  tiktok: /^(https?:\/\/)?(www\.)?tiktok\.com\/.+/,
  facebook: /^(https?:\/\/)?(www\.)?facebook\.com\/.+/
};

export function validateUrl(url: string): boolean {
  return Object.values(urlPatterns).some(pattern => pattern.test(url));
}

export function detectPlatform(url: string): string | null {
  for (const [platform, pattern] of Object.entries(urlPatterns)) {
    if (pattern.test(url)) {
      return platform;
    }
  }
  return null;
}

export function getPlatformName(platform: string): string {
  const platformNames: Record<string, string> = {
    youtube: 'YouTube',
    instagram: 'Instagram',
    twitter: 'Twitter/X',
    tiktok: 'TikTok',
    facebook: 'Facebook'
  };
  return platformNames[platform] || platform;
}
