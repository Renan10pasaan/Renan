import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = ({onEdit, onDelete }) => {
    const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);
  const fetchItems = async () => {
      try {
            const response = await
            axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
    } catch (error) {
        console.error('There was an error fetching the items!', error)
     }
 };
 return (
    <div className='table'>
        <center>
    <h1>ITEMS</h1>
        </center>
    <ul>
        {items.map(item => (
            <li key={item.id}>
                {item.first_name} | {item.middle_name} | {item.last_name} | {item.address} | {item.email} | {item.phone} |
                {item.date_of_birth} | {item.place_of_birth} | {item.sex} | {item.civil_status} | {item.height} | {item.weight} |
                {item.blood_type} | {item.gsis_id} | {item.pag_ibig_id} | {item.philhealt_id} | {item.sss_id} | {item.tin_id} | 
                {item.agency_employee} | {item.citizenship} | {item.residental_address}| {item.zip_code} | {item.permanent_address} | 
                {item.telephone_no} | {item.mobile_no} | {item.spouse_surname} | {item.spouse_first_name} | {item.spouse_middle_name} | 
                {item.occupation} | {item.employer_business_name} | {item.business_address} | {item.name_of_children} | {item.fathers_surname} | 
                {item.fathers_first_name} | {item.fathers_middle_name} | {item.mothers_maiden_name} | {item.mothers_surname} | {item.mothers_first_name} | 
                {item.mothers_middle_name} 
                    <button onClick={() => onEdit(item)}>Edit</button>
                    <button onClick={() => onDelete(item.id)}>Delete</button>  
            </li>
         ))}
    </ul>
     </div>
    );
}
export default ItemList;