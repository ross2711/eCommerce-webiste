import React from 'react'
import { Dropdown } from 'semantic-ui-react'
// import titleOptions from './titleOptions'

const titleOptions = [
  { key: 'mr', text: 'Mr', value: 'mr' },
  { key: 'mrs', text: 'Mrs', value: 'mrs' },
  { key: 'miss', text: 'Miss', value: 'miss' },
]

const DropdownTitle = () => (
  <Dropdown placeholder='Title' fluid search selection options={titleOptions} />
  {/*<Dropdown options={} onChange={props.passTitle} />*/}
)

export default DropdownTitle