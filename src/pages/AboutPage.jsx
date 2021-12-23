import React from 'react';
import Cards from '../components/shared/Card';

function AboutPage() {
  return (
    <Cards>
      <div className='about'>
        <h1>About This Project</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officia
          dolor ipsum officiis aperiam ratione velit, quos corrupti eveniet
          harum incidunt dolorem.
        </p>
        <p>Version: 1.0.0</p>

        <p>
          <a href='/'>Back to Home</a>
        </p>
      </div>
    </Cards>
  );
}

export default AboutPage;
