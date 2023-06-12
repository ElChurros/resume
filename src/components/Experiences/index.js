import React from 'react';

import Section from '../Section';

export function Experiences(props) {
  return (
    <>
      <Section id='experience.epitech' location period description companyLink="https://www.epitech.eu/"/>
      <Section id='experience.supbiotech' location period description companyLink="https://www.supbiotech.fr/"/>
      <Section id='experience.audiowizard' locaion period description companyLink='https://www.audiowizard.fr'/>
      <Section id='experience.apm' location period description companyLink="https://www.apmtechnologies.com"/>
      <Section id='experience.codeac' location period description companyLink="https://www.coding-academy.fr"/>
      <Section id='experience.sifoee' location period description companyLink="https://www.sifoee.com"/>
    </>
  );
}
  
export default Experiences;