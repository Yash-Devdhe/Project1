import React from 'react'
import Plans from '@/Components/Plans'
import { getStaticPaths } from 'next/router';

function plans() {
  return (
    <div>
      <Plans/>
    </div>
  )
}

export default plans
