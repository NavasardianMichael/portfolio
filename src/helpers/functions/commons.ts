
export function decodeHTMLEntities(text: string) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

export const calcAge: (d: string) => number = (dateString: string) => {
  const birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000));
}

export const sleep = (ms: number) => {
  return new Promise((r) => setTimeout(r, ms))
}

export const combineClassNames = (...classNames: ReadonlyArray<string | undefined | boolean>) => {
  return classNames.filter((className) => !!className).join(' ')
}
