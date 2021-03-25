const devices = ['SmartPhone', 'Tablet', 'Pc']

const typographies = [
  { type: 'Times New Roman', className: 'tNR' },
  { type: 'Arial', className: 'arial' },
  { type: 'Verdana', className: 'verdana' },
]

const formats = ['PSD', 'Not Implemented']

const resolutions = {
  SmartPhone: [
    { size: '360 x 460', className: 'smartPhoneGS5' },
    { size: '411 x 731', className: 'smartPhonePixel' },
    { size: '375 x 812', className: 'smartPhoneI10' },
  ],
  Tablet: [
    { size: '768 x 1024', className: 'tablet' },
    { size: '1024 x 1366', className: 'tabletPro' },
  ],
  Pc: [
    { size: '1024 x 768', className: 'pcScreen1024x768' },
    { size: '1600 x 900', className: 'pcScreen1600x900' },
    { size: '1920 x 1080', className: 'pcScreen1920x1080' },
  ],
}

export { devices, typographies, resolutions, formats }
