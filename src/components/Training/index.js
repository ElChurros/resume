import FormattedMessage from '../FormattedMessage'
import Section from '../Section'

const Training = () => {
  return <>
    <Section prefix='training.epitech' location period titleLink="https://www.epitech.eu">
      <p><FormattedMessage id='description' /></p>
      <ul>
        {[...Array(6)].map((v, i) => <li key={i}><FormattedMessage id={`project${i + 1}`} /></li>)}
      </ul>
    </Section>
    <Section prefix='training.csusm' location period description titleLink="https://www.csusm.edu/" />
    <Section prefix='training.epfl' location period titleLink="https://www.epfl.ch/" >
      <p><FormattedMessage id='description' /></p>
      <ul>
        {[...Array(8)].map((v, i) => <li key={i}><FormattedMessage id={`course${i + 1}`} /></li>)}
      </ul>
    </Section>
    <Section prefix='training.highschool' location period>
      <p>
        <FormattedMessage id='description' />
      </p>
    </Section>
  </>
}

export default Training