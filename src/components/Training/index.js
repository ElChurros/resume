import React from 'react';

import Section from '../Section';

export function Training(props) {
  return (
    <>
      <Section id='training.epitech' location period description titleLink="https://www.epitech.eu"/>
      <Section id='training.csusm' location period description titleLink="https://www.csusm.edu/" />
      <Section id='training.epfl' location period description titleLink="https://www.epfl.ch/" />
      <Section id='training.highschool' location period description/>
    </>
  );
}

export default Training;