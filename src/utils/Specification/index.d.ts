
export type SpecificationOption = {
    name: string
    label: string
    type: keyof typeof InputTypes
    selected?: SelectOption |   null
    value: string | SelectOption[] | boolean
}
export enum InputTypes {
    'text',
    'select',
    'checkbox'
}

export type SelectOption = {
    value: string | null
    text: string
}