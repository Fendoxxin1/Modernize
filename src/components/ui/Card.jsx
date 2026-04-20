const Card = ({ img, text1, desc, price, color }) => {
    return (
        <div className="bg-white  flex items-center py-7 pl-7 pr-8 gap-12">
            <div>
                <h2 className="text-[20px] font-bold ">{text1}</h2>
                <p className="text-sm text-[#5A607F]">{desc}</p>
                <span className={`text-sm  ${color ? "text-[#06A561]" : "text-[#F0142F]"}  pt-2.5`}>{price}</span>
            </div>
            <div>
                <img src={img} alt="dollar icon" />
            </div>
        </div>
    );
};

export default Card;
