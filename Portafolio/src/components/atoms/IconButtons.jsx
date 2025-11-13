import React from 'react'

export default function IconButton({ icon: Icon, href }) {
  return (
    <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="border rounded-md border-[#C4C4C4] bg-[#C4C4C4] p-2"
    >
        <Icon className="size-6 lg:size-7"/>
    </a>
  )
}