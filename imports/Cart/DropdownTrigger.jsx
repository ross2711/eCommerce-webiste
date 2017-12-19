import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'
// import DropdownTrigger from 'DropdownTrigger'

const trigger = (
  <span>
    <Icon name='user' /> Hello, Ross
  </span>
)

const options = [
  {
    key: 'user',
    text: <span>Signed in as <strong>Ross Fleming</strong></span>,
    disabled: true,
  },
  { key: 'profile', text: 'Your Profile' },
  { key: 'stars', text: 'Your Stars' },
  { key: 'explore', text: 'Explore' },
  { key: 'integrations', text: 'Integrations' },
  { key: 'help', text: 'Help' },
  { key: 'settings', text: 'Settings' },
  { key: 'sign-out', text: 'Sign Out' },
]

const DropdownTrigger = () => (
  <Dropdown trigger={trigger} className="massive" options={options} />
)

export default DropdownTrigger