
const TextsValidators = [
    {
        checker: (txt:string) => txt.startsWith("/list_item/"),
        validate:(txt:string) => txt.split('/list_item/').join(''),
        textStylesClassName:'ml-4 '
    }
]

export const validateText = (txt:string) => {
    const validator = TextsValidators.find(txtV => txtV.checker(txt)) || null
    return {
        txt:validator?.validate(txt) || txt,
        textStylesClassName: validator?.textStylesClassName || ''
    }
}