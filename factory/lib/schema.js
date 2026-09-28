// AI WIKI TOTAL — schema.org JSON-LD dùng chung
'use strict';
const { SITE } = require('../site.config');

// URL tuyệt đối: baseUrl đã chứa /total/ — bỏ tiền tố 'total/' của đường dẫn file nếu còn
function absUrl(p) {
  return SITE.baseUrl + String(p || '').replace(/^total\//, '').replace(/^\/+/, '').replace(/index\.html$/, '');
}

function jsonld(obj) {
  return `<script type="application/ld+json">\n${JSON.stringify(obj, null, 1)}\n</script>`;
}

function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.baseUrl,
    inLanguage: 'vi-VN',
    description: SITE.homeDescription,
    potentialAction: {
      '@type': 'SearchAction',
      target: SITE.baseUrl + 'tim-kiem/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}

function publisherSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.baseUrl,
    slogan: SITE.tagline,
  };
}

function breadcrumbSchema(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: absUrl(t.href),
    })),
  };
}

// Danh mục cha / hub: CollectionPage kèm ItemList con
function collectionSchema(o) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: o.name,
    description: o.description,
    url: absUrl(o.path),
    inLanguage: 'vi-VN',
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: SITE.baseUrl },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: (o.items || []).map((it, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: it.name,
        url: absUrl(it.path),
      })),
    },
  };
}

function articleSchema(a, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.metaDescription,
    inLanguage: 'vi-VN',
    datePublished: a.date,
    dateModified: a.updated || a.date,
    author: { '@type': 'Organization', name: SITE.name },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.baseUrl,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': absUrl(url) },
    about: (a.entities || []).map(e => ({ '@type': 'Thing', name: e })),
  };
}

module.exports = { absUrl, jsonld, websiteSchema, publisherSchema, breadcrumbSchema, collectionSchema, articleSchema };
