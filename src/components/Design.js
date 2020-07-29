import React, { useState } from 'react';
import Header from './HeaderFooter/Header';
import headerLogo from '../images/tarjetas-molonas.png';
import Collapsible from './Collapsible';
import Preview from './cardPreview/Preview';
import Palletes from './color-palletes/Palletes.js';
import Fill from './FillComponents/Fill';
import ShareContent from './shareComponents/ShareContent';
import Footer from './HeaderFooter/Footer';

let userData = {
  name: 'Mari Carmen',
  job: 'Cool Frontend Developer',
  email: 'lamari@gmail.com',
  phone: '666-66-66-66',
  linkedin: 'lamari',
  github: 'lamari',
  photo: '',
  palette: '2',
};

function Design() {
  const [data, setData] = useState(userData);

  const handleImputsValue = (ev) => {
    const value = ev.target.value;
    const attr = ev.target.name;
    data[attr] = value;
    setData({
      /* name: data.name,
      job: data.job,
      email: data.email,
      linkedin: data.linkedin,
      github: data.github,
      phone: data.phone, */
      ...data,
      [attr]: value,
    });
  };

  return (
    <div>
      <Header />
      <main className='design__container'>
        <section className='preview'>
          <Preview data={data} />
        </section>
        <section className='customizer'>
          <div className='customizer__wrapper'>
            <form className='form'>
              <fieldset className='form__design collapsable--open'>
                <Collapsible name='Diseña' icon='far fa-object-ungroup' />
                <Palletes />
              </fieldset>
              <fieldset className='form__fill collapsable--open'>
                <Collapsible name='Rellena' icon='far fa-keyboard' />
                <Fill imputValue={handleImputsValue} />
              </fieldset>

              <fieldset className='form__share collapsable--open'>
                <Collapsible name='Comparte' icon='fas fa-share-alt' />
                <ShareContent />
              </fieldset>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Design;
