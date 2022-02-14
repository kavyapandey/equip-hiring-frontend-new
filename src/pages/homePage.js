import React from "react";
import ContactUs from "../components/contactUs";
export default function HomePage(){
    return( <div>
         <header class="masthead">
            <div class="container px-4 px-lg-5 h-100">
                <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-8 align-self-end">
                        <h1 class="text-white font-weight-bold">Enjoy hassle free equipment rental experience.  </h1>
                        <hr class="divider" />
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <p class="text-white-75 mb-5">It's now or never ! Time to rent from us !</p>
                        <a class="btn btn-primary btn-xl" href="#about">Find Out More</a>
                    </div>
                </div>
            </div>
        </header>
        <section class="page-section bg-primary" id="about">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="text-white mt-0">We've got what you need with flexible renting starting with 1 day!</h2>
                        <hr class="divider divider-light" />
                        <p class="text-white-75 mb-4">Our opening hours are Monday-Friday 08.00 to 18.00</p>
                        <a class="btn btn-light btn-xl" href="#services">Our services</a>
                    </div>
                </div>
            </div>
        </section>
        <section class="page-section" id="services">
            <div class="container px-4 px-lg-5">
                <h2 class="text-center mt-0">At Your Service</h2>
                <hr class="divider" />
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-gem fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">One stop shop</h3>
                            <p class="text-muted mb-0">
All camera equipments rental requirements under one roof. If you don’t find something, call us and we will help you.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-laptop fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Quality Checked products</h3>
                            <p class="text-muted mb-0">Each product is dispatched after quality check done by us.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-globe fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Most Economical Solutions</h3>
                            <p class="text-muted mb-0">Taking camera equipments on rent is economical and we further gives you the best rates for both short term and long term rentals.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-heart fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Great Customer Service</h3>
                            <p class="text-muted mb-0">As soon as you place an order, we will get in touch with you to ensure your requirements are met by our team.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ContactUs></ContactUs>
    </div>
    )
}