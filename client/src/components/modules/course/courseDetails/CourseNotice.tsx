import React from 'react'

type Props = {
  [x: string]: any;
}

const CourseNotice = (props: Props) => {
  const { courseData } = props
  return (
    <div>{courseData.notice}</div>
  )
}

export default CourseNotice