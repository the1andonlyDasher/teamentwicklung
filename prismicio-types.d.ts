// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type FooterDocumentDataSlicesSlice = FooterLinkSlice;

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Footertext field in *Footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Slice Zone field in *Footer*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<FooterDocumentDataSlicesSlice>;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<FooterDocumentData>, "footer", Lang>;

type HomePageDocumentDataSlicesSlice =
  | ModalSlice
  | ContentSectionSlice
  | LinkSlice
  | KontakformularSlice
  | HeroSectionSlice;

/**
 * Content for Home Page documents
 */
interface HomePageDocumentData {
  /**
   * Slice Zone field in *Home Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomePageDocumentDataSlicesSlice> /**
   * Meta Description field in *Home Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home Page document from Prismic
 *
 * - **API ID**: `home_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomePageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<HomePageDocumentData>,
    "home_page",
    Lang
  >;

type NavigationsleisteDocumentDataSlicesSlice = LinkSlice;

/**
 * Content for Navigationsleiste documents
 */
interface NavigationsleisteDocumentData {
  /**
   * Logo field in *Navigationsleiste*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navigationsleiste.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Navigationsleiste*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: navigationsleiste.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<NavigationsleisteDocumentDataSlicesSlice>;
}

/**
 * Navigationsleiste document from Prismic
 *
 * - **API ID**: `navigationsleiste`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationsleisteDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationsleisteDocumentData>,
    "navigationsleiste",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | KontakformularSlice
  | LinkSlice
  | HeroSectionSlice
  | FullpageTextSlice
  | ContentSectionSlice;

/**
 * Content for Standardseite (Impressum, AGB, ...) documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Standardseite (Impressum, AGB, ...)*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *Standardseite (Impressum, AGB, ...)*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Standardseite (Impressum, AGB, ...)*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Standardseite (Impressum, AGB, ...)*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Standardseite (Impressum, AGB, ...) document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes =
  | FooterDocument
  | HomePageDocument
  | NavigationsleisteDocument
  | PageDocument;

/**
 * Primary content in *ContentSection → Primary*
 */
export interface ContentSectionSliceDefaultPrimary {
  /**
   * Überschrift field in *ContentSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Worum geht's?
   * - **API ID Path**: content_section.primary.section_header
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_header: prismic.KeyTextField;

  /**
   * Unterüberschrift field in *ContentSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Kleine Nebeninformation
   * - **API ID Path**: content_section.primary.section_subheader
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_subheader: prismic.KeyTextField;

  /**
   * Text field in *ContentSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Kurze Beschreibung
   * - **API ID Path**: content_section.primary.section_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  section_text: prismic.RichTextField;

  /**
   * Hintergrund An/Aus field in *ContentSection → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: content_section.primary.background
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  background: prismic.BooleanField;

  /**
   * Ankername field in *ContentSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Wie soll der Link zu dieser Sektion heißen?
   * - **API ID Path**: content_section.primary.anchor
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  anchor: prismic.KeyTextField;

  /**
   * Bild links/rechts field in *ContentSection → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: rechts
   * - **API ID Path**: content_section.primary.image_lr
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  image_lr: prismic.SelectField<"rechts" | "links", "filled">;

  /**
   * Hintergrundfarbe field in *ContentSection → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Keine
   * - **API ID Path**: content_section.primary.bgColor
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  bgColor: prismic.SelectField<
    "Keine" | "Rosa" | "Orange" | "Lila" | "Hell" | "Dunkel",
    "filled"
  >;

  /**
   * Hintegrund volle Breite? field in *ContentSection → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: content_section.primary.fullWidth
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  fullWidth: prismic.BooleanField;
}

/**
 * Primary content in *ContentSection → Items*
 */
export interface ContentSectionSliceDefaultItem {
  /**
   * Bild field in *ContentSection → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_section.items[].section_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  section_image: prismic.ImageField<never>;
}

/**
 * Default variation for ContentSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContentSectionSliceDefaultPrimary>,
  Simplify<ContentSectionSliceDefaultItem>
>;

/**
 * Slice variation for *ContentSection*
 */
type ContentSectionSliceVariation = ContentSectionSliceDefault;

/**
 * ContentSection Shared Slice
 *
 * - **API ID**: `content_section`
 * - **Description**: ContentSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentSectionSlice = prismic.SharedSlice<
  "content_section",
  ContentSectionSliceVariation
>;

/**
 * Primary content in *FooterLink → Primary*
 */
export interface FooterLinkSliceDefaultPrimary {
  /**
   * Link field in *FooterLink → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_link.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for FooterLink Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterLinkSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FooterLinkSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *FooterLink*
 */
type FooterLinkSliceVariation = FooterLinkSliceDefault;

/**
 * FooterLink Shared Slice
 *
 * - **API ID**: `footer_link`
 * - **Description**: FooterLink
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterLinkSlice = prismic.SharedSlice<
  "footer_link",
  FooterLinkSliceVariation
>;

/**
 * Primary content in *FullpageText → Primary*
 */
export interface FullpageTextSliceDefaultPrimary {
  /**
   * Überschrift field in *FullpageText → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fullpage_text.primary.header
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  header: prismic.KeyTextField;

  /**
   * Ankername field in *FullpageText → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fullpage_text.primary.anchor
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  anchor: prismic.KeyTextField;
}

/**
 * Primary content in *FullpageText → Items*
 */
export interface FullpageTextSliceDefaultItem {
  /**
   * Text field in *FullpageText → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fullpage_text.items[].text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for FullpageText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FullpageTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FullpageTextSliceDefaultPrimary>,
  Simplify<FullpageTextSliceDefaultItem>
>;

/**
 * Slice variation for *FullpageText*
 */
type FullpageTextSliceVariation = FullpageTextSliceDefault;

/**
 * FullpageText Shared Slice
 *
 * - **API ID**: `fullpage_text`
 * - **Description**: FullpageText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FullpageTextSlice = prismic.SharedSlice<
  "fullpage_text",
  FullpageTextSliceVariation
>;

/**
 * Primary content in *HeroSection → Primary*
 */
export interface HeroSectionSliceDefaultPrimary {
  /**
   * Überschrift field in *HeroSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Superduper Überschrift
   * - **API ID Path**: hero_section.primary.hero_header
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hero_header: prismic.KeyTextField;

  /**
   * Unterüberschrift field in *HeroSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Kleinere Überschrift / Unterüberschrift
   * - **API ID Path**: hero_section.primary.hero_subheader
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hero_subheader: prismic.KeyTextField;

  /**
   * Text field in *HeroSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Ein wenig Text
   * - **API ID Path**: hero_section.primary.hero_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  hero_text: prismic.RichTextField;

  /**
   * Anker field in *HeroSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.primary.anchor
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  anchor: prismic.KeyTextField;
}

/**
 * Primary content in *HeroSection → Items*
 */
export interface HeroSectionSliceDefaultItem {
  /**
   * Button-Text field in *HeroSection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.items[].hero_ButtonText
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hero_ButtonText: prismic.KeyTextField;

  /**
   * Button-Style field in *HeroSection → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.items[].hero_buttonStyle
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  hero_buttonStyle: prismic.SelectField<"Call to Action" | "Sekundär">;
}

/**
 * Default variation for HeroSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSectionSliceDefaultPrimary>,
  Simplify<HeroSectionSliceDefaultItem>
>;

/**
 * Slice variation for *HeroSection*
 */
type HeroSectionSliceVariation = HeroSectionSliceDefault;

/**
 * HeroSection Shared Slice
 *
 * - **API ID**: `hero_section`
 * - **Description**: HeroSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSectionSlice = prismic.SharedSlice<
  "hero_section",
  HeroSectionSliceVariation
>;

/**
 * Primary content in *Kontaktformular → Primary*
 */
export interface KontakformularSliceDefaultPrimary {
  /**
   * Titel field in *Kontaktformular → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: kontakformular.primary.contact_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contact_title: prismic.KeyTextField;

  /**
   * Ankername field in *Kontaktformular → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Wie soll der Link zu dieser Sektion heißen?
   * - **API ID Path**: kontakformular.primary.anchor
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  anchor: prismic.KeyTextField;
}

/**
 * Primary content in *Kontaktformular → Items*
 */
export interface KontakformularSliceDefaultItem {
  /**
   * Lustiger Text field in *Kontaktformular → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: kontakformular.items[].contact_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contact_text: prismic.KeyTextField;
}

/**
 * Default variation for Kontaktformular Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type KontakformularSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<KontakformularSliceDefaultPrimary>,
  Simplify<KontakformularSliceDefaultItem>
>;

/**
 * Slice variation for *Kontaktformular*
 */
type KontakformularSliceVariation = KontakformularSliceDefault;

/**
 * Kontaktformular Shared Slice
 *
 * - **API ID**: `kontakformular`
 * - **Description**: Kontakformular
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type KontakformularSlice = prismic.SharedSlice<
  "kontakformular",
  KontakformularSliceVariation
>;

/**
 * Primary content in *Navigationslinks → Items*
 */
export interface LinkSliceDefaultItem {
  /**
   * Link-Name field in *Navigationslinks → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: link.items[].linkName
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linkName: prismic.KeyTextField;

  /**
   * Anker (selber Name wie Section) field in *Navigationslinks → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: link.items[].anchor
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  anchor: prismic.KeyTextField;

  /**
   * Button-Style field in *Navigationslinks → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: link.items[].buttonStyle
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  buttonStyle: prismic.SelectField<"Call to Action" | "Sekundär">;
}

/**
 * Default variation for Navigationslinks Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LinkSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<LinkSliceDefaultItem>
>;

/**
 * Slice variation for *Navigationslinks*
 */
type LinkSliceVariation = LinkSliceDefault;

/**
 * Navigationslinks Shared Slice
 *
 * - **API ID**: `link`
 * - **Description**: Link
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LinkSlice = prismic.SharedSlice<"link", LinkSliceVariation>;

/**
 * Primary content in *Modal → Primary*
 */
export interface ModalSliceDefaultPrimary {
  /**
   * text field in *Modal → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: modal.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Titel des Modals (Impressum, etc) field in *Modal → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: modal.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Default variation for Modal Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ModalSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ModalSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Modal*
 */
type ModalSliceVariation = ModalSliceDefault;

/**
 * Modal Shared Slice
 *
 * - **API ID**: `modal`
 * - **Description**: Modal
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ModalSlice = prismic.SharedSlice<"modal", ModalSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataSlicesSlice,
      HomePageDocument,
      HomePageDocumentData,
      HomePageDocumentDataSlicesSlice,
      NavigationsleisteDocument,
      NavigationsleisteDocumentData,
      NavigationsleisteDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      ContentSectionSlice,
      ContentSectionSliceDefaultPrimary,
      ContentSectionSliceDefaultItem,
      ContentSectionSliceVariation,
      ContentSectionSliceDefault,
      FooterLinkSlice,
      FooterLinkSliceDefaultPrimary,
      FooterLinkSliceVariation,
      FooterLinkSliceDefault,
      FullpageTextSlice,
      FullpageTextSliceDefaultPrimary,
      FullpageTextSliceDefaultItem,
      FullpageTextSliceVariation,
      FullpageTextSliceDefault,
      HeroSectionSlice,
      HeroSectionSliceDefaultPrimary,
      HeroSectionSliceDefaultItem,
      HeroSectionSliceVariation,
      HeroSectionSliceDefault,
      KontakformularSlice,
      KontakformularSliceDefaultPrimary,
      KontakformularSliceDefaultItem,
      KontakformularSliceVariation,
      KontakformularSliceDefault,
      LinkSlice,
      LinkSliceDefaultItem,
      LinkSliceVariation,
      LinkSliceDefault,
      ModalSlice,
      ModalSliceDefaultPrimary,
      ModalSliceVariation,
      ModalSliceDefault,
    };
  }
}