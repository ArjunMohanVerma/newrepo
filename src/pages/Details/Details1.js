import Nav from "../Navbar/Nav"
import Footer from "../Footer/Footer"
import "./Details1.css"

export default function Details1(){
    return(
        <>
        <Nav/>
        <div className="booody">
        <div class="coer">
        <h1>Understanding Your Skin: A Guide to Different Skin Types and How to Care for Them</h1>
        <p>Healthy, glowing skin starts with understanding your unique skin type. Knowing your skin type allows you to choose the right products, create an effective skincare routine, and address specific concerns. Whether your skin is oily, dry, combination, sensitive, or normal, each type has its own set of characteristics and needs. Let’s explore the different skin types and how to...</p>
        
        <section class="skin-type">
            <h2>Oily Skin</h2>
            <p><strong>Characteristics:</strong> Oily skin has a shiny complexion, especially in the T-zone (forehead, nose, and chin). It is generally prone to acne, blackheads, and whiteheads.</p>
            
            <h3>Why is My Skin Oily?</h3>
            <p>Oily skin is the result of overactive sebaceous glands that produce excess sebum (oil). While sebum helps protect and moisturize the skin, too much of it can lead to clogged pores and breakouts.</p>
            
            <h3>Tips to Take Care of Oily Skin</h3>
            <ul>
                <li><strong>Cleanse Regularly:</strong> Use a gentle, foaming cleanser twice a day to remove excess oil without stripping your skin.</li>
                <li><strong>Exfoliate:</strong> Incorporate a salicylic acid-based exfoliator to help unclog pores and reduce acne.</li>
                <li><strong>Moisturize:</strong> Use oil-free, non-comedogenic moisturizers that hydrate without adding extra oil.</li>
                <li><strong>Protect from the Sun:</strong> Use a lightweight, matte-finish sunscreen daily.</li>
            </ul>
        </section>
        
        <section class="skin-type">
            <h2>Dry Skin</h2>
            <h3>How Do I Determine My Skin is Dry Skin?</h3>
            <p>Your skin would be tight, rough, or flaky in texture, have a dull complexion, and be prone to redness, irritation, and fine lines.</p>
            
            <h3>What Are the Reasons for My Dry Skin?</h3>
            
        </section>
        </div>
        </div>
        <Footer/>
        </>
    )
}