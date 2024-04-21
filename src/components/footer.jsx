import { LuHome } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { RiCoupon2Line } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


export default () => {
    return (
        <div className="footer-end" >
            <div className="footerIcons">
                <div className="ap_footer_school">


                    <div className="footerIcons">




                        <LuHome className="icons home" />
                        <p>Home</p>
                        <LuShoppingCart className="icons shopping" />
                        <p>Shop</p>
                        <RiCoupon2Line className="icons coupon" />
                        <p>Coupon</p>
                        <FaFacebook className="icons facebook" />
                        <p>Facebook</p>
                        <FaInstagram className="icons instagram" />
                        <p>Instagram</p>



                    </div>

                    <div className="ap_footer_school">


                        <p>University of Florida</p>
                        <p>MMC6950 Capstone Spring 2024</p>
                        <p>&copy; 2024 Karen L Brody / Baby Formula App </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

