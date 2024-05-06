
import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Modal } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { fetchProducts, deleteProducts, updateProducts } from '../features/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./AddProduct.module.css"
import { Link } from 'react-router-dom';

export default function Dashboard() {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.product)
    const [show, setShow] = useState(false);
    const [updateProduct, setUpdateProduct] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (id) => {
        dispatch(deleteProducts(id))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const { title, price, manufacturer, stock, description } = Object.fromEntries(formData)
        const updatedProduct = { id: updateProduct.id, title, price, manufacturer, stock, description }
        dispatch(updateProducts(updatedProduct))
        e.target.reset()
    }
    const handleUpdate = (id) => {
        const uProduct = products.filter(prod => prod.id == id)
        setUpdateProduct(uProduct[0])
    }
    useEffect(() => {
        dispatch(fetchProducts())
    }, [products])

    if (!products) return <h4 align="center">Loading...</h4>
    return (
        <Container>
            <Link className='btn btn-primary my-4' to={"/add-product"} variant="primary">ADD PRODUCT</Link>
            <h5 align={"center"} className='mb-2'>ALL PRODUCTS </h5>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price (₹)</th>
                        <th>Manufacturer</th>
                        <th>Stock</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {products && products.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.manufacturer}</td>
                            <td>{item.stock}</td>
                            <td width={"30%"}>{item.description}</td>
                            <td>
                                <Button className='mx-2' onClick={() => handleDelete(item.id)} variant="danger">Delete</Button>
                                <Button variant="primary" onClick={() => { handleUpdate(item.id); handleShow() }}>Update</Button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>

            <Modal show={show} size='lg' onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>UPDATE PRODUCT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="" action="" onSubmit={(e) => handleSubmit(e)}>
                        <div className={styles.form_div}>
                            <label htmlFor="">Product Name</label>
                            <input defaultValue={updateProduct.title} name='title' type="text" placeholder='Product Name' />
                        </div>
                        <div className={styles.form_div}>
                            <label htmlFor="">Price</label>
                            <input defaultValue={updateProduct.price} name='price' type="text" placeholder='Price' />
                        </div>
                        <div className={styles.form_div}>
                            <label htmlFor="">Manufacturer</label>
                            <input defaultValue={updateProduct.manufacturer} name='manufacturer' type="text" placeholder='Manufacturer' />
                        </div>
                        <div className={styles.form_div}>
                            <label htmlFor="">Stock</label>
                            <input defaultValue={updateProduct.stock} name='stock' type="text" placeholder='Stock' />
                        </div>
                        <div className={styles.form_div}>
                            <label htmlFor="">Description</label>
                            <textarea defaultValue={updateProduct.description} name="description" id="" cols="30" rows="3" placeholder='Description'></textarea>
                        </div>
                        <div className={styles.form_div}>
                            <Button type="submit" variant="primary" onClick={handleClose}>
                                Save
                            </Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </Container >
    )
}
