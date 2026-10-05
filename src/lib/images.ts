import type { ImageMetadata } from 'astro';

type Mod = { default: ImageMetadata };

// Any photo dropped into these folders is picked up automatically (sorted by filename).
const nailFiles = import.meta.glob<Mod>('../assets/nails/*.{jpg,jpeg,png,webp,avif,svg,JPG,JPEG,PNG}', { eager: true });
const interiorFiles = import.meta.glob<Mod>('../assets/interior/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}', { eager: true });

const toList = (files: Record<string, Mod>) =>
  Object.entries(files)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, mod]) => ({
      src: mod.default,
      alt: path
        .split('/')
        .pop()!
        .replace(/\.[^.]+$/, '')
        .replace(/^\d+[-_ ]*/, '')
        .replace(/[-_]+/g, ' '),
    }));

export const nailImages = toList(nailFiles);
export const interiorImages = toList(interiorFiles);

// Single photos: src/assets/hero.* (hero arch) and src/assets/storefront.* (Visit section).
const heroFiles = import.meta.glob<Mod>('../assets/hero.{jpg,jpeg,png,webp,avif}', { eager: true });
const storefrontFiles = import.meta.glob<Mod>('../assets/storefront.{jpg,jpeg,png,webp,avif}', { eager: true });

export const heroImage = Object.values(heroFiles)[0]?.default;
export const storefrontImage = Object.values(storefrontFiles)[0]?.default;
