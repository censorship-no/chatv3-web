import type {
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Site Settings
 *
 *
 */
export interface SiteSettings extends SanityDocument {
  _type: "siteSettings"

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Description — `text`
   *
   * Describe site for search engines and social media.
   */
  description?: string

  /**
   * Адрес сайта — `url`
   *
   * Адрес сайта для SEO
   */
  siteURL?: string

  /**
   * Keywords — `array`
   *
   * Add keywords that describes the website.
   */
  keywords?: Array<SanityKeyed<string>>

  /**
   * Логотип в шапке — `image`
   *
   *
   */
  logo?: {
    _type: "image"
    asset: SanityImageAsset
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Ссылки в шапке — `array`
   *
   *
   */
  links?: Array<LinkInfo>
}

/**
 * Страницы
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   * Some frontend will require a slug to be set to be able to show the person. For index page  use "/"
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Мета заголовок страницы — `string`
   *
   * Заголовок страницы для SEO
   */
  metaTitle?: string;

  /**
   * Заголовок страницы — `heroTitleText`
   *
   * часть выделенная жирным будет выделена на странице оранжевым цветом
   */
  heroTitle?: HeroTitleText;

  /**
   * Разъяснительный текст страницы — `sectionText`
   *
   * Этот текст будет располагаться под основным заголовком страницы
   */
  heroText?: SectionText;

  /**
   * Отображаемые элементы — `array`
   *
   *
   */
  sectionItems?: Array<

      | Servers
      | Messengers
      | Websites
      | EqualitieBlock
      | CardList
      | CardListB
      | Instruction
      | Footer

  >;
}

/**
 * Секция серверов
 *
 * Секция со списком серверов
 */
export interface Servers extends SanityDocument {
  _type: "servers";

  /**
   * Имя секции — `string`
   *
   *
   */
  sectionName?: string;

  /**
   * Иконка у заголовка секции — `image`
   *
   *
   */
  icon?: {
    _type: "image";
    asset: SanityImageAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Заголовок секции — `string`
   *
   *
   */
  sectionTitle?: string;

  /**
   * Описание раздела — `sectionText`
   *
   *
   */
  sectionText?: SectionText;

  /**
   * Отображаемые элементы — `array`
   *
   *
   */
  sectionItems?: Array<SanityKeyed<ServerItem>>;
}

/**
 * Секция мессенджеров
 *
 * Секция со списком мессенджеров
 */
export interface Messengers extends SanityDocument {
  _type: "messengers";

  /**
   * Имя секции — `string`
   *
   *
   */
  sectionName?: string;

  /**
   * Иконка у заголовка секции — `image`
   *
   *
   */
  icon?: {
    _type: "image";
    asset: SanityImageAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Заголовок секции — `string`
   *
   *
   */
  sectionTitle?: string;

  /**
   * Описание раздела — `sectionText`
   *
   *
   */
  sectionText?: SectionText;

  /**
   * Отображаемые элементы — `array`
   *
   *
   */
  items?: Array<Messenger>;
}

/**
 * Секция средств обхода блокировок
 *
 * Секция со списком средств обхода блокировок
 */
export interface Websites extends SanityDocument {
  _type: "websites";

  /**
   * Имя секции — `string`
   *
   *
   */
  sectionName?: string;

  /**
   * Иконка у заголовка секции — `image`
   *
   *
   */
  icon?: {
    _type: "image";
    asset: SanityImageAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Заголовок секции — `string`
   *
   *
   */
  sectionTitle?: string;

  /**
   * Описание раздела — `sectionText`
   *
   *
   */
  sectionText?: SectionText;

  /**
   * Отображаемые элементы — `array`
   *
   *
   */
  items?: Array<Website>;
}

/**
 * Список карточек
 *
 * Секция со списком карточек. Используется на странице о проекте
 */
export interface CardList extends SanityDocument {
  _type: "cardList";

  /**
   * Имя секции — `string`
   *
   * отображается в списках при формировании страницы
   */
  sectionName?: string;

  /**
   * Заголовок секции — `string`
   *
   *
   */
  sectionTitle?: string;

  /**
   * Показывать текстовое описание списка — `boolean`
   *
   *
   */
  hasSectionText?: boolean;

  /**
   * Описание раздела — `sectionText`
   *
   *
   */
  sectionText?: SectionText;

  /**
   * Отображаемые элементы — `array`
   *
   *
   */
  cards?: Array<PlainCard>;
}

/**
 * Список карточек Б
 *
 * Секция со списком карточек. Используется на странице о проекте
 */
export interface CardListB extends SanityDocument {
  _type: "cardList_b";

  /**
   * Имя секции — `string`
   *
   * отображается в списках при формировании страницы
   */
  sectionName?: string;

  /**
   * Заголовок секции — `string`
   *
   *
   */
  sectionTitle?: string;

  /**
   * Показывать текстовое описание списка — `boolean`
   *
   *
   */
  hasSectionText?: boolean;

  /**
   * Описание раздела — `sectionText`
   *
   *
   */
  sectionText?: SectionText;

  /**
   * Отображаемые элементы — `array`
   *
   *
   */
  cards?: Array<PlainCard>;
}

/**
 * Инструкция
 *
 * Секция с инструкцией
 */
export interface Instruction extends SanityDocument {
  _type: "instruction";
  id: string;

  /**
   * Имя секции — `string`
   *
   *
   */
  sectionName?: string;

  /**
   * Иконка у заголовка секции — `image`
   *
   *
   */
  icon?: {
    _type: "image";
    asset: SanityImageAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Заголовок секции — `string`
   *
   *
   */
  sectionTitle?: string;

  /**
   * Описание раздела — `sectionText`
   *
   *
   */
  sectionText?: SectionText;

  /**
   * Отображаемые элементы — `array`
   *
   *
   */
  items?: Array<InstructionStep>;
}

/**
 * Мессенджер
 *
 *
 */
export interface Messenger extends SanityDocument {
  _type: "messenger";

  /**
   * Логотип сервиса — `image`
   *
   *
   */
  logo?: {
    _type: "image";
    asset: SanityImageAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Название — `string`
   *
   *
   */
  name?: string;

  /**
   * Назначение — `string`
   *
   *
   */
  badge?: string;

  /**
   * Краткое описание — `text`
   *
   *
   */
  summary?: string;

  /**
   * Показывать блок с серверами? — `boolean`
   *
   *
   */
  serverPickBlock?: boolean;

  /**
   * Надпись на кнопке выбора сервера — `string`
   *
   *
   */
  serverAction?: string;

  /**
   * Показывать блок ссылок для десктопа — `boolean`
   *
   *
   */
  desktopLinkBlock?: boolean;

  /**
   * Заголовок секции инфо для десктопа — `string`
   *
   *
   */
  desktopInfoTitle?: string;

  /**
   * Элементы секции инфо для десктопа — `array`
   *
   *
   */
  desktopInfoItems?: Array<SanityKeyed<LinkBlock>>;

  /**
   * Показывать блок ссылок для мобильных устройств — `boolean`
   *
   *
   */
  mobileLinkBlock?: boolean;

  /**
   * Заголовок секции инфо для мобильных устройств — `string`
   *
   *
   */
  mobileInfoTitle?: string;

  /**
   * Элементы секции инфо для мобильных устройств — `array`
   *
   *
   */
  mobileInfoItems?: Array<SanityKeyed<LinkBlock>>;

  /**
   * Показывать блок c выбором QR кодов — `boolean`
   *
   *
   */
  hasQRCodeLinks?: boolean;

  /**
   * список QR кодов — `array`
   *
   *
   */
  qrCodes?: Array<QrCode>;
}

/**
 * Вебсайт
 *
 *
 */
export interface Website extends SanityDocument {
  _type: "website";

  /**
   * Логотип сервиса — `image`
   *
   *
   */
  logo?: {
    _type: "image";
    asset: SanityImageAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Название — `string`
   *
   *
   */
  name?: string;

  /**
   * Назначение — `string`
   *
   *
   */
  badge?: string;

  /**
   * Краткое описание — `text`
   *
   *
   */
  summary?: string;

  /**
   * Показывать блок с серверами? — `boolean`
   *
   *
   */
  serverPickBlock?: boolean;

  /**
   * Надпись на кнопке выбора сервера — `string`
   *
   *
   */
  serverAction?: string;

  /**
   * Показывать блок ссылок для десктопа — `boolean`
   *
   *
   */
  desktopLinkBlock?: boolean;

  /**
   * Заголовок секции инфо для десктопа — `string`
   *
   *
   */
  desktopInfoTitle?: string;

  /**
   * Элементы секции инфо для десктопа — `array`
   *
   *
   */
  desktopInfoItems?: Array<SanityKeyed<LinkBlock>>;

  /**
   * Показывать блок ссылок для мобильных устройств — `boolean`
   *
   *
   */
  mobileLinkBlock?: boolean;

  /**
   * Заголовок секции инфо для мобильных устройств — `string`
   *
   *
   */
  mobileInfoTitle?: string;

  /**
   * Элементы секции инфо для мобильных устройств — `array`
   *
   *
   */
  mobileInfoItems?: Array<SanityKeyed<LinkBlock>>;

  /**
   * Показывать блок c выбором QR кодов — `boolean`
   *
   *
   */
  hasQRCodeLinks?: boolean;

  /**
   * список QR кодов — `array`
   *
   *
   */
  qrCodes?: Array<QrCode>;
}

/**
 * Серверы
 *
 *
 */
export interface Server extends SanityDocument {
  _type: "server";

  /**
   * Имя сервера — `string`
   *
   * Город, к которому привязан сервер
   */
  serverName?: string;

  /**
   * Адрес сайта — `url`
   *
   * URL регионального сайта
   */
  siteUrl?: string;

  /**
   * Домашний узел в сети matrix — `string`
   *
   * Например, matrix.piter.chatv3.ru
   */
  matrixUrl?: string;

  /**
   * URL адрес домашнего узла — `url`
   *
   * Например, https://chat.piter.chatv3.ru
   */
  elementUrl?: string;
}

/**
 * Ссылки
 *
 *
 */
export interface LinkInfo extends SanityDocument {
  _type: "linkInfo";

  /**
   * Имя ссылки — `string`
   *
   *
   */
  linkName?: string;

  /**
   * Адрес ссылки — `url`
   *
   *
   */
  linkUrl?: string;

  /**
   * Лейбл ссылки — `string`
   *
   * Текст для кнопок
   */
  linkLabel?: string;
}

/**
 * секция eQualitie
 *
 *
 */
export interface EqualitieBlock extends SanityDocument {
  _type: "equalitieBlock";

  /**
   * Иконка блока — `image`
   *
   *
   */
  logo?: {
    _type: "image";
    asset: SanityImageAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Заголовок блока — `string`
   *
   *
   */
  title?: string;

  /**
   * Текст — `string`
   *
   *
   */
  text?: string;

  /**
   * Показывать блок со списком ссылок? — `boolean`
   *
   *
   */
  hasLinksSection?: boolean;

  /**
   * Ссылки для отображения в блоке — `array`
   *
   * Добавьте ссылки для отоюражения
   */
  links?: Array<SanityKeyed<LinkInfo>>;
}

/**
 * Footer
 *
 *
 */
export interface Footer extends SanityDocument {
  _type: "footer";

  /**
   * Имя футера — `string`
   *
   * Имя футера для удобства
   */
  footerTitle?: string;

  /**
   * Лого — `image`
   *
   *
   */
  logo?: {
    _type: "image";
    asset: SanityImageAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Альтернативный текст к логотипу — `string`
   *
   *
   */
  logoAltText?: string;

  /**
   * Подзаголовок футера — `sectionText`
   *
   *
   */
  footerTagline?: SectionText;

  /**
   * Инфор о лицензии — `sectionText`
   *
   *
   */
  footerLicenseInfo?: SectionText;
}

/**
 * Карточка с текстом
 *
 * Простая карточка с текстом и заголовком. Используется в FAQ и о проекте
 */
export interface PlainCard extends SanityDocument {
  _type: "plainCard";

  /**
   * Имя карточки — `string`
   *
   *
   */
  cardName?: string;

  /**
   * Заголовок карточки — `string`
   *
   *
   */
  cardTitle?: string;

  /**
   * Текст карточки — `sectionText`
   *
   *
   */
  cardText?: SectionText;
}

/**
 * QR коды
 *
 * В дальнейшем можно доработать поведение фронтенда для отображения QR кода без перехода на другую страницу. Сейчас используется в блоке Delta Chat только адресс ссылки на qr код
 */
export interface QrCode extends SanityDocument {
  _type: "qr_code";

  /**
   * Имя QR кода — `string`
   *
   *
   */
  name?: string;

  /**
   * Qr код — `image`
   *
   *
   */
  qr?: {
    _type: "image";
    asset: SanityImageAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Адрес расположения qr кода — `url`
   *
   *
   */
  url?: string;

  /**
   * Текстовое представление — `string`
   *
   * Необязательное. Тестовое содержимое закодированное в QR коде
   */
  alt?: string;

  /**
   * Связанный сервер — `reference`
   *
   *
   */
  relatedServer?: Server;
}

/**
 * Шаг инструкции
 *
 *
 */
export interface InstructionStep extends SanityDocument {
  _type: "instructionStep";

  /**
   * Название — `string`
   *
   *
   */
  name?: string;

  /**
   * Заголовок — `string`
   *
   *
   */
  instructionTitle?: string;

  /**
   * Текст — `instructionsText`
   *
   *
   */
  instructionText?: InstructionsText;

  /**
   * Показывать ли ссылки? — `boolean`
   *
   *
   */
  hasLinks?: boolean;

  /**
   * Ссылки для отображения — `array`
   *
   *
   */
  links?: Array<SanityKeyed<LinkBlock>>;
}

export type HeroTitleText = Array<SanityKeyed<SanityBlock>>;

export type SectionText = Array<SanityKeyed<SanityBlock>>;

export type ServerItem = {
  _type: "serverItem";
  /**
   * Server — `reference`
   *
   *
   */
  server?: Server;
};

export type LinkBlock = {
  _type: "linkBlock";
  /**
   * Заголовок блока ссылок — `string`
   *
   *
   */
  linkBlockTitle?: string;

  /**
   * Ссылка — `array`
   *
   *
   */
  linkItem?: Array<LinkInfo>;
};

export type MessengerItem = {
  _type: "messengerItem";
  /**
   * Messenger — `array`
   *
   *
   */
  messenger?: Array<Messenger>;
};

export type WebsiteItem = {
  _type: "websiteItem";
  /**
   * Website — `array`
   *
   *
   */
  website?: Array<Website>;
};

export type CardListItem = {
  _type: "cardListItem";
  /**
   * Сарточка — `reference`
   *
   *
   */
  plainCard?: PlainCard;
};

export type QrCodeList = {
  _type: "qrCodeList";
  /**
   * List name — `string`
   *
   *
   */
  listName?: string;

  /**
   * Элементы списка — `array`
   *
   *
   */
  qr?: Array<QrCode>;
};

export type InstructionsText = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityImageAsset;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type Documents =
  | SiteSettings
  | Page
  | Servers
  | Messengers
  | Websites
  | CardList
  | CardListB
  | Instruction
  | Messenger
  | Website
  | Server
  | LinkInfo
  | EqualitieBlock
  | Footer
  | PlainCard
  | QrCode
  | InstructionStep;
