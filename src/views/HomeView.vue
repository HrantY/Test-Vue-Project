<template>
  <div class="specification">
    <section class="wrapper d-flex border border-dark">
      <div class="accordion w-50 border border-dark p-2 d-flex flex-column align-items-center" id="accordion" role="tablist">
        <b-card
          no-body
          class="mb-2 w-100"
          v-for="(specification, index) in specifications"
          :key="index"
        >
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button
              class="w-100"
              block
              v-b-toggle="`accordion-${index}`"
              variant="primary"
              @click="selectSpecification(specification)"
            >{{specification.name}}</b-button>
          </b-card-header>
          <b-collapse :id="`accordion-${index}`" class="mt-2" accordion="accordion" role="tabpanel">
            <b-card-body>
              <b-list-group>
                <b-list-group-item
                  v-for="option in specification.options"
                  :key="option.name"
                >{{option.label}}: {{option.hasOwnProperty('selected') ? option.selected : option.value}}</b-list-group-item>
              </b-list-group>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-button @click="handleMakeNewSpecification()">+ Make new specification</b-button>
      </div>
      <div class="w-50 border border-dark p-2">
          <template v-if="selectedSpecification">
            <template v-for="(option, index) in selectedSpecification.options">
              <template v-if="option.type === 'text'">
                <b-form-input
                  class="mb-2"
                  :key="index"
                  v-model="option.value"
                  :type="option.type"
                  :placeholder="option.name"
                ></b-form-input>
              </template>
              <template v-else-if="option.type === 'checkbox'">
                <b-form-checkbox
                  class="mb-2"
                  :key="index"
                  v-model="option.value"
                  value="yes"
                  unchecked-value="no"
                >
                  {{option.label}}
                </b-form-checkbox>
              </template>
              <template v-else>
                <b-form-select
                  class="mb-2"
                  :key="index"
                  v-model="option.selected"
                  :options="option.value"
                ></b-form-select>
              </template>
            </template>
            <div>
              <b-button class="mx-2" @click="modalShow = !modalShow">+ new configuration option</b-button>

              <b-button @click="createOrUpdateSpecification()">
                Save
              </b-button>
            </div>
          </template>
      </div>
    </section>
    <b-modal v-model="modalShow" id="modal-1" title="Create configuration option" @ok="handleOk">
      <b-form-group
          label="Field Name"
          label-for="name-input"
        >
        <b-form-input
          class="mb-2"
          id="name-input"
          v-model="specificationOption.label"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
          label="Select Field Type"
          label-for="type-input"
          :class="{'border border-dark p-2 rounded': specificationOption.type === 'select'}"
        >
        <b-form-select
          id="type-input"
          class="mb-2"
          v-model="specificationOption.type"
          :options="inputTypeOptions"
        ></b-form-select>
        <div v-if="specificationOption.type === 'select'">
          <b-form-group
            label="Add Option"
            label-for="type-input"
          >
          <b-form-input
            v-for="(option, index) in specificationOption.value"
            :key="index"
            class="mb-2"
            v-model="option.value"
            @update:modelValue="option.text = $event"
            required
          ></b-form-input>
          <b-button @click="addOption">Add option</b-button>
        </b-form-group>
        </div>
      </b-form-group>
    </b-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Specification } from "@/utils/Specification/index"
import {defaultSpecifications, emptySpecificationOption} from '../utils/specification.data'
import type { SpecificationOption, SelectOption } from "@/utils/Specification/index.d";
export default defineComponent({
  data() {
    return {
      modalShow: false,
      specificationOption: {
        name: '',
        label: '',
        type: 'text',
        selected: null,
        value: false
      } as SpecificationOption,
      selectedSpecification: null as null | Specification,
      specifications: [...defaultSpecifications.map(item => new Specification(item))] as Specification[]
    }
  },
  watch: {
    'specificationOption.type'(newType) {
      if(newType === 'select') {
        this.specificationOption.value = [
          {
            value: '',
            text: ''
          } as SelectOption
        ]
      }
    },
  },
  computed: {
    inputTypeOptions(): SelectOption[] {
      return ['text', 'select', 'checkbox'].map(type => ({
        value: type,
        text: type.slice(0, 1).toUpperCase() + type.slice(1)
      }))
    },
  },
  methods: {
    handleOk() {
      if(this.selectedSpecification) {
        this.selectedSpecification.addOption(this.copy(this.specificationOption))
      }
      this.modalShow = false
    },
    addOption() {
      if(Array.isArray(this.specificationOption.value)){
        this.specificationOption.value.push({
            value: '',
            text: ''
        } as SelectOption)
      }
    },
    selectSpecification(specification: Specification) {
      this.selectedSpecification = new Specification(this.copy(specification.options))
    },
    createOrUpdateSpecification() {
      if(this.selectedSpecification) {
        const existed = this.specifications.find(item => item.name === this.selectedSpecification?.name)
        if(existed) {
          existed.updateOptions(this.copy(this.selectedSpecification.options))
        } else {
          this.specifications.push(new Specification(this.copy(this.selectedSpecification.options)))
        }
      }
    },
    copy(arg: any) {
      return JSON.parse(JSON.stringify(arg))
    },
    handleMakeNewSpecification() {
      this.selectedSpecification = new Specification(emptySpecificationOption)
    }
  }
})
</script>
<style>

.modal-dialog {
  z-index: 2000;
}
.wrapper{ 
  min-height: 700px;
}
</style>
