import { txtTypes } from "@/constants"

export const validateText = (txt:string) => {
    let validatedTxt = txt
    txtTypes.forEach(txtType => validatedTxt = txt.split(txtType).join(""))
    return validatedTxt
}