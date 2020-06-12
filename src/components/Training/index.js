import React from 'react';

import Section from '../Section';
import { FormattedMessage } from 'react-intl';

export function Training(props) {
  return (
    <>
      <Section id='training.epitech' location period titleLink="https://www.epitech.eu">
        <p><FormattedMessage id='training.epitech.description' /></p>
        <ul>
          {[...Array(6)].map((v, i) => <li key={i}><FormattedMessage id={`training.epitech.project${i + 1}`}/></li>)}
        </ul>
      </Section>
      <Section id='training.csusm' location period description titleLink="https://www.csusm.edu/" />
      <Section id='training.epfl' location period titleLink="https://www.epfl.ch/" >
        <p><FormattedMessage id='training.epfl.description'/></p>
        <ul>
          {[...Array(8)].map((v, i) => <li key={i}><FormattedMessage id={`training.epfl.course${i + 1}`}/></li>)}
        </ul>
      </Section>
      <Section id='training.highschool' location period>
        <p>
          <FormattedMessage id='training.highschool.description'/>
        </p>
      </Section>
    </>
  );
}

export default Training;