export const parseLineBreak = (raw: string) => raw.replaceAll('\n', '<br>')

export const beautifyText = (raw: string) =>
  raw.replaceAll('\n', '<span class="my-2 block tracking-widest leading-6" />')
export const deleteText = (raw: string) => {
  raw.replaceAll('\n', '')
}
