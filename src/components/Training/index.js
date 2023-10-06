import FormattedMessage from '../FormattedMessage';
import Section from '../Section';
import SectionContext from '../../context/sectionContext';

const Training = () => {
  return (
    <>
      <SectionContext.Provider value='training.epitech'>
        <Section location period titleLink="https://www.epitech.eu">
          <p><FormattedMessage id='description' /></p>
          <ul>
            {[...Array(6)].map((v, i) => <li key={i}><FormattedMessage id={`project${i + 1}`}/></li>)}
          </ul>
        </Section>
      </SectionContext.Provider>
      <SectionContext.Provider value='training.csusm'>
        <Section location period description titleLink="https://www.csusm.edu/" />
      </SectionContext.Provider>
      <SectionContext.Provider value='training.epfl'>
        <Section location period titleLink="https://www.epfl.ch/" >
          <p><FormattedMessage id='description'/></p>
          <ul>
            {[...Array(8)].map((v, i) => <li key={i}><FormattedMessage id={`course${i + 1}`}/></li>)}
          </ul>
        </Section>
      </SectionContext.Provider>
      <SectionContext.Provider value='training.highschool'>
        <Section location period>
          <p>
            <FormattedMessage id='description'/>
          </p>
        </Section>
      </SectionContext.Provider>
    </>
  );
}

export default Training;