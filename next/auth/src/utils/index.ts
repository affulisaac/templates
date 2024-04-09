export const truncateText = (text: string, length: number) => {
  if (text?.length > length) {
    return `${text.substring(0, length)}...`;
  }
  return text;
};

export const formatMobileNumber = (number: string) => {
  if (number?.length == 12 && number?.startsWith('233')) {
    return "0" + number.slice(3);
  } else if (number?.length == 9 && !number.startsWith('0')) {
    return "0" + number
  } else {
    return number
  }
}

export const formatMobileWithCountryCode = (number: string) => {
  if (number?.length == 10 && number?.startsWith('0')) {
    return '233' + number?.slice(1);
  } else {
    return number
  }
}