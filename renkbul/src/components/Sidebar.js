import React from "react"
import {useState} from 'react'
import Modal from "react-modal" 
import {GrClose} from 'react-icons/gr';

function Sidebar(){

    const[modalIsOpen,setModalIsOpen]=useState(false)
    const toggleModal=()=>{
        setModalIsOpen(!modalIsOpen);
    }


    return(
        <>
       <aside className="sidebar">
       <div className="logo">
            <a>Renk<b>Bul</b></a>
        </div>
        <div className="description">
            Hepimizin kullandığı markaların logolarında hangi renkleri tercih ettiğini merak ediyor musunuz? 
            Binlerce renk bu sayfada.
        </div>
        <nav className="menu">
            <ul>
                <li>
                    <a onClick={toggleModal}>Renk Bul Hakkında</a>
                </li>
            </ul>
        </nav>
       </aside>

       <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="about-modal"
        overlayClassName="about-modal-overlay">      
        <button className="modal-close-btn" onClick={toggleModal}><GrClose/></button>
       <h3>Renk Bul Hakkında</h3>
       <p>
        Binlerce çeşit markanın renklerine en hızlı şekilde ulaşabileceğiniz web sitesi...
       </p>
       <p>
        Renk bulmanın en hızlı ve kolay yolu.
       </p>
      </Modal>
        </>
    )
}
export default Sidebar
