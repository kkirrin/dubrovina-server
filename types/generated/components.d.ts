import type { Schema, Struct } from '@strapi/strapi';

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SpeczializacziyaInformacziyaPoStranichkeKartochkaSpeczilizaczii
  extends Struct.ComponentSchema {
  collectionName: 'components_speczializacziya_informacziya_po_stranichke_kartochka_speczilizaczii';
  info: {
    description: '';
    displayName: '\u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043A\u0435 \u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0441\u043F\u0435\u0446\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u0438';
    icon: 'cup';
  };
  attributes: {
    about_the_disease: Schema.Attribute.Blocks;
    desc_page: Schema.Attribute.Text;
    how_is_the_treatment_going: Schema.Attribute.Blocks;
    meta_description: Schema.Attribute.String;
    meta_title: Schema.Attribute.String;
    title_page: Schema.Attribute.String;
  };
}

export interface SpeczializacziyaSpeczializacziya
  extends Struct.ComponentSchema {
  collectionName: 'components_speczializacziya_speczializacziya';
  info: {
    description: '';
    displayName: '\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F';
    icon: 'brush';
  };
  attributes: {
    img_s: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Page: Schema.Attribute.Component<
      'speczializacziya.informacziya-po-stranichke-kartochka-speczilizaczii',
      false
    >;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SpeczializacziyaSpeczializacziyaCzenaKonkretnaya
  extends Struct.ComponentSchema {
  collectionName: 'components_speczializacziya_speczializacziya_czena_konkretnaya';
  info: {
    displayName: '\u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0446\u0435\u043D\u0430 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u0430\u044F';
    icon: 'folder';
  };
  attributes: {
    Name: Schema.Attribute.String;
    Price: Schema.Attribute.String;
  };
}

export interface SpeczializacziyaSpeczializacziyaKategoriya
  extends Struct.ComponentSchema {
  collectionName: 'components_speczializacziya_speczializacziya_kategoriya';
  info: {
    displayName: '\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F';
    icon: 'cup';
  };
  attributes: {
    name: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    speczializacziya_sub: Schema.Attribute.Component<
      'speczializacziya.speczializacziya-podkategoriya',
      true
    >;
  };
}

export interface SpeczializacziyaSpeczializacziyaOsobennosti
  extends Struct.ComponentSchema {
  collectionName: 'components_speczializacziya_speczializacziya_osobennosti';
  info: {
    description: '';
    displayName: '\u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438';
    icon: 'chartCircle';
  };
  attributes: {
    description: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    speczializacziya_feauture_single: Schema.Attribute.Component<
      'speczializacziya.speczializacziya-osobennosti-konkretnaya',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface SpeczializacziyaSpeczializacziyaOsobennostiKonkretnaya
  extends Struct.ComponentSchema {
  collectionName: 'components_speczializacziya_speczializacziya_osobennosti_konkretnaya';
  info: {
    description: '';
    displayName: ' \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u0430\u044F';
    icon: 'book';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    Name: Schema.Attribute.String;
  };
}

export interface SpeczializacziyaSpeczializacziyaPodkategoriya
  extends Struct.ComponentSchema {
  collectionName: 'components_speczializacziya_speczializacziya_podkategoriya';
  info: {
    description: '';
    displayName: '\u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F - \u043F\u043E\u0434\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F';
  };
  attributes: {
    name: Schema.Attribute.String;
    speczializacziya_sub_page: Schema.Attribute.Component<
      'speczializacziya.informacziya-po-stranichke-kartochka-speczilizaczii',
      false
    >;
  };
}

export interface SpeczializacziyaSpeczializacziyaPodkategoriyaCzena
  extends Struct.ComponentSchema {
  collectionName: 'components_speczializacziya_speczializacziya_podkategoriya_czena';
  info: {
    description: '';
    displayName: '\u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u043E\u0434\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F  \u0446\u0435\u043D\u0430';
  };
  attributes: {
    slug: Schema.Attribute.String;
    speczializacziya_sub_price_item: Schema.Attribute.Component<
      'speczializacziya.speczializacziya-czena-konkretnaya',
      true
    >;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'speczializacziya.informacziya-po-stranichke-kartochka-speczilizaczii': SpeczializacziyaInformacziyaPoStranichkeKartochkaSpeczilizaczii;
      'speczializacziya.speczializacziya': SpeczializacziyaSpeczializacziya;
      'speczializacziya.speczializacziya-czena-konkretnaya': SpeczializacziyaSpeczializacziyaCzenaKonkretnaya;
      'speczializacziya.speczializacziya-kategoriya': SpeczializacziyaSpeczializacziyaKategoriya;
      'speczializacziya.speczializacziya-osobennosti': SpeczializacziyaSpeczializacziyaOsobennosti;
      'speczializacziya.speczializacziya-osobennosti-konkretnaya': SpeczializacziyaSpeczializacziyaOsobennostiKonkretnaya;
      'speczializacziya.speczializacziya-podkategoriya': SpeczializacziyaSpeczializacziyaPodkategoriya;
      'speczializacziya.speczializacziya-podkategoriya-czena': SpeczializacziyaSpeczializacziyaPodkategoriyaCzena;
    }
  }
}
