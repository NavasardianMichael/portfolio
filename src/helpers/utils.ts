export function decodeHTMLEntities(text: string) {
  let textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}