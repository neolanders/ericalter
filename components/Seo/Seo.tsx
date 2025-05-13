'use client';

import React from 'react';

type OpenGraphType = 'article' | 'website' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other';

interface SeoProps {
  seo: {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
    ogType?: OpenGraphType;
  };
}

export default function Seo({ seo }: SeoProps) {
  React.useEffect(() => {
    document.title = seo.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seo.description);
    }
  }, [seo.title, seo.description]);

  return null;
} 