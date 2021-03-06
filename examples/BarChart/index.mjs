/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/DateInput/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';


export const BarChart = {
  name: 'BarChart',
  category: categories.charts,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
  },
};

