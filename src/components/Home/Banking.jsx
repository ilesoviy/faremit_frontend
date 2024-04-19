import * as React from "react";
import { useNavigate } from "react-router-dom";

const BankingCard = ({
    title,
    target,
    asset_code,
    transaction_id,
    type,
    wallet,
    description,
    imageSrc,
    bgColor
}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate({
            pathname: target,
            search: `?asset_code=${asset_code}&transaction_id=${transaction_id}&type=${type}&token=${localStorage.getItem(
                "token"
            )}&wallet=${wallet}`
        });
    };
    return (
        <div onClick={handleClick} className="flex flex-col grow justify-center max-md:mt-7">
            <div className={`flex flex-col px-6 py-10 ${bgColor}  rounded-xl max-md:px-5`}>
                <h3 className="text-2xl font-semibold tracking-wide leading-8 text-slate-900">
                    {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{description}</p>
                <img
                    src={imageSrc}
                    alt={title}
                    className="self-center mt-8 max-w-full aspect-square w-[50%]"
                />
            </div>
        </div>
    );
};

const bankingMethods = [
    {
        title: "Deposit",
        description: "You can deposit to cryptocurrency",
        bgColor: "bg-[#F5F4FD]",
        icon: "/images/deposit.png", // replace with your actual icon path
        comingSoon: true,
        ref: "/stellar/deposit",
        asset_code: "USD",
        transaction_id: "a358a1db-37d0-4627-9a5c-88aca86dda14",
        type: "deposit",
        wallet: ""
    },
    {
        title: "Withdraw",
        description: "You can withdraw at any time.",
        bgColor: "bg-[#F5F4FD]",
        icon: "/images/bank_transfer.png", // replace with your actual icon path
        comingSoon: true,
        ref: "/stellar/withdraw",
        asset_code: "USD",
        transaction_id: "a358a1db-37d0-4627-9a5c-88aca86dda14",
        type: "withdraw",
        wallet: "0x0BaE72613E5f73fF0c094484b12c4EE11Ed072De"
    }
];
function Banking() {
    return (
        <section className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
            <div className="flex flex-col items-center mt-10 w-full max-w-[1001px] max-md:max-w-full">
                <h2 className="justify-center py-2 text-5xl font-medium text-[#4b0082] rounded bg-[#ee82ee] bg-opacity-50 leading-[63.84px] max-md:max-w-full max-md:text-4xl">
                    Our Bankings
                </h2>
                <div className="self-center mt-14 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        {bankingMethods.map((method, index) => (
                            <div
                                key={index}
                                className={`flex w-[50%] flex-col max-md:ml-0 max-md:w-full ${method.bgColor}`}
                            >
                                <BankingCard
                                    title={method.title}
                                    description={method.description}
                                    imageSrc={method.icon}
                                    bgColor={method.bgColor}
                                    target={method.ref}
                                    asset_code={method.asset_code}
                                    transaction_id={method.transaction_id}
                                    type={method.type}
                                    wallet={method.wallet}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banking;
