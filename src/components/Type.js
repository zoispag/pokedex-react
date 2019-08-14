import React from 'react';

function capitalize(val) {
  if (!val) return ''
  val = val.toString()
  return val.charAt(0).toUpperCase() + val.slice(1)
}

function makeTypeClass(str) {
  return `ml-1 type-${str}`
}

function Pokemon({type}) {
  return (
    <div className={makeTypeClass(type.name)}>
      <span>{ capitalize(type.name) }</span>
    </div>
  )
}

export default Pokemon;
