import sendMoney from "../assets/sebdMoney.jpeg";
import cashOut from "../assets/cash_out.jpeg";
import payment from "../assets/payment.jpg";

const UI = () => {
  return (
    <div>
      <h1 className="text-5xl text-center mt-10 font-bold text-[#ff4190]">Bkash</h1>
      <div className="grid grid-cols-3 items-center lg:mt-28">
        <div className="lg:w-40 h-40 border">
          <img src={sendMoney} alt="" />
          <h1 className="mt-9 font-bold text-center ">Send Money</h1>
        </div>
        <div className="lg:w-40 h-40 border">
          <img src={cashOut} alt="" />
          <p className="text-center font-bold mt-5">Cash Out</p>
        </div>
        <div className="lg:w-40 h-40 border">
          <img className="bg-slate-200" src={payment} alt="" />
          <p className="text-center font-bold mt-5">Payment</p>
        </div>
      </div>
    </div>
  );
};

export default UI;
