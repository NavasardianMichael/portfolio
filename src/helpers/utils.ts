export function decodeHTMLEntities(text: string) {
  let textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

export const calcAge: (d: string) => number = (dateString: string) => {
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000));
}

export const combineClassNames = (...classNames: string[]) => {
  return classNames.filter(className => !!className).join(' ')
}