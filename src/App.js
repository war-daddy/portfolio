import './App.css';
import Card from './components/card';
import Main from './components/main';
import EducationCard from "./components/EducationCard";
import Footer from './components/Footer';
import React from 'react';

function App() {
  return (
    <div className="App">
     
     <Card/>
     <Main/>
     <div className='d-flex justify-content-center flex-wrap gap-5 mt-5'>
        <EducationCard
          degree="Bachelor of Technology"
          institution="Truba College of Science and Technology"
          year="2023"
          description="Focused on software engineering and completed projects in React.js, Node.js, and more."
        />
        <EducationCard
          degree="Intermediate"
          institution="A.K. Gopalan College"
          year="2019"
          description="Specialized in mathematics"
        />
        <EducationCard
          degree="Matriculation"
          institution="L/S High School Ramankabad"
          year="2016"
          description="All Subjects"
        />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
