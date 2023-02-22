import { ITableHeader } from '../components/Table/Header/type'

export const CommitteeTableHeader: ITableHeader = {
  headers: [
    { label: 'órgão', editable: false, type: 'text' },
    { label: 'vínculo', editable: false, type: 'text' },
    { label: 'portaria', editable: false, type: 'text' },
    { label: 'período', editable: false, type: 'text' },
    { label: 'mandato', editable: false, type: 'text' },
  ],
  sizes: [5, 1, 2, 3, 1],
  type: 'primary',
}
