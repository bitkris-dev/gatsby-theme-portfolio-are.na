/** @jsx jsx **/
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'

import ProjectsGridItem from './ProjectsGridItem'

export default function ProjectsGrid({ projects = [] }) {
  return (
    <section
      sx={{
        display: 'grid',
        gridTemplateColumns: ['1fr', 'repeat(2, 1fr)'],
        gridColumnGap: 4,
        gridRowGap: 4,
      }}
    >
      {projects.map((item, index) => (
        <ProjectsGridItem item={item} key={index} />
      ))}
    </section>
  )
}
