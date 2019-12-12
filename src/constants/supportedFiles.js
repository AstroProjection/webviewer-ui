export const supportedPDFExtensions = [
  'pdf',
  'jpg',
  'jpeg',
  'png',
];
export const supportedOfficeExtensions = [
  'docx',
  'xlsx',
  'pptx',
  'md',
];
export const supportedClientOnlyExtensions = [
  'xod',
  ...supportedPDFExtensions,
  ...supportedOfficeExtensions,
];
export const supportedBlackboxExtensions = [
  ...supportedClientOnlyExtensions,
  'doc',
  'xls',
  'csv',
  'ppt',
  'htm',
  'html',
  'url',
  'xhtml',
  'tif',
  'tiff',
  'jp2',
  'txt',
  'rtf',
  'odf',
  'odt',
  'odg',
  'odp',
  'ods',
  'odp',
  'dwg',
  'dgn',
  'rvt',
  'rfa',
  'dxf',
  'dwf',
  'gif',
  'xltm',
  'xltx',
  'vsd',
  'vsdx',
  'xlsb',
  'xlt',
  'msg',
];
export const supportedExtensions = [
  ...supportedClientOnlyExtensions,
  ...supportedBlackboxExtensions,
];