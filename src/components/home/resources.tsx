import img1 from '../../assets/images/Group 72.png'
import img2 from '../../assets/images/Group 70.png'
import img3 from '../../assets/images/Group 59.png'


const Resources = () => {
  return (
    <div className="bg-[#1d85ff17] ">
    <section id="pricing" className="py-10 md:py-[50px] w-[90%] 2xl:w-[50%] mx-auto  ">
      <div className="grid sm:grid-cols-3 grid-cols-1">
        <div className="text-center ">
            <img src={img1} alt="" className='w-[90px] mx-auto'/>
          <p className="text-[18px]  font-NunitoExtraBold py-4">+500<br/> gebruikers</p>
        </div>
        <div className="text-center mt-5 md:mt-0">
        <img src={img3} alt="" className='w-[90px] mx-auto'/>

          <p className="text-[18px] font-NunitoExtraBold py-4">Ruim 125.000 <br/>orders verwerkt</p>
        </div>
        <div className="text-center mt-5 md:mt-0">
           <img src={img2} alt="" className='w-[90px] mx-auto'/>

          <p className="text-[18px] font-NunitoExtraBold pt-4 pb-0 md:py-4">Beoordeling van <br/> 9,2 </p>
        </div>
      </div>
    </section>
    </div>
  );
};
export default Resources;
