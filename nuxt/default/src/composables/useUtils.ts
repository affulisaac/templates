import dayjs from 'dayjs'
import 'dayjs/locale/en'
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(advancedFormat)
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)


export const formatMobileNumber = (number: string) => {
  if (number?.length == 12 && number?.startsWith('233')) {
    return "0" + number.slice(3);
  } else if (number?.length == 9 && !number.startsWith('0')) {
    return "0" + number
  } else {
    return number
  }
}

export const isValidLocalNumber = (number: string): boolean => {
  // Check if number is a valid local number
  if ((number?.length == 12 && number?.startsWith('233')) || (number?.length == 9 && !number.startsWith('0')) || (number?.length == 10 && number.startsWith('0'))) {
    return true
  }
  return false
}

export const formatMobileWithCountryCode = (number: string) => {
  if (number?.length == 10 && number?.startsWith('0')) {
    return '233' + number?.slice(1);
  } else {
    return number
  }
}

export const formatCurrency = (number: number = 0, currencyCode: string = 'GHS') => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  })

  return formatter.format(number)
}

export const filterArray = (parentArray: any[], childArray: any[], filterKey: any) => {
  const childSet = new Set(childArray?.map((obj) => obj[filterKey]))

  const filteredArray = parentArray?.filter((obj) => {
    return !childSet.has(obj[filterKey])
  })

  return filteredArray
}


export const sortArray = (array: any[], key: string, order: 'asc' | 'desc') => {
  return [...array].sort((a, b) => {
    if (order === 'asc') {
      return a[key] > b[key] ? 1 : -1
    } else if (order === 'desc') {
      return a[key] < b[key] ? 1 : -1
    }
    return 0
  })
}

export const formatDate = (date: string | null, format: string = 'DD/MM/YYYY') => {
  dayjs.locale('en')
  const formatted = dayjs(date).format(format)
  return formatted
}

const paymentType = (type: string) => {
  switch (type) {
    case 'cash':
      return 'Cash'
    case 'mobilemoney':
      return 'Mobile Money'
    case 'card':
      return 'Card'
    case 'cheque':
      return 'Cheque'
    default:
      return type
  }
}

export const usePaymentMethod = (): { name: string, value: string }[] => {
  return [
    { name: 'Mobile Money', value: 'mobilemoney' },
    { name: 'Bank Card', value: 'card' },
    { name: 'Cash Payment', value: 'cash' },

  ]
}

export function getBrowserEngineAndVersion() {
  const userAgent = navigator.userAgent;
  let engine, version;
  if (userAgent.indexOf("Trident") >= 0 || userAgent.indexOf("MSIE") >= 0) {
    engine = "Trident";
  } else if (userAgent.indexOf("Edge") >= 0) {
    engine = "EdgeHTML";
  } else if (userAgent.indexOf("Edg") >= 0) {
    engine = "Blink";
  } else if (userAgent.indexOf("Gecko") >= 0 && userAgent.indexOf("Firefox") >= 0) {
    engine = "Gecko";
  } else if (userAgent.indexOf("AppleWebKit") >= 0 && userAgent.indexOf("Chrome") >= 0) {
    engine = "Blink";
  } else if (userAgent.indexOf("AppleWebKit") >= 0 && userAgent.indexOf("Safari") >= 0) {
    engine = "WebKit";
  } else {
    engine = "Unknown";
  }

  const match = RegExp(/(?:Trident\/|MSIE\s|Edge\/|Edg\/|Chrome\/|Firefox\/|Safari\/)(\d+(\.\d+)?)/).exec(userAgent);
  version = match ? match[1] : "Unknown";

  return { engine, version };
}


export const getOSName = (): string => {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;
  const osList: any = {
    'Windows': /Win/,
    'Mac OS': /Mac/,
    'Linux': /(Linux|X11)/,
    'iOS': /(iPhone|iPad|iPod)/,
    'Android': /Android/,
  };

  for (const os in osList) {
    if (osList[os].test(platform) || osList[os].test(userAgent)) {
      return os;
    }
  }

  return 'Unknown OS';
}

export function truncateText(str: string, length: number, enableEllipsis: boolean = true) {
  if (str?.length > length) {
    const truncatedStr = str?.substring(0, length)?.trim();
    return enableEllipsis ? truncatedStr + '...' : truncatedStr;
  } else {
    return str;
  }
}

export const formatPaymentChannel = (channel: string) => {
  switch (channel) {
    case 'mtn':
      return 'MTN'
    case 'vodafone':
      return 'Vodafone'
    case 'card':
      return 'Card'
    default:
      return channel
  }
}


export function debounce<T extends (...args: any[]) => any>(a: T, b: number, c?: boolean) {
  let d: ReturnType<typeof setTimeout> | null, e: ReturnType<T> | undefined
  return function (this: any, ...args: Parameters<T>) {
    function h() {
      d = null
      c ?? (e = a.apply(f, g))
    }
    const f = this
    const g = args
    clearTimeout(d as ReturnType<typeof setTimeout>)
    d = setTimeout(h, b)
    if (c && !d) {
      e = a.apply(f, g)
    }
    return e
  }
}
