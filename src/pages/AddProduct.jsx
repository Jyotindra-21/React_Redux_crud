import { Container } from 'react-bootstrap';
import styles from './AddProduct.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../features/productSlice';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



function AddProduct() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        for (const [key, value] of formData.entries()) {
            if (value.trim() === '') {
                toast.error(`${key} is required!`);
                document.querySelector(`#${key}`).focus()
                return;
            }
        }
        let newId = new Date().getTime().toString()
        formData.append("id", newId)
        const { id, title, price, manufacturer, stock, description } = Object.fromEntries(formData)
        const newProduct = { id, title, price, manufacturer, stock, description }
        dispatch(addProducts(newProduct))
        e.target.reset()
        navigate("/")
    }
    return (
        <Container className='p-5'>
            <Link className='btn btn-primary my-2' to={"/"} variant="primary">Back</Link>

            <h5 align={"center"} className='mb-2'>PRODUCT FORM</h5>
            <form className={styles.control_form} action="" onSubmit={handleSubmit}>
                <div className={styles.form_div}>
                    <label htmlFor="">Product Title</label>
                    <input name='title' id='title' type="text" placeholder='Product Title' />
                </div>
                <div className={styles.form_div}>
                    <label htmlFor="">Price</label>
                    <input name='price' id='price' type="text" placeholder='Price' />
                </div>
                <div className={styles.form_div}>
                    <label htmlFor="">Manufacturer</label>
                    <input name='manufacturer' id='manufacturer' type="text" placeholder='Manufacturer' />
                </div>
                <div className={styles.form_div}>
                    <label htmlFor="">Stock</label>
                    <input name='stock' id='stock' type="text" placeholder='Stock' />
                </div>
                <div className={styles.form_div}>
                    <label htmlFor="">Description</label>
                    <textarea name="description" id="description" cols="30" rows="3" placeholder='Description'></textarea>
                </div>
                <div className={styles.form_div}>
                    <button type='submit'>Add</button>
                    <button className={styles.reset_btn} type='reset'>Reset</button>
                </div>
            </form>

        </Container>
    );
}

export default AddProduct;