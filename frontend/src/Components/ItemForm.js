import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) =>{
    const [first_name, setFirst_Name] = useState('');
    const [middle_name, setMiddle_Name] = useState('');
    const [last_name, setLast_Name] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date_of_birth, setDate_of_birth] =useState('');
    const [place_of_birth, setPlace_of_birth] = useState('');
    const [sex, setSex] = useState('');
    const [civil_status, setCivil_status] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [blood_type, setBlood_type] = useState('');
    const [gsis_id, setGsis_id] = useState('');
    const [pag_ibig_id, setPag_ibig_id] = useState('');
    const [philhealth_id, setPhilhealt_id] = useState('');
    const [sss_id, setSss_id] = useState('');
    const [tin_id, setTin_id] = useState('');
    const [agency_employee, setAgency_employee] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [residental_address, setResidental_address] = useState('');
    const [zip_code, setZip_code] = useState('');
    const [permanent_address, setPermanent_address] = useState('');
    const [telephone_no, setTelephone_no] = useState('');
    const [mobile_no, setMobile_no] = useState('');
    const [spouse_surname, setSpouse_surname] = useState('');
    const [spouse_first_name, setSpouse_first_name] = useState('');
    const [spouse_middle_name, setSpouse_middle_name] = useState('');
    const [occupation, setOccupation] = useState('');
    const [employer_business_name, setEmployer_business_name] = useState('');
    const [business_address, setBusiness_address] = useState('');
    const [name_of_children, setName_of_children] = useState('');
    const [fathers_surname, setFathers_surname] = useState('');
    const [fathers_first_name, setFathers_first_name] = useState('');
    const [fathers_middle_name, setFathers_middle_name] = useState('');
    const [mothers_maiden_name, setMothers_maiden_name] = useState('');
    const [mothers_surname, setMothers_surname] = useState('');
    const [mothers_first_name, setMothers_first_name] = useState('');
    const [mothers_middle_name, setMothers_middle_name]= useState('');



  useEffect(() => {
    if (item) {
    setFirst_Name(item.first_name);
    setMiddle_Name(item.middle_name);
    setLast_Name(item.last_name);
    setAddress(item.address);
    setEmail(item.email);
    setPhone(item.phone);
    setDate_of_birth(item.date_of_birth);
    setPlace_of_birth(item.place_of_birth);
    setSex(item.sex);
    setCivil_status(item.civil_status);
    setHeight(item.height);
    setWeight(item.weight);
    setBlood_type(item.blood_type);
    setGsis_id(item.gsis_id);
    setPag_ibig_id(item.pag_ibig_id);
    setPhilhealt_id(item.philhealth_id);
    setSss_id(item.sss_id);
    setTin_id(item.tin_id);
    setAgency_employee(item.agency_employee);
    setCitizenship(item.citizenship);
    setResidental_address(item.residental_address);
    setZip_code(item.zip_code);
    setPermanent_address(item.permanent_address);
    setTelephone_no(item.telephone_no);
    setMobile_no(item.mobile_no);
    setSpouse_surname(item.spouse_surname);
    setSpouse_first_name(item.spouse_first_name);
    setSpouse_middle_name(item.spouse_middle_name);
    setOccupation(item.occupation);
    setEmployer_business_name(item.employer_business_name);
    setBusiness_address(item.business_address);
    setName_of_children(item.name_of_children);
    setFathers_surname(item.fathers_surname);
    setFathers_first_name(item.fathers_first_name);
    setFathers_middle_name(item.fathers_middle_name);
    setMothers_maiden_name(item.mothers_maiden_name);
    setMothers_surname(item.mothers_surname);
    setMothers_first_name(item.mothers_first_name);
    setMothers_middle_name(item.mothers_middle_name);




    }
  }, [item]);
