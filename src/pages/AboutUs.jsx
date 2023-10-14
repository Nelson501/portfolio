export const AboutUs = () =>{
const img0 = "/logo/img01.jpg"

    return <div className="flex-col-1 text-white w-full h-screen md:flex py-5 px-5 md:py-5 md:px-10 ">
        {/* first sectiion */}
        <div className="">
            <img src={img0} alt="img" />
        </div>

        {/* second section */}
        <div>
            <span>ABOUT ME</span>

            <div>
                <h3>developer &</h3>
                <h3>Desiner </h3>
            </div>

            <div >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione unde molestias, ad explicabo reiciendis deleniti officiis commodi sapiente magni placeat quo voluptatibus dolores! Voluptas quia voluptates eos recusandae, error officiis.</p>
            </div>
            <div>Let's Talk</div>

        </div>
    </div>
}