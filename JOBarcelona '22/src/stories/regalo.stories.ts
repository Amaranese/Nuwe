// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RegaloComponent } from 'src/app/regalo/regalo.component';
import { action } from '@storybook/addon-actions'

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Single present list',
  component: RegaloComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {},
  decorators:[
    moduleMetadata({
      declarations:[RegaloComponent],
      imports:[CommonModule]
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<RegaloComponent> = (args: RegaloComponent) => ({
  component: RegaloComponent,
  props: {
    ...args,
    onViewDetails: action('onViewDetails')
  },
  template: `
  <app-regalo 
    [presents]=presents
    (onViewDetails)='onViewDetails($event)'
    ></app-regalo>`
});

export const Default = Template.bind({});
Default.args = {
        presents:[ 
          {
          title :'Crew',
          content: 'Lista de regalos para el grupo Crew',
          categories: ['Deportes de riesgo', 'Libros']
          },
          {
          title :'Family',
          content: 'Lista de regalos para el grupo Family',
          categories: ['Family', 'Sport']
          },
          {
          title :'Friends',
          content: 'Lista de regalos para el grupo Friends',
          categories: ['Deportes de riesgo', 'Sport']
          },
          {
          title :'Kids',
          content: 'Lista de regalos para el grupo Kids',
          categories: ['Family', 'Toys']
          },
          {
          title :'Artists',
          content: 'Lista de regalos para el grupo Artists',
          categories: ['Exhibition', 'Sport']
          } 
      ]
};
