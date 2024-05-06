import { Container } from 'react-bootstrap';
import styles from './AddProduct.module.css'
function UpdateProduct() {
    return (
        <Container className='p-5'>
            <h5 className='mb-2'>PRODUCT FORM</h5>
            <form className={styles.control_form} action="">
                <div className={styles.form_div}>
                    <label htmlFor="">Product Name</label>
                    <input type="text" placeholder='Product Name'/>
                </div>
                <div className={styles.form_div}>
                    <label htmlFor="">Price</label>
                    <input type="text" placeholder='Price' />
                </div>
                <div className={styles.form_div}>
                    <label htmlFor="">Manufacturer</label>
                    <input type="text" placeholder='Manufacturer' />
                </div>
                <div className={styles.form_div}>
                    <label htmlFor="">Stock</label>
                    <input type="text" placeholder='Stock' />
                </div>
                <div className={styles.form_div}>
                    <label htmlFor="">Description</label>
                    <textarea name="" id="" cols="30" rows="3" placeholder='Description'></textarea>
                </div>
                <div className={styles.form_div}>
                    <button type='submit'>Add</button>
                    <button className={styles.reset_btn} type='reset'>Reset</button>
                </div>
            </form>

        </Container>
    );
}

export default UpdateProduct;