const handleSubmit = async(event) => {
    event.preventDefault();
    const data = {first_name, middle_name, last_name, address, email, phone, date_of_birth, place_of_birth, sex, civil_status, height, weight, blood_type, gsis_id, 
        pag_ibig_id, philhealth_id, sss_id, tin_id, agency_employee, citizenship, residental_address, zip_code, permanent_address, telephone_no, mobile_no, spouse_surname,
        spouse_first_name, spouse_middle_name, occupation, employer_business_name, business_address, name_of_children, fathers_surname, fathers_first_name, fathers_middle_name, 
        mothers_maiden_name, mothers_surname, mothers_first_name, mothers_middle_name};
    try {
        if (item) {
            await
            axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
        } else {
            axios.post('http://localhost:8000/api/items/', data);
        }
    onSuccess();
 } catch (error) {
    console.error('There was an error submitting the form!', error)
 }
 };
 return (
    <div className='Form' id='table'>
    <form onSubmit = {handleSubmit}>
    <div className='table-form'>
        <label>First Name:</label> <br/>
        <input type="text" value={first_name} onChange={(e) => setFirst_Name(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Middle Name:</label> <br/>
        <input type="text" value={middle_name} onChange={(e) => setMiddle_Name(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Last Name:</label> <br/>
        <input type="text" value={last_name} onChange={(e) => setLast_Name(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Address:</label> <br/>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Email:</label> <br/>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Phone:</label> <br/>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Date_of_birth:</label> <br/>
        <input type="date" value={date_of_birth} onChange={(e) => setDate_of_birth(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Place of birth:</label> <br/>
        <input type="text" value={place_of_birth} onChange={(e) => setPlace_of_birth(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Sex:</label> <br/>
        <input type="text" value={sex} onChange={(e) => setSex(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Civil_status:</label> <br/>
        <input type="text" value={civil_status} onChange={(e) => setCivil_status(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Height:</label> <br/>
        <input type="text" value={height} onChange={(e) => setHeight(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Weight:</label> <br/>
        <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Blood_type:</label> <br/>
        <input type="text" value={blood_type} onChange={(e) => setBlood_type(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Gsis_id:</label> <br/>
        <input type="text" value={gsis_id} onChange={(e) => setGsis_id(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Pag_ibig_id:</label> <br/>
        <input type="text" value={pag_ibig_id} onChange={(e) => setPag_ibig_id(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Philhealth_id:</label> <br/>
        <input type="text" value={philhealth_id} onChange={(e) => setPhilhealt_id(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Sss_id:</label> <br/>
        <input type="text" value={sss_id} onChange={(e) => setSss_id(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Tin_id:</label> <br/>
        <input type="text" value={tin_id} onChange={(e) => setTin_id(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Agency_employee:</label> <br/>
        <input type="text" value={agency_employee} onChange={(e) => setAgency_employee(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Citizenship:</label> <br/>
        <input type="text" value={citizenship} onChange={(e) => setCitizenship(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Residental_address:</label> <br/>
        <input type="text" value={residental_address} onChange={(e) => setResidental_address(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Zip_code:</label> <br/>
        <input type="text" value={zip_code} onChange={(e) => setZip_code(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Permanent_address:</label> <br/>
        <input type="text" value={permanent_address} onChange={(e) => setPermanent_address(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Telephone_no:</label> <br/>
        <input type="text" value={telephone_no} onChange={(e) => setTelephone_no(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Mobile_no:</label> <br/>
        <input type="text" value={mobile_no} onChange={(e) => setMobile_no(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Spouse_surname:</label> <br/>
        <input type="text" value={spouse_surname} onChange={(e) => setSpouse_surname(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Spouse_first_name:</label> <br/>
        <input type="text" value={spouse_first_name} onChange={(e) => setSpouse_first_name(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Spouse_middle_name:</label> <br/>
        <input type="text" value={spouse_middle_name} onChange={(e) => setSpouse_middle_name(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Occupation:</label> <br/>
        <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Employer_business_name:</label> <br/>
        <input type="text" value={employer_business_name} onChange={(e) => setEmployer_business_name(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Business_address:</label> <br/>
        <input type="text" value={business_address} onChange={(e) => setBusiness_address(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Telephone_no:</label> <br/>
        <input type="text" value={telephone_no} onChange={(e) => setTelephone_no(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Name_of_children:</label> <br/>
        <input type="text" value={name_of_children} onChange={(e) => setName_of_children(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Fathers_surname:</label> <br/>
        <input type="text" value={fathers_surname} onChange={(e) => setFathers_surname(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Fathers_first_name:</label> <br/>
        <input type="text" value={fathers_first_name} onChange={(e) => setFathers_first_name(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Fathers_middle_name:</label> <br/>
        <input type="text" value={fathers_middle_name} onChange={(e) => setFathers_middle_name(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Mothers_maiden_name:</label> <br/>
        <input type="text" value={mothers_maiden_name} onChange={(e) => setMothers_maiden_name(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Mothers_surname:</label> <br/>
        <input type="text" value={mothers_surname} onChange={(e) => setMothers_surname(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Mothers_first_name:</label> <br/>
        <input type="text" value={mothers_first_name} onChange={(e) => setMothers_first_name(e.target.value)}/>
    </div>
    <hr/>
    <div className='table-form'>
        <label>Mothers_middle_name:</label> <br/>
        <input type="text" value={mothers_middle_name} onChange={(e) => setMothers_middle_name(e.target.value)}/>
    </div>
    <hr/>
        <button type="submit">Submit</button>
    </form>
    </div>
  );
};
export default ItemForm;