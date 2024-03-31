import Banner from "@/components/Home/Banner";
import FeaturedTools from "@/components/Home/FeaturedTools";
import Pricing from "@/components/Home/Pricing";
import Testimonials from "@/components/Home/Testimonials";
import WhoWeAre from "@/components/Home/WhoWeAre";
import WhyUs from "@/components/Home/WhyUs";
import React from "react";

const page = () => {
  return (
    <div className="mt-8">
      <section>
        <Banner />
      </section>
      <section>
        <WhoWeAre />
      </section>
      <section>
        <WhyUs />
      </section>
      <section>
        <FeaturedTools />
      </section>
      <section>
        <Pricing />
      </section>
      <section>
        <Testimonials />
      </section>
    </div>
  );
};

export default page;
