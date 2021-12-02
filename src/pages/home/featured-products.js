import { Component } from "react";
import PropTypes from 'prop-types';
import { CartSvg } from "../../components/svgs/cart";
import { HeartSvg } from "../../components/svgs/heart-svg";
import { ZoomSvg } from "../../components/svgs/zoom-svg";
import chair1 from "../../images/chair-1.png";
import chair2 from "../../images/chair-2.png";
import chair3 from "../../images/chair-3.png";
import chair4 from "../../images/chair-4.png";

export class FeaturedProduct extends Component {
    render() {
        return <section className="flex flex-col bg-white py-28 px-1/5 w-full">

            <h1 className="text-indigo-900 font-semibold text-4xl font-josefin-sans self-center">Featured Products</h1>

            <div className="flex flex-wrap mt-12 w-full">
                {
                    productArray.map((data, index) => {
                        return <EachProduct name={data.name} image={data.image} key={`product-key-` + index} />
                    })
                }
            </div>

        </section>
    }
}

const productArray = [
    {
        name: "Cantilever chair",
        image: chair1
    },
    {
        name: "Different chair",
        image: chair2
    },
    {
        name: "SitDown chair",
        image: chair3
    },
    {
        name: "Standing chair",
        image: chair4
    }
]

class EachProduct extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }
    constructor(props) {
        super(props)
    }

    render() {

        return <div className="flex flex-col bg-white mx-2 my-2 w-full md:w-2/5 lg:w-64 group">

            <section className="bg-product-gray h-56 rounded-t-sm px-2.5 group-hover:bg-gray-50 w-full">
                <div className="flex items-center mt-2.5 w-full">
                    <div className="hidden group-hover:flex items-center">
                        <div className="flex items-center justify-center bg-blue-400 bg-opacity-10 rounded-full cursor-pointer mr-4 w-7 h-7">
                            <CartSvg className="fill-current text-brand-blue w-5 h-4" />
                        </div>
                        <HeartSvg className="fill-current text-light-blue cursor-pointer mr-4 w-5 h-4" />
                        <ZoomSvg className="fill-current text-light-blue cursor-pointer w-5 h-4" />
                    </div>


                </div>

                <div className="flex flex-col items-center w-full">
                    <div className="self-center w-44 h-44 group-hover:w-32 group-hover:h-32">
                        <img src={this.props.image} alt="chair product" className="object-cover w-full h-full" />
                    </div>

                    <button className="hidden text-white bg-brand-green font-josefin-sans rounded group-hover:block mt-1 py-1.5 px-3">
                        View Details
                    </button>

                </div>
            </section>

            <section className="flex flex-col bg-white shadow-product group-hover:bg-brand-blue pt-3.5 pb-4  w-full">
                <h3 className="text-lg text-brand-pink text-center tracking-wide font-bold font-lato group-hover:text-white  ">
                    {this.props.name}
                </h3>

                <div className="flex justify-center space-x-1 mt-3">
                    <div className="bg-cyan rounded-lg w-3.5 h-1"> </div>
                    <div className="bg-brand-pink rounded-lg w-3.5 h-1"> </div>
                    <div className="bg-brand-blue rounded-lg group-hover:bg-yellow-300 w-3.5 h-1"> </div>
                </div>

                <p className="text-blue-900 text-center text-base font-josefin-sans group-hover:text-white  mt-3 ">Code - Y523201</p>

                <p className="text-blue-900 text-center text-base font-josefin-sans group-hover:text-white  mt-3 ">$42.00</p>

            </section>

        </div>
    }
}