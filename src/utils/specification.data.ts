import type { SpecificationOption } from "./Specification/index.d";

export const defaultSpecifications = [
    [
        {
            name: 'name',
            label: 'Name of Specification',
            type: 'text',
            value: 'Sport'
        },
        {
            name: 'wheel-size',
            label: 'Wheel rims size',
            type: 'text',
            value: "15 inches"
        },
        {
            name: 'interior-materials',
            label: 'Interior materials',
            type: 'text',
            value: "leather"
        },
        {
            name: 'color',
            label: 'Body color',
            type: 'text',
            value: 'white'
        },
        {
            name: 'air-suspension',
            label: 'Air suspension',
            type: 'checkbox',
            value: 'no'
        },
    ] as SpecificationOption[],
    [
        {
            name: 'name',
            label: 'Name of Specification',
            type: 'text',
            value: 'Standard'
        },
        {
            name: 'wheel-size',
            label: 'Wheel rims size',
            type: 'text',
            value: "15 inches"
        },
        {
            name: 'interior-materials',
            label: 'Interior materials',
            type: 'text',
            value: "leather"
        },
        {
            name: 'color',
            label: 'Body color',
            type: 'text',
            value: 'white'
        },
        {
            name: 'engine',
            label: 'Engine',
            type: 'select',
            selected: null,
            value: [
                { value: null, text: 'Engine' },
                { value: 'v6', text: 'V6 3.5L' },
            ]
        },
        {
            name: 'air-suspension',
            label: 'Air suspension',
            type: 'checkbox',
            value: 'no'
        },
    ] as SpecificationOption[],
    [
        {
            name: 'name',
            label: 'Name of Specification',
            type: 'text',
            value: 'Sport'
        },
        {
            name: 'wheel-size',
            label: 'Wheel rims size',
            type: 'text',
            value: "15 inches"
        },
        {
            name: 'interior-materials',
            label: 'Interior materials',
            type: 'text',
            value: "leather"
        },
        {
            name: 'color',
            label: 'Body color',
            type: 'text',
            value: 'white'
        },
        {
            name: 'engine',
            label: 'Engine',
            type: 'select',
            selected: null,
            value: [
                { value: null, text: 'Engine' },
                { value: 'v6', text: 'V6 3.5L' },
            ]
        },
        {
            name: 'air-suspension',
            label: 'Air suspension',
            type: 'checkbox',
            value: 'no'
        },
    ] as SpecificationOption[]

]

export const emptySpecificationOption: SpecificationOption[] = [
    {
        name: 'name',
        label: 'Name of Specification',
        type: 'text',
        value: ''
    },
    {
        name: 'wheel-size',
        label: 'Wheel rims size',
        type: 'text',
        value: ""
    },
    {
        name: 'interior-materials',
        label: 'Interior materials',
        type: 'text',
        value: ""
    },
    {
        name: 'color',
        label: 'Body color',
        type: 'text',
        value: ''
    },
    {
        name: 'engine',
        label: 'Engine',
        type: 'select',
        selected: null,
        value: [
            { value: null, text: 'Engine' },
            { value: 'v6', text: 'V6 3.5L' },
        ]
    },
    {
        name: 'air-suspension',
        label: 'Air suspension',
        type: 'checkbox',
        value: 'no'
    },
]