/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Tabs/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';


export const Tabs = {
  name: 'Tabs',
  category: categories.controls,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
  },
};

