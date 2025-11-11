const CONTENT_BASE_PATH = '/content';

/**
 * Get image path from content folder
 * @param cityFolder - City folder name (e.g., 'agra', 'lucknow')
 * @param subfolder - Subfolder name (e.g., 'dishes', 'places to visit')
 * @param imageName - Image file name
 * @returns Full path to image
 */
export function getContentImage(
  cityFolder: string,
  subfolder: string,
  imageName: string
): string {
  return `${CONTENT_BASE_PATH}/${cityFolder}/${subfolder}/${imageName}`;
}

/**
 * Get multiple images from a content folder
 * @param cityFolder - City folder name
 * @param subfolder - Subfolder name
 * @param imageNames - Array of image file names
 * @returns Array of full paths to images
 */
export function getContentImages(
  cityFolder: string,
  subfolder: string,
  imageNames: string[]
): string[] {
  return imageNames.map(name => getContentImage(cityFolder, subfolder, name));
}

/**
 * Content folder structure mapping
 */
export const CONTENT_FOLDERS = {
  // Purvanchal cities
  ayodhya: {
    root: 'images of purvanchal/ayodhya',
    subfolders: ['dishes', 'places to visit', 'hidden gems', 'historical places', 'stay']
  },
  varanasi: {
    root: 'images of purvanchal/Varanasi',
    subfolders: ['dishes', 'places to visit', 'hidden gems', 'historical places', 'stay']
  },
  prayagraj: {
    root: 'images of purvanchal/Prayagraj',
    subfolders: ['dishes', 'places to visit', 'hidden gems', 'historical places', 'stay']
  },
  gorakhpur: {
    root: 'images of purvanchal/Gorakhpur',
    subfolders: ['dishes', 'places to visit', 'hidden gems', 'historical places', 'stay']
  },
  mirzapur: {
    root: 'images of purvanchal/Mirzapur',
    subfolders: ['dishes', 'places to visit', 'hidden gems', 'historical places', 'stay']
  },
  azamgarh: {
    root: 'images of purvanchal/Azamgarh',
    subfolders: ['dishes', 'places to visit', 'hidden gems', 'historical places', 'stay']
  },
  ballia: {
    root: 'images of purvanchal/Ballia',
    subfolders: ['dishes', 'places to visit', 'hidden gems', 'historical places', 'stay']
  },
  deoria: {
    root: 'images of purvanchal/Deoria',
    subfolders: ['dishes', 'places to visit', 'hidden gems', 'historical places', 'stay']
  },
  ghazipur: {
    root: 'images of up food/ghazipur',
    subfolders: ['dishes', 'places to visit', 'hidden gems', 'historical places', 'stay']
  },
  
  // Central/Western UP cities
  lucknow: {
    root: 'lucknow',
    subfolders: ['famous dishes', 'places to visit', 'hidden gems', 'historical places', 'stay']
  },
  agra: {
    root: 'agra',
    subfolders: ['dishes', 'places to visit', 'hidden gems', 'historical places', 'staying places']
  },
  mathuraVrindavan: {
    root: 'mathura-vrindavan',
    subfolders: ['dishess', 'places to visit', 'hidden gems', 'historical places', 'ashram']
  },
  
  // Bundelkhand cities
  chitrakoot: {
    root: 'chitrakoot',
    subfolders: ['dishes', 'places to visit', 'hidden gems', 'historical places', 'stay']
  },
  jhansi: {
    root: 'images of up food/jhansi',
    subfolders: ['dishes', 'places to visit', 'hidden gems', 'historical places', 'stay']
  },
  
  // Terai cities
  fatehpurSikri: {
    root: 'fatepur sikri',
    subfolders: ['dishes', 'places to visit', 'hidden gems', 'historical places', 'stay']
  },
  
  // Food/dishes only cities
  aligarh: {
    root: 'images of up food/aligarh',
    subfolders: ['dishes']
  },
  bareilly: {
    root: 'images of up food/Bareilly',
    subfolders: ['dishes']
  },
  bijnor: {
    root: 'images of up food/bijnor',
    subfolders: ['dishes']
  },
  hathras: {
    root: 'images of up food/hathras',
    subfolders: ['dishes']
  },
  meerut: {
    root: 'images of up food/meerut',
    subfolders: ['dishes']
  },
  moradabad: {
    root: 'images of up food/moradabad',
    subfolders: ['dishes']
  },
  muzaffarnagar: {
    root: 'images of up food/muzzafarnagar',
    subfolders: ['dishes']
  },
  rampur: {
    root: 'images of up food/rampur',
    subfolders: ['dishes']
  },
  saharanpur: {
    root: 'images of up food/saharanpur',
    subfolders: ['dishes']
  }
} as const;

/**
 * Check if image exists in content folder
 * This is a client-side helper - actual checking happens at runtime
 */
export function useContentImage(path: string, fallbackUrl: string): string {
  
  if (path && path.startsWith('/content')) {
    return path;
  }
  return fallbackUrl;
}

/**
 * Get all images from a city's subfolder
 * Returns array of image paths based on common naming patterns
 */
export function getCityImages(
  cityKey: keyof typeof CONTENT_FOLDERS,
  subfolder: string
): string[] {
  const cityConfig = CONTENT_FOLDERS[cityKey];
  if (!cityConfig) return [];
  
  const basePath = `${CONTENT_BASE_PATH}/${cityConfig.root}/${subfolder}`;
  return [basePath]; 
}
