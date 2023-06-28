import emailjs from '@emailjs/browser';
import React, { useState } from 'react'
import styles from './index.module.scss'
import background from '../../images/topBackground.jpg'
import BottomBar from '../../Components/BottomBar';

const Request = () => {
  emailjs.init("UbnL3pcMFsg8EyGYQ");
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [message, setMessage] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailAddressChange = (event) => {
    setEmailAddress(event.target.value);
  };

  const handleTelephoneNumberChange = (event) => {
    setTelephoneNumber(event.target.value);
  };

  const handleServiceTypeChange = (event) => {
    setServiceType(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmitClicked = () => {
    if (firstName != '' && lastName != '' && emailAddress != '' && telephoneNumber != '') {
      emailjs.send("service_z73doeb", "template_ecqapkg", {
        first_name: firstName,
        last_name: lastName,
        email_address: emailAddress,
        telephone_number: telephoneNumber,
        service_type: serviceType,
        message: message,
      });
      alert('Thank you for your request!');
      setFirstName('');
      setLastName('');
      setEmailAddress('');
      setTelephoneNumber('');
      setServiceType('');
      setMessage('');
    } else {
      alert('Please fill out all of the *necessary fields');
    }
  }


  return (
    <div className={styles.wrapper}>

      <div className={styles.imageWrapper} style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: '33vw', width: '100%', marginTop: 10 }}>
        <h1>Request an Estimate</h1>
        <div className={styles.line}></div>
        <p>Fill out this short form, and a Jericho Foundation LLC. representative will contact you to provide you a FREE estimate. If you need immediate assistance, please call (708) 466-2533</p>
      </div>

      <div className={styles.infoWrapper}>
        <div className={styles.eachInfo}>
          <h1>Form for Requesting an Estimate</h1>
          <p>Please fill out the form and we will get back to you soon</p>
        </div>
      </div>

      <div className={styles.inputWrapper}>
        <div className={styles.nameWrapper}>
          <input className={styles.nameInputLeft} placeholder='First Name*' onChange={handleFirstNameChange} value={firstName} />
          <input className={styles.nameInputRight} placeholder='Last Name*' onChange={handleLastNameChange} value={lastName} />
        </div>
        <input className={styles.normalInput} placeholder='Email Address*' onChange={handleEmailAddressChange} value={emailAddress} />
        <input className={styles.normalInput} placeholder='Telephone Number*' onChange={handleTelephoneNumberChange} value={telephoneNumber} />
        <input className={styles.normalInput} placeholder='Service Type' onChange={handleServiceTypeChange} value={serviceType} />
        <input className={styles.messageInput} placeholder='Message' onChange={handleMessageChange} value={message} />
      </div>

      <button onClick={handleSubmitClicked} className={styles.submitButton}>
        SUBMIT {'>'}
      </button>

      <BottomBar />

    </div>
  )
}

export default Request;
