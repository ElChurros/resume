import SectionContext from '../../context/sectionContext';
import Section from '../Section';

const Experiences = () => {
  return (
    <>
      <SectionContext.Provider value='experience.epitech'>
        <Section location period description companyLink="https://www.epitech.eu/"/>
      </SectionContext.Provider>
      <SectionContext.Provider value='experience.supbiotech'>
        <Section location period description companyLink="https://www.supbiotech.fr/"/>
      </SectionContext.Provider>
      <SectionContext.Provider value='experience.audiowizard'>
        <Section location period description companyLink='https://www.audiowizard.fr'/>
      </SectionContext.Provider>
      <SectionContext.Provider value='experience.apm'>
        <Section location period description companyLink="https://www.apmtechnologies.com"/>
      </SectionContext.Provider>
      <SectionContext.Provider value='experience.codeac'>
        <Section location period description companyLink="https://www.coding-academy.fr"/>
      </SectionContext.Provider>
      <SectionContext.Provider value='experience.sifoee'>
        <Section location period description companyLink="https://www.sifoee.com"/>
      </SectionContext.Provider>
    </>
  );
}
  
export default Experiences;