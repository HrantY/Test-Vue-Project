import type { SpecificationOption } from './index.d';


export class Specification {
    public options: SpecificationOption[]
    private _nameOption: SpecificationOption
    constructor(options: SpecificationOption[]) {
        this.options = options
        this._nameOption = this.options.find(option => option.name === 'name') as SpecificationOption
    }

    get name() {
        return this._nameOption.value
    }

    addOption(option: SpecificationOption) {
        this.options.push(option)
    }

    updateOptions(options: SpecificationOption[]) {
        this.options = options
    }
}
