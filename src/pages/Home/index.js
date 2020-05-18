import React from 'react';
import { Container, Row } from 'react-bootstrap';

import CardCourse from '../../componentes/CardCourse';

import js from '../../images/js.svg';
import react from '../../images/react.svg';
import node from '../../images/node.svg';

const courses = [
  {
    title: 'Curso de JavaScript',
    icon: js,
    description: <>Aprenda uma das tecnologias mais usadas atualmente, o <b className='yellow'>JavaScript</b></>,
    url: '/javascript'
  },
  {
    title: 'Curso de React',
    icon: react,
    description: <>Aprenda uma das biblioteca mais amadas do mundo do JS o <b className='blue'>React</b></>,
    url: '/javascript'
  },
  {
    title: 'Curso NodeJS',
    icon: node,
    description: <>Aprenda usar JavaScript no backend da sua aplicação usando o <b className='green'>NodeJS</b></>,
    url: '/javascript'
  },

];

function Home() {
  return (
    <Container>
      <div className='p-5'></div>
      <Row>
        {courses.map(course =>
          <CardCourse
            title={course.title}
            description={course.description}
            icon={course.icon}
            url={course.url}
          />
        )}
      </Row>
    </Container>
  );
}

export default Home;